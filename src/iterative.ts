/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fibonacciIterative(n: number): Promise<number> {
  return Promise.resolve(fibonacciIterativeSync(n));
}

/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fibonacciIterativeSync(n: number) {
  if (fibonacciIterativeSync.cache[n] !== undefined) {
    return fibonacciIterativeSync.cache[n];
  }

  if (n < 0) {
    throw new Error(`Expected a number bigger than zero, but got ${n}.`);
  }

  let [a, b] = [0, 1];

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return fibonacciIterativeSync.cache[n] = a;
}

fibonacciIterativeSync.cache = [0, 1, 1];
