class Kata1 {
   static disemvowel(str: string): string {
      let vowelRe = new RegExp(/[aiueo]/gi);
      return str.replace(vowelRe, '');
   }
}

console.log(Kata1.disemvowel('This website is for losers LOL!'));
