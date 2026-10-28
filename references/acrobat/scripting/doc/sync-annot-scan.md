# syncAnnotScan

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Ensures that, by the moment this method hands back control, every annotation has already been scanned.

Displaying or working with the document's annotations as a whole depends on all of them having been found first. Because scanning is expensive, a background routine ordinarily sweeps each page during idle moments hunting for annotations. A good deal of annotation behavior still functions smoothly before that background sweep has gathered the complete annotation list.

Call this method whenever you need the full set of annotations.

See also getAnnots.

Example: Hold until the full annotation scan finishes, then fetch the document's annotation array and order it by author.

That second line stays on hold until syncAnnotScan comes back, and that return happens only once the document's annotation scan has run to completion.

```javascript
this.syncAnnotScan();
annots = this.getAnnots({nSortBy:ANSB_Author});
// Now, do something with the annotations.
```
