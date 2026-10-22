# Day 17 — 2622. Cache With Time Limit

## Problem
Implement a class with:
- set(key, value, duration)
- get(key)
- count()

Keys should expire after `duration` milliseconds. Expired keys should not be returned or counted.

## Behavior
- set(): returns true if key exists & is unexpired, else false
- get(): returns value if unexpired, else -1
- count(): number of unexpired keys

## Constraints
- 0 <= key, value <= 1e9
- duration: 0–1000ms
- actions length: 1–100
