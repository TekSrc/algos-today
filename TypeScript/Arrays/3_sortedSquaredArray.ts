/*
  * Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

  * Sample Input
  * array = [1, 2, 3, 5, 6, 8, 9] 
  * Sample Output
  * [1, 4, 9, 25, 36, 64, 81]
*/

// O(nlogn) time | O(n) space, can get a O(n) time solution with more code.
export function sortedSquaredArray(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0);

  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sortedSquares[idx] = value * value;
  }

  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}

// O(n) time | O(n) space
export function sortedSquaredArray2(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}
