# buttonGetIcon

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Reads back the Icon object of a given type that belongs to a button.

For assigning an icon to a button, see the buttonSetIcon method as well.

Parameters

| Parameter | Description |
| --- | --- |
| nFace | (optional) When given, fetches an icon of the stated type:<br><br>0: (default) normal icon<br><br>1: down icon<br><br>2: rollover icon |

Returns

The Icon object.

Example:

```javascript
// Swap two button icons.
var f = this.getField("Button1");
var g = this.getField("Button2");
var temp = f.buttonGetIcon();
f.buttonSetIcon(g.buttonGetIcon());
g.buttonSetIcon(temp);
```

See also buttonSetIcon and buttonImportIcon.
