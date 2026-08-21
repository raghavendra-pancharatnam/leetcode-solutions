function duplicateZeros(a: number[]): void {
    let n = a.length

    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            a.splice(i, 0, 0)
            i++
        }
    }

    a.length = n
};
