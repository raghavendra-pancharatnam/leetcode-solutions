function isValid(s: string): boolean {
    const stack: string[] = [];

    for (const ch of s) {
        stack.push(ch);

        // Whenever the last three characters are "abc", pop them
        if (
            stack.length >= 3 &&
            stack[stack.length - 3] === 'a' &&
            stack[stack.length - 2] === 'b' &&
            stack[stack.length - 1] === 'c'
        ) {
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }

    // If stack is empty, the string was valid
    return stack.length === 0;
};