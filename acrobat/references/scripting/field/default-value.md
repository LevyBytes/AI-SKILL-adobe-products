# defaultValue

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | String | R/W |

A field's default value — the value it reverts to when the form is reset. On combo boxes and list boxes, either an export value or a user value can supply the default. A clash may arise, say, when a field carries an export value and a user value that are identical yet point to different list items; in such a case the export value is checked first.

Fields

all except button, signature

Example:

```javascript
var f = this.getField("Name");
f.defaultValue = "Enter your name here.";
```
