# page

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R/W |

Tells which page hosts a docked media player. For players that are not docked, it stays undefined. Reassign a docked player's page property to relocate it onto a different page, and that change fires a GetRect (see onGetRect) event.

Example: run a media clip on page 1 (base zero), positioning the media player there exactly where the page 0 screen annotation sits.

```javascript
var player = app.media.openPlayer({
        rendition: this.media.getRendition( "myClip" ),
        annot: this.media.getAnnot({ nPage:0, cAnnotTitle:"myScreen" }),
        settings: { windowType: app.media.windowType.docked }
    });
player.page = 1;
```

See onGetRect and triggerGetRect for variations on this example.
