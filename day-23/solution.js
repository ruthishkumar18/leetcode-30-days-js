Array.prototype.groupBy = function(fn) {
    const result = {};

    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(this[i]);
    }

    return result;
};
