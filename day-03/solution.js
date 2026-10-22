var expect = function(val) {
return {
toBe: function(other) {
if (val === other) return true;
throw new Error("Not Equal");
},
notToBe: function(other) {
if (val !== other) return true;
throw new Error("Equal");
}
};
};

// Example:
// expect(5).toBe(5);
// expect(5).toBe(null);
// expect(5).notToBe(null);
