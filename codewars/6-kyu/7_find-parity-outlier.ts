// www.codewars.com/kata/5526fc09a1bbd946250002dc/train/typescript

function findOutlier(integers: number[]): number {
   let evens = integers.filter((val) => val % 2 === 0);
   let odds = integers.filter((val) => val % 2 !== 0);

   return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier([1, 2, 3]));
