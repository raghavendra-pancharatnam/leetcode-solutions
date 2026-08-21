function isValid(s: string): boolean {
    let stack = []
    let top = (stack) => stack.at(-1)

    for (let e of s) {
        if ('({['.includes(e)) {
            stack.push(e)
        } else {
            // close
            if (e === ')') {
                if (top(stack) !== '(') {
                    return false
                }
            }
            if (e === ']') {
                if (top(stack) !== '[') {
                    return false
                }
            }
            if (e === '}') {
                if (top(stack) !== '{') {
                    return false
                }
            }
            stack.pop()
        }
    }

    return stack.length === 0
};
