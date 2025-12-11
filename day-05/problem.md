# Day 05 — 2635. Apply Transform Over Each Element in Array

## Problem
Given an integer array `arr` and a mapping function `fn`, return a new array where:
`result[i] = fn(arr[i], i)`

You must solve this **without using Array.map()**.

## Examples
1. Input: [1,2,3], fn = n => n + 1  
   Output: [2,3,4]

2. Input: [1,2,3], fn = (n,i) => n + i  
   Output: [1,3,5]

3. Input: [10,20,30], fn = () => 42  
   Output: [42,42,42]

## Constraints
- 0 <= arr.length <= 1000  
- -10⁹ <= arr[i] <= 10⁹  
- fn returns an integer  
