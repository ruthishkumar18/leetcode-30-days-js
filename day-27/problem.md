# Day 27 — 2705. Compact Object

## Problem
Given an object or array, return a compact version where all falsy values are removed.

- Applies recursively to nested objects and arrays
- Arrays are treated as objects with numeric keys
- A value is falsy if Boolean(value) === false

## Examples
- [null, 0, false, 1] → [1]
- {"a": null, "b": [false, 1]} → {"b": [1]}
- [null, 0, 5, [0], [false, 16]] → [5, [], [16]]

## Constraints
- Input is valid JSON
