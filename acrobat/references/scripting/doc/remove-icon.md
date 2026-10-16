# removeIcon

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Strips the named icon out of the document.

Worth consulting as well: icons, addIcon, getIcon, and importIcon, the Field object methods buttonGetIcon, buttonImportIcon, and buttonSetIcon, plus the Icon object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name of the icon to remove. |

An icon's name is a property carried by the Icon object. The name comes either from importIcon, as the icon file enters the document, or from addIcon, which names an icon sitting outside the document-level named icons tree.

Example: Clear every named icon out of the document.

```javascript
for ( var i = 0; i < this.icons.length; i++)
    this.removeIcon(this.icons[i].name);
```
