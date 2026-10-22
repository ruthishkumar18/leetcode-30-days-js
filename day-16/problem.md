# Day 16 — 2637. Promise Time Limit

## Problem
Given an asynchronous function `fn` and a time limit `t` (in milliseconds), return a new function that:

- Resolves with `fn`'s result if it finishes within `t`
- Rejects with `"Time Limit Exceeded"` if execution exceeds `t`

If `fn` throws an error, the returned function should reject immediately.

## Examples
- fn resolves after 100ms, t = 50 → rejected
- fn resolves after 100ms, t = 150 → resolved
- fn throws error → rejected immediately

## Constraints
- 0 <= inputs.length <= 10
- 0 <= t <= 1000
- fn returns a Promise
