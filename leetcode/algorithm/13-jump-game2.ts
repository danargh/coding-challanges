function jump2(nums: number[]): number {
   let newMax = 0;
   let jump = 0;
   let oldMax = 0;
   for (let i = 0; i < nums.length - 1; i++) {
      // Keep track of the farthest jump
      newMax = Math.max(newMax, i + nums[i]);
      // When we get to the index where we had our previous farthest jump, we increase our jump count by 1
      if (i == oldMax) {
         jump++;
         oldMax = newMax;
      }
   }
   return jump;
}

console.log(jump2([1, 2]));

// 2ms solution
// function jump(nums: number[]): number {
//     const pf = [nums[0]];
//     for (let i = 1; i < nums.length; i++) {
//         pf[i] = Math.max(pf[i - 1], nums[i] + i);
//     }

//     let i = 0;
//     let jumps = 0;
//     while (i < pf.length - 1) {
//         i = pf[i];
//         jumps++;
//     }

//     return jumps;
// };
