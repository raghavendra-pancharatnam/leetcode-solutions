function mySqrt(x: number): number {
    for (let i = 0; ; i++) {
        if (i * i === x) {
            return i
        }
        if (i * i > x) {
            return i - 1
        }
    }
};
