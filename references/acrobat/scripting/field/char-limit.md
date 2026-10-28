# charLimit

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | Integer | R/W |

Caps how many characters a user is allowed to enter into a text field.

To catch the moment the character cap is hit, see event. fieldFull.

Fields

text

Example: cap how many characters a field will accept.

```javascript
var f = this.getField("myText");
f.charLimit = 20;
```
