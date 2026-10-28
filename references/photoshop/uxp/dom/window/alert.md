# window.alert()

**Since**: v7.0.0

Opens an Alert message dialog and places the application in a modal state; the JavaScript thread remains **not blocking**, and events can continue through the main event loop.

Unlike the usual alert pattern, UXP does not pause JavaScript execution until the dialog is dismissed.

UXP also supports these additional simple alert APIs:

1. [confirm()](confirm.md)
2. [prompt()](prompt.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Alert-dialog text to present |

**Example**

```javascript
alert("This is alert message");
```

** Note: **

1. Starting in UXP v7.4, `plugin` code can invoke `alert()` only when the `featureFlags` entry `enableAlerts` is enabled. Add the following to Manifest v5:

```json
{
  "featureFlags": {
    "enableAlerts": true
  }
}
```

2. In UXP v7.4 and later, `scripts` cannot use `alert()`
