# size

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 11.0 | No | No | All | number | R |

How many bytes the attachment occupies once uncompressed.

Example:

```javascript
var annot = this.addAnnot({
    page: 0,
    type: "FileAttachment",
    point: [400,500],
    author: "A. C. Robat",
    contents: "Call Smith to get help on this paragraph.",
    cAttachmentPath: "/d/a.pdf",
});
var attachObj = annot.attachment;
console.println("Name: " + attachObj.name);
console.println("Type: " + attachObj.MIMEType);
console.println("Size: "+ attachObj.size);
console.println("==============Content=================");
var stm = attachObj.contentStream;
console.println(util.stringFromStream(stm));
```
