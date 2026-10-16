# defaultIsChecked

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | All |

Sets whether the specified widget starts out checked or unchecked by default.

Note

When a radio-button group carries unique export values across its widgets, supply the export value of whichever widget should start out selected as the defaultValue (or hand it an empty string to leave every option clear by default).

Parameters

| Parameter | Description |
| --- | --- |
| nWidget | Identifies, by 0-based index, one radio button or check box widget belonging to this field. That index follows the creation sequence of the field's individual widgets and ignores tab-order entirely. In the Fields panel, each listing is tagged with a matching suffix (for example, MyField #0). |
| bIsDefaultChecked | (optional) When true — the default — the widget begins checked, such as after a field reset. Pass false to leave it cleared by default. |

Returns

true on success.

Example: flip “ChkBox” so its default state is checked, then run a reset so the field shows that default.

```javascript
var f = this.getField("ChkBox");
f.defaultIsChecked(0,true);
this.resetForm(["ChkBox"]);
```
