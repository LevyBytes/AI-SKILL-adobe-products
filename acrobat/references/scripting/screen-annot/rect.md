# rect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | All | Array of 4 Numbers | R/W |

Expresses the screen annotation's rectangle in default user coordinates. Writing to this property marks the PDF file dirty, and the fresh value is persisted whenever the PDF file is saved. The change also propagates to innerDeviceRect and outerDeviceRect, which are recomputed for the new rectangle.

Example: Nudge the annotation's location by a small amount.

```javascript
var annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
var aRect = annot.rect;
aRect[0] += 10;
aRect[2] += 10;
annot.rect = aRect;
```
