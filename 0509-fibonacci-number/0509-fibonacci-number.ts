function fib(n: number): number {
    let memo = {}

    function rec(n: number): number {
        if (memo[n] !== undefined) return memo[n]

        if (n === 0) return 0
        if (n === 1) return 1

        let r = rec(n - 1) + rec(n - 2)
        memo[n] = r
        return r
    }

    return rec(n)
};
