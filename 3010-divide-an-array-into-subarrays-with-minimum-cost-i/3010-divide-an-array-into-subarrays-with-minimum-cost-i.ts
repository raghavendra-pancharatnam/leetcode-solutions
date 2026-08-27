function minimumCost(a: number[]): number {
    let f = a.shift()

    a.sort((a, b) => a - b)

    let [remainingFir, remainingSec] = a // sort then  first, second...

    return f + remainingFir + remainingSec
};
