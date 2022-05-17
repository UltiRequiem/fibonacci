import { fibonacci } from "./mod.ts";

import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("fibonacci", () => {
  const result = fibonacci(50);

  assertEquals(result, 12586269025);
});
