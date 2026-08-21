function twoSum(a: number[], t: number): number[] {
    let n = a.length;
    let map = new Map() // prev eles

    for (let j = 0; j < n; j++) {
        let pair = t - a[j]

        if (map.has(pair)) {
            let i = map.get(pair)
            return [i, j]
        }

        map.set(a[j], j)
    }

    return [-1, -1]
};

function twoSum22222(a: number[], t: number): number[] {
    let n = a.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] + a[j] === t) {
                return [i, j]
            }
        }
    }

    return [-1, -1]
};
