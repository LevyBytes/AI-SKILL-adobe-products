# color

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | Not available in Reader | Color | R/W |

Sets the color used for whatever text and divisions land in the report.

You put text into the report through writeText, and divisions (horizontal rules) through divide.

Example:

```javascript
var rep = new Report();
rep.size = 1.2;
rep.color = color.blue;
rep.writeText("Hello World!");
```
