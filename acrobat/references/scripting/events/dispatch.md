# dispatch

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Each time a MediaPlayer raises an event, the Multimedia plug-in builds an event object and invokes MediaPlayer.events.dispatch(event); a ScreenAnnot does the same through ScreenAnnot.events.dispatch(event).

Within the whole event-dispatching machinery, dispatch is the sole piece the Acrobat Multimedia plug-in invokes on its own. Supply your own MediaPlayer.events object carrying its own dispatch method and you can swap in a completely different event-dispatching scheme of your own.

What dispatch has to do is invoke each EventListener bound to the event, which it recognizes from oMediaEvent.name. Typically a PDF file supplies no dispatch method of its own and relies on the standard event-dispatching scheme instead.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | An event object. |

Should you supply your own dispatch method, bear in mind that oMediaEvent.name can include spaces. To let the name slot directly into a JavaScript event method name, the standard dispatch method copies oMediaEvent.name into oMediaEvent.media.id with the spaces stripped out.

Bear in mind too that a dispatch method you write runs synchronously as each event arrives, so whatever it does falls under the same restrictions described for on event methods (see EventListener object). Above all, the method must not invoke anything on a MediaPlayer object, nor take any action that might indirectly trigger a MediaPlayer method.

Calling the dispatch method straight from JavaScript code is unusual, though it is allowed.

Example: Build a new media player wired to a custom event dispatcher. Rarely seen in everyday PDF JavaScript, this counts as an advanced technique.

```javascript
var player = doc.media.newPlayer(
{
    events:
    {
        dispatch: function( e )
        {
            console.println( 'events.dispatch' + e.toSource() );
        }
    }
});
// Synthesize and dispatch a Script event, as if one had been

 // encountered while the media was playing. With the standard event

// dispatcher, this will call any and all event listeners that have been
// added for this event. With the custom dispatcher above, it will log a
// message to the console.
var event = new Event;
event.name = "Script";
event.media = { command: "test", param: "value" };
player.events.dispatch( event );
```
