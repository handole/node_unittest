import { callMe, MyException } from "../src/exception";

test("exception", () => {
    expect(() => callMe("Ibra")).toThrow();
    expect(() => callMe("Ibra")).toThrow(MyException);
    expect(() => callMe("Ibra")).toThrow("Ups my exceptions happens");
});

test("exception not happens", () => {
    expect(callMe("Budi")).toBe("OK");
})