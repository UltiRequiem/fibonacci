export function fibonacci(top: number) {
  biggerThanZero(top);

  let [starter, second] = [0, 1];

  for (let index = 0; index < top; index++) {
    [starter, second] = [second, starter + second];
  }

  return starter;
}

/**
 * Throws if the number is lower than zero.
 *
 * @private
 */
function biggerThanZero(number: number) {
  if (typeof number !== "number") {
    throw new TypeError("Exepected a number.");
  }

  if (number < 0) {
    throw new RangeError("Expected a number bigger than zero.");
  }
}
