# windowType

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R/W |

A value drawn from the app.media.windowType enumeration that settles which kind of window the MediaPlayer is built inside.

Reach for the low-level doc.media.newPlayer function and windowType defaults to app.media.windowType.docked.

Go through the higher-level createPlayer or openPlayer functions on the app.media object instead, and the default is worked out like this:

Where an annot is handed over (refer to the PlayerArgs object description), app.media.windowType.docked is the default.

Where a settings.floating object is handed over (refer to the PlayerArgs object description), app.media.windowType.floating is the default.

Failing either, the default comes out as undefined.

Example — build players that use varying window types. Because this runs as a Rendition action, no rendition needs to be specified or selected.

```javascript
// Docked player that will be played in the associated ScreenAnnot
app.media.openPlayer({
    settings: { windowType: app.media.windowType.docked }
});
// Play in full screen mode, see also monitor and monitorType
app.media.openPlayer({
    settings: { windowType: app.media.windowType.fullScreen }
});
// Show the media clip in a floating window, also, see the floating property
var args = {
    settings: {
        windowType: app.media.windowType.floating,
        floating: {
            title: "A. C. Robat",
            width: 352,
            height: 240,
        }
    }
};
app.media.openPlayer( args );
```
