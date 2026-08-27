function isAdjacentDiffAtMostTwo(s: string): boolean {
    let n = s.length

    for (let i = 1; i < n; i++) {
        let prev = +s[i - 1]
        let curr = +s[i]

        if (Math.abs(curr - prev) <= 2) {
            // good
        } else {
            return false
        }
    }

    return true
};
