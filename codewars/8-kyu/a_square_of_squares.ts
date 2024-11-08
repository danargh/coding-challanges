function isSquare(n: number): boolean {
   // case studies :
   //
   // my solution
   const root: number = Math.sqrt(n);
   return root % 1 === 0 ? true : false;

   // best solution
   // https://www.codewars.com/kata/54c27a33fb7da0db0100040e/solutions/typescript
}

console.log(isSquare(-1));
