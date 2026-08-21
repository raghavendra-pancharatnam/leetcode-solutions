function getSneakyNumbers(a: number[]): number[] {
    let set = new Set()
    let dups = []

    for (let e of a) {
        if (set.has(e)) {
            dups.push(e)
        } else {
            set.add(e)
        }
    }

    return dups
};
