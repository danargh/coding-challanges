function rotate(nums: number[], k: number): void {
   let i: number = 0;
   while (i < k) {
      let end = nums.pop();
      nums.unshift(end as number);
      i++;
   }
   console.log(nums);
}

console.log(rotate([-1, -100, 3, 99], 2));

// best practices took 4ms
// function rotate(nums: number[], k: number): void {
//    const left = nums.splice((nums.length - k) % nums.length, k)
//    nums.unshift(...left)
// };
