// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

function removeElement(nums: number[], val: number): number {
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
         nums.splice(i, 1);
         i--;
      }
   }
   return nums.length;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// o ms runtime solution
// function removeElement(nums: number[], val: number): number {
//     let k = 0
//     let i;
//     for (i = 0; i <= nums.length -1; i ++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     return k
// };
