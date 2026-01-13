// ===============================
// CATEGORY ENUM
// ===============================
//
// Defines available todo categories.
// Central place for labels and values used across the app.
//

export const Category = {
    WORK: {
        key: "WORK",
        value: "work",
        label: "Práce"
    },
    HEALTH: {
        key: "HEALTH",
        value: "health",
        label: "Zdraví"
    },
    STUDY: {
        key: "STUDY",
        value: "study",
        label: "Učení"
    },
    SHOPPING: {
        key: "SHOPPING",
        value: "shopping",
        label: "Nákup"
    },
    HOME: {
        key: "HOME",
        value: "home",
        label: "Domov"
    },
    FINANCE: {
        key: "FINANCE",
        value: "finance",
        label: "Finance"
    },
    PERSONAL: {
        key: "PERSONAL",
        value: "personal",
        label: "Osobní"
    },
    LEISURE: {
        key: "LEISURE",
        value: "leisure",
        label: "Volný čas"
    },
    PROJECT: {
        key: "PROJECT",
        value: "project",
        label: "Projekt"
    }
};


// ===============================
// PRIORITY ENUM
// ===============================
//
// Defines available priority levels.
//

export const Priority = {
    LOW: {
        key: "LOW",
        value: "low",
        label: "Nízká"
    },
    MEDIUM: {
        key: "MEDIUM",
        value: "medium",
        label: "Střední"
    },
    HIGH: {
        key: "HIGH",
        value: "high",
        label: "Vysoká"
    },
    URGENT: {
        key: "URGENT",
        value: "urgent",
        label: "Urgentní"
    }
};
