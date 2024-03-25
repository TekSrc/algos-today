// Type: Array

// Prompt: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// The target sum has to be obtained by summing two different integers in the array, not adding a single integer to itself in order to obtain the target sum.

// Assumptions: There will be at most one pair of numbers summing up to the target sum.

package main

import "fmt"

func main() {
	arrOfInt := []int{3, 5, -4, 8, 11, 1, -1, 6}
	target := 10
	res := TwoNumSum(arrOfInt, target)
	fmt.Println("Result: ", res)
}

// TwoNumSum Time & Space Complexity:
func TwoNumSum(array []int, targetSumNum int) []int {
	//  Psuedocode see TypeScript solution
	nums := map[int]bool{}
	for _, num := range array {
		potentialMatch := targetSumNum - num
		if _, found := nums[potentialMatch]; found {
			return []int{potentialMatch, num}
		}
		nums[num] = true
	}
	return []int{}
}
