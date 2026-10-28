# richContents

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | C | Array of Span objects | R/W |

Reading this property returns both the textual content and the formatting carried by an annotation. That rich text is delivered as an array of Span objects, each one bundling a stretch of text together with how it is styled.

Annotations: All except Sound, FileAttachment

Example: Create a text annotation and give it some rich text contents.

```javascript
var annot = this.addAnnot({
    page: 0,
    type: "Text",
    point: [72,500],
    popupRect: [72, 500,6*72,500-2*72],
    popupOpen: true,
    noteIcon: "Help"
});

var spans = new Array();
spans[0] = new Object();
spans[0].text = "Attention:r";
spans[0].textColor = color.blue;
spans[0].textSize = 18;

spans[1] = new Object();
spans[1].text = "Adobe Acrobat 6.0r";
spans[1].textColor = color.red;
spans[1].textSize = 20;
spans[1].alignment = "center";

spans[2] = new Object();
spans[2].text = "will soon be here!";
spans[2].textColor = color.green;
spans[2].fontStyle = "italic";
spans[2].underline = true;
spans[2].alignment = "right";

// Now give the rich field a rich value
annot.richContents = spans;
```

For more Span object usage, consult the richValue method on the Field object plus the richValue, richChange, and richChangeEx methods on the event object.
