# getAnnots

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

What doc.media.getAnnots gives back is an array holding every ScreenAnnot object on the document page you name, or, when nPage is left off, every ScreenAnnot object across all the document's pages. Should no such ScreenAnnots exist, the array comes back empty.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | The page number (base 0) where the ScreenAnnots sit. |

Returns

Array of ScreenAnnot objects

Example: Pull a list of the ScreenAnnots sitting on page 0, then play a media clip inside a screen annotation picked at random from that list.

```javascript
var annots = this.media.getAnnots({ nPage: 0 });
var rendition = this.media.getRendition("myClip");
var settings = { windowType: app.media.windowType.docked }
var l = annots.length
var i = Math.floor( Math.random() * l ) % l
var args = { rendition:rendition, annot:annots[i], settings:settings };
app.media.openPlayer( args );
```
