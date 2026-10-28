# window.confirm()

**Returns**: `boolean` - `true` when OK button is pressed; `false` when Cancel button is pressed.  
**Since**: v7.0.0

Shows a Confirm message dialog that makes the application modal while **not blocking** the Javascript thread, so main-event-loop processing can continue.

UXP does not follow the standard pattern where the javascript execution thread stays blocked until the dialog is dismissed.

UXP also supports these additional simple alerts

1. [alert()](alert.md)
2. [prompt()](prompt.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Text displayed by the Confirm message dialog. |

**Example**

```javascript
confirm("This is confirmation message");
```

** Note: **

1. As of UXP v7.4, `plugin` can invoke `confirm()` only when Manifest v5 sets featureFlags `enableAlerts`. Configure Manifest v5 like this:

```json
{
  "featureFlags": {
    "enableAlerts": true
  }
}
```

2. Starting with UXP v7.4, `scripts` cannot use `confirm()`
