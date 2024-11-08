function xo(str: string): boolean {
    // my solution
    str = str.toLowerCase();
    const strArr = [...str];
    let x: number = 0;
    let o: number = 0;

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "o") {
            o += 1;
        } else if (strArr[i] === "x") {
            x += 1;
        }
    }

    if (x === o) {
        return true;
    }
    return false;

    // best solution
    // https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/typescript
}

console.log(xo("xxOo"));
