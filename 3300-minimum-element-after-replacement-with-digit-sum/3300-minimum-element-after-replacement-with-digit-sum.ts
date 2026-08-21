function minElement(a: number[]): number {
    let min = Infinity

    for (let e of a) {
        min = Math.min(min, sumOfDigts(e))
    }

    return min
};

function sumOfDigts(n) {
    let s = 0

    while (n > 0) {
        let last = n % 10
        s += last
        n = Math.trunc(n / 10)
    }

    return s
}
