// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1466186255/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums: number[]): number {
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
         nums.splice(i, 1);
         i--;
      }
   }
   return nums.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 0 ms runtime solutions :
// function removeDuplicates(nums: number[]): number {
//         if (nums.length === 0) return 0;

//     let writeIndex = 1; // Start writing unique elements from the second position

//     for (let readIndex = 1; readIndex < nums.length; readIndex++) {
//         if (nums[readIndex] !== nums[readIndex - 1]) {
//             nums[writeIndex] = nums[readIndex]; // Place unique element at writeIndex
//             writeIndex++; // Move to the next write position
//         }
//     }

//     return writeIndex;

// };
