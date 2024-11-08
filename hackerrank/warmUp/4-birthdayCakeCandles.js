function birthdayCakeCandles(candles) {
   let max = Math.max(...candles);
   return candles.filter((item) => {
      return item === max;
   }).length;
}

let result = birthdayCakeCandles([1, 4, 5, 5]);

console.log(result);
