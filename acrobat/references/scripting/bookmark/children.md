# children

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array null | R |

An array holding the Bookmark objects that sit beneath this bookmark in the bookmark tree. Where this bookmark has no children, the property is null.

See also the parent and bookmarkRoot properties.

Example: Dump all bookmarks in the document.

```javascript
function DumpBookmark(bkm, nLevel)
{
    var s = "";
    for (var i = 0; i < nLevel; i++) s += " ";
    console.println(s + "+-" + bkm.name);
    if (bkm.children != null)
        for (var i = 0; i < bkm.children.length; i++)
            DumpBookmark(bkm.children[i], nLevel + 1);
}
console.clear(); console.show();
console.println("Dumping all bookmarks in the document.");
DumpBookmark(this.bookmarkRoot, 0);
```
