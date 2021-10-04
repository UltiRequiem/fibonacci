# Fibonacci

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/fibonacci-deno?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/fibonacci-deno/workflows/CodeQL/badge.svg)

Port of [fibonacci-go](https://github.com/UltiRequiem/fibonacci) for
[Deno](https://deno.land).

> Utilities for the Fibonacci Number and Sequence.

You can get this package by [nest.land](https://nest.land/package/fibonacci) or
[deno.land](https://deno.land/x/fibonacci).

## Usage

This package exposes six functions,
[fibonacci](https://github.com/UltiRequiem/fibonacci-deno/blob/main/src/iterative.ts#L6),
[fibonacciIterativeSync](https://github.com/UltiRequiem/fibonacci-deno/blob/main/src/iterative.ts#L15),
[fibonacciRecursive](https://github.com/UltiRequiem/fibonacci-deno/blob/main/src/recursion.ts#L6),
[fibonacciRecursiveSync](https://github.com/UltiRequiem/fibonacci-deno/blob/main/src/recursion.ts#L15),
[fibonacciSequence](https://github.com/UltiRequiem/fibonacci-deno/blob/main/src/sequence.ts#L8) and
[fibonacciSequenceSync](https://github.com/UltiRequiem/fibonacci-deno/blob/main/src/sequence.ts#L17).

```typescript
import fibonacci, {
  fibonacciSequence,
} from "https://deno.land/x/fibonacci/mod.ts";

console.log(await fibonacci(9)); // 34
console.log(await fibonacciSequence(4)); // [ 0, 1, 1, 2]
```

### CLI Tool

This project contains a cli tool, it is made to give an example of use mainly.

#### Install it

```bash
deno install https://deno.land/x/fibonacci/cli.ts
```

For more info check [this](https://deno.land/manual/tools/script_installer).

You can also get a binary from [releases](https://github.com/UltiRequiem/deno-clear/releases/latest).

#### Usage

- If you just run the command, it will print all the commands available:

```bash
$ fibonacci

Options:
  --number    Print the Nth Fibonacci Number
  --sequence  Print an array with the first N numbers in the Fibonacci sequence
```

- Get the Nth Fibonacci Number:

```bash
$ fibonacci --number 3
2
```

- Get an Array with the first N numbers of the Fibonacci Sequence:

```bash
$ fibonacci --sequence 3
[ 0, 1, 1 ]
```

### License

[This package](https://deno.land/x/fibonacci) is licensed under the
[MIT License](./LICENSE.md).
