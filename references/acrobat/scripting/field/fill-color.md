# fillColor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | D | No | F | Array | R/W |

Sets a field's background color, which fills the field's rectangle. Values may be given as transparent, gray, RGB, or CMYK color. For how to build color arrays and how their values feed this property, see Color arrays.

Earlier editions of this spec called the property bgColor. That older name still works for backward compatibility, but relying on it is no longer recommended.

Fields

all

Example: Swap the background color of a text field — red becomes blue, and any other current color becomes yellow.

```javascript
var f = this.getField("myField");
if (color.equal(f.fillColor, color.red))
    f.fillColor = color.blue;
else
    f.fillColor = color.yellow;
```
