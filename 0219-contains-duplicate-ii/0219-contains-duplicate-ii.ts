function containsNearbyDuplicate(a: number[], k: number): boolean {
    let n = a.length;
    let f = {}

    for (let i = 0; i < n; i++) {
        let e = a[i]
        if (f[e] === undefined) f[e] = []
        f[e].push(i)
    }


    for (let e in f) {
        let indexes = f[e]
        for (let i = 0; i < indexes.length; i++) {
            for (let j = i + 1; j < indexes.length; j++) {
                if (indexes[j] - indexes[i] <= k) {
                    return true
                }
            }
        }
    }

    return false
};
