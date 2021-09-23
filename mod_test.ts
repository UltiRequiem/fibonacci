import { assertEquals } from "./test_deps.ts";
import fibonacci, { fibonacciSequence } from "./mod.ts";

Deno.test("Test Fibonacci", () => {
  assertEquals(fibonacci(4), 3);
});

Deno.test("Test Fibonacci Sequence", () => {
  assertEquals(fibonacciSequence(3), [0, 1, 1]);
});
