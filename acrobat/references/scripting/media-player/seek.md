# seek

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Moves the current media's playback location to the spot the MediaOffset object in oMediaOffset describes.

Media that is playing keeps playing from the new spot. Media that is paused jumps to the new spot and stays paused there. For stopped media, the outcome depends on the player.

Seek errors get handled differently from one media player to the next. Some swallow the error while others throw a JavaScript exception.

A Seek event (onSeek or afterSeek) fires on most — though not all — media players once a seek finishes.

Seeking may happen while the seek method runs or sometime after, according to the player. Where seek returns before the seek finishes and you invoke another player method in the meantime, the outcome depends on the player.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaOffset | A MediaOffset object whose properties spell out the playback location to set. |

Example 1:

```javascript
// Rewind the media clip
player.seek({ time: 0 });

// Play starting from marker "First"
player.seek({ marker: "First" });

// Play starting five seconds after marker "One"
player.seek({ marker: "One", time: 5 });
```

Example

Example 2:

The script below plays (famous) quotations at random. Its media is an audio clip (.wma) of famous quotations that carries markers and scripts. One marker opens each quotation, and the afterReady listener tallies them. Each quotation also closes with an embedded command script. The afterScript listener watches for those commands, and on a "pause" command it pauses the player.

```javascript
var nMarkers=0;
var events = new app.media.Events;
events.add({
    // Count the number of quotes in this audio clip, save as nMarkers
    afterReady: function()
    {
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
// Randomly choose a quotation
function randomQuote() {
    var randomMarker, randomMarkerName;
    console.println("nMarkers = " + nMarkers);
    // Randomly choose an integer between 1 and nMarkers, inclusive
    randomMarker = Math.floor(Math.random() * 100) % ( nMarkers ) + 1;
    // Indicate what quotation we are playing
    this.getField("Quote").value = "Playing quote " + randomMarker;
    // The marker names are "quote 1", "quote 2", "quote 3", etc.
    randomMarkerName = "quote " + randomMarker;
    // See the marker with the name randomMarkerName
    player.seek( { marker: randomMarkerName } );
    player.play();
}
```

Action is initiated by the mouse-up button action such as

```javascript
try { randomQuote() } catch(e) {}
```
