test("string ", () => {
     const name = "Ibrahim Alfatah Munif";

     expect(name).toBe("Ibrahim Alfatah Munif");
     expect(name).toEqual("Ibrahim Alfatah Munif");
     expect(name).toMatch(/fatah/);
});