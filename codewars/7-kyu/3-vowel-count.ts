class Kata {
   static getCount(str: string): number {
      const vowelRe = new RegExp(/[aiueo]/gi);

      const matches = str.match(vowelRe);

      return matches ? matches.length : 0;
   }
}

console.log(Kata.getCount('abracadabra'));
