/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export default function fibonacci(n: number): Promise<number> {
  return Promise.resolve(fibonacciSync(n));
}

/**
 * Return an Array with the first N numbers of the Fibonacci Sequence
 * @param  length The length of the array you want to get
 * @returns The Array with the first N numbers of the Fibonacci Sequence
 */
export function fibonacciSequence(length: number): Promise<number[]> {
  return Promise.resolve(fibonacciSequenceSync(length));
}

/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fibonacciSync(n: number): number {
  if (n < 0) {
    throw new Error(`Expected a number bigger than zero, but got ${n}.`);
  }

  if (fibonacciSync.cache[n] === undefined) {
    fibonacciSync.cache[n] = fibonacciSync(n - 1) + fibonacciSync(n - 2);
  }

  return fibonacciSync.cache[n];
}

fibonacciSync.cache = [0, 1, 1];

/**
 * Return an Array with the first N numbers of the Fibonacci Sequence
 * @param  length The length of the array you want to get
 * @returns The Array with the first N numbers of the Fibonacci Sequence
 */
export function fibonacciSequenceSync(length: number): number[] {
  const sequence = [];

  for (let i = 0; i < length; i++) {
    sequence[i] = fibonacciSync(i);
  }

  return sequence;
}
