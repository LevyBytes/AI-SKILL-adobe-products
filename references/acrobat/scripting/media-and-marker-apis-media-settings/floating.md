# floating

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Object | R/W |

An object whose properties (set out below) fix the placement and styling of a floating window.

Unless MediaSettings.windowType carries the value app.media.windowType.floating, this object goes ignored.

Any floating settings left unspecified fall back to defaults.

| Property | Type | Description |
| --- | --- | --- |
| align | Number | Fixes where the floating window sits in relation to the window named by the over property. align takes one of the values of app.media.align. |
| over | Number | Names the window the floating window aligns to. over takes one of the values of app.media.over. |
| canResize | Number | Fixes whether the user may resize the floating window. canResize takes one of the values of app.media.canResize. |
| hasClose | Boolean | When true, the floating window ought to carry a close window control button. |
| hasTitle | Boolean | When true, a title ought to show in the title bar. |
| title | String | The title shown when hasTitle is true. |
| ifOffScreen | Number | Fixes what happens should the floating window land wholly or partly offscreen. ifOffScreen takes one of the values of app.media.ifOffScreen. |
| rect | Array of four Numbers | A screen-coordinate array fixing the floating window's placement and size. Required when width and height are absent. |
| width | Number | The floating window's width. Required when rect is absent. |
| height | Number | The floating window's height. Required when rect is absent. |

Example: run a media clip inside a floating window.

```javascript
var rendition = this.media.getRendition( "myClip" );
var floating = {
    align: app.media.align.topCenter,
    over: app.media.over.appWindow,
    canResize: app.media.canResize.no,
    hasClose: true,
    hasTitle: true,
    title: rendition.altText,
    ifOffScreen: app.media.ifOffScreen.forceOnScreen,
    width: 400,
    height: 300
};
var player = app.media.openPlayer({
    rendition: rendition,
    settings: {
        windowType: app.media.windowType.floating,
        floating: floating
    }
});
```
