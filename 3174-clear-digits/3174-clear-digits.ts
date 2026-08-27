function clearDigits(s: string): string {
    let stack = []
    const top = (stack) => stack.at(-1)

    for (let i = 0; i < s.length; i++) {
        if (/[a-z]/.test(s[i])) {
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }

    return stack.join("")
};
