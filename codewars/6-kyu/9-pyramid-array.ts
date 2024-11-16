function pyramid(n: number): Array<Array<Number>> {
   let result: number[][] = [];
   let temp: number[] = [];
   for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
         temp.push(1);
      }
      result.push(temp);
      temp = [];
   }
   return result;
}

console.log(pyramid(3));

// best practices

// export function pyramid(n: number) {
//    const ret = [];
//    for (let i = 0; i < n; i++) {
//       ret.push(Array(i + 1).fill(1));
//    }
//    return ret;
// }
