/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error(`Expected a number bigger than zero, but got ${n}.`);
  }

  if (fibonacci.cache[n] === undefined) {
    fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci.cache[n];
}

fibonacci.cache = [0, 1, 1];

/**
 * Return an Array with the first N numbers of the Fibonacci Sequence
 * @param  length The length of the array you want to get
 * @returns The Array with the first N numbers of the Fibonacci Sequence
 */
export function fibonacciSequence(length: number): number[] {
  const sequence = [];

  for (let i = 0; i < length; i++) {
    sequence[i] = fibonacci(i);
  }

  return sequence;
}
