package main

// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

func divisibleSumPairs(n int32, k int32, arr []int32) int32 {
	var count int32 = 0

	for i := int32(0); i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			if (arr[i]+arr[j])%k == 0 {
				count++
			}
		}
	}
	return count
}

func main() {
	// divisible sum paris
	// arr := []int32{1, 3, 2, 6, 1, 2}
	// result := divisibleSumPairs(6, 3, arr)
	// fmt.Print(result)

	// migratory birds
	MigratoryBirds([]int32{2, 3, 4, 5})
}
