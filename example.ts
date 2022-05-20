import { fibonacci, fibonacciSequence } from "./mod.ts";

console.log(fibonacci(10)); //=> 55

console.log(fibonacci(5)); //=> 5

console.log("First ten Fibonacci Numbers");

for (const fiboNumber of fibonacciSequence(9)) {
  console.log(fiboNumber);
}

console.log(`My favorites numbers are ${[...fibonacciSequence(3)]}.`);
