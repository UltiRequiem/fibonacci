import { fibonacci } from "./mod.ts";

import { randomNumber } from "https://deno.land/x/random_number@0.1.1/mod.ts";

Deno.bench("fibonacci", () => {
  fibonacci(randomNumber());
});
