# window.alert()

**Since**: v7.0.0

Shows an Alert message dialog and puts the application into a modal state; the JavaScript thread remains **not blocking**, so events in the main event loop can still be processed.

UXP handles this differently from the usual model, where JavaScript thread execution waits until the dialog is dismissed.

UXP also supports these additional simple alert calls:

1. [confirm()](confirm.md)
2. [prompt()](prompt.md)

| Param | Type | Description |
| --- | --- | --- |
| message | `string` | Alert dialog text to display |

**Example**

```javascript
alert("This is alert message");
```

** Note: **

1. Starting with UXP v7.4, `plugin` code may invoke `alert()` only when the featureFlags entry `enableAlerts` is enabled. Add the following to your Manifest v5

```json
{
  "featureFlags": {
    "enableAlerts": true
  }
}
```

2. Starting with UXP v7.4, `alert()` is disabled for `scripts`
