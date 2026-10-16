# Errors

When recording fails, add a `.catch` to the `recordAction` call to inspect the failure.

If the dialog shows "Script action failed.",

- verify that `methodName` is reachable from the global scope of the plugin.
- try invoking the function yourself with the `info` object supplied to `recordAction`.

| Console error | Situation |
| --- | --- |
| `Unsupported napi type` | A value other than `string` was assigned to "methodName" |
| `Failed Error: Argument 2 is missing` | The `info` argument was not supplied |
