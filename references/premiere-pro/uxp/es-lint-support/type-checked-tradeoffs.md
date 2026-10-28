# Type-checked tradeoffs

**Pros:** Premiere API checks become stronger and type-accurate; pattern-matching false positives drop; helper-wrapped actions are handled better.

**Cons:** The setup needs TypeScript, `typescript-eslint`, and a valid `tsconfig`; typed lint runs take longer than syntax-only linting.
