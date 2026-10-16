# icons

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array null | R |

Holds an array of the named Icon objects sitting in the document-level named icons tree. When the document carries no named icons at all, you get null back instead.

See also addIcon, getIcon, importIcon, removeIcon, the Field object properties buttonGetIcon, buttonImportIcon, buttonSetIcon, and the Icon object.

Example 1: Print how many named icons live in the active document.

```javascript
if (this.icons == null)
    console.println("No named icons in this doc");
else
    console.println("There are " + this.icons.length
        + " named icons in this doc");
```

Example 2: Walk through every named icon in the active document.

```javascript
for (var i = 0; i < this.icons.length; i++) {
    console.println("icon[" + i + "]=" + this.icons[i].name);
}
```
