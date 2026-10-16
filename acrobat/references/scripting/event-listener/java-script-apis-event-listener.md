# JavaScript APIs — EventListener

What you have here is a set of multimedia event methods bundled with optional local data. The names of these event methods open with on or after, trailed by the event name — onPause or afterPause, for example. As an event gets dispatched, the matching on event methods run right away while the matching after event methods run a little later, at the next idle moment.

on event methods carry a few constraints:

A MediaPlayer object's on event method may not invoke any of that MediaPlayer's methods, nor any other Acrobat method that might end up triggering one of the MediaPlayer's methods indirectly. To illustrate, an on method must steer clear of closing the document, saving it, switching the active page, shifting the focus, or anything else that could eventually reach a MediaPlayer method.

Reentry into an on event method is not permitted.

Free of those constraints, after event methods prove more flexible for most needs. Lean on an on event method only where the event has to be handled synchronously, as with an onGetRect method.

Within an event method, this refers to the EventListener object. You will find the document in event.media.doc and the event target (MediaPlayer or ScreenAnnot) in event.target.

Dispatching gets its EventListener objects installed by Events.add, an event reaches the matching event methods through Events.dispatch, and EventListener objects come off the dispatch table via Events.remove.

Example: Two approaches set up onPlay and afterPlay listeners. As each runs, it logs a note back to the console.

```javascript
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
