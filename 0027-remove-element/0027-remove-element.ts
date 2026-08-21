function removeElement(a: number[], val: number): number {
    let n = a.length
    let i = 0

    for (let j = 0; j < n; j++) {
        if (a[j] === val) {
            // skip
        } else {
            a[i] = a[j]
            i++
        }
    }

    return i
};
