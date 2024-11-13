// link https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/typescript

export function validBraces(braces: string): boolean {
   const regex: RegExp = /\(\)|\[\]|\{\}/;
   return regex.test(braces) ? validBraces(braces.replace(regex, '')) : '' === braces;
}

console.log(validBraces('(]'));

// best practices
export function validBraces2(braces: string): boolean {
   [...braces].forEach(() => (braces = braces.replace('()', '').replace('{}', '').replace('[]', '')));
   return !braces;
}
