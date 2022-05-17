export function fibonacci(n: number) {
  if (n < 0) {
    throw new Error(`Expected a number bigger than zero, but got ${n}.`);
  }

  let [a, b] = [0, 1];

  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return a;
}
