# Day 26 — 2625. Flatten Deeply Nested Array

## Problem
Given a multi-dimensional array `arr` and a depth `n`, return a flattened version of the array.

- Flatten subarrays only if their depth is less than `n`
- Depth of elements in the first array is 0
- Do NOT use Array.flat()

## Examples
- n = 0 → original array
- n = 1 → flatten first-level subarrays
- n >= max depth → fully flattened

## Constraints
- 0 <= n <= 1000
- Up to 10^5 elements
