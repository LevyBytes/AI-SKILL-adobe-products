# cAttachmentPath

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 11.0 | D | No | C | string | W |

(Optional) Gives the device-independent path to the file that should be attached. Leave it unset and the File Open dialog box appears so the user can choose a data file. It has no bearing on annotation types apart from FileAttachment. The PDF Reference holds more on this.

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
```
