# Day 19 — 2721. Execute Asynchronous Functions in Parallel

## Problem
Given an array of asynchronous functions, execute them in parallel and return a promise.

- Resolve with an array of results (same order as input)
- Reject immediately if any promise rejects
- Do NOT use Promise.all

## Examples
- Single promise → resolves when completed
- Any rejection → immediate rejection
- Multiple promises → resolve when last finishes

## Constraints
- 1 <= functions.length <= 10
