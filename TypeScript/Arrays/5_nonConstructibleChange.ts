/*
 * Given an array of positive integers representin the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
 * For example if given coins = [1, 2, 5] , the minimum amount of change that you cannot create is 4. If given no coins, the minimum amount of change you cannot create is 1.
 * Sample Input:
 *  coins = [5, 7, 1, 1, 2, 3, 22]
 * Sample Output:
 * 20
*/

// O(nlogn) Time | O(1) space where n is the number of coins
export function nonConstructibleChange(coins: number[]) {
  coins.sort((a, b) => a - b);

  let currentChangedCreated = 0;
  for (const coin of coins) {
    if (coin > currentChangedCreated + 1) return currentChangedCreated + 1;

    currentChangedCreated += coin;
  }
  return currentChangedCreated + 1;
}
