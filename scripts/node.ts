import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node.ts";

buildPackage({
  repoName: "fibonacci",
  name: "@ultirequiem/fibonacci",
  description: "🔢 Fibonacci Succession Utilities + CLI Tool",
  homepage: "https://ulti.js.org/fibonacci",
  keywords: ["fibonacci", "math"],
  license: "MIT",
  version: "1.3.2",
});
