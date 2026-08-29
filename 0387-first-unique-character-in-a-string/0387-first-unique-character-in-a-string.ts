function firstUniqChar(s: string): number {
    let f = {}
    for (let e of s) {
        f[e] = (f[e] ?? 0) + 1
    }

    for (let e in f) {
        if (f[e] === 1) {
            return s.indexOf(e)
        }
    }

    return -1
};
