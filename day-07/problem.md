\# Day 07 — 2626. Array Reduce Transformation



\## Problem

Given an array `nums`, a reducer function `fn`, and an initial value `init`, return the final accumulated value after processing each element in order:



val = fn(init, nums\[0])  

val = fn(val, nums\[1])  

val = fn(val, nums\[2])  

...  



If `nums` is empty, return `init`.



\## Examples



\### Example 1

nums = \[1,2,3,4]  

fn = (acc, curr) => acc + curr  

init = 0  

Output: 10



\### Example 2

nums = \[1,2,3,4]  

fn = (acc, curr) => acc + curr \* curr  

init = 100  

Output: 130



\### Example 3

nums = \[]  

fn = () => 0  

init = 25  

Output: 25



\## Constraints

\- 0 <= nums.length <= 1000  

\- 0 <= nums\[i] <= 1000  

\- 0 <= init <= 1000  



