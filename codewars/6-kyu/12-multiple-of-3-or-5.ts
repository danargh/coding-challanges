// https://www.codewars.com/kata/514b92a657cdc65150000006/train/typescript

class Challenge {
   static solution(number: number) {
      let arr: number[] = [];
      if (number > 0) {
         for (let i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
               arr.push(i);
            }
         }
         return arr.reduce((prev, curr) => prev + curr);
      } else {
         return 0;
      }
   }
}

console.log(Challenge.solution(10));

// best practices :
// export class Challenge {
//    static solution(num: number): number {
//       let total: number = 0;
//       for (let i: number = 0; i < num; i++) {
//          total += i % 5 == 0 || i % 3 == 0 ? i : 0;
//       }
//       return total;
//    }
// }
