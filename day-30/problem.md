# Day 30 — 2726. Calculator with Method Chaining

## Problem
Design a Calculator class that supports:
- add
- subtract
- multiply
- divide
- power
- getResult

All operations should support method chaining.

## Rules
- Constructor initializes result
- divide by 0 should throw: "Division by zero is not allowed"
- getResult returns the final value

## Examples
new Calculator(10).add(5).subtract(7).getResult() → 8
new Calculator(2).multiply(5).power(2).getResult() → 100
