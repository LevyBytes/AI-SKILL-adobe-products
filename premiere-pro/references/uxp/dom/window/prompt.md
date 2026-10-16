# window.prompt()

**Returns**: `string` - text the user enters in the prompt field, or the default value when no entry is supplied.  
**Since**: v7.0.0

Shows a Prompt message dialog and leaves the application in a modal state, but it **does not block** the Javascript thread; events in the main loop can still be processed.

Unlike standard prompts, UXP does not pause javascript execution until the dialog is dismissed.

UXP also supports these additional simple alerts:

1. [confirm()](confirm.md)
2. [alert()](alert.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Text string shown to the user. |
| prompt | `string` | Initial field value. |

**Example**

```javascript
// Below prompt function has 2 params
// "Enter your name: " - Message to display
// "Adobe" - Default value that will be present in the Prompt pop-up at launch
prompt("Enter your name: ", "Adobe");
```

** Note: **

1. In UXP v7.4 and later, `plugin` code may call `prompt()` only when the Manifest v5 featureFlags include `enableAlerts`; use this configuration:

```json
{
  "featureFlags": {
    "enableAlerts": true
  }
}
```

2. Starting with UXP v7.4, `scripts` cannot use `prompt()`.
