function shuffle(a: number[], n: number): number[] {
    let res = []

    for (let i = 0; i < n; i++) {
        res.push(a[i], a[i + n])
    }

    return res
};
