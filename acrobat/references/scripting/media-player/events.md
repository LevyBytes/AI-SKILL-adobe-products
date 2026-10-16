# events

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Events object | R/W |

Carries an Events object that bundles the EventListeners bound to a MediaPlayer. The events object topic covers the specifics.

Example: build a media player and then adjust its events. Run this as a Rendition action that has a rendition attached.

```javascript
var events = new app.media.Events;
var player = app.media.createPlayer();
player.events.add({
    onReady: function() { console.println("The player is ready"); }
});
player.open();
```
