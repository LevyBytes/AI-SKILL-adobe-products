# triggerGetRect

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Fires a GetRect event (see onGetRect) so that a docked media player gets resized.

Example: This example resembles the one trailing onGetRect. Page 0 holds a row of (thumbnail-size) ScreenAnnots. What follows is a representative Rendition action or mouse-up button JavaScript action; running it resizes the media clip and plays it.

```javascript
var rendition = this.media.getRendition("Clip1");
var annot = this.media.getAnnot({ nPage:0,cAnnotTitle:"ScreenClip1" });
var player = app.media.openPlayer({
    rendition: rendition,
    annot: annot,
    settings: { windowType: app.media.windowType.docked },
    events: {
        onGetRect: function (e) {
            var width = e.media.rect[2] - e.media.rect[0];
            var height = e.media.rect[3] - e.media.rect[1];
            width *= 3; // Triple width and height
            height *= 3;
            e.media.rect[0] = 36; // Move left,upper to
            e.media.rect[1] = 36; // upper left-hand corner
            e.media.rect[2] = e.media.rect[0]+width;
            e.media.rect[3] = e.media.rect[1]+height;
            return e.media.rect; // Return this
        }
    }
});
player.triggerGetRect(); // trigger the onGetRec event
```
