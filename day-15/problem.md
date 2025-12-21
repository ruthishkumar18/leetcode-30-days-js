# Day 15 — 2725. Interval Cancellation

## Problem
Given a function `fn`, arguments `args`, and an interval `t` (in milliseconds):

- Call `fn(...args)` immediately
- Then call it every `t` milliseconds
- Return a cancel function that stops further execution when called

## Examples
- Function executes repeatedly until `cancelFn` is invoked
- First execution always happens at `0ms`

## Constraints
- 1 <= args.length <= 10  
- 30 <= t <= 100  
- 10 <= cancelTimeMs <= 500  
