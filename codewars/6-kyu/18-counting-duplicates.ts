function duplicateCount(text: string): number {
   let result: number = 0;
   let charMap = new Map<string, string[]>();
   for (let item of text) {
      item = item.toLowerCase();
      if (!charMap.has(item)) {
         charMap.set(item, []);
      }
      charMap.get(item)?.push(item);
   }
   charMap.forEach((v, k) => {
      if (v.length > 1) {
         result += 1;
      }
   });
   return result;
}

console.log(duplicateCount('aabBcde'));

// best practices :
// function duplicateCount(text: string): number {
//    const values = text.toLowerCase();
//    const distinctValues = [...new Set(values)];
//    const count = (s: string) => values.split(s).length - 1 > 1;
//    return distinctValues.filter((value) => count(value)).length;
// }
