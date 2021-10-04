/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fibonacci(n: number): Promise<number> {
  return Promise.resolve(fiboIterativeSync(n));
}

/**
 * Returns the Nth Fibonacci Number
 * @param n The Nth Fibonacci Number you want to get
 * @returns The Nth Fibonacci Number
 */
export function fiboIterativeSync(n: number) {
  if (fiboIterativeSync.cache[n] !== undefined) {
    return fiboIterativeSync.cache[n];
  }

  if (n < 0) {
    throw new Error(`Expected a number bigger than zero, but got ${n}.`);
  }

  let [a, b] = [0, 1];

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return fiboIterativeSync.cache[n] = a;
}

fiboIterativeSync.cache = [0, 1, 1];
