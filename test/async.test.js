import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
    const result = await sayHelloAsync("Ibra");
    expect(result).toBe("Hello Ibra");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("Ibra")).resolves.toBe("Hello Ibra");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});