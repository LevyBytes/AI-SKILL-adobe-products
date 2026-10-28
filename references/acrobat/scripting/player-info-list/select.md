# select

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a duplicate of the PlayerInfoList narrowed down to just the players satisfying the selection criteria. When nothing matches, you get an empty array back.

Parameters

| Parameter | Description |
| --- | --- |
| object | (optional) An object carrying any combination of the id, name, and version properties. You may give those properties as strings or as regular expressions. A property that is present has to match; a property left out matches every player. |

Returns

PlayerInfoList object

Example 1: Play the media clip through QuickTime.

```javascript
var playerList = app.media.getPlayers().select({ id: /quicktime/i });
// QuickTime supports palindrome, so let's try it.
var settings = { players: playerList, palindrome: true };
var player = app.media.openPlayer({ settings: settings });
```

Example 2: Pick out the Flash player by pattern-matching against its player ID.

```javascript
var player = app.media.createPlayer();
player.settings.players = app.media.getPlayers().select({ id:/flash/i});
player.open();
```
