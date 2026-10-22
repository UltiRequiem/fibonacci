import { expect, it } from "vitest";

import { fibonacci, fibonacciSequence } from "./index.js";

// Taken from https://wikipedia.org/wiki/Fibonacci_number
const fibonacciSequenceStart = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

it("fibonacci", () => {
  for (let index = 0; index < fibonacciSequenceStart.length; index++) {
    expect(fibonacci(index)).toEqual(fibonacciSequenceStart[index]);
  }

  expect(() => {
    // @ts-ignore: It should throw
    fibonacci("hello");

    // @ts-ignore: It should throw
    fibonacci(new Set([1, 2, 3, 4, 5]));
  }).toThrow(TypeError);

  expect(() => {
    fibonacci(-3);

    fibonacci(-25);
  }).toThrow(RangeError);
});

it("fibonacciSequence", () => {
  expect([...fibonacciSequence(fibonacciSequenceStart.length - 1)]).toEqual(
    fibonacciSequenceStart,
  );

  /* expect(() => {
    // @ts-ignore: It should throw
    fibonacciSequence("hello");

    // @ts-ignore: It should throw
    fibonacciSequence(new Set([1, 2, 3, 4, 5]));
  }).toThrow(TypeError);

  expect(() => {
    fibonacciSequence(-3);

    fibonacciSequence(-25);
  }).toThrow(RangeError); */
});
