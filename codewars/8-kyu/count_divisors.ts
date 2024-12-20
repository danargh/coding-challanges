// problem : https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/typescript
function divisors(n: number) {
   let count: number = 0;
   for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
         count += 1;
      }
   }
   return count;

   // best solution : https://www.codewars.com/kata/542c0f198e077084c0000c2e/solutions/typescript
}

console.log(divisors(12));
