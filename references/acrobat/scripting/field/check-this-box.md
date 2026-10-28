# checkThisBox

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | F |

Marks or clears the specified widget.

Only check boxes can be cleared. This method won't uncheck a radio button, but when a radio button's default state is unchecked (see defaultIsChecked), the Doc's resetForm method can return it to that unchecked state.

Note

For a group of radio buttons with no duplicate export values, set the value to the export value of whichever widget should be checked — or pass an empty string to check none.

Parameters

| Parameter | Description |
| --- | --- |
| nWidget | The 0-based index of one check box or radio button widget belonging to this field. That index follows the creation order of the field's individual widgets and is unaffected by tab-order. In the Fields panel, every entry carries a suffix that gives this index, such as MyField #0. |
| bCheckIt | (optional) States whether the widget should be checked. It defaults to true. |

Example: Check a check box.

```javascript
var f = this.getField("ChkBox");
f.checkThisBox(0,true);
```
