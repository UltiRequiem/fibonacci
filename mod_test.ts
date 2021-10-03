import { assertEquals } from "./test_deps.ts";
import fibonacci, { fibonacciSequence } from "./mod.ts";

Deno.test("Test Fibonacci", async() => {
  assertEquals(await fibonacci(4), 3);
});

Deno.test("Test Fibonacci Sequence",async () => {
  assertEquals(await fibonacciSequence(3), [0, 1, 1]);
});
