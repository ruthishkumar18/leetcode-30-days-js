var compactObject = function(obj) {
    if (obj === null) return null;

    if (Array.isArray(obj)) {
        const result = [];
        for (const item of obj) {
            const value = compactObject(item);
            if (Boolean(value)) {
                result.push(value);
            }
        }
        return result;
    }

    if (typeof obj === "object") {
        const result = {};
        for (const key in obj) {
            const value = compactObject(obj[key]);
            if (Boolean(value)) {
                result[key] = value;
            }
        }
        return result;
    }

    return obj;
};
