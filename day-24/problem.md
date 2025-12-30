# Day 24 — 2724. Sort By

## Problem
Given an array `arr` and a function `fn`, return the array sorted in ascending order based on the numeric value returned by `fn`.

- `fn` returns a number
- No duplicate values are returned by `fn` for the array

## Examples
- [5,4,1,2,3], fn = x => x → [1,2,3,4,5]
- [{x:1},{x:0},{x:-1}], fn = d => d.x → [{x:-1},{x:0},{x:1}]
- [[3,4],[5,2],[10,1]], fn = x => x[1]

## Constraints
- 1 <= arr.length <= 5 * 10^5
