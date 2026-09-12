function threeSum(a: number[]): number[][] {
    let n = a.length
    let res = []

    a.sort((a, b) => a - b)

    for (let i = 0; i < n; i++) {
        if (a[i - 1] === a[i]) continue

        for (let j = i + 1; j < n; j++) {
            if ((j > i + 1) && a[j - 1] === a[j]) continue

            let s = a[i] + a[j]
            let thirdEle = -s
            let thirdEleIndex =
                binarySearch(a, thirdEle, j + 1, n - 1)
            if (thirdEleIndex !== -1) {
                res.push([a[i], a[j], thirdEle])
            }
        }
    }

    return res
};

function binarySearch(a, target, lo = 0, hi = a.length - 1) {
    while (lo <= hi) {
        let mid = Math.trunc((lo + hi) / 2)

        if (a[mid] === target) return mid

        if (a[mid] < target) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }

    return -1
}
