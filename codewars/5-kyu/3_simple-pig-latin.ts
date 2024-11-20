const pigIt = (a: string): any => {
   let arr = a.split(' ').map((v, i) => v.split(''));
   for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === '!' || arr[i][0] === '?' || arr[i][0] === '.') {
      } else {
         arr[i].push(arr[i][0]);
         arr[i].shift();
         arr[i].push('ay');
      }
   }
   return arr.map((v) => v.join('')).join(' ');
};

console.log(pigIt('Pig latin is cool'));
