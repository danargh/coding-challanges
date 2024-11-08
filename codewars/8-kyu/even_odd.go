package main

import "fmt"

func EvenOdd(number int) string {
	// if number%2 == 0 {
	// 	return "Even"
	// } else {
	// 	return "Odd"
	// }

	// best practice
	return []string{"Even", "Odd"}[number&1]
}

func main() {
	fmt.Print(EvenOdd(2))
}
