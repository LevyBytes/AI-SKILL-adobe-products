# add

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Registers any quantity of EventListener objects into this Events object's dispatch table. Listeners already in place are kept, and once an event fires, every listener method that matches it runs.

First, the standard event dispatcher invokes any onEveryEvent methods in their order of registration; next it invokes the on handlers for the precise event being dispatched, again in registration order. It then arms a one-millisecond timer to run any after handlers. Once that timer fires, the after handlers run in the same order laid out for the on handlers.

Refer to the opening paragraphs of the EventListener object for the account of on and after events.

Note

Add the very same EventListener a second time and that second attempt does nothing. Add an EventListener from within an event method, and the freshly added listener's methods take part in dispatching for the event already underway.

Parameters

Any number of parameters, each one an EventListener object.

Example: Register an EventListener for the onPlay event. Here player is a MediaPlayer object.

```javascript
player.events.add
({
    onPlay: function() { console.println( "onPlay" ); }
});
```

See also remove.
