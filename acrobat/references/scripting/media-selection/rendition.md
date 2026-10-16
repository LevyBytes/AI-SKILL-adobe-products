# rendition

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Rendition object | R |

Holds the chosen rendition, or null when none could be played.

Example: read off the chosen rendition's name. Fire this script from a Rendition action event.

```javascript
var selection = event.action.rendition.select();
console.println( "Preparing to play " + selection.rendition.uiName);
```
