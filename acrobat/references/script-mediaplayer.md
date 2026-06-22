# Mediaplayer, Mediareject, Mediaselection

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: MediaPlayer; MediaReject; MediaSelection.

## MediaPlayer

### Media and Marker APIs — MediaPlayer

Think of a MediaPlayer object as one live instance of a multimedia player — QuickTime, Windows Media Player, and the like. Through its settings and events properties you drive that player from JavaScript and respond to whatever events it fires. No MediaPlayer lives inside the PDF; it is a short-lived object built in memory only when something needs it.

### MediaPlayer properties

### annot

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

ScreenAnnot object

R/W

| --- | --- | --- | --- | --- | --- |

Points at the screen annotation tied to a MediaPlayer. Only a MediaPlayer joined to a screen annotation carries this property. What populates it is app.media. addStockEvents, or any method that reaches addStockEvents on your behalf, such as app.media. openPlayer .

### defaultSize

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

Gives back a read-only object holding the width and height of the MediaClip belonging to this MediaPlayer:

```
{ width: number, height: number }
```

Should the player be unable to supply that figure, the value is undefined.

### doc

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

Points at the Doc that owns the MediaPlayer.

### events

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Events object

R/W

| --- | --- | --- | --- | --- | --- |

Carries an Events object that bundles the EventListeners bound to a MediaPlayer. The events object topic covers the specifics.

Example: build a media player and then adjust its events. Run this as a Rendition action that has a rendition attached.

```
var events = new app.media.Events;
var player = app.media.createPlayer();
player.events.add({
    onReady: function() { console.println("The player is ready"); }
});
player.open();
```

### hasFocus

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Reads true once the media player is open and currently holds keyboard focus.

### id

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Identifies the player software backing this player. Until the player opens, it stays undefined. The same identifier shows up as PlayerInfo.id for whichever media player software implements this player.

Example: send the player ID out to the console.

```
// Assume args has been defined
var player = app.media.openPlayer( args )
console.println("player.id = " + player.id);
// In the console, this script could possibly print...
player.id = vnd.adobe.swname:ADBE_MCI
```

### innerRect

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array

R/W

| --- | --- | --- | --- | --- | --- |

A rectangle array describing the player's inner rectangle. Like the other such arrays in JavaScript, its coordinates run [left, top, right, bottom]. Window titles and similar edge gadgets fall outside this rectangle, yet the player controller, when shown, sits inside it. While the player stays closed, the value is undefined.

With a docked media player, that rectangle lives in device space and is read-only — assigning to it throws an exception. To make a docked player resize, call triggerGetRect instead. A floating media player gives its rectangle in screen coordinates and lets you write to it, but the user's security settings can override whatever you assign. Push a floating media player offscreen, say, and it can be shoved back into view; no exception results. Read the property back after assigning it to learn whether your value survived.

See also outerRect.

### isOpen

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Reads true while the media player is open at the moment. To open or close one, reach for MediaPlayer.open and MediaPlayer.close.

### isPlaying

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R

| --- | --- | --- | --- | --- | --- |

Reads true while the media plays right now. Any other condition — player closed, or media paused, stopped, fast forwarding, rewinding, or otherwise — yields false.

### markers

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Markers Object

R

| --- | --- | --- | --- | --- | --- |

Gathers every marker the current media exposes.

Turn to the Markers object topic for the full account of this property.

Example: usage is illustrated under seek.

### outerRect

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array

R/W

| --- | --- | --- | --- | --- | --- |

A rectangle array describing the player's outer rectangle. As with the other arrays of this kind in JavaScript for Acrobat, the order is [ left, top, right, bottom ]. Everything ringing the player's edges — controller, window title, and similar gadgets — falls within this rectangle. Until the player opens, the value is undefined.

With a docked media player, that rectangle sits in device space and is read-only. Trying to set it throws an exception. To resize a docked player, call MediaPlayer.triggerGetRect instead. A floating media player reports its rectangle in screen coordinates and accepts writes, though the user's security settings can override whatever you assign. Move a floating media player offscreen, for instance, and it can be forced back into view; no exception results. Read the property after writing it to check whether your value was overridden.

See also innerRect.

### page

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Number

R/W

| --- | --- | --- | --- | --- | --- |

Tells which page hosts a docked media player. For players that are not docked, it stays undefined. Reassign a docked player's page property to relocate it onto a different page, and that change fires a GetRect (see onGetRect) event.

Example: run a media clip on page 1 (base zero), positioning the media player there exactly where the page 0 screen annotation sits.

```
var player = app.media.openPlayer({
        rendition: this.media.getRendition( "myClip" ),
        annot: this.media.getAnnot({ nPage:0, cAnnotTitle:"myScreen" }),
        settings: { windowType: app.media.windowType.docked }
    });
player.page = 1;
```

See onGetRect and triggerGetRect for variations on this example.

### settings

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

MediaSettings object

R/W

| --- | --- | --- | --- | --- | --- |

Carries the full set of settings used to build a MediaPlayer. The MediaSettings object topic lists them all.

Note

Under Acrobat 6.0, editing a property in MediaPlayer.settings once the player exists accomplishes nothing. A later release may make these settings live. To stay safe across both current and future releases, refrain from touching any settings properties while a player is open.

### uiSize

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

An array giving the controller's size along each edge of the player, ordered as a window rectangle is: [ left, top, right, bottom ]. Each entry is ordinarily zero or some positive value. Window gadgets like title bars are not counted in these figures.

You cannot read this property before the Ready event fires (see onReady and afterReady). Against the habit of most MediaPlayer properties, reading it inside an on event method such as onReady is allowed.

Example: read back the player's uiSize. Trigger this code from a Rendition action event.

```
var args = {
    events: {
        onReady: function () {
            console.println("uiSize = " + player.uiSize );
        }
    }
};
var player = app.media.openPlayer(args);
```

### visible

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

A Boolean that governs the player's visibility. In contrast to MediaPlayer.settings.visible, changes to this property apply at once. When the player is closed, reading it returns undefined and writing it throws an exception.

Writing this property can fire events of its own. Take a visible, focused player: turning it invisible fires a Blur event.

Example: sound the video clip's audio track and nothing else

```
// Assume a definition of args
var player = app.media.openPlayer(args);
player.visible = false;
```

### MediaPlayer methods

close

play

stop

open

seek

triggerGetRect

pause

setFocus

where

| --- | --- | --- |

### close

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Shuts the media player when it is open. When it is already closed, the call does nothing and raises no error.

Feed eReason one of the values from the app.media.closeReason enumeration. From there the value carries through into event.media.closeReason, read by the Close event (see onClose and afterClose) that closing sets off.

When the player holds keyboard focus, a Blur event (onBlur or afterBlur) arrives before the Close event. The specific media player may also raise others — Status (onStatus or afterStatus), Stop (onStop or afterStop), and the like.

Parameters

Parameter

Description

eReason

A value taken from the app.media.closeReason enumeration.

| --- | --- |

### open

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Tries to open the media player along the lines laid out in MediaPlayer.settings. An exception is thrown when the player is already open. Once a player has been opened and then closed, calling open reopens it. The same JavaScript object carries over, yet a fresh instance of the real media player launches. As one consequence, the new player does not retain the old player's playback position.

When a docked player opens, a GetRect event (onGetRect) fires.

Should MediaPlayer.settings.autoPlay be true (its default), playback starts and a Play event (onPlay or afterPlay) fires.

Calling open can raise a security prompt dialog box, subject to the user's settings. It can likewise fire events in other objects, among them other media players and screen annotations. Where another media player holds keyboard focus, for instance, that player gets a Blur event (onBlur or afterBlur).

Set bAllowSecurityUI to false and open never shows a security prompt; it hands back a failure code instead.

A floating-window media player draws extra security checks against the user's settings. The user might insist, say, that every floating player window wear a title bar. When MediaPlayer.settings.floating holds options the user forbids, bAllowFloatOptionsFallback decides the result. Set to false, it blocks playback and returns an error code. Set to true, the options inside MediaPlayer.settings.floating are adjusted enough to satisfy the user's security settings, and open carries on using those adjusted settings.

What open returns is an object holding a single property today, code, a result code from the app.media.openCode enumeration. Open your PDF in some later Acrobat version and this object may gain extra properties, or that version may add a fresh code value. Handle any such values gracefully.

Parameters

Parameter

Description

bAllowSecurityUI

Optional; defaults to true. Refer to the explanation of this parameter above.

bAllowFloatOptionsFallback

Optional, true by default. Its behavior is covered in the discussion above.

| --- | --- |

Returns

An object with a code property

Example: createPlayer carries a worked illustration.

### pause

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Halts playback of the current media and fires a Pause event (onPause or afterPause). That Pause event may land during the pause call or later on, according to the player.

When the media is already paused or stopped, or playback has yet to begin or has finished, pause does nothing. Pause is not supported by every media player and media format; streaming formats in particular usually lack it. In those cases players either throw an exception or quietly disregard pause.

Example: seek demonstrates this in context.

### play

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Begins playback of the current media and fires a Play event (onPlay or afterPlay). That Play event may land during the play call or later on, according to the player.

Media that is already playing keeps going, firing no event. From a paused, rewinding, or fast-forwarding state it picks up at the current position. From a stopped state — at either end of the media — it starts over from the beginning.

Example: refer to Example 2 following :ref:`seek.

### seek

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Moves the current media's playback location to the spot the MediaOffset object in oMediaOffset describes.

Media that is playing keeps playing from the new spot. Media that is paused jumps to the new spot and stays paused there. For stopped media, the outcome depends on the player.

Seek errors get handled differently from one media player to the next. Some swallow the error while others throw a JavaScript exception.

A Seek event (onSeek or afterSeek) fires on most — though not all — media players once a seek finishes.

Seeking may happen while the seek method runs or sometime after, according to the player. Where seek returns before the seek finishes and you invoke another player method in the meantime, the outcome depends on the player.

Parameters

Parameter

Description

oMediaOffset

A MediaOffset object whose properties spell out the playback location to set.

| --- | --- |

Example 1:

```
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

```
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

```
try { randomQuote() } catch(e) {}
```

### setFocus

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands keyboard focus to the media player and fires a Focus event (onFocus or afterFocus). When some other player or PDF object holds focus, that object gets a Blur event (onBlur or afterBlur). When the media player already holds focus, nothing happens. An exception is thrown if the player is closed or not visible.

Example: look to createPlayer for a usage sample.

### stop

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Ends playback of the current media, whenever it is playing or paused, and fires a Stop event (onStop or afterStop). That Stop event may land while the stop method runs or later on, according to the player. When the media is neither playing nor paused, it does nothing.

An exception is thrown when the player is closed.

Once playback ends, the player parks the media position at either the start or the end of media, according to the player. Calling MediaPlayer.play afterward begins playback from the start of media.

### triggerGetRect

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Fires a GetRect event (see onGetRect) so that a docked media player gets resized.

Example: This example resembles the one trailing onGetRect. Page 0 holds a row of (thumbnail-size) ScreenAnnots. What follows is a representative Rendition action or mouse-up button JavaScript action; running it resizes the media clip and plays it.

```
var rendition = this.media.getRendition("Clip1");
var annot = this.media.getAnnot({ nPage:0,cAnnotTitle:"ScreenClip1" });
var player = app.media.openPlayer({
    rendition: rendition,
    annot: annot,
    settings: { windowType: app.media.windowType.docked },
    events: {
        onGetRect: function (e) {
            var width = e.media.rect[2] - e.media.rect[0];
            var height = e.media.rect[3] - e.media.rect[1];
            width *= 3; // Triple width and height
            height *= 3;
            e.media.rect[0] = 36; // Move left,upper to
            e.media.rect[1] = 36; // upper left-hand corner
            e.media.rect[2] = e.media.rect[0]+width;
            e.media.rect[3] = e.media.rect[1]+height;
            return e.media.rect; // Return this
        }
    }
});
player.triggerGetRect(); // trigger the onGetRec event
```

### where

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Hands back the current media's playback location as a MediaOffset object. Whether that object carries a time or a frame property hinges on the media player and the media type.

An exception is thrown when the player is closed or when the player has no support for where.

Returns

MediaOffset object

Example: fetch where playback stands, measured in seconds.

```
// This code assumes that the player supports where() using time.
var where = player.where();
var seconds = where.time;
```

Pull the current chapter (marker).

```
var marker = player.markers.get({ time: seconds });
var name = marker ? marker.name : "no marker";
```

## MediaReject

### Media and Marker APIs — MediaReject

A MediaReject reports on a Rendition that a Rendition.select call turned down. Alongside a pointer back to that original Rendition, it carries the reason for the rejection. Within a MediaSelection object that select hands back, MediaSelection.rejects holds an array of these MediaReject objects.

### MediaReject properties

### rendition

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Rendition object

R

| --- | --- | --- | --- | --- | --- |

Points back at the Rendition that a select call turned down.

Example

Compile the renditions that were turned down. This runs as a Rendition action.

```
selection = event.action.rendition.select(true);
for ( var i=0; i<selection.rejects.length; i++)
    console.println("Rejected Renditions: "

         + selection.rejects[i].rendition.uiName);

// Now play the first available rendition.
console.println( "Preparing to play " + selection.rendition.uiName);
var settings = selection.rendition.getPlaySettings();
var args = {
    rendition: selection.rendition,
    annot: this.media.getAnnot({ nPage: 0, cAnnotTitle: "myScreen" }),
    settings: settings
};
app.media.openPlayer(args);
```

## MediaSelection

### Media and Marker APIs — MediaSelection

Calling Rendition.select hands back a MediaSelection object, which you can then use to build a MediaSettings object for playback.

### MediaSelection properties

### selectContext

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

A value you can lean on to build a loop that calls Rendition.select over and over, running a custom selection against whatever criteria your JavaScript code can test.

Example: a reusable pattern that drives selectContext.

```
function MyTestSelection( selection )
{
    // This function should test the selection as you wish and return
    // true to use it or false to reject it and try another one.
}
function MyGetSelection( rendition )
{
    var selection;
    for( selection = rendition.select(); selection;
        selection = rendition.select
            ({ oContext: selection.selectContext }))
    {
        if( MyTestSelection( selection ) )
            break;
    }
    return selection;
}
```

### players

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array of String

R

| --- | --- | --- | --- | --- | --- |

A string array naming the media players eligible to play MediaSelection.rendition. When no playable rendition turns up, both the players and rendition properties come back null.

Example: enumerate which players can handle the chosen rendition. The snippet that follows presumes it runs as a Rendition action.

```
var selection = event.action.rendition.select();
for ( var o in selection.players )
    console.println( selection.players[o].id );
```

### rejects

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array of MediaReject objects

R

| --- | --- | --- | --- | --- | --- |

An array of MediaReject objects — the Renditions that the Rendition.select call behind this MediaSelection turned down. Consult the MediaReject object topic for the details.

Example: See Rendition

### rendition

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Rendition object

R

| --- | --- | --- | --- | --- | --- |

Holds the chosen rendition, or null when none could be played.

Example: read off the chosen rendition's name. Fire this script from a Rendition action event.

```
var selection = event.action.rendition.select();
console.println( "Preparing to play " + selection.rendition.uiName);
```
