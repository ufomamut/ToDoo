import { createId } from "../utils/createId.js";

// ===============================
// TODO MODEL – PURE FUNCTIONS
// ===============================
//
// Data-only layer.
// - works with plain data
// - does not mutate input arrays (immutable updates)
// - no side effects
// - independent from UI and storage
//


// ===============================
// ADD TODO
// ===============================
//
// Creates a new todo object and returns a new list.
// Pure function – does not modify the original array.
//
export function addTodo(list, text, category, priority, deadline = null) {
    const newTodo = {
        id: createId(),
        text,
        category,
        priority,
        deadline,
        done: false,
        createdAt: Date.now(),
        updatedAt: null
    };

    return [...list, newTodo];
}


// ===============================
// UPDATE TODO
// ===============================
//
// Updates selected properties of a todo by id.
// Uses immutable update via map().
//
export function updateTodo(list, id, updates) {
    return list.map(todo =>
        todo.id === id
            ? {
                ...todo,
                ...updates,
                updatedAt: Date.now()
            }
            : todo
    );
}


// ===============================
// DELETE TODO
// ===============================
//
// Removes a todo from the list by id.
// Returns a new array.
//
export function deleteTodo(list, id) {
    return list.filter(todo => todo.id !== id);
}


// ===============================
// TOGGLE TODO STATE
// ===============================
//
// Switches todo between done / not done.
// State change is handled immutably.
//
export function toggleTodo(list, id) {
    return list.map(todo =>
        todo.id === id
            ? {
                ...todo,
                done: !todo.done,
                updatedAt: Date.now()
            }
            : todo
    );
}
