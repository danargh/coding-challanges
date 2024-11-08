function sum(numbers) {
   return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));

// best practice
// function sum(numbers) {
//    return numbers.reduce((a, b) => a + b, 0);
// }
