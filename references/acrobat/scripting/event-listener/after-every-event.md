# afterEveryEvent

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

When an Events object holds an onEveryEvent or afterEveryEvent property, its EventListener methods run for every event instead of one in particular. (EventListener spells out how on and after event methods differ).

The EventListener functions sitting in an onEveryEvent or afterEveryEvent property run ahead of any listener functions that name the specific event.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | An event object handed to this EventListener automatically. |

Example: Let onEveryEvent, afterEveryEvent, onPlay and afterPlay each log back to the console.

```javascript
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
