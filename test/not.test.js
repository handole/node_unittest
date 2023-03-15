test("string.not", () => {
    const name = "Ibrahim Alfatah Munif";

    expect(name).not.toBe("Joko");
    expect(name).not.toEqual("Joko");
    expect(name).not.toMatch(/Joko/);
});

test("number.not", () => {
    const value = 5 + 7;

    expect(value).not.toBeGreaterThan(16);
    expect(value).not.toBeLessThan(7);
    expect(value).not.toBe(13)
})