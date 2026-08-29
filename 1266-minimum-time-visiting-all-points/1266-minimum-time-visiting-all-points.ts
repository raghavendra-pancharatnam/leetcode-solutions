function minTimeToVisitAllPoints(points: number[][]): number {
    let n = points.length
    let s = 0

    for (let i = 1; i < n; i++) {
        let [x1, y1] = points[i - 1]
        let [x2, y2] = points[i]

        let dx = Math.abs(x2 - x1)
        let dy = Math.abs(y2 - y1)

        let maxd = Math.max(dx, dy)
        s += maxd
    }

    return s
};
