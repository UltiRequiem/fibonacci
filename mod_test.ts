import { assertEquals } from "./test_deps.ts";
import fibonacci, {
  fibonacciIterativeSync,
  fibonacciRecursive,
  fibonacciRecursiveSync,
  fibonacciSequence,
  fibonacciSequenceSync,
} from "./mod.ts";

Deno.test("Test Fibonacci", async () => {
  assertEquals(await fibonacci(4), 3);
});

Deno.test("Test Fibonacci Iterative Sync", () => {
  assertEquals(fibonacciIterativeSync(4), 3);
});

Deno.test("Test Fibonacci Recursive", async () => {
  assertEquals(await fibonacciRecursive(4), 3);
});

Deno.test("Test Fibonacci Recursive", () => {
  assertEquals(fibonacciRecursiveSync(4), 3);
});

Deno.test("Test Fibonacci Sequence Sync", () => {
  assertEquals(fibonacciSequenceSync(3), [0, 1, 1]);
});

Deno.test("Test Fibonacci Sequence", async () => {
  assertEquals(await fibonacciSequence(3), [0, 1, 1]);
});
