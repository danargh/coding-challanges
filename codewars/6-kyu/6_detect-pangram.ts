// const isPangram = (phrase: string): any => {
//    const alphabetCount = 26;
//    const letters = new Set<string>();

//    for (const char of phrase.toLowerCase()) {
//       if (char >= 'a' && char <= 'z') {
//          letters.add(char);
//       }
//    }

//    return letters.size === alphabetCount;
// };

// best solution
const isPangram = (phrase: string): boolean => new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
