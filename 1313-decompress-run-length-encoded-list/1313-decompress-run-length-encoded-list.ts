function decompressRLElist(a: number[]): number[] {
    let n = a.length
    let res = []

    for (let i = 0; i < n; i += 2) {
        let f = a[i]
        let e = a[i + 1]

        while (f--) {
            res.push(e)
        }
    }

    return res
};
