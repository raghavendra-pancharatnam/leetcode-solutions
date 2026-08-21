function reversePrefix(s: string, k: number): string {
    let prefixRev = s.slice(0, k).split("").reverse().join("")
    let remaining = s.slice(k)
    return prefixRev + remaining
};
