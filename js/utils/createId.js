// Generates unique id for todo items

export function createId() {
    return crypto.randomUUID();
}