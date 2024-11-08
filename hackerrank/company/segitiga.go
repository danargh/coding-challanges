package main

import (
	"fmt"
)

func cetakSegitigaSiku(n int32) {
	var i int32
	var k int32
	var j int32
	for i = 1; i <= n; i++ {
		// Mencetak spasi
		for j = n; j > i; j-- {
			fmt.Print(" ")
		}
		// Mencetak bintang
		for k = 1; k <= i; k++ {
			fmt.Print("*")
		}
		// Pindah ke baris berikutnya
		fmt.Println()
	}
}

func min(numbers []int32) int32 {
	var min int32 = numbers[0]
	for _, value := range numbers {
		if value < min {
			min = value
		}
	}
	return min
}

func main() {
	// cetakSegitigaSiku(4)
	arr := []int32{4, 5, 6, 6}
	result := min(arr)
	fmt.Print(result)
}
