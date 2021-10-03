import { parse } from "https://deno.land/std/flags/mod.ts";

import fibonacci, { fibonacciSequence } from "./mod.ts";

function Exec() {
  const { number, sequence, help } = parse(Deno.args);

  if (!number && !sequence || help) {
    const helpMessage = `Options:
  --number    Print the Nth Fibonacci Number                                    
  --sequence  Print an array with the first N numbers in the Fibonacci sequence
  --help      Print this
For more help check https://github.com/UltiRequiem/fibonacci-deno`;

    console.log(helpMessage);
  }

  if (number && sequence) {
    console.log("You can't use number and sequence flag at the same time!");
  }

  if (number) {
    console.log(fibonacci(number));
  }

  if (sequence) {
    console.table(fibonacciSequence(sequence));
  }
}

if (import.meta.main) {
  Exec();
}
