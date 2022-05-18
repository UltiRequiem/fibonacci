import { fibonacci } from "./mod.ts";

import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("fibonacci", () => {
  // Taken from https://wikipedia.org/wiki/Fibonacci_number
  const fibonacciSequenceStart = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

  for (let index = 0; index < fibonacciSequenceStart.length; index++) {
    assertEquals(fibonacci(index + 1), fibonacciSequenceStart[index]);
  }
});
