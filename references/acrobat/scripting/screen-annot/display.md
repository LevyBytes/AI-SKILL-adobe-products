# display

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Integer | R/W |

Behaves the same as the display property on the Field object.

The PDF file does not store this property. Any change you make lasts only for the current session.

Example: Make the annotation invisible.

```javascript
var annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
annot.display = display.hidden;
```
