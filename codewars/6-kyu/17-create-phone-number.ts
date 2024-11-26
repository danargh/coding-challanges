// https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/typescript

function createPhoneNumber(numbers: number[]): string {
   return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// best practices
// export function createPhoneNumber(numbers: number[]): string {
//    let phoneNumber: string = '(xxx) xxx-xxxx';

//    for (let i = 0; i < numbers.length; i++) {
//       phoneNumber = phoneNumber.replace('x', numbers[i].toString());
//    }

//    return phoneNumber;
// }
