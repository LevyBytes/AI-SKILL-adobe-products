# Additional Notes

For playback to call the function later, `methodName` must be declared at the `global` level.

Declare the handler in the plugin’s global scope so Action playback can resolve its recorded name. Supported declaration forms include a named async function, an assignment to a globally accessible function, or a global `var` binding. Supply the complete implemented function body, as in the example below.

Avoid a `let` binding for this lookup: its lexical scope does not expose the handler as a global property.
Remember that the recorded Action step stores only the function **name**. The function body stays in the plugin's environment. Because of that, the declaration can later change, for example through a plugin update. The Action step still calls that function with the data object captured in the step.

The info argument is mandatory. Even if the function has no data to save, you still **must pass an empty object literal**, `{}`.
