# Using pnpm — Development workflow

A common development cycle looks like this:

1. **Terminal** - run `npm run lint`, or connect linting to CI, before packaging the plugin or opening a PR.
2. **Editor** - enable an ESLint extension so problems appear while code is being edited.
3. **Premiere** - after fixes, and after rebuilding when a compile step exists, reload the plugin from the UXP Developer Tool.

For TypeScript plugins, use this material alongside [TypeScript support](../type-script-support/reference-index.md); the same types drive IntelliSense and type-checked ESLint rules.
