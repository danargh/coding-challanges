// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions/typescript

const towerBuilder = (nFloors: number): any => {
   var finalArray: string[] = [];
   var numSpaces = 0;
   // Start from the reverse.
   for (let i = nFloors; i > 0; i--) {
      // At the end, the number of spaces are 0.
      // Have one and less for the half of the stars.
      // Add another set of spaces.
      finalArray.push(' '.repeat(numSpaces) + '*'.repeat(i) + '*'.repeat(i - 1) + ' '.repeat(numSpaces));
      // Increment the space, while going to top.
      numSpaces++;
   }
   // Reverse the array.
   return finalArray.reverse();
};

console.log(towerBuilder(5));

// best practices :
// export const towerBuilder = (nFloors: number): string[] => {
//    return Array.from({ length: nFloors }, (_, index) => {
//       const spaces = ' '.repeat(nFloors - 1 - index);
//       return `${spaces}${'*'.repeat(index * 2 + 1)}${spaces}`;
//    });
// };
