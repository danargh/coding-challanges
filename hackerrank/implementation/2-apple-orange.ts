// problem : https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

// sample input : 7 11  5 15  3 2  -2 2 1  5 -6
/* 
   7 11 => house range
   5 15 => apple tree and orange tree position
   3 2 => number of apples and oranges
   -2 2 1 => distance of apples from apple tree
   5 -6 => distance of oranges from orange tree
*/

export function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
   let appleCount = 0;
   let orangeCount = 0;

   apples.forEach((apple) => {
      let applePosition = a + apple;
      if (applePosition >= s && applePosition <= t) {
         appleCount++;
      }
   });

   oranges.forEach((orange) => {
      let orangePosition = b + orange;
      if (orangePosition >= s && orangePosition <= t) {
         orangeCount++;
      }
   });

   console.log(appleCount);
   console.log(orangeCount);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
