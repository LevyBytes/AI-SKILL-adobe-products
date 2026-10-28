# cursor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | P | No | All | Number | R/W |

Governs how the pointer acts once full screen mode is on. Every legal pointer behavior is spelled out by the handy cursor object:

| Cursor Behavior | Keyword |
| --- | --- |
| Always hidden | cursor.hidden |
| Hidden after delay | cursor.delay |
| Visible | cursor.visible |

Example:

```javascript
app.fs.cursor = cursor.visible;
```
