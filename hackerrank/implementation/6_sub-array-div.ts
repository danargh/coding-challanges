// problem : https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

function birthday(s: number[], d: number, m: number): number {
   let num = s;
   let nums: number[][] = [];
   let count = 0;
   const add = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
   for (let i = 0; i < s.length; i++) {
      let arrayElement = num.slice(0 + i, m + i);
      nums.push(arrayElement);
   }
   if (num.length === 1 && num[0] === d) {
      count++;
   } else {
      nums.forEach((el) => {
         if (add(el) === d) {
            count++;
         }
      });
   }

   return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
