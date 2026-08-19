function removeDuplicates(a: number[]): number {
    let set = new Set<number>(a)
    // console.log({ a })
    // console.log({ set })

    let i = 0
    for (let e of set) {
        a[i] = e;
        i++
    }
    // console.log({ a })
    // console.log({ set })

    return set.size
};
