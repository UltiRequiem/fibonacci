import { fibonacciIterativeSync as fibo } from "./iterative.ts";

/**
 * Return an Array with the first N numbers of the Fibonacci Sequence
 * @param  length The length of the array you want to get
 * @returns The Array with the first N numbers of the Fibonacci Sequence
 */
export function fibonacciSequence(length: number): Promise<number[]> {
  return Promise.resolve(fibonacciSequenceSync(length));
}

/**
 * Return an Array with the first N numbers of the Fibonacci Sequence
 * @param  length The length of the array you want to get
 * @returns The Array with the first N numbers of the Fibonacci Sequence
 */
export function fibonacciSequenceSync(length: number): number[] {
  const sequence = [];

  for (let i = 0; i < length; i++) {
    sequence[i] = fibo(i);
  }

  return sequence;
}
