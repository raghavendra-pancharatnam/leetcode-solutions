function resultArray(a: number[]): number[] {
    let a1 = [a.shift()]
    let a2 = [a.shift()]

    while (a.length) {
        if (a1.at(-1) > a2.at(-1)) {
            a1.push(a.shift())
        } else {
            a2.push(a.shift())
        }
    }

    return [...a1, ...a2]
};
