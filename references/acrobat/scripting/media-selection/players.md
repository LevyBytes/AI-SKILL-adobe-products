# players

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of String | R |

A string array naming the media players eligible to play MediaSelection.rendition. When no playable rendition turns up, both the players and rendition properties come back null.

Example: enumerate which players can handle the chosen rendition. The snippet that follows presumes it runs as a Rendition action.

```javascript
var selection = event.action.rendition.select();
for ( var o in selection.players )
    console.println( selection.players[o].id );
```
