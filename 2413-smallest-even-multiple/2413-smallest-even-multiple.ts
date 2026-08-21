function smallestEvenMultiple(n: number): number {
    for (let i = 2; ; i += 2) {
        if (i % n === 0) {
            return i
        }
    }
};
