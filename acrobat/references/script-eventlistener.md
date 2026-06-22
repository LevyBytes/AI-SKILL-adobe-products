# Eventlistener (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — EventListener

What you have here is a set of multimedia event methods bundled with optional local data. The names of these event methods open with on or after, trailed by the event name — onPause or afterPause, for example. As an event gets dispatched, the matching on event methods run right away while the matching after event methods run a little later, at the next idle moment.

on event methods carry a few constraints:

A MediaPlayer object's on event method may not invoke any of that MediaPlayer's methods, nor any other Acrobat method that might end up triggering one of the MediaPlayer's methods indirectly. To illustrate, an on method must steer clear of closing the document, saving it, switching the active page, shifting the focus, or anything else that could eventually reach a MediaPlayer method.

Reentry into an on event method is not permitted.

Free of those constraints, after event methods prove more flexible for most needs. Lean on an on event method only where the event has to be handled synchronously, as with an onGetRect method.

Within an event method, this refers to the EventListener object. You will find the document in event.media.doc and the event target (MediaPlayer or ScreenAnnot) in event.target.

Dispatching gets its EventListener objects installed by Events.add, an event reaches the matching event methods through Events.dispatch, and EventListener objects come off the dispatch table via Events.remove.

Example: Two approaches set up onPlay and afterPlay listeners. As each runs, it logs a note back to the console.

```
// Create a simple MediaEvents object
var events = new app.media.Events
({
    // Called immediately during a Play event:
    onPlay: function() { console.println( "onPlay" ); },

    // Called during idle time after the Play event:
    afterPlay: function() { console.println( "afterPlay" ); },
});
var player = app.media.createPlayer({events: events});
player.events.add({
    afterPlay: function( e ) {
        app.alert("Playback started, doc.URL = " + e.media.doc.URL );
    }
});
player.open();
```

### EventListener methods

Everything listed here pertains specifically to multimedia.

On top of these events, a screen annotation can take the standard events found elsewhere across Acrobat (Destroy, Mouse Up, Mouse Down, Mouse Enter, Mouse Exit, Page Open, Page Close, Page Visible, Page Invisible, Focus, and Blur). Turn to the event object for particulars on those events.

### afterBlur

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

A Blur event fires once a MediaPlayer or screen annotation gives up the keyboard focus it previously had. See also onBlur (EventListener spells out how on and after event methods differ).

Parameters

Parameter

Description

oMediaEvent

An event object handed to this EventListener automatically.

| --- | --- |

Example: The script below runs as a Rendition action. The user clicks the screen annotation to open the movie clip without playing it. A click outside the screen annotation (a Blur event) starts the movie. A click on the screen annotation (a Focus event) while the movie runs pauses it. The user clicks outside the screen annotation once more to resume.

```
var playerEvents = new app.media.Events
({
    afterBlur: function () { player.play(); },
    afterFocus: function () { player.pause(); }
});
var settings = { autoPlay: false };
var args = { settings: settings, events: playerEvents};
var player = app.media.openPlayer(args);
```

See also afterFocus.

### afterClose

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

A Close event fires whenever a media player shuts down for any reason. See also onClose (EventListener spells out how on and after event methods differ).

Before launching another media player out of the Close event, check doc.media.canPlay first to confirm playback is permitted. Playback might be barred, for one, because the document is in the middle of closing.

A Close event's event object brings these properties along on top of the standard event properties:

Parameter

Description

media.closeReason

Why the player was closed, from app.media.closeReason.

media.hadFocus

Whether focus rested on the player at the moment it closed.

| --- | --- |

Should a player close while holding the focus, a Blur event reaches it first and the Close event follows. Within the Close event, media.hadFocus tells you whether the player held the focus prior to closing.

By the time the afterClose event method runs, the MediaPlayer is already gone and its JavaScript object is dead.

Parameters

Parameter

Description

oMediaEvent

An event object handed to this EventListener automatically.

| --- | --- |

Example: See onClose for a representative example.

### afterDestroy

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

A Destroy event fires whenever a screen annotation is destroyed.

By the time the afterDestroy event method runs, the screen annotation is already gone from the document and its JavaScript object is dead.

See also onDestroy (EventListener spells out how on and after event methods differ).

Parameters

Parameter

Description

oMediaEvent

An event object handed to this EventListener automatically.

| --- | --- |

### afterDone

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

A Done event fires the moment media playback hits the end of the media.

See also onDone (EventListener spells out how on and after event methods differ).

Parameters

Parameter

Description

oMediaEvent

An event object handed to this EventListener automatically.

| --- | --- |

### afterError

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

An Error event fires whenever something goes wrong inside a MediaPlayer. See also onError (EventListener spells out how on and after event methods differ).

An Error event's event object brings these properties along on top of the standard event properties:

media.code

Status code value.

media.serious

True for serious errors, false for warnings.

media.text

Error message text.

| --- | --- |

Parameters

Parameter

Description

oMediaEvent

An event object handed to this EventListener automatically.

| --- | --- |

### afterEscape

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

An Escape event fires once the user hits the Escape key while a MediaPlayer is open and holds the keyboard focus. A MediaPlayer can take an Escape event ahead of receiving the Ready event.

See also onEscape (EventListener spells out how on and after event methods differ).

Parameters

Parameter

Description

oMediaEvent

An event object handed to this EventListener automatically.

| --- | --- |

### afterEveryEvent

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

When an Events object holds an onEveryEvent or afterEveryEvent property, its EventListener methods run for every event instead of one in particular. (EventListener spells out how on and after event methods differ).

The EventListener functions sitting in an onEveryEvent or afterEveryEvent property run ahead of any listener functions that name the specific event.

Parameters

Parameter

Description

oMediaEvent

An event object handed to this EventListener automatically.

| --- | --- |

Example: Let onEveryEvent, afterEveryEvent, onPlay and afterPlay each log back to the console.

```
var events = new app.media.Events(
{
    // This is called immediately at the start of every event:
    onEveryEvent: function( e )
    { console.println( 'onEveryEvent, event = ' + e.name ); },

    // This is called during a Play event, after onEveryEvent is

     // called:
    onPlay: function() { console.println( "onPlay" ); },

// This is called for every event, but later during idle time:
    afterEveryEvent: function( e )
    { console.println( "afterEveryEvent, event = " + e.name ); },

    // This is called during idle time after a Play event,
    // and after afterEveryEvent is called:
    afterPlay: function() { console.println( "afterPlay" ); },
});
```

### afterFocus

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |

Keyboard focus landing on a screen annotation or a MediaPlayer is what fires the Focus event. The companion onFocus is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

|  |  |
| --- | --- |
|  |  |

Example: See afterBlur for an example of usage.

### afterPause

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |

Whenever playback is suspended — be it a viewer action or a call to the pause method — the Pause event fires. The companion onPause is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

|  |  |
| --- | --- |
|  |  |

### afterPlay

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |

When playback begins or picks back up — whether a viewer triggers it or the play method is invoked — the Play event fires. The companion onPlay is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

|  |  |
| --- | --- |
|  |  |

### afterReady

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |

Once a freshly created MediaPlayer becomes usable, the Ready event fires. The companion onReady is documented too; EventListener spells out how the on- and after- forms differ.

A MediaPlayer object will reject most of its method calls right up until the Ready event has fired.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

|  |  |
| --- | --- |
|  |  |

See afterScript, below, Markers. get and the MediaOffset object.

Example: Several media clips are driven by this document-level script. Every screen annotation gets its own media player opened through OpenPlayer, and the afterReady script reports back to Multiplayer the moment that player is ready.

```
// Parameters: doc, page, rendition/annot name, mulitPlayer instance
function OnePlayer( doc, page, name, multiPlayer )
{
    var player = app.media.openPlayer({
        annot: doc.media.getAnnot(
            { nPage: page, cAnnotTitle: name }),
        rendition: doc.media.getRendition( name ),
        settings: { autoPlay: false },
        events: {
            afterReady: function( e ) {
            multiPlayer.afterReady( player );
            },
        }
    });
    return player;
}
// Parameters: doc, page, list of rendition/annot names
function MultiPlayer( doc, page )
{
    var nPlayersCueing = 0;  // number of players cueing up
    var players = [];       // the SinglePlayers

    this.afterReady = function( player ) {
        if( ! player.didAfterReady ) {
            player.didAfterReady = true;
            nPlayersCueing--;
            if( nPlayersCueing == 0 ) this.play();
        }
    }
    this.play = function() {
        for( var i = 0;  i < players.length;  i++ ) players[i].play();
    }
    for( var i = 2;  i < arguments.length;  i++ ) {
        players[i-2] = new OnePlayer(doc,page,arguments[i],this );
        nPlayersCueing++;
    }
}
```

To play several media clips at once, run the code below — say, from a form button's mouse-up action.

```
var myMultiPlayer = new MultiPlayer( this, 0, "Clip1", "Clip2" );
```

See afterScript for another example of afterReady.

### afterScript

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |

Hitting a script trigger embedded in the media as it plays is what fires the Script event. The companion onScript is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, a Script event's event object carries the following as well:

media.command

Command name

media.param

Command parameter string

| --- | --- |

Whatever the media clip supplies can fill these two strings. Nothing guarantees they hold runnable JavaScript; reading and acting on them is left to the onScript or afterScript EventListener.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

Example: What follows is a fragment from a fuller example given after MediaPlayer.seek. A famous-quotations audio clip (.wma) — one that carries both markers and scripts — supplies the media. With a marker set at the start of every quotation, the afterReady listener tallies how many there are. Each quotation also ends with an embedded command script, and the afterScript listener keeps an eye out for those: when the command says pause, it pauses the player.

```
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

### afterSeek

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Once a seek call brings a MediaPlayer to rest at its requested playback offset, the Seek event fires. The companion onSeek is documented too; EventListener spells out how the on- and after- forms differ.

Seek events are not raised by every media player.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### afterStatus

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Each time a MediaPlayer reports one of its assorted status changes, the Status event fires. The companion onStatus is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, a Status event's event object carries the following as well:

media.code

Status code value, defined in app.media.status.

media.text

Status message text.

| --- | --- |

Only a subset of media players set the values below, and only while media.code == app.media.status.buffering. At all other times they read zero.

media.progress

Progress value from 0 to media.total.

media.total

Maximum progress value.

| --- | --- |

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

Example: Track the player's status, run from a Rendition event tied to a screen annotation.

```
var events = new app.media.Events
events.add({
    afterStatus: function ( e ) {
        console.println( "Status code " + e.media.code +
            ", description: " + e.media.text);
    }
});
app.media.openPlayer({ events: events });
```

### afterStop

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

When playback comes to a halt — whether the viewer ends it or the stop method runs — the Stop event fires. The companion onStop is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onBlur

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

After a MediaPlayer or screen annotation has held the keyboard focus and then surrenders it, the Blur event fires. The companion afterBlur is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onClose

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

No matter what brings it about, closing a MediaPlayer fires the Close event. The companion afterClose is documented too; EventListener spells out how the on- and after- forms differ.

Should you want the Close event to launch a second media player, check doc.media.canPlay beforehand to confirm playback is permitted — it may be barred, for instance, while the document itself is shutting down.

Beyond the usual event properties, a Close event's event object carries the following as well:

media.closeReason

Why the player was closed, from app.media.closeReason

media.hadFocus

Did the player have the focus when it was closed?

| --- | --- |

Should a player still hold the focus as it closes, a Blur event reaches it first and the Close event second. Within that Close event, media.hadFocus tells you whether the player held the focus just before it shut.

By the time the afterClose event method runs, the MediaPlayer is already gone and its JavaScript object is no longer alive.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

Example: Fired from a Rendition action, this script finds out what caused the media clip to close. See app.media. closeReason.

```
var playerEvents = new app.media.Events({
    onClose: function (e) {
        var eReason, r = app.media.closeReason;
        switch ( e.media.closeReason )
        {
            case r.general: eReason = "general"; break;
            case r.error: eReason = "error"; break;
            case r.done: eReason = "done"; break;
            case r.stop: eReason = "stop"; break;
            case r.play: eReason = "play"; break;
            case r.uiGeneral: eReason = "uiGeneral"; break;
            case r.uiScreen: eReason = "uiScreen"; break;
            case r.uiEdit: eReason = "uiEdit"; break;
            case r.docClose: eReason = "Close"; break;
            case r.docSave: eReason = "docSave"; break;
            case r.docChange: eReason = "docChange"; break;
        }
        console.println("Closing...The reason is  " + eReason );
    }
});
app.media.openPlayer({ events: playerEvents });
```

### onDestroy

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Destroying a screen annotation is what fires the Destroy event. The companion afterDestroy is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onDone

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Reaching the end of the media during playback fires the Done event. The companion afterDone is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

Parameter

Description

oMediaEvent

The EventListener receives this event object automatically as its argument.

| --- | --- |

### onError

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Whenever something goes wrong inside a MediaPlayer, the Error event fires. The companion afterError is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, an Error event's event object carries the following as well:

media.code

Status code value

media.serious

true for serious errors, false for warnings

media.text

Error message text

| --- | --- |

Parameters

Parameter

Description

oMediaEvent
