export function kangaroo(
   x1: number,
   v1: number,
   x2: number,
   v2: number
): string {
   let result = 'NO';

   if (v1 <= v2) return result;

   while (x1 <= x2) {
      x1 += v1;
      x2 += v2;

      if (x1 === x2) {
         result = 'YES';
         break;
      }
   }

   return result;

   // * solution in math
   // return v2 < v1 && (x2 - x1) % (v1 - v2) === 0 ? 'YES' : 'NO';
}

console.log(kangaroo(0, 2, 5, 3));
