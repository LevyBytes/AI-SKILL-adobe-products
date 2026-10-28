# window.confirm()

**Returns**: `boolean` - `true` when OK button is pressed; `false` when Cancel button is pressed.  
**Since**: v7.0.0

A Confirm message dialog is shown and the application enters a modal state, while **not blocking** the Javascript thread; events can continue through the main event loop.

Unlike standard dialog behavior, UXP does not block the javascript execution thread until the dialog is dismissed.

UXP also supports these simple alert APIs

1. [alert()](alert.md)
2. [prompt()](prompt.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Confirmation dialog text. |

**Example**

```javascript
confirm("This is confirmation message");
```

** Note: **

1. As of UXP v7.4, `plugin` code may invoke `confirm()` only when featureFlags includes `enableAlerts`. Add the following to Manifest v5:

```json
{
  "featureFlags": {
    "enableAlerts": true
  }
}
```

2. As of UXP v7.4, `confirm()` is not available to `scripts`
