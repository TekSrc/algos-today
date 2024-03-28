package main

// O(w * h) time | O(w * h) space - where w is the width of the matrix and h is the height of the matrix
func TransposeMatrix(matrix [][]int) [][]int {
	tranposedMatrix := make([][]int, len(matrix[0]))
	for col := 0; col < len(matrix[0]); col++ {
		newRow := make([]int, len(matrix))
		for row := 0; row < len(matrix); row++ {
			newRow[row] = matrix[row][col]
		}
		tranposedMatrix[col] = newRow
	}
	return tranposedMatrix
}
