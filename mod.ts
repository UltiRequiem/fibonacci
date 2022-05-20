/**
 * Get the NTH Fibonacci Number.
 *
 * @param top The NTH Fibonacci Number.
 */
export function fibonacci(top: number) {
  const result = [...fibonacciSequence(top)];
  return result[result.length - 1];
}

export function* fibonacciSequence(n: number) {
  biggerThanZero(n);

  let first = 0;
  let second = 1;

  yield first;

  const top = n - 1;

  let current = 1;

  let count = 0;

  while (count <= top) {
    current = second;

    yield current;

    second = first + second;
    first = current;

    count++;
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
