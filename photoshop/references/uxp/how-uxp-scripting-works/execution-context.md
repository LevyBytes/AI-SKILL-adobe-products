# Execution Context

When Photoshop starts a script, it creates an execution context for that invocation.

Only a single script runs inside a given execution context. A running script cannot start a second script. The UXP script module exposes `ExecutionContext` for use by scripts.

```js
const { script } = require("uxp");
const executionContext = script.executionContext;
```

This object reports information about the active script run, exposes methods for passing data to Photoshop, and supplies events for script lifecycle handling. Methods on `executionControl.hostControl` can also suspend or resume history states and automatically close documents. See the scripting [reference](../scripting-reference-script-module/reference-index.md) for more detail.
