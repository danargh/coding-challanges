function diagonalDifference(arr) {
   let n = arr.length;
   let d1 = 0;
   let d2 = 0;
   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
         // finding the sum of primary diagonal
         if (i === j) {
            d1 += arr[i][j];
         }
         // finding the sum of secondary diagonal
         if (i + j === n - 1) {
            d2 += arr[i][j];
         }
      }
   }
   return Math.abs(d1 - d2);
}

let result = diagonalDifference([
   [1, 2, 3],
   [1, 2, 3],
   [1, 2, 3],
]);

console.log(result);
