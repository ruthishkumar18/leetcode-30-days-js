# Day 23 — 2631. Group By

## Problem
Enhance all arrays such that `array.groupBy(fn)` returns a grouped object.

- Each key is the result of `fn(element)`
- Each value is an array of elements that map to that key
- Order of elements must be preserved

## Examples
- Group objects by id
- Group arrays by first element
- Group numbers by a condition

## Constraints
- 0 <= array.length <= 10^5
- fn returns a string
