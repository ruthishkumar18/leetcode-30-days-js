# Day 11 — 2623. Memoize

## Problem
Given a function `fn`, return a memoized version of it.  
A memoized function:
- Returns cached results when called with previously seen arguments.
- Only calls the original function when necessary.

You may assume:
- fn is one of: sum(a, b), fib(n), factorial(n).
- Arguments must be treated as ordered; (a, b) ≠ (b, a).

## Examples
1. sum: (2,2) → 4  
   Second call with (2,2) uses cache.

2. factorial: calling factorial(2) twice should compute only once.

3. fib: memoized fib(5) executes only once.

## Constraints
- 0 <= a, b <= 100000  
- 1 <= n <= 10  
- actions length up to 100000  
