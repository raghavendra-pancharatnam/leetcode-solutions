function numberOfEmployeesWhoMetTarget(hours: number[], minHrs: number): number {
    let ct = 0

    for (let h of hours) {
        if (h >= minHrs) {
            ct++
        }
    }

    return ct
};
