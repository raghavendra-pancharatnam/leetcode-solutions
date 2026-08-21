function findMissingElements(a: number[]): number[] {
    let set = new Set(a)
    let min = Math.min(...a)
    let max = Math.max(...a)
    let res = []

    for (let i = min; i <= max; i++) {
        if (!set.has(i)) {
            res.push(i)
        }
    }

    return res
};
