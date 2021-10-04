/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fibonacciRecursive(n: number): Promise<number> {
  return Promise.resolve(fibonacciRecursiveSync(n));
}

/**
 * Recursion Version
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
