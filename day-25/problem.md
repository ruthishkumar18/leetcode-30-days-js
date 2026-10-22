# Day 25 — 2722. Join Two Arrays by ID

## Problem
Given two arrays of objects `arr1` and `arr2`, merge them by the `id` key.

Rules:
- Unique ids appear once
- If an id exists in both arrays, merge objects
- Values from `arr2` override values from `arr1`
- Result must be sorted by `id`

## Examples
- No duplicate ids → concatenate
- Duplicate ids → merge with override
- Nested objects → replaced, not deep merged

## Constraints
- Each object has a unique integer id per array
