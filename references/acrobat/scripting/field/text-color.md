# textColor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | D | No | F | Array | R/W |

A field's foreground color. For text, button, or list box fields it is the text color, and for check box or radio button fields it is the check color. You set its values just as you do for fillColor. For how to build color arrays and how those values get set and applied here, see Color arrays.

Earlier editions of this spec called this property fgColor. That older name still works for backward compatibility, though using it is discouraged.

Note

Setting textColor with a transparent color space raises an exception.

Fields

all

Example: Here the foreground color is set to red.

```javascript
var f = this.getField("myField");
f.textColor = color.red;
```
