# endAt

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | MediaOffset object | R/W |

Where playback finishes, as a time or frame. This can be an absolute time or frame value, a marker name, or a marker combined with a time or frame, per the MediaOffset object topic. Playback stops at the named time or frame, or as near it as the media player can manage to halt. Leave endAt unset and the default is the end of media.

See also startAt.

Example: the script here runs an audio clip from the 3-second mark through the 8-second mark.

```javascript
var player = app.media.openPlayer({
    rendition: this.media.getRendition( "myAudio" ),
    doc: this,
    settings: {
        startAt: 3,
        endAt: 8
    }
});
```
