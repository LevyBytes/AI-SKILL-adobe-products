# Using pnpm - Type-checked rules and configuration

For a **TypeScript** plugin where ESLint should analyze types, install **`typescript-eslint`** (the unified npm package named `typescript-eslint`) together with `eslint` and `@eslint/js`. Typed rules let `recommendedTypeChecked` consult the same [Premiere type definitions](../type-script-support/type-definitions.md) used by the editor, which keeps lint results tied to the actual APIs.
