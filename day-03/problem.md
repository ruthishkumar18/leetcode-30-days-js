# Day 03 — 2704. To Be Or Not To Be

## Problem

Write a function `expect` that takes any value `val` and returns an object with two functions:

### `toBe(val2)`

* Returns `true` if `val === val2`
* Throws `"Not Equal"` if they are not equal

### `notToBe(val2)`

* Returns `true` if `val !== val2`
* Throws `"Equal"` if they are equal

## Examples

1. `expect(5).toBe(5)` → true
2. `expect(5).toBe(null)` → throws "Not Equal"
3. `expect(5).notToBe(null)` → true

## Constraints

* Works with all JavaScript primitive values.
