# remove

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |
|  |  |  |  |

One or more EventListeners that an earlier Events.add call put in place are taken back out by this method. Pass an object literal straight into Events.add and you lose any way to remove that listener through Media.remove, since no reference to the identical object can be handed over. So that the same reference reaches remove, hand your EventListener to add through a variable rather than as a bare object literal, then pass that very variable to remove, as the example below shows.

You can call remove from within an event method to strip out any EventListener at all — even the one the running event method belongs to. That event method keeps running to completion, but none of the other event methods in the same EventListener object will fire.

Parameters

Any number of EventListener objects.

Example: Take player to be a MediaPlayer object.

Call `listenForStop(player)` when the listener should become active. Retain the returned function and call it when the listener is no longer needed.

```javascript
function listenForStop(player) {
    var listener = {afterStop: function () {app.alert("Stopped!");}};
    player.events.add(listener);
    return function removeStopListener() {
        player.events.remove(listener);
    };
}
```
