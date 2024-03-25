# Type: Array

# Prompt: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

# The target sum has to be obtained by summing two different integers in the array, not adding a single integer to itself in order to obtain the target sum.

# Assumptions: There will be at most one pair of numbers summing up to the target sum.

import array as arr

# twoNumSum Space/Time complexity:
arrOfInt = arr.array("i", [3, 5, -4, 8, 11, 1, -1, 6])
target = 10


def twoNumSum(array, targetSumNum):
    # Psuedocode see TypeScript solution
    # nums hash table
    nums = {}
    for num in array:
        potentialMatch = targetSumNum - num
        if potentialMatch in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    return []


twoNumSum(arrOfInt, target)
