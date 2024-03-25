# O(n) time | O(n) space go through the array once right to left (backwards) and store the squared values in a new array

# brute force worst time
def sortedSquaredArray(array):
  sortedSquares = [0 for _ in array]

  for idx in range(len(array)):
      value = array[idx]
      sortedSquares[idx] = value * value

  sortedSquares.sort()
  return sortedSquares

# O(n) time | O(n) space
def sortedSquaredArray2(array):
    sortedSquares = [0 for _ in array]
    smallerValueIdx = 0
    largerValueIdx = len(array) - 1

    for idx in reversed(range(len(array))):
        smallerValue = array[smallerValueIdx]
        largerValueIdx = array[largerValueIdx]

        if abs(smallerValue) > abs(largerValueIdx):
            sortedSquares[idx] = smallerValue * smallerValue
            smallerValueIdx += 1
        else:
            sortedSquares[idx] = largerValueIdx * largerValueIdx
            largerValueIdx -= 1

    return sortedSquares 
