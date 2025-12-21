# Day 08 — 2629. Function Composition

## Problem
Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function `fn` that represents their function composition.

The composition of `[f(x), g(x), h(x)]` is:
f(g(h(x)))

If the array is empty, return the identity function:
f(x) = x

## Examples

### Example 1
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4  
Output: 65  

### Example 2
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1  
Output: 1000  

### Example 3
Input: functions = [], x = 42  
Output: 42  

## Constraints
- -1000 <= x <= 1000  
- 0 <= functions.length <= 1000  
- All functions accept and return a single integer  
