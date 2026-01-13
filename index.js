import { createTodoManager } from "./js/store/todoManager.js";
import { renderTodos } from "./js/ui/render.js";
import { Category, Priority } from "./js/constants/enums.js";


// APP SETUP
const todoManager = createTodoManager();


// ===============================
// GET DOM ELEMENTS
// ===============================

// FORM
const form = document.querySelector("#adding-form");
const input = document.querySelector("#todo-input");
const categorySelect = document.querySelector("#todo-category");
const prioritySelect = document.querySelector("#todo-priority");
// LIST
const container = document.querySelector("#todo-list");
// FILTERS
const filterCategorySelect = document.querySelector("#filter-category");
// COUNTERS
const totalEl = document.querySelector("#count-total");
const activeEl = document.querySelector("#count-active");
const doneEl = document.querySelector("#count-done");


// ===============================
// SELECTS
// ===============================
function populateSelect(selectEl, enumObject, placeholderText) {
    selectEl.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = placeholderText;
    placeholder.disabled = true;
    placeholder.selected = true;
    selectEl.appendChild(placeholder);

    Object.values(enumObject).forEach(item => {
        const option = document.createElement("option");
        option.value = item.key;
        option.textContent = item.label;
        selectEl.appendChild(option);
    });
}

function populateFilterCategorySelect(selectEl, enumObject) {
    selectEl.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Všechny kategorie";
    selectEl.appendChild(allOption);

    Object.values(enumObject).forEach(item => {
        const option = document.createElement("option");
        option.value = item.key;
        option.textContent = item.label;
        selectEl.appendChild(option);
    });
}

// INIT SELECTS
populateSelect(categorySelect, Category, "Vyber kategorii");
populateSelect(prioritySelect, Priority, "Vyber prioritu");
populateFilterCategorySelect(filterCategorySelect, Category);


// ===============================
// UI STATE (FILTERS)
// ===============================
let currentStatusFilter = "all";
let currentCategoryFilter = "all";


function getVisibleTodos(todos, statusFilter, categoryFilter) {
    let result = todos;

    if (statusFilter === "done") {
        result = result.filter(t => t.done);
    } else if (statusFilter === "active") {
        result = result.filter(t => !t.done);
    }

    if (categoryFilter !== "all") {
        result = result.filter(t => t.category === categoryFilter);
    }

    return result;
}


// ===============================
// COUNTERS 
// ===============================
function getTodoCounters(todos) {
    return {
        total: todos.length,
        active: todos.filter(t => !t.done).length,
        done: todos.filter(t => t.done).length
    };
}

function renderCounters({ total, active, done }) {
    totalEl.textContent = `Celkem: ${total}`;
    activeEl.textContent = `Aktivní: ${active}`;
    doneEl.textContent = `Hotové: ${done}`;
}


// ===============================
// DATA CHANGE HANDLING
// ===============================
//
// Reacts to state changes coming from todoManager.
//
todoManager.onChange((todos) => {
    renderTodos(
        container,
        getVisibleTodos(todos, currentStatusFilter, currentCategoryFilter)
    );

    renderCounters(getTodoCounters(todos));
});

// INITIAL RENDER
renderTodos(container, todoManager.getAll());
renderCounters(getTodoCounters(todoManager.getAll()));


// ===============================
// CLICK – TOGGLE & DELETE
// ===============================
container.addEventListener("click", (event) => {
    const target = event.target;

    // DELETE
    if (target.matches(".todo-delete-btn")) {
        const li = target.closest(".todo-item");
        if (!li) return;

        todoManager.remove(li.dataset.id);
        return;
    }

    // TOGGLE - DONE
    if (target.matches(".todo-checkbox")) {
        const li = target.closest(".todo-item");
        if (!li) return;

        todoManager.toggle(li.dataset.id);
    }
});


// ===============================
// DOUBLE CLICK - TEXT EDIT
// ===============================
container.addEventListener("dblclick", (event) => {
    let target = event.target;

    if (target.nodeType === Node.TEXT_NODE) {
        target = target.parentElement;
    }

    if (!target.classList.contains("todo-text")) return;

    const li = target.closest(".todo-item");
    if (!li) return;

    // PREVENT MULTIPLE EDITS
    if (li.querySelector(".todo-edit-input")) return;

    const id = li.dataset.id;
    const originalText = target.textContent;

    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = originalText;
    inputEdit.className = "todo-edit-input";

    target.replaceWith(inputEdit);

    inputEdit.focus();
    inputEdit.setSelectionRange(
        inputEdit.value.length,
        inputEdit.value.length
    );

    let committed = false;

    function commit() {
        if (committed) return;
        committed = true;

        const newText = inputEdit.value.trim();

        if (newText && newText !== originalText) {
            todoManager.update(id, { text: newText });
        }
    }

    function cancel() {
        committed = true;
        renderTodos(
            container,
            getVisibleTodos(
                todoManager.getAll(),
                currentStatusFilter,
                currentCategoryFilter
            )
        );
    }

    inputEdit.addEventListener("keydown", (e) => {
        if (e.key === "Enter") commit();
        if (e.key === "Escape") cancel();
    });

    inputEdit.addEventListener("blur", commit);
});


// ===============================
// SUBMIT – ADD TODO
// ===============================
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    const category = categorySelect.value;
    const priority = prioritySelect.value;

    if (!text || !category || !priority) {
        alert("Vyplň text, kategorii i prioritu");
        return;
    }

    todoManager.add(text, category, priority);

    input.value = "";
    categorySelect.selectedIndex = 0;
    prioritySelect.selectedIndex = 0;
});


// ===============================
// FILTER EVENTS
// ===============================
document.querySelector("#filter-all").addEventListener("click", () => {
    currentStatusFilter = "all";
    renderTodos(
        container,
        getVisibleTodos(
            todoManager.getAll(),
            currentStatusFilter,
            currentCategoryFilter
        )
    );
});

document.querySelector("#filter-active").addEventListener("click", () => {
    currentStatusFilter = "active";
    renderTodos(
        container,
        getVisibleTodos(
            todoManager.getAll(),
            currentStatusFilter,
            currentCategoryFilter
        )
    );
});

document.querySelector("#filter-done").addEventListener("click", () => {
    currentStatusFilter = "done";
    renderTodos(
        container,
        getVisibleTodos(
            todoManager.getAll(),
            currentStatusFilter,
            currentCategoryFilter
        )
    );
});

filterCategorySelect.addEventListener("change", () => {
    currentCategoryFilter = filterCategorySelect.value;
    renderTodos(
        container,
        getVisibleTodos(
            todoManager.getAll(),
            currentStatusFilter,
            currentCategoryFilter
        )
    );
});
