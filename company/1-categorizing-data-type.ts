// coding test javascript data type and algorithm in Bjak

function categorizingDataType(arr: any[]): any[] {
   const typeMap = new Map<string, any[]>();

   for (const item of arr) {
      const type = typeof item;
      if (!typeMap.has(type)) {
         typeMap.set(type, []);
      }
      typeMap.get(type)?.push(item);
   }
   return Array.from(typeMap.values());
}
console.log(categorizingDataType([1, null, 'hai', 2, 3, 'yoi']));
