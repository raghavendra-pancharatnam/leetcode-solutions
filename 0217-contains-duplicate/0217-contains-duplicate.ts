function containsDuplicate(a: number[]): boolean {
    return new Set(a).size !== a.length
};
