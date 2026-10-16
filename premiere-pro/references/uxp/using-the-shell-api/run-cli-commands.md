# Run CLI commands

A plugin can use `shell.openPath()` to run CLI commands directly, including AppleScripts or shell scripts. This pattern has limitations: arguments cannot be passed, and command output cannot be captured.

Run each alternative separately in an async handler with the required launch-process permissions.

```js
const { shell } = require("uxp");
const result = await shell.openPath(
  // external command
  "/bin/ls", // command path without arguments
  "Running the ls command", // an empty string indicates success
);

```

This separate example fails because arguments are not supported:

```js
const { shell } = require("uxp");
const result = await shell.openPath(
  // external command + argument
  "/bin/ls -la", // invalid path: arguments are not supported
  "Running the ls -la command",
);
```
