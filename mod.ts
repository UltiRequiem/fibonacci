export function fibonacci(n: number) {
  if (n < 0) {
    throw new Error(`Expected a number bigger than zero, but got ${n}.`);
  }

  if (fibonacci.cache[n] === undefined) {
    fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci.cache[n];
}

fibonacci.cache = [0, 1, 1];

export function fibonacciSequence(length: number) {
  const sequence = [];

  for (let i = 0; i < length; i++) {
    sequence[i] = fibonacci(i);
  }

  return sequence;
}
