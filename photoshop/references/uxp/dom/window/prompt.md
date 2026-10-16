# window.prompt()

**Returns**: `string` - text entered by the user in the prompt field, or the default value when nothing is entered.  
**Since**: v7.0.0

A Prompt message dialog appears and the application enters a modal state; the Javascript thread remains **not blocking**, and the main event loop can continue processing events.

Unlike the standard behavior, UXP does not block the javascript thread of execution while waiting for the dialog to be dismissed.

UXP also supports these additional simple alerts

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

1. Since UXP v7.4, `prompt()` is available in `plugin` only when the featureFlags `enableAlerts` setting is enabled. Use this Manifest v5 fragment:

```json
{
  "featureFlags": {
    "enableAlerts": true
  }
}
```

2. Since UXP v7.4, `prompt()` remains disabled for `scripts`
