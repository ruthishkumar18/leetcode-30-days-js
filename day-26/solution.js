var flat = function(arr, n) {
    const result = [];

    const helper = (currentArr, depth) => {
        for (const item of currentArr) {
            if (Array.isArray(item) && depth < n) {
                helper(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    };

    helper(arr, 0);
    return result;
};
