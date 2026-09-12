function constructDistancedSequence(n: number): number[] {
    const len = 2 * n - 1;
    const res = new Array(len).fill(0);
    const used = new Array(n + 1).fill(false);

    function dfs(i) {
        if (i === len) return true;

        if (res[i] !== 0) {
            return dfs(i + 1);
        }

        for (let x = n; x >= 1; x--) {
            if (used[x]) continue;

            if (x === 1) {
                used[x] = true;
                res[i] = 1;

                if (dfs(i + 1)) return true;

                res[i] = 0;
                used[x] = false;
                continue;
            }

            const j = i + x;

            if (j >= len) continue;

            if (res[j] !== 0) continue;

            used[x] = true;
            res[i] = x;
            res[j] = x;

            if (dfs(i + 1)) return true;

            res[i] = 0;
            res[j] = 0;
            used[x] = false;
        }

        return false;
    }

    dfs(0);

    return res;
}
