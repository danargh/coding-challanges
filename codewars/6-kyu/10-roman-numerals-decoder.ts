// www.codewars.com/kata/51b6249c4612257ac0000005/solutions/typescript

function solution(roman: string): number {
   return roman
      .split('')
      .map((v, i) => {
         switch (v) {
            case 'I':
               // result.push(1)
               return 1;
            case 'V':
               return 5;
            case 'X':
               return 10;
            case 'L':
               return 50;
            case 'C':
               return 100;
            case 'D':
               return 500;
            case 'M':
               return 1000;
            default:
               break;
         }
      })
      .reduce((prev: any, curr: any) => {
         return curr > prev ? curr - prev : curr + prev;
      }) as number;
}

console.log(solution('XXI'));

// best solution :
// export function solution(roman: string): number {
//    const symbols: any = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000,
//    };
//    return roman
//       .split('')
//       .map((e) => symbols[e])
//       .reduce((p, c) => (p < c ? c - p : c + p));
// }
