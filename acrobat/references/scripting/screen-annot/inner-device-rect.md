# innerDeviceRect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of 4 Numbers | R |

Together with outerDeviceRect, this property fixes the inner and outer rectangles of the screen annotation as drawn in the page view that is currently showing.

Example: Read back the innerDeviceRect.

```javascript
annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
console.println("annot.innerDeviceRect = "
    + annot.innerDeviceRect.toSource() );
```
