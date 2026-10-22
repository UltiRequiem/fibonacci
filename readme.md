# Fibonacci

[![npm](https://img.shields.io/npm/v/@ultirequiem/fibonacci?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/fibonacci)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/fibonacci?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/fibonacci)
[![CI](https://github.com/UltiRequiem/fibonacci/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/fibonacci/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/fibonacci/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/fibonacci)

Compute the
[Fibonacci Succession](https://en.wikipedia.org/wiki/Fibonacci_number) and NTH
Fibonacci Number.

## Install

```sh
npm install @ultirequiem/fibonacci
```

## Usage

The API is the same on all these platforms ✔️

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/fibonacci)

```javascript
import {
  fibonacci,
  fibonacciSequence,
} from "@ultirequiem/fibonacci";

fibonacci(10); //=> 55

fibonacci(5); //=> 5

// First 10 Fibonacci Numbers
for (const fiboNumber of fibonacciSequence(9)) {
  console.log(fiboNumber);
}

console.log(`My favorites numbers are ${[...fibonacciSequence(3)]}.`);
//=> "My favorites numbers are 0,1,1,2."
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/random-item) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/random-item)

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/fibonacci/mod.ts) 📄

## Usage Example

- [Fibonacci App](https://github.com/UltiRequiem/fibonacci-app): Preact +
  Tailwind Web App

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/fibonacci.js/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/fibonacci.js/tags) 🏷️

## Licence

Licensed under the MIT License 📄
