// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

function maxProfit2(prices: number[]): number {
   let maxProfit: number = 0;
   let minPrice = prices[0];
   for (let sell = 0; sell < prices.length; sell++) {
      minPrice = Math.min(minPrice, prices[sell]);

      maxProfit += prices[sell] - minPrice;

      minPrice = prices[sell];
   }

   return maxProfit;
}

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

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
