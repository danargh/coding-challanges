// function DNAtoRNA(dna: string): string {
//    return dna
//       .split("")
//       .map((v, i) => (v === "T" ? v.replace(v, "U") : v))
//       .join("");
// }

// best practices :
function DNAtoRNA(dna: string): string {
   return dna.replaceAll("T", "U");
}

console.log(DNAtoRNA("TTTT"));
