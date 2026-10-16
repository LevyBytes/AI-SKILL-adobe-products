# formsVersion

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 4.0 | No | No | All | Number | R |

Gives the version of the viewer’s forms software. Read it when you need to know whether objects, properties, or methods introduced in later releases exist, so your scripts can stay backward compatible.

Example: Toggle fullscreen mode.

```javascript
if (typeof app.formsVersion != "undefined" && app.formsVersion >= 5.0) {
        app.fs.defaultTransition = "";
        app.fs.isFullScreen = !app.fs.isFullScreen;
}
else app.fullscreen = !app.fullscreen;
```
