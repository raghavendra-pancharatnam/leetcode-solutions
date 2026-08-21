function merge(a: number[], m: number, b: number[], n: number): void {
    let c = []
    let i = 0
    let j = 0

    while (i < m && j < n) {
        if (a[i] <= b[j]) {
            c.push(a[i])
            i++
        } else {
            c.push(b[j])
            j++
        }
    }

    while (i < m) {
        c.push(a[i])
        i++
    }
    while (j < n) {
        c.push(b[j])
        j++
    }

    let k = 0
    for (let e of c) {
        a[k++] = e
    }
};
