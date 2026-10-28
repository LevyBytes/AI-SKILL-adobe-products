# setAction

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All but Reader |

Attaches a JavaScript action to a bookmark.

See also the Doc addRequirement and setPageAction methods and the Field object setAction method.

Note

Whatever action this bookmark already had defined gets overwritten by this method.

Parameters

| Parameter | Description |
| --- | --- |
| cScript | Specifies the JavaScript expression to run each time the user clicks the bookmark. |

Example: Bind an action onto the bookmark sitting at the very top.

```javascript
var bm = bookmarkRoot.children[0]
bm.setAction("app.beep(0);");
```
