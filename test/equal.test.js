test("test toBe", () => {
    const name = "Hahim";
    const hello = `Hello ${name}`;
    
    expect(hello).toBe('Hello Hahim');
});

test("test toEqual", () => {
    let person = {id: "ibra"};
    Object.assign(person, {name: "Ibra"});

    expect(person).toEqual({id: "ibra", name: "Ibra"});
});