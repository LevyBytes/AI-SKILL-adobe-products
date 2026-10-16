# setProps

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | C |

Parameters

| Parameter | Description |
| --- | --- |
| object literal | A plain object that lays out which properties the new Annotation object should carry (type, rect, page, and so on). It matches the parameter taken by the addAnnot method of the Doc object. |

Returns

The Annotation object

Example: Set various properties of a Line annotation.

```javascript
var annot = this.addAnnot({type: "Line"})
annot.setProps({
    page: 0,
    points: [[10,40],[200,200]],
    strokeColor: color.red,
    author: "A. C. Robat",
    contents: "Check with Jones on this point.",
    popupOpen: true,
    popupRect: [200, 100, 400, 200], // Place rect at tip of the arrow
    arrowBegin: "Diamond",
    arrowEnd: "OpenArrow"
});
```
