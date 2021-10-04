export default function fibonacci(n: number): Promise<number> {
  return Promise.resolve(fiboIterativeSync(n));
}

export function fiboIterativeSync(n: number) {
  if (fiboIterativeSync.cache[n] !== undefined) {
    return fiboIterativeSync.cache[n];
  }

  let [a, b] = [0, 1];

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  fiboIterativeSync.cache[n] = a;

  return fiboIterativeSync.cache[n];
}

fiboIterativeSync.cache = [0, 1, 1];
/**
 * Return an Array with the first N numbers of the Fibonacci Sequence
 * @param  length The length of the array you want to get
 * @returns The Array with the first N numbers of the Fibonacci Sequence
 */
export function fibonacciSequence(
  length: number,
  recursive = false,
): Promise<number[]> {
  return Promise.resolve(fibonacciSequenceSync(length, recursive));
}

/**
 * Return an Array with the first N numbers of the Fibonacci Sequence
 * @param  length The length of the array you want to get
 * @returns The Array with the first N numbers of the Fibonacci Sequence
 */
export function fibonacciSequenceSync(
  length: number,
  recursive = false,
): number[] {
  const sequence = [];

  const fibo = recursive ? fibonacciRecursiveSync : fiboIterativeSync;

  for (let i = 0; i < length; i++) {
    sequence[i] = fibo(i);
  }

  return sequence;
}

/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fibonacciRecursive(n: number): Promise<number> {
  return Promise.resolve(fibonacciRecursiveSync(n));
}

/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fibonacciRecursiveSync(n: number): number {
  if (n < 0) {
    throw new Error(`Expected a number bigger than zero, but got ${n}.`);
  }

  if (fibonacciRecursiveSync.cache[n] === undefined) {
    fibonacciRecursiveSync.cache[n] = fibonacciRecursiveSync(n - 1) +
      fibonacciRecursiveSync(n - 2);
  }

  return fibonacciRecursiveSync.cache[n];
}

fibonacciRecursiveSync.cache = [0, 1, 1];
