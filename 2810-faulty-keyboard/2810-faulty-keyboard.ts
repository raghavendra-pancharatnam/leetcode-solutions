function finalString(s: string): string {
    let res = []

    for (let c of s) {
        if (c === 'i') {
            res.reverse()
        } else {
            res.push(c)
        }
    }

    return res.join("")
};
