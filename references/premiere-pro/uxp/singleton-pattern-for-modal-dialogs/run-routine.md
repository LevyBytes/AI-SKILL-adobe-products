# `#runRoutine()`

This private method is where **any Host Application DOM operations** would run using the collected parameters. The call is error-aware: returning `true` signals success, while any other return value is thrown again by `runDialog()` so the caller can handle it. That layering reports failures from validation, cancellation, or routine execution.
