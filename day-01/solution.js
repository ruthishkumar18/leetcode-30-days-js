// Day 01 - createHelloWorld
// Returns a function that always returns "Hello World"

var createHelloWorld = function() {
  return function(...args) {
    return "Hello World";
  };
};

// Example:
const f = createHelloWorld();
console.log(f()); // "Hello World"
