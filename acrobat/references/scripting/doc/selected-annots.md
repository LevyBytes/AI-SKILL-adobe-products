# selectedAnnots

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | C | Array | R |

An array of Annotation objects, one for each markup annotation selected right now.

See also getAnnot and getAnnots.

Example: Print to the console the comments belonging to the selected annotations.

```javascript
var aAnnots = this.selectedAnnots;
for (var i=0; i < aAnnots.length; i++)
    console.println(aAnnots[i].contents);
```
