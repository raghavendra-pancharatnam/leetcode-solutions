function earliestTime(tasks: number[][]): number {
    let min = Infinity

    for (let [st, duration] of tasks) {
        let et = st + duration
        min = Math.min(min, et)
    }

    return min
};
