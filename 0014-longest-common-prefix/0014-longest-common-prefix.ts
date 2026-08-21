function longestCommonPrefix(strs: string[]): string {
    let good = true
    let res = ''

    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[0][j] === strs[i][j]) {
            } else {
                good = false
                break
            }
        }
        if (good) {
            res += strs[0][j]
        } else break
    }

    return res
};
