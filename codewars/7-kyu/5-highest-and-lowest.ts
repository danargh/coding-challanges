// https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/typescript

class Kata2 {
   static highAndLow(numbers: string): string {
      let arrNumber = numbers.split(' ').map(Number);
      let result: number[] = [];
      result.push(Math.max(...arrNumber));
      result.push(Math.min(...arrNumber));
      return result.join(' ');
   }
}

console.log(Kata2.highAndLow('1 2 3 4 5'));

// best practices :
// export class Kata {
//    static highAndLow(numbers: string): string {
//       const numberList = numbers.split(' ').map(Number);
//       return `${Math.max(...numberList)} ${Math.min(...numberList)}`;
//    }
// }
