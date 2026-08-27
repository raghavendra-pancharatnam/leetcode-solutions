function detectCapitalUse(s: string): boolean {
    let n = s.length
    let f = s[0]
    let remaining = s.slice(1)

    let firstLetterCaps = /[A-Z]/.test(f)
    let isRemainingSmall = remaining.replaceAll(/[A-Z]/g, "").length === (n - 1)
    let isRemainingCaps = remaining.replaceAll(/[a-z]/g, "").length === (n - 1)

    if (firstLetterCaps) {
        return (isRemainingSmall || isRemainingCaps)
    }

    return isRemainingSmall
};
