function plusMinus(arr) {
   let negatif =
      arr.filter((num) => {
         return num < 0;
      }).length / arr.length;
   let zero =
      arr.filter((num) => {
         return num === 0;
      }).length / arr.length;
   let positif =
      arr.filter((num) => {
         return num > 0;
      }).length / arr.length;
   return console.log(
      `${positif.toFixed(6)} \n${negatif.toFixed(6)} \n${zero.toFixed(6)}`
   );
}

plusMinus([-1, -1, 0, 1, 1]);
