# AP

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | C | string | R/W |

Holds the named appearance applied when a stamp annotation is rendered. Here are the names of the built-in stamp annotations:

Approved

AsIs

Confidential

Departmental

Draft

Experimental

Expired

Final

ForComment

ForPublicRelease

NotApproved

NotForPublicRelease

Sold

TopSecret

Annotations: Stamp

Example: Programmatically add a stamp annotation.

```javascript
var annot = this.addAnnot({
    page: 0,
    type: "Stamp",
    author: "A. C. Robat",
    name: "myStamp",
    rect: [400, 400, 550, 500],
    contents: "Try it again, this time with order and method!",
    AP: "NotApproved" });
```

Note

To learn a given stamp's name, open the PDF that holds it inside the Stamps folder. The Doc object icons property will list every stamp name the document is presently using.
