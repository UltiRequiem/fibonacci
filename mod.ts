/**
 * Get the NTH Fibonacci Number.
 *
 * @param top The NTH Fibonacci Number.
 */
export function fibonacci(top: number) {
  const result = [...fibonacciSequence(top)];
  return result[result.length - 1];
}

export function* fibonacciSequence(top: number) {
  biggerThanZero(top);

  let first = 0;
  let second = 1;

  yield first;

  let current = 1;

  for (let index = 0; index < top; index++) {
    yield current;

    current = second;

    second = first + second;

    first = current;
  }
}

/**
 * Throws if the number is lower than zero.
 *
 * @private
 */
function biggerThanZero(numberToTest: number) {
  if (typeof numberToTest !== "number") {
    throw new TypeError("Exepected a number.");
  }

  if (numberToTest < 0) {
    throw new RangeError("Expected a number bigger than zero.");
  }
}
