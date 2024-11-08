// link : https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/

// fungsi ini menghapus element yang duplicat sehingga menghasilkan element unik
// fungsi filter menyaring angka yang berbeda dari angka sebelumnya saja
function removeDuplicates(nums: number[]): number {
   return nums.filter((e: number, i: number, a: number[]) => {
      return e !== a[i - 1];
   }).length;
}
function removeDuplicatesElement(nums: number[]): number[] {
   return nums.filter((e: number, i: number, a: number[]) => {
      return e !== a[i - 1];
   });
}

console.log(removeDuplicatesElement([1, 1, 2]));
console.log(removeDuplicates([1, 1, 2]));
