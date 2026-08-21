function countConsistentStrings(allowed: string, words: string[]): number {
    let setallowed = new Set(allowed)
    let ct = 0

    for (let w of words) {
        let good = true
        let setw = new Set(w)
        for (let e of setw) {
            if (!setallowed.has(e)) {
                good = false
                break
            }
        }
        if (good) ct++
    }

    return ct
};
