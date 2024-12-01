function removeDuplicates(nums: number[]): number {
   let twice: number = -1;
   for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
         if (nums[i] === twice) {
            nums.splice(i, 1);
            i--;
         }
         twice = nums[i];
      }
   }

   return nums.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
