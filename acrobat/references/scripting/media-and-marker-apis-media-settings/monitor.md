# monitor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Monitor or Monitors object | R/W |

When a media player runs full screen, this property picks which display handles playback. You may hand it either a Monitor object or a Monitors object. Should an array be passed, playback relies on its first element, which is itself a Monitor object.

Note

Playback reads only the rect property: MediaSettings.monitor. rect when a Monitor object is supplied, or MediaSettings.monitor[0]. rect when it is a Monitors object.

How monitor and monitorType relate to one another is covered under monitorType (below).

Example: drive full-screen playback of a clip off a form button.

```javascript
var player = app.media.openPlayer({
    rendition: this.media.getRendition("Clip"),
    settings: {
        monitor: app.monitors.primary(),
        windowType: app.media.windowType.fullScreen,
    }
});
```

Note

Full screen playback only proceeds when the user's trust manager settings permit it.
