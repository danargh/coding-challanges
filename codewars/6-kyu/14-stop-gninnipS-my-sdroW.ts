function spinWords(words: string): string {
   return words
      .split(' ')
      .map((v, i) => (v.length > 4 ? v.split('').reverse().join('') : v))
      .join(' ');
}

console.log(spinWords('Hey fellow warriors'));
