# addIcon

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | All |

Registers a fresh named Icon object into the document-level icon tree, filing it under the name you give.

See also icons, getIcon, importIcon, removeIcon, and the Field object methods buttonGetIcon, buttonImportIcon, and buttonSetIcon.

Parameters

| Parameter | Description |
| --- | --- |
| cName | What to call the new object |
| icon | Which Icon object to register. |

Example: Here a button field in the document already carries an icon, and this snippet labels that icon with a name. With getIcon, that name then fetches the icon object so it can serve, say, a different button.

```javascript
var f = this.getField("myButton");
this.addIcon("myButtonIcon", f.buttonGetIcon());
```
