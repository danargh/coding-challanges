// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

function maxProfit(prices: number[]): number {
   let maxProfit: number = 0;
   let minPrice = prices[0];
   for (let sell = 0; sell < prices.length; sell++) {
      let sellPrice = prices[sell];
      let profit = sellPrice - minPrice;

      maxProfit = Math.max(maxProfit, profit);
      if (sellPrice < minPrice) minPrice = sellPrice;
   }
   return maxProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1]));

// best practices 0 ms
// function maxProfit(prices: number[]): number {

//     let maxProfit: number = 0
//     let minPrice = prices[0]

//     for (let i = 1; i < prices.length; i++) {
//         minPrice = Math.min(minPrice, prices[i])
//         let profit = prices[i] - minPrice

//         maxProfit = Math.max(maxProfit, profit)
//     }

//     return maxProfit

// };
