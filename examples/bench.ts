import { fibonacci, fibonacciSequence } from "../src/index.js";

Deno.bench("fibonacci", () => {
  fibonacci(78);
});

Deno.bench("fibonacciSequence", () => {
  for (const _fibo of fibonacciSequence(78)) {
    // Pass
  }
});
