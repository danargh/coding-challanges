// const findOdd = (xs: number[]): number => {
//    let values: any = new Object();
//    let result: number = 0;
//    for (let i of xs) {
//       if (values[i]) {
//          values[i] += 1;
//       } else {
//          values[i] = 1;
//       }
//    }
//    for (let j in values) {
//       if (values[j] % 2 !== 0) {
//          result = parseInt(j);
//       }
//    }
//    return result;
// };

// best practices
const findOdd = (xs: number[]): number => {
   // happy coding!
   return xs.reduce((a, b) => a ^ b);
};

console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
