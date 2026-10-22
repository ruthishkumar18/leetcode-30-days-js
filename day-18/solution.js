var debounce = function(fn, t) {
    let timer = null;

    return function(...args) {
        // Cancel previous scheduled execution
        if (timer) clearTimeout(timer);

        // Schedule a new execution
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
