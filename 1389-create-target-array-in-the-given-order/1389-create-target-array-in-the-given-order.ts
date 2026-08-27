function createTargetArray(a: number[], indexes: number[]): number[] {
    let n = a.length
    let res = []

    for (let k = 0; k < n; k++) {
        let e = a[k]
        let i = indexes[k]
        res.splice(i, 0, e)
    }

    return res
};
