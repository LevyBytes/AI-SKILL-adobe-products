# duration

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R/W |

How many seconds playback runs for. Left unspecified, the default plays the whole media, or the stretch between the startAt and endAt points whenever either one is given.

Bear in mind the duration may run past the whole media length or past the gap between the startAt and endAt points. When it does, playback presses on to the end of media or to the endAt point, then pauses there until the duration runs out.

Example: drive a floating window whose duration never ends. Here the rendition's playback location is set, by way of the UI, to a floating window, and a form button triggers the code below. Because that floating window stays up once the media finishes, the player gets closed ahead of each reopen so windows do not pile up.

Were this script instead launched from a Rendition action, you could pick the rendition through the UI and skip closing the player altogether.

```javascript
var rendition = this.media.getRendition("Clip");
if ( player && player.isOpen )
    try { player.close(app.media.closeReason.done); } catch(e) {};
var player = app.media.openPlayer({
    rendition: rendition,
    settings: { duration: Infinity }
});
```
