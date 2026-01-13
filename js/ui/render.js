import { Category, Priority } from "../constants/enums.js";

// ===============================
// CREATE TODO ITEM
// ===============================
//
// Creates DOM representation of a single todo.
//


export function createTodoItem(todo) {

    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id;
    li.dataset.category = todo.category;
    li.dataset.priority = todo.priority;
    li.dataset.done = todo.done;

    const categoryEntry = Category[todo.category];

    li.dataset.categoryLabel = categoryEntry?.label ?? "";


    // ===============================
    // CHECKBOX
    // ===============================
    const checkContainer = document.createElement("div");
    checkContainer.className = "todo-check";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.className = "todo-checkbox";

    checkContainer.appendChild(checkbox);

    
    // ===============================
    // CONTENT
    // ===============================
    const contentContainer = document.createElement("div");
    contentContainer.className = "todo-content";

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-delete-btn";
    deleteBtn.textContent = "✕";

    actions.appendChild(deleteBtn);

    contentContainer.appendChild(text);
    contentContainer.appendChild(actions);


    // ===============================
    // ASSEMBLY
    // ===============================
    li.appendChild(checkContainer);
    li.appendChild(contentContainer);

    return li;
}


// ===============================
// RENDER TODO LIST
// ===============================
//
// Renders list of todos into container.
//
export function renderTodos(container, todos) {
    container.innerHTML = "";

    todos.forEach(todo => {
        const item = createTodoItem(todo);
        container.appendChild(item);
    });
}
