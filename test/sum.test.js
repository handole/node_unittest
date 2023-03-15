import { sum, sumALl } from "../src/sum"

test("test sum fungsi", () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
});

test("test sum all", () => {
    const numbers = [1, 2, 4, 5, 7];
    expect(sumALl(numbers)).toBe(19);
});