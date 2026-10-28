# getOpenPlayers

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Hands back an array of MediaPlayer objects, with one entry per media player open right now. Entries sit in the array in the same sequence the players were opened. With this array in hand, you can act on some or all open players — stopping or closing every player the document opened, say, without maintaining your own list of them.

Every call to getOpenPlayers produces a fresh copy of the array, capturing the players that were open at that instant. Players opened afterward will not appear in an array you already obtained. When a player from the array is closed, its object stays in the array while player.isOpen flips to false. To pull a fresh, current player array, call doc.media.getOpenPlayers once more.

Steer clear of writing a loop that walks doc.media.getOpenPlayers directly:

Do not call `doc.media.getOpenPlayers()` repeatedly as the expression in a `for...in` loop. Capture its returned player collection once, then iterate that collection.

Rather, grab a copy of the player array first and loop across that:

Supply the operation to apply to each player as `visit`.

```javascript
function visitOpenPlayers(doc, visit) {
    var players = doc.media.getOpenPlayers();
    for (var i in players) {
        visit(players[i]);
    }
}
```

Doing it this way keeps the loop behaving properly even should players open or close while it runs.

Returns

Array of MediaPlayer objects.

Example: The pair of functions below each accept a Doc as an argument and act on the running players tied to that Doc.

```javascript
// Stop all running players.
function stopAllPlayers( doc ) {
    var players = doc.media.getOpenPlayers();
    for( var i in players ) players[i].stop();
}
// Close all running players. Closing a player does not remove it from
// the array.
function closeAllPlayers( doc ) {
    var players = doc.media.getOpenPlayers();
    for( var i in players )
        players[i].close( app.media.closeReason.general );
}
```
