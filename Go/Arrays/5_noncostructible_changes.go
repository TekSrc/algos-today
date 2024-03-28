package main

imprt (
	"sort"
)

func NonConstructibleChange(coins []int) int {
	sort.Ints(coins)

	var currentChangeCreated = 0
	for _, coin := range coins {
		if coin > currentChangeCreated + 1 {
			return currentChangeCreated + 1
		}
		currentChangeCreated += coin
	}
	return currentChangeCreated + 1
}
