# players

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Players or Array of String | R/W |

Lists the media players capable of playing this rendition, held as an array of objects. Rather than reaching into this array on its own, JavaScript code typically forwards it straight from Rendition.select into the settings object handed to app.media.createPlayer.

Example: enumerate which players are on hand for this rendition. Run the script as a Rendition action carrying an associated rendition.

```javascript
var player = app.media.openPlayer({ settings: {autoPlay: false} });
console.println("players: " + player.settings.players.toSource() );

// Sample output to the console:
players: [{id:"vnd.adobe.swname:ADBE_MCI", rank:0},

 {id:"vnd.adobe.swname:AAPL_QuickTime", rank:0},

 {id:"vnd.adobe.swname:RNWK_RealPlayer", rank:0},

 {id:"vnd.adobe.swname:MSFT_WindowsMediaPlayer", rank:0}]
```
