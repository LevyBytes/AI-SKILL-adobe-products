# isBoxChecked

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Reports whether the named widget is currently in a checked state.

Note

When a radio-button group carries unique export values across its widgets, reading the value gives back the export value of whichever widget is checked at the moment — or an empty string when none is checked.

Parameters

| Parameter | Description |
| --- | --- |
| nWidget | Identifies, by 0-based index, one radio button or check box widget belonging to this field. That index follows the creation sequence of the field's individual widgets and ignores tab-order entirely. In the Fields panel, each listing carries a matching suffix, for example, MyField #0. |

Returns

true when that widget is checked right now; otherwise false.

Example: check the check box's state and surface the result through an alert box.

```javascript
var f = this.getField("ChkBox");
var cbStatus = (f.isBoxChecked(0)) ? " " : " not ";
app.alert("The box is" + cbStatus + "checked");
```
