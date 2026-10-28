# isFullScreen

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Boolean | R/W |

When true, the viewer sits in full screen mode rather than ordinary viewing — something attainable only while at least one document is open for viewing.

Note

You cannot push a PDF document that is being viewed inside a web browser into full screen mode.

Example:

```javascript
app.fs.isFullScreen = true;
```

The snippet above flips the viewer into full screen mode. Had isFullScreen been false beforehand, the default viewing mode kicks in. (That default is simply whichever mode Acrobat occupied right before full screen mode began.)
