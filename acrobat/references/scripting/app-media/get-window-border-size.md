# getWindowBorderSize

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands back a four-number array giving, in pixels, the left, top, right, and bottom border sizes a floating window would carry for the properties named in the parameters.

Both hasTitle and hasClose are Boolean parameters, while canResize accepts any value from app.media.canResize.

Since these parameters carry the same names as properties on a MediaSettings.floating object, you can hand in a floating object straight as one parameter:

```javascript
var size = doc.media.getWindowBorderSize( settings.floating );
```

Parameters

| Parameter | Description |
| --- | --- |
| hasTitle | (optional) The default is true. |
| hasClose | (optional) The default is true. |
| canResize | (optional) The default is app.media.canResize.no. |

Returns

An array of 4 numbers.
