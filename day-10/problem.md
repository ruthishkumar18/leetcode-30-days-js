# Day 10 — 2666. Allow One Function Call

## Problem
Given a function `fn`, return a new function that ensures `fn` is executed **at most once**.

- The first call behaves normally and returns `fn(...args)`
- All subsequent calls return `undefined`

## Examples

### Example 1
fn = (a,b,c) => a + b + c  
calls = [[1,2,3], [2,3,6]]  
Output: 6, undefined

### Example 2
fn = (a,b,c) => a * b * c  
calls = [[5,7,4],[2,3,6],[4,6,8]]  
Output: 140, undefined, undefined

## Constraints
- calls is valid JSON  
- 1 <= calls.length <= 10  
- 1 <= calls[i].length <= 100  
