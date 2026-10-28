# getArray

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Retrieves, from this parent Field object, the array of its terminal child fields — meaning the ones capable of holding a value.

Returns

An array of Field objects

Example: total up the values held by the parent field's child fields.

```javascript
// f has 3 children: f.v1, f.v2, f.v3
var f = this.getField("f");
var a = f.getArray();
var v = 0.0;
for (j =0; j < a.length; j++) v += a[j].value;
// v contains the sum of all the children of field "f"
```
