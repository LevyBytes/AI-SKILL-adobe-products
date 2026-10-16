# getIcon

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Fetches one particular icon object. See also the icons property, the addIcon, importIcon, and removeIcon methods, and the Field object methods buttonGetIcon, buttonImportIcon, and buttonSetIcon.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name of the icon object to obtain. |

Returns

The Icon object carrying the given name in the document, or null when no icon goes by that name.

Example: Below sits a custom keystroke script belonging to a combo box. Each item's face name in that combo box doubles as the name of one of the document's icons. Pick a different item and its matching icon shows up as the button face on the “myPictures” field.

```javascript
if (!event.willCommit) {
    var b = this.getField("myPictures");
    var i = this.getIcon(event.change);
    b.buttonSetIcon(i);
}
```

See the Field object buttonSetIcon method or a more elaborate variation on this example.
