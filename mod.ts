export function fibonacci(top: number) {
  biggerThanZero(top);

  let [starter, second] = [0, 1];

  for (let index = 1; index < top; index++) {
    [starter, second] = [second, starter + second];
  }

  return starter;
}

export function listFibonacci(top: number) {
  biggerThanZero(top);

  const fibonacci = [0, 1];

  for (let index = 1; index < top; index++) {
    fibonacci.push(fibonacci[index] + fibonacci[index - 1]);
  }

  return fibonacci;
}

export function* lazyFibonacc(n: number) {
  biggerThanZero(n);

  let first = 0;
  let second = 1;

  yield first;

  yield second;

  const top = n - 2;

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
 * @private
 * Throws if the number is lower than zero.
 */
function biggerThanZero(number: number) {
  if (typeof number !== "number") {
    throw new TypeError(`Exepected a number, but got ${typeof number}.`);
  }

  if (number === 0 || number < 0) {
    throw new Error(`Expected a number bigger than zero, but got ${number}.`);
  }
}
