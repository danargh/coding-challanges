// komparasi array a 3 anggota dengan b 3 anggota
// if a[i] > b[i] => alice dapat 1 point
// if a[i] < b[i] => bob dapat 1 point
// if a[i] = b[i] => keduanya tidak dapat point

function compare(a, b) {
   let result = [0, 0];
   for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
         result[0] += 1;
      } else if (a[i] < b[i]) {
         result[1] += 1;
      }
   }
   return result;
}

const a = [17, 28, 30];
const b = [99, 16, 8];

let result = compare(a, b);
console.log(result);
