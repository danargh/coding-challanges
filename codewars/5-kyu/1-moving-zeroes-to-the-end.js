// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
   for (let i = arr.length; i--; ) {
      if (arr[i] === 0) {
         arr.splice(i, 1);
         arr.push(0);
      }
   }
   return arr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// best practices

// var moveZeros = function (arr) {
//    return arr
//       .filter(function (x) {
//          return x !== 0;
//       })
//       .concat(
//          arr.filter(function (x) {
//             return x === 0;
//          })
//       );
// };
