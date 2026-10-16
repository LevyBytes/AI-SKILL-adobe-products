# What the Premiere rules cover (summary)

For **Syntactic rules**, detection comes from names and AST shapes such as `create*Action()` and `addAction()`. **Type-checked rules** use TypeScript to identify real `Action` types and related APIs. Covered topics include:

- Checking that `create*Action()` is used inside `Project.lockedAccess()` or `Project.executeTransaction()`
- Checking that `addAction()` runs inside `Project.executeTransaction()`
- Blocking `async` work inside `lockedAccess()` / `executeTransaction()` callbacks
- Blocking `Action` instances that escape their lock scope
- Optional style checks (undo strings, wrapping `executeTransaction()` in `lockedAccess()`)

The [plugin README](https://github.com/adobe/eslint-plugin-premierepro/blob/main/README.md#rules) on GitHub lists the complete rule names and descriptions.
