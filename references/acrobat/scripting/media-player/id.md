# id

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R |

Identifies the player software backing this player. Until the player opens, it stays undefined. The same identifier shows up as PlayerInfo.id for whichever media player software implements this player.

Example: send the player ID out to the console.

The following example prints the player ID; the source’s trailing `vnd...` line is representative console output, not an assignment to execute.

```javascript
// Assume args has been defined
var player = app.media.openPlayer( args )
console.println("player.id = " + player.id);
// In the console, this script could possibly print...
```
