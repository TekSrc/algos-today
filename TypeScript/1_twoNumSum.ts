/* 
Type: Array

Prompt: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 

The target sum has to be obtained by summing two different integers in the array, not adding a single integer to itself in order to obtain the target sum.

Assumptions: There will be at most one pair of numbers summing up to the target sum.

*/

// Time/Space Complexity of Solution: O(n) / O(n)

// Inputs
const arrayOfInts = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

export function twoNumSum(array: number[], targetSumNum: number) {
  // No repeated int in the array to be traversed, use hash table for better time instead of loop inside loop comparing each number to first number O(n^2)/ O(1) because of double for loop and double array
  // Use hash table, faster, worse space, store every number we see and access
  // Traverse and each number check if the number needed to sum up to the target value is stored in this hash table, as we have target and the
  // Current int = x, we want to find y as x + y = targetSumNum
  // Formula y = targetSumNum - x
  // If in hash table return x & y in an array if looped through array none return empty array

  const nums: {
    [key: number]: boolean;
  } = {};

  for (const num of array) {
    const potentialMatch = targetSumNum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
    return [];
  }
}

const result = twoNumSum(arrayOfInts, target);
console.log("result: ", result); // [11, -1]
