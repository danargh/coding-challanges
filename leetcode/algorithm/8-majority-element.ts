// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

function majorityElement(nums: number[]): any {
   let numsObj = {};
   let maxFreq = 0;
   let maxElement = 0;
   for (let num of nums) {
      numsObj[num] = numsObj[num] + 1 || 1;
   }
   for (let num in numsObj) {
      if (numsObj[num] > maxFreq) {
         maxFreq = numsObj[num];
         maxElement = parseInt(num);
      }
   }
   return maxElement;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// best practices 0 ms runtime
// let count = 1;
// let candidate = nums[0];

// for (let i = 1; i < nums.length; ++i) {
//    if (count === 0) {
//       ++count;
//       candidate = nums[i];
//       continue;
//    }

//    if (candidate === nums[i]) {
//       ++count;
//    } else {
//       --count;
//    }
// }

// return candidate;
