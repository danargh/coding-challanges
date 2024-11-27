// https://leetcode.com/problems/merge-sorted-array/submissions/1464607246/?envType=study-plan-v2&envId=top-interview-150

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
   const len = m + n;
   nums1.splice(len - n);
   for (let i = 0; i < n; i++) {
      nums1.push(nums2[i]);
   }

   for (let j = 1; j < len; j++) {
      if (nums1[j - 1] || nums1[j - 1] === 0) {
         if (nums1[j] < nums1[j - 1]) {
            let tmp = nums1[j - 1];
            nums1[j - 1] = nums1[j];
            nums1[j] = tmp;
            j = j - 2;
         }
      }
   }
   console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// best practices that return 0 ms of runtime
// if (m === 0) {
//    nums1.length = n;
//    for (let x: number = 0; x < n; x++) {
//       nums1[x] = nums2[x];
//    }
// } else {
//    nums1.length = m + n;

//    for (let i: number = m; i < nums1.length; i++) {
//       nums1[i] = nums2[i - m];
//    }

//    nums1.sort((a, b) => a - b);
// }
