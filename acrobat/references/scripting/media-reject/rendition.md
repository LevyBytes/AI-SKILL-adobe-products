# rendition

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Rendition object | R |

Points back at the Rendition that a select call turned down.

Example

Compile the renditions that were turned down. This runs as a Rendition action.

```javascript
selection = event.action.rendition.select(true);
for ( var i=0; i<selection.rejects.length; i++)
    console.println("Rejected Renditions: "

         + selection.rejects[i].rendition.uiName);

// Now play the first available rendition.
console.println( "Preparing to play " + selection.rendition.uiName);
var settings = selection.rendition.getPlaySettings();
var args = {
    rendition: selection.rendition,
    annot: this.media.getAnnot({ nPage: 0, cAnnotTitle: "myScreen" }),
    settings: settings
};
app.media.openPlayer(args);
```
