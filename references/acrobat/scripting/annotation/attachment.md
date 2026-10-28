# attachment

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 11.0 | No | No | All | object | R |

Stands for the annotAttachment object tied to a FileAttachment-type annotation.

From version 11.0 onward, this property names the object to attach whenever the annotation is a FileAttachment type. Ask for it on any other annotation type and you get back undefined. An invalid attachment triggers the ESErrorGenral exception.

Annotations: FileAttachment

Example:

```javascript
var annot = this.addAnnot({
       page: 0,
       type: "FileAttachment",
       point: [400,500],
       author: "A. C. Robat",
       contents: "Call Smith to get help on this paragraph.",
       cAttachmentPath: "/d/a.pdf"
   });
   var attachmentObj = annot.attachment;
```
