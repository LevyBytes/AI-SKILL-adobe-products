# id

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R |

Identifies a media player plug-in together with its associated media player. The string is neither localized nor meant for the user to see. You can feed it into the MediaPlayer.settings.players array while creating a MediaPlayer, and it also turns up in the MediaPlayer.id property once a player is open.

Example: print the details of every media player capable of “video/mpeg”.

```javascript
var playerInfoList = app.media.getPlayers("video/mpeg");

for ( var i=0; i < playerInfoList.length; i++) {
    console.println("id: " + playerInfoList[i].id)
    console.println("name: " + playerInfoList[i].name)
    console.println("version: " + playerInfoList[i].version)
}
```
