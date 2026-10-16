# afterScript

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |
|  |  |  |  |

Hitting a script trigger embedded in the media as it plays is what fires the Script event. The companion onScript is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, a Script event's event object carries the following as well:

| media.command | Command name |
| --- | --- |
| media.param | Command parameter string |

Whatever the media clip supplies can fill these two strings. Nothing guarantees they hold runnable JavaScript; reading and acting on them is left to the onScript or afterScript EventListener.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |

Example: What follows is a fragment from a fuller example given after MediaPlayer.seek. A famous-quotations audio clip (.wma) — one that carries both markers and scripts — supplies the media. With a marker set at the start of every quotation, the afterReady listener tallies how many there are. Each quotation also ends with an embedded command script, and the afterScript listener keeps an eye out for those: when the command says pause, it pauses the player.

```javascript
var nMarkers=0;
var events = new app.media.Events;
events.add({
    // Count the number of quotes in this audio clip, save as nMarkers
    afterReady: function() {
        var g = player.markers;
        while ( (index =  g.get( { index: nMarkers } ) ) != null )

             nMarkers++;
    },
    // Each quote should be followed by a script, if the command is to

     // pause, then pause the player.
    afterScript: function( e ) {
        if ( e.media.command == "pause" ) player.pause();
    }
});
var player = app.media.openPlayer({
    rendition: this.media.getRendition( "myQuotes" ),
    settings: { autoPlay: false },
    events: events
});
```
