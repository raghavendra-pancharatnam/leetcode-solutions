function differenceOfSum(a: number[]): number {
    let t = a.reduce((s, e) => s + e, 0);
    let dt = a.reduce((s, e) => s + getDigitSum(e), 0);
    return Math.abs(t - dt)
};

function getDigitSum(n) {
    let s = 0
    while (n) {
        let d = n % 10
        s += d;
        n = Math.trunc(n / 10)
    }
    return s
}
