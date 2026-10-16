# contents

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | C | string | R/W |

Reaches the body text of any annotation that carries a pop-up window. On sound and file attachment annotations, it holds the descriptive text shown for them.

Annotations: All

Example: Create a text annotation, with author and contents specified.

```javascript
var annot = this.addAnnot({
    page: 0,
    type: "Text",
    point: [400,500],
    author: "A. C. Robat",
    contents: "Call Smith to get help on this paragraph.",
    noteIcon: "Help"
});
```

The Doc object addAnnot method is also worth consulting.
