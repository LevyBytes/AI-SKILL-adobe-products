# isDefaultChecked

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Reports whether the named widget starts out checked by default — for instance, once the field is reset.

Note

When a radio-button group carries unique export values across its widgets, reading the defaultValue gives back the export value of whichever widget is checked by default — or an empty string when none is.

Parameters

| Parameter | Description |
| --- | --- |
| nWidget | Identifies, by 0-based index, one radio button or check box widget belonging to this field. That index follows the creation sequence of the field's individual widgets and ignores tab-order entirely. In the Fields panel, each listing carries a matching suffix, for example, MyField #0. |

Returns

true when that widget is checked by default; otherwise false.

Example: find out whether the given check box defaults to checked.

```javascript
var f = this.getField("ChkBox");
var cbStatus = (f.isDefaultChecked(0)) ? "Checked" : "Unchecked";
app.alert("The Default: " + cbStatus);
```
