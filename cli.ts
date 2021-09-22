import { parse } from "https://deno.land/std/flags/mod.ts";

import { fibonacci, fibonacciSequence } from "./mod.ts";

function Exec() {
  const { number, sequence } = parse(Deno.args);

  if (number && sequence) {
    console.log("You can't use number and sequence flag at the same time!");
    return;
  }

  if (number) {
    console.log(fibonacci(number));
    return;
  }

  if (sequence) {
    console.log(fibonacciSequence(sequence));
    return;
  }
}

if (import.meta.main) {
  Exec();
}
