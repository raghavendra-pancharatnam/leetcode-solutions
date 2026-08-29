function minimumSum(n: number): number {
    let a = ('' + n)
        .split("")
        .map(e => +e)
        .sort((a, b) => a - b)

    return +(a[0] + '' + a[3]) + +(a[1] + '' + a[2])
};
