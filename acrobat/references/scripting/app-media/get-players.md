# getPlayers

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |


Hands back a PlayerInfoList object — an array of PlayerInfo objects standing for the media players on hand.

You can narrow the PlayerInfoList through its select method, and you can feed it into the settings.players property when building a media player by way of createPlayer.

For fuller detail, see PlayerInfoList object and PlayerInfo object.

Parameters

| Parameter | Description |
| --- | --- |
| cMimeType | (optional) An optional MIME type, "audio/wav" for instance. Leave cMimeType off and every available player is listed; name it and the list narrows to players able to handle that MIME type. |

Returns

PlayerInfoList object

Example 1: List MP3 players to the debug console.

```javascript
var mp = app.media.getPlayers("audio/mp3")
for ( var i = 0; i < mp.length; i++) {
    console.println("nmp[" + i + "] Properties");
    for ( var p in mp[i] ) console.println(p + ": " + mp[i][p]);
}
```

Example 2: Pick whatever player can handle Flash media by matching on MIME type. The snippet presumes what follows runs as a Rendition action with an associated rendition, so createPlayer needs no arguments.

```javascript
var player = app.media.createPlayer();
player.settings.players
    = app.media.getPlayers( "application/x-shockwave-flash" );
player.open();
```
