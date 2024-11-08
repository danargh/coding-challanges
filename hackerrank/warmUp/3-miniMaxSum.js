function miniMaxSum(arr) {
   // let min = Math.min(
   //    ...arr.map((num) => arr.reduce((acc, curr) => acc + curr, -num))
   // );
   // let max = Math.max(
   //    ...arr.map((num) => arr.reduce((acc, curr) => acc + curr, -num))
   // );
   console.log(
      `${Math.min(
         ...arr.map((num) => arr.reduce((acc, curr) => acc + curr, -num))
      )} ${Math.max(
         ...arr.map((num) => arr.reduce((acc, curr) => acc + curr, -num))
      )}`
   );
}

miniMaxSum([1, 2, 3, 4, 5]);
