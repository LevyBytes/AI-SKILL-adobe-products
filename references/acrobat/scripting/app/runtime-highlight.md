# runtimeHighlight

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | Acrobat Pro only | Boolean | R/W |

When true, form fields display their background color and their hover color.

Example: If run-time highlighting is off (false), do nothing, otherwise change the preferences.

```javascript
if (!app.runtimeHighlight)
{
    app.runtimeHighlight = true;
    app.runtimeHighlightColor = color.red;
}
```
