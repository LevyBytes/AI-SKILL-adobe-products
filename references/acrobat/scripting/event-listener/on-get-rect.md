# onGetRect

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Any time the multimedia plug-in has to obtain the display rectangle for a docked MediaPlayer, the GetRect event fires.

Beyond the usual event properties, a GetRect event's event object carries this one as well:

| Parameter | Description |
| --- | --- |
| media.rect | Player rectangle, an array of four numbers in device space |

Before it returns, the onGetRect method is obliged to set this property on the oMediaEvent.

Note

Writing an afterGetRect listener is possible, yet it serves no real purpose. Any rect property it hands back is disregarded. Setting the rect property is strictly the job of the onGetRect listener.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |

Example: A row of thumbnail-size ScreenAnnots sits on page 0, with page 1 left blank. Switch the viewer to continuous facing mode so the two pages appear together side by side. What follows is a representative Rendition action — or mouse-up button JavaScript action.

```javascript
var rendition = this.media.getRendition("Clip1");
var settings = rendition.getPlaySettings();
var annot = this.media.getAnnot({ nPage:0,cAnnotTitle:"ScreenClip1" });
var player = app.media.openPlayer({
    rendition: rendition,
    annot: annot,
    settings: { windowType: app.media.windowType.docked },
    events:
    {
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
player.page = 1; // show on page 1, this triggers an onGetRect event.
```

See MediaPlayer. page and MediaPlayer. triggerGetRect for a variation on this same example.
