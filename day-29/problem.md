# Day 29 — 2695. Array Wrapper

## Problem
Create a class `ArrayWrapper` that:
- Accepts an array of integers in the constructor
- Supports addition using `+` operator (sum of all elements)
- Returns a formatted string when `String()` is called

## Examples
- new ArrayWrapper([1,2]) + new ArrayWrapper([3,4]) → 10
- String(new ArrayWrapper([23,98])) → "[23,98]"
- Empty arrays → 0

## Constraints
- 0 <= nums.length <= 1000
- 0 <= nums[i] <= 1000
