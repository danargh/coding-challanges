// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/typescript

const likes = (a: string[]): string => {
   if (a.length === 0) {
      return 'no one likes this';
   } else if (a.length === 1) {
      return `${a[0]} likes this`;
   } else if (a.length === 2) {
      return a.join(' and ') + ' like this';
   } else if (a.length === 3) {
      let firstItem = a.slice(0, 2);
      firstItem[0] += ',';
      return firstItem.join(' ') + ' and ' + a[2] + ' like this';
   } else {
      let firstItem = a.slice(0, 2);
      firstItem[0] += ',';
      return firstItem.join(' ') + ' and ' + (a.length - 2) + ' others like this';
   }
};

console.log(likes(['Max', 'John', 'Mark', 'Danar', 'Falal']));

// best practicesnya cukup simpel wkwk :
// function likes(names: string[]): string {
//    switch (names.length) {
//       case 0:
//          return 'no one likes this';
//       case 1:
//          return `${names[0]} likes this`;
//       case 2:
//          return `${names[0]} and ${names[1]} like this`;
//       case 3:
//          return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       default:
//          return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//    }
// }
