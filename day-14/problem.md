# Day 14 — 2715. Timeout Cancellation

## Problem
Given a function `fn`, arguments `args`, and a delay `t` in milliseconds, return a cancel function.

- The function `fn` should be executed after `t` milliseconds.
- If the cancel function is called before `t`, execution should be canceled.
- If not canceled, `fn` executes normally with `args`.

## Examples
1. fn executes before cancellation → result returned  
2. fn canceled before execution → no output  
3. fn executes when cancellation happens after delay  

## Constraints
- 1 <= args.length <= 10  
- 20 <= t <= 1000  
