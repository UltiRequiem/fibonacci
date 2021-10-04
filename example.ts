import fibonacci, {
  fibonacciSequence,
} from "https://deno.land/x/fibonacci@v1.2.0/mod.ts";

console.log(await fibonacci(9));
console.log(await fibonacciSequence(4));
