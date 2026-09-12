function openLock(deadends: string[], target: string): number {
    const dead = new Set(deadends);
    if (dead.has('0000')) return -1;

    const q = ['0000'];
    const seen = new Set(['0000']);

    let h = 0;
    let steps = 0;

    while (h < q.length) {
        const size = q.length - h;

        for (let s = 0; s < size; s++) {
            const curr = q[h++];

            if (curr === target) return steps;

            for (let i = 0; i < 4; i++) {

                for (const d of [-1, 1]) {

                    const a = curr.split('');
                    a[i] = '' + ((+a[i] + d + 10) % 10);
                    const next = a.join('');

                    if (!seen.has(next) && !dead.has(next)) {
                        seen.add(next);
                        q.push(next);
                    }
                }
            }
        }

        steps++;
    }

    return -1;
}
