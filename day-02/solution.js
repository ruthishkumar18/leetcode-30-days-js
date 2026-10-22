// Day 02 — 2620. Counter

var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
