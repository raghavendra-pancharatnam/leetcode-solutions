function countPairs(a: number[], target: number): number {
    let n = a.length
    let ct = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] + a[j] < target) {
                ct++
            }
        }
    }

    return ct
};
