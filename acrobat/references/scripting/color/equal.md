# equal

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Checks a pair of Color Arrays for equality. Where it has to, the routine runs conversions so it can tell whether the two colors truly match (["RGB",1,1,0], for instance, matches ["CMYK",0,0,1,0]).

Parameters

| Parameter | Description |
| --- | --- |
| colorArray1 | The leading color array in the comparison. |
| colorArray2 | The trailing color array in the comparison. |

Returns

true if the arrays represent the same color, false otherwise.

Example:

```javascript
var f = this.getField("foo");
if (color.equal(f.textColor, f.fillColor))
    app.alert("Foreground and background color are the same!");
```
