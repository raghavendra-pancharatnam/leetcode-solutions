function checkGoodInteger(n: number): boolean {
    let s = '' + n
    let sum = 0
    let sqsum = 0

    for (let ch of s) {
        let d = +ch

        sum += d
        sqsum += d * d
    }

    return sqsum - sum >= 50
};
