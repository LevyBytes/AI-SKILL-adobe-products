# getRendition

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Finds a Rendition in the document by its name and returns it, or returns null when no Rendition carries that name.

Parameters

| Parameter | Description |
| --- | --- |
| cName | A string; it holds the Rendition's name. |

Returns

Rendition object

Example: The script below fires from a form button's mouse-up action. It runs a docked media clip inside a screen annotation.

```javascript
app.media.openPlayer({
    rendition: this.media.getRendition( "myClip" ),
    annot: this.media.getAnnot( {nPage:0,cAnnotTitle:"myScreen"} ),
    settings: { windowType: app.media.windowType.docked }
});
```
