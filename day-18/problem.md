# Day 18 — 2627. Debounce

## Problem
Implement a debounced version of a function `fn` that delays execution by `t` ms.  
If the function is called again before the timer finishes, cancel the previous call and reschedule.

## Examples
- Multiple calls within the debounce window cancel earlier ones.
- Only the last call in any burst is executed.

## Constraints
- 0 <= t <= 1000
- 1 <= calls.length <= 10
