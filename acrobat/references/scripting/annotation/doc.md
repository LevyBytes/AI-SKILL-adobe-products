# doc

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | C | object | R |

The Doc object for whichever document the annotation lives in.

Annotations: All

Example: Build an annotation and show the doc property at work.

```javascript
var inch = 72;
var annot = this.addAnnot({
    page: 0,
    type: "Square",
    rect: [1*inch, 3*inch, 2*inch, 3.5*inch]
});
/* displays, for example, "file:///C|/Adobe/Annots/myDoc.pdf" */
console.println(annot.doc.URL);
```
