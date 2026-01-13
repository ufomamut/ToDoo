// ===============================
// TODO STORAGE
// ===============================
//
// Storage layer.
// - handles saving and loading data
// - storage implementation can be replaced
// - independent from UI and application logic
//


const STORAGE_KEY = "SMART_TODO_PRO_DATA";


export const todoStorage = {

    // Loads todo list from Storage
    load() {
        const json = localStorage.getItem(STORAGE_KEY);
        if (!json) return [];

        try {
            return JSON.parse(json);
        } catch (error) {
            console.error("Chyba při načítání dat z localStorage:", error);
            return [];
        }
    },


    // Saves todo list to storage
    save(todos) {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(todos)
            );
        } catch (error) {
            console.error("Chyba při ukládání do localStorage:", error);
        }
    }
};
