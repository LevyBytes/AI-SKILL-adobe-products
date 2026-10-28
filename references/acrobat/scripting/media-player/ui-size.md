# uiSize

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array | R |

An array giving the controller's size along each edge of the player, ordered as a window rectangle is: [ left, top, right, bottom ]. Each entry is ordinarily zero or some positive value. Window gadgets like title bars are not counted in these figures.

You cannot read this property before the Ready event fires (see onReady and afterReady). Against the habit of most MediaPlayer properties, reading it inside an on event method such as onReady is allowed.

Example: read back the player's uiSize. Trigger this code from a Rendition action event.

```javascript
var args = {
    events: {
        onReady: function () {
            console.println("uiSize = " + player.uiSize );
        }
    }
};
var player = app.media.openPlayer(args);
```
