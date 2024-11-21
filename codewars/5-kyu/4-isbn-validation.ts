//  https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/solutions/typescript

function validISBN10(isbn: string): any {
   if (isbn.length !== 10) {
      return false;
   }
   let isbnNumber: number[] = isbn.split('').map((v) => parseInt(v));
   let result: number[] = [];
   for (let i = 0; i < isbn.length; i++) {
      if (!Number.isInteger(isbnNumber[i]) && i === isbnNumber.length - 1 && isbn[i] === 'X') {
         result.push(10 * (i + 1));
      } else {
         result.push(isbnNumber[i] * (i + 1));
      }
   }
   return result.reduce((p, c) => p + c) % 11 === 0 ? true : false;
}

console.log(validISBN10('1112223339'));

// best practices but idk wkwk
// const charToVal = (c: string, i: number) => (i === 9 && c === 'X' ? 10 : Number(c));

// export function validISBN10(isbn: string): boolean {
//    if (isbn.length !== 10) return false;
//    return (
//       isbn
//          .split('')
//          .map(charToVal)
//          .map((val, i) => val * (i + 1))
//          .reduce((acc, el) => acc + el, 0) %
//          11 ===
//       0
//    );
// }
