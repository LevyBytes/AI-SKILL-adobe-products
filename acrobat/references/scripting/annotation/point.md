# point

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | C | array | R/W |

A pair of numbers, [ x ul, y ul ], marking the upper-left corner — in default user space — of the icon belonging to a text, sound, or file attachment annotation.

Annotations: Text, Sound, FileAttachment

Example: Drop a help note icon at the coordinates you name; it ends up sitting at the popup note's top-right corner.

```javascript
var annot = this.addAnnot({
    page: 0,
    type: "Text",
    point: [400,500],
    contents: "Call Smith to get help on this paragraph.",
    popupRect: [400,400,550,500],
    popupOpen: true,
    noteIcon: "Help"
});
```

See also the noteIcon property and the Doc object addAnnot method.
