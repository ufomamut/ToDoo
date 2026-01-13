import { addTodo, updateTodo, deleteTodo, toggleTodo } from "../model/todoModel.js";
import { todoStorage } from "../storage/todoStorage.js";

// ===============================
// TODO MANAGER
// ===============================
//
// State management layer.
// - holds todos in closure
// - delegates data changes to pure model functions
// - persists state via storage
// - notifies UI about state changes
//

export function createTodoManager() {

    // ===============================
    // PRIVATE STATE (CLOSURE)
    // ===============================
    let todos = todoStorage.load();
    let changeCallbacks = [];


    // ===============================
    // INTERNAL HELPERS
    // ===============================
    function notifyChange() {
        changeCallbacks.forEach(fn => fn(todos));
    }

    function setTodos(newTodos) {
        todos = newTodos;
        todoStorage.save(todos);
        notifyChange();
    }


    // ===============================
    // PUBLIC API
    // ===============================
    return {

        // Returns current todo list
        getAll() {
            return todos;
        },

        // Adds a new todo
        add(text, category, priority, deadline = null) {
            setTodos(
                addTodo(todos, text, category, priority, deadline)
            );
        },

        // Updates todo by id
        update(id, updates) {
            setTodos(
                updateTodo(todos, id, updates)
            );
            
        },

        // Removes todo by id
        remove(id) {
            setTodos(
                deleteTodo(todos, id)
            );
        },

        // Toggles done / not done state
        toggle(id) {
            setTodos(
                toggleTodo(todos, id)
            );
        },

        // Stores a function that is called when todos change
        onChange(callback) {
            changeCallbacks.push(callback);
        }
    };
}
