function longestPalindrome(s: string): string {
    let n = s.length
    let max = 0
    let maxSS = ''
    let cl = console.log

    for (let i = 0; i < n; i++) {
        let ss = getMaxPalindromeAt(s, i, i)
        if (ss.length > max) {
            max = ss.length
            maxSS = ss
        }
        ss = getMaxPalindromeAt(s, i, i + 1)
        if (ss.length > max) {
            max = ss.length
            maxSS = ss
        }
    }

    return maxSS
};

function getMaxPalindromeAt(s, i, j): string {
    if (s[i] !== s[j]) return ''

    while (i - 1 >= 0 && s[i - 1] === s[j + 1]) {
        i--
        j++
    }
    return s.slice(i, j + 1)
};
