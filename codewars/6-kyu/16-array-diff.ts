function arrayDiff(a: number[], b: number[]): any {
   return a.filter((element) => !b.includes(element));
}

console.log(arrayDiff([3, 4], []));
