// function adding(arr) {
//    const chars = new String(n).split('');
//    return chars.reduce((prev, curr) => parseInt(prev) + parseInt(curr));
// }

function digitalRoot(n) {
   if (n.length === 1) return parseInt(n);
   return digitalRoot((n + '').split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr)));
}

console.log(digitalRoot(16));
