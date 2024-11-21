// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/solutions/typescript

function findNextSquare(sq: number): number {
   return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

console.log(findNextSquare(121));

// my solution is the best practices  lmao :v
