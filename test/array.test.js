test("array", () => {
    const names = ["ibra", "alfat", "munif"];
    expect(names).toEqual(["ibra", "alfat", "munif"]);
    expect(names).toContain("munif");
});

test("array object", () => {
    const persons = [
        {
            name: "Ibra"
        },
        {
            name: "Fatah"
        }
    ];
    expect(persons).toContainEqual({
        name: "Ibra"
    });
}); 