/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
   val: number;
   next: ListNode | null;
   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

function arrayToList(arr: number[]): ListNode | null {
   let head = new ListNode(arr[0]);
   let current = head;
   for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
   }
   return head;
}
function listToArrayReversal(list: ListNode | null | undefined): number[] {
   let returnArray: any = [];
   if (list?.next !== null) {
      returnArray = returnArray.concat(listToArrayReversal(list?.next));
   }
   // add current value list
   returnArray.push(list?.val);
   return returnArray;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
   function listToArrayReversal(list: ListNode | null | undefined): number[] {
      let returnArray: any = [];
      if (list?.next !== null) {
         returnArray = returnArray.concat(listToArrayReversal(list?.next));
      }
      // add current value list
      returnArray.push(list?.val);
      return returnArray;
   }

   function arrayToListReversal(arr: number[]): ListNode | null {
      let head = new ListNode(arr[arr.length - 1]);
      let current = head;
      for (let i = arr.length - 2; i >= 0; i--) {
         current.next = new ListNode(arr[i]);
         current = current.next;
      }
      return head;
   }
   let l1Num = BigInt(listToArrayReversal(l1).join(''));
   let l2Num = BigInt(listToArrayReversal(l2).join(''));

   let result = l1Num + l2Num;
   console.log(l2Num);

   return arrayToListReversal(Array.from(String(result), Number));
}

const l1 = arrayToList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
const l2 = arrayToList([5, 6, 4]);
// console.log(l1);

console.log(addTwoNumbers(l1, l2));
console.log(listToArrayReversal(addTwoNumbers(l1, l2)));

// solution to pass all unit test :
// https://duncan-mcardle.medium.com/leetcode-problem-2-add-two-numbers-javascript-2c158d3b965
