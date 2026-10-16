# ESLint Support

Shows how to pair ESLint with UXP plugins for Premiere Pro.

### Overview

[ESLint](https://eslint.org/) scans source code for likely issues before a plugin is run or distributed. It can catch broad JavaScript problems such as undefined variables and suspicious patterns; shared configurations can also add team-wide style and quality policy.

For Premiere's UXP DOM APIs, many incorrect patterns fail only at runtime. Examples include using actions outside `Project.lockedAccess()` / `Project.executeTransaction()`, doing awaited work inside those callbacks, or allowing action objects to escape the lock boundary. Use [`@adobe/eslint-plugin-premierepro`](https://www.npmjs.com/package/@adobe/eslint-plugin-premierepro) to add rules for those cases so editor or CI linting can catch them earlier.

There are two rule tiers:

1. **[Syntactic rules](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/eslint-support/index.md#syntactic-rules-and-configuration)** — pattern-matching rules that do not need TypeScript's type checker. They support **plain JavaScript** projects as well as **TypeScript** projects.
2. **[Type-checked rules](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/eslint-support/index.md#type-checked-rules-and-configuration)** — rules backed by [typed linting](https://typescript-eslint.io/getting-started/typed-linting/) (`typescript-eslint`, a `tsconfig`, and types from [`@adobe/premierepro`](premiere-pro-dom-apis/reference-index.md)). With actual Premiere types, they reduce false positives and cover patterns, such as helper indirection, that syntax-only checks may not see reliably.

Use **syntactic** configs when typed ESLint is not part of the project. Use **type-checked** configs when TypeScript and `typescript-eslint` are already configured.
