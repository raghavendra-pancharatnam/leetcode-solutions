function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)

    let s = 0

    while (students.length) {
        let se = seats.shift()
        let st = students.shift()

        s += Math.abs(se - st)
    }

    return s
};
