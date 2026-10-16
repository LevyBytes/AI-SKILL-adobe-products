# editable

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | D | No | F | Boolean | R/W |

Sets whether a combo box can be edited. When true, the user may type a selection; when false, the user is held to one of the supplied selections.

Fields

combobox

Example:

```javascript
var f = this.getField("myComboBox");
f.editable = true;
```
