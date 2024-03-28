/*
 * You're given a 2D array of integers matrix. Write a function that returns the transpose of the matriz.
 * The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); It switches the row and column indices of the original matrix.
 * You can assume the input matrix always has a least 1 value; however its width and height are not necesssarily the same.
 * Sample Input 1
 * matrix = [[1, 2], ]
 *
 * Sample Output 1
 * matrix = [[1], [2]]
 *
 * Sample Input 2
 * matrix = [[1, 2], [3, 4], [5, 6]]
 *
 * Sample Output 2
 * matrix = [[1, 3, 5], [2, 4, 6]]
 *
 * Sample Input 3
 * matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 *
 * Sample Output 3
 * matrix = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
 */

// O(w * h) time | O(w * h) space where w is the width of the matrix and h is the height of the matrix
export function transposeMatrix(matrix: number[][]) {
  const transposedMatrix: number[][] = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const newRow: number[] = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    transposedMatrix.push(newRow);
  }
  return transposeMatrix;
}
