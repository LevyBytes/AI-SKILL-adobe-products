# showUI

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R/W |

A Boolean that decides whether the media player shows its controls or hides them.

The default value is false.

Example — surface the player's controls; this code runs from a Rendition action.

```javascript
var player = app.media.createPlayer();
player.settings.showUI = true;
player.open();
```

or

```javascript
app.media.openPlayer( {settings: {showUI: true} });
```
