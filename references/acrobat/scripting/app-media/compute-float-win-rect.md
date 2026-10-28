# computeFloatWinRect

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Works out and hands back, in screen coordinates, the rectangle that its parameters call for.

Parameters

| Parameter | Description |
| --- | --- |
| doc | The document's Doc object. |
| floating | The floating parameters drawn from whatever MediaSettings.floating returns. |
| monitorType | A number that says which monitor applies. See the app.media. monitorType property. |
| uiSize | (optional) The UI size, supplied as a four-number array [w, x, y, z] standing for the size, such as MediaPlayer.uiSize returns. |

Returns

The rectangle in screen coordinates.

Example: Work out a floating window's rectangle.

```javascript
var floating =
{
    over: app.media.over.monitor,
    align: app.media.align.center,
    canResize: app.media.canResize.no,
    hasClose: false,
    hasTitle: true,
    width: 400,
    height: 400
}
var rect = app.media.computeFloatWinRect
    (this, floating, app.media.monitorType.primary);
```
