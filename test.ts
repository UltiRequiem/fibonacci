import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.137.0/testing/asserts.ts";

import { fibonacci, fibonacciSequenceList } from "./mod.ts";

// Taken from https://wikipedia.org/wiki/Fibonacci_number
const fibonacciSequenceStart = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

Deno.test("fibonacci", () => {
  for (let index = 0; index < fibonacciSequenceStart.length; index++) {
    assertEquals(fibonacci(index), fibonacciSequenceStart[index]);
  }

  assertThrows(() => {
    // @ts-ignore: It should throw
    fibonacci("hello");

    // @ts-ignore: It should throw
    fibonacci(new Set([1, 2, 3, 4, 5]));
  }, TypeError);

  assertThrows(() => {
    fibonacci(-3);

    fibonacci(-25);
  }, RangeError);
});

Deno.test("fibonacciSequenceList", () => {
  const result = fibonacciSequenceList(fibonacciSequenceStart.length);

  assertEquals(result, fibonacciSequenceStart);
});
