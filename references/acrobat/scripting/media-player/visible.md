# visible

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R/W |

A Boolean that governs the player's visibility. In contrast to MediaPlayer.settings.visible, changes to this property apply at once. When the player is closed, reading it returns undefined and writing it throws an exception.

Writing this property can fire events of its own. Take a visible, focused player: turning it invisible fires a Blur event.

Example: sound the video clip's audio track and nothing else

```javascript
// Assume a definition of args
var player = app.media.openPlayer(args);
player.visible = false;
```
