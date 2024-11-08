function findMissingLetter(array) {
   let codes = array.map((e) => e.charCodeAt());
   for (let i = 0; i < codes.length; i++) {
      if (codes[i] + 1 !== codes[i + 1]) {
         return String.fromCharCode(codes[i] + 1);
      }
   }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
