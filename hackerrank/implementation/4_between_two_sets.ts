// problem : https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

/*
   2 3 => array length
   2 4 => array a
   16 32 96 => array b
*/

function getTotalX(a: number[], b: number[]): number {
   let factorA: number[] = [];
   let factorB: number[] = [];

   for (let i = 1; i <= 100; i++) {
      if (a.every((val) => i % val == 0)) {
         factorA.push(i);
      }
      if (b.every((val) => val % i == 0)) {
         factorB.push(i);
      }
   }

   return factorA.filter((val) => factorB.includes(val)).length;
}

console.log(getTotalX([2, 4], [16, 32, 96])); // 3
