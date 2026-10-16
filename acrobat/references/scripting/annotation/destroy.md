# destroy

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | C |

Deletes the annotation and takes it off the page; afterward the object is no longer valid.

Example: Remove all “FreeText” annotations on page 0.

```javascript
var annots = this.getAnnots({ nPage:0 });
for (var i = 0; i < annots.length; i++)
    if (annots[i].type == "FreeText") annots[i].destroy();
```
