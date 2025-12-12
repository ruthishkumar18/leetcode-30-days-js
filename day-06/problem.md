# Day 06 — 2634. Filter Elements from Array

## Problem
Given an array `arr` and a filtering function `fn`, return a new array containing only the elements for which:
`fn(arr[i], i)` evaluates to a truthy value.

You must solve this **without using Array.filter()**.

## Examples

### Example 1
Input: [0,10,20,30], fn = n => n > 10  
Output: [20, 30]

### Example 2
Input: [1,2,3], fn = (n,i) => i === 0  
Output: [1]

### Example 3
Input: [-2,-1,0,1,2], fn = n => n + 1  
Output: [-2, 0, 1, 2]

## Constraints
- 0 <= arr.length <= 1000  
- -10⁹ <= arr[i] <= 10⁹  
