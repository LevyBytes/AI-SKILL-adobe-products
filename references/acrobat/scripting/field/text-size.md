# textSize

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | Number | R/W |

Sets the point size of the text shown across all controls. Within check box and radio button fields, that size dictates how big the check is. Sizes from 0 through 32767 are valid. Zero picks the biggest point size at which every bit of text data still fits inside the field's rectangle.

Fields

all

Example: Set "myField" to a text size of 28 points.

```javascript
this.getField("myField").textSize = 28;
```
