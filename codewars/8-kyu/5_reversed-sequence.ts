// const reverseSeq = (n: number): number[] => {
//    return Array.from({ length: n }, () => (n -= 1) + 1);
// };

// best practices
// export const reverseSeq = (n: number): number[] => {
//    return Array.from({ length: n }, (_, i) => n - i);
// };

export const reverseSeq = (n: number): number[] => {
   return Array(n)
      .fill(0)
      .map((e, i) => n - i);
};

console.log(reverseSeq(3));
