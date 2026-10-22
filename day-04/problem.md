# Day 04 — 2665. Counter II

## Problem
Write a function `createCounter` that accepts an integer `init` and returns an object containing three functions:

- `increment()` → increases the current value by 1 and returns it  
- `decrement()` → decreases the current value by 1 and returns it  
- `reset()` → resets value to `init` and returns it  

## Example 1
Input: init = 5, calls = ["increment","reset","decrement"]  
Output: [6, 5, 4]

## Example 2
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]  
Output: [1, 2, 1, 0, 0]

## Constraints
- -1000 <= init <= 1000  
- 0 <= calls.length <= 1000  
