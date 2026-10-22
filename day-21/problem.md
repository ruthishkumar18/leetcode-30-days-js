# Day 21 — 2677. Chunk Array

## Problem
Given an array `arr` and a chunk size `size`, return a chunked array.

Each subarray should be of length `size`.  
The last subarray may contain fewer elements if `arr.length` is not divisible by `size`.

## Examples
- [1,2,3,4,5], size = 1 → [[1],[2],[3],[4],[5]]
- [1,9,6,3,2], size = 3 → [[1,9,6],[3,2]]
- [], size = 1 → []

## Constraints
- 1 <= size <= arr.length + 1
