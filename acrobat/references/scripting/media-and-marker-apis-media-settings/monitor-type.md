# monitorType

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R/W |

Holds an app.media.monitorType value naming which category of monitor to pick for playback in a floating or full screen window.

Keep in mind how monitor differs from monitorType:

monitor pins down one particular monitor on the running system by spelling out its rectangle.

monitorType points instead at a broad class of monitor, judged by traits like primary, secondary, or best color depth.

A monitor type can still be requested by a PDF that runs no JavaScript, even though such a file cannot name a specific monitor. Whenever monitorType reaches app.media.createPlayer or app.media.openPlayer, the JavaScript code pulls the system's roster of monitors and applies monitorType to pick one for playback. That monitor's rectangle is what gets used at the point MediaPlayer.open runs to settle on the monitor.

Example: send a clip full screen onto whichever monitor offers the deepest color.

```javascript
var player = app.media.openPlayer({
    rendition: this.media.getRendition("Clip"),
    settings: {
        monitorType: app.media.monitorType.bestColor,
        windowType: app.media.windowType.fullScreen,
    }
});
```
