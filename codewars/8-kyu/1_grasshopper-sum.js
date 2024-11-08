var summation = function (num) {
   let i = 1;
   let total = 0;
   while (i <= num) {
      total += i;
      ++i;
   }
   return total;
};

console.log(summation(8));
