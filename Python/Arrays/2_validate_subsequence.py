# O(n) time | O(1) space
def validateSubsequence(array, sequence):
  arrIdx = 0
  seqIdx = 0
  while arrIdx < len(array) and seqIdx < len(sequence):
    if array[arrIdx] == sequence[seqIdx]:
      seqIdx += 1
    arrIdx += 1 # regardless of whether or not we find a match, we want to move the array pointer forward
  return seqIdx == len(sequence)

# O(n) time | O(1) space
def validateSubsequence2(array, sequence):
  seqIdx = 0
  for value in array:
    # if we can't find a value in the sequence, then it's not a valid subsequence
    if seqIdx == len(sequence):
      # return True
      break
    if sequence[seqIdx] == value:
      seqIdx += 1
  return seqIdx == len(sequence)
