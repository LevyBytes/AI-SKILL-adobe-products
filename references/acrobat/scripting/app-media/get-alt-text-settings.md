# getAltTextSettings

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Accepts a PlayerArgs object that carries at minimum the settings, showAltText, and showEmptyAltText properties, plus a selection object such as rendition.select returns, and locates the first available alternate text rendition where one exists. From that it builds and returns a fresh MediaSettings object geared for playing the alternate text; failing that, it returns null.

Parameters

| Parameter | Description |
| --- | --- |
| args | A PlayerArgs object |
| selection | A MediaSelection object |

Returns

MediaSettings object or null

Example: Here the rendition's alternate text gets played back. The snippet plays that alternate text inside a screen annotation, though you can adjust it to play in a floating window instead.

```javascript
var rendition = this.media.getRendition("myClip");
var settings = rendition.getPlaySettings();
var args = {
    settings: settings,
    showAltText: true,
    showEmptyAltText: true
};
var selection = rendition.select();
settings = app.media.getAltTextSettings( args, selection );

// You can also play custom alternate text by uncommenting the next line
// settings.data = app.media.getAltTextData("A. C. Robat");

// Uncomment the code below to obtain a floating window to play back
// the alternate text
/*
settings.windowType = app.media.windowType.floating
settings.floating = {
    canResize: app.media.canResize.keepRatio,
    hasClose: true,
    width: 400,
    height: 100
} */

// Now define an args parameter for use with openPlayer, which will

 // play the alternate text.
args = {
    rendition: rendition,
    annot: this.media.getAnnot({nPage: 0, cAnnotTitle:"myScreen"}),
    settings: settings
};
app.media.openPlayer(args);
```
