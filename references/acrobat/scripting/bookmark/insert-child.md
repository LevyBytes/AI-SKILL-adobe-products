# insertChild

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Slots the named bookmark in as a child of this bookmark. Where that bookmark is already part of the bookmark tree, it gets unlinked first, then placed back into the tree. The insertion also gets checked for circularities and refused if any turn up — which stops users from slotting a bookmark in as a child or grandchild of itself. See also the children property and the createChild and remove methods.

Parameters

| Parameter | Description |
| --- | --- |
| oBookmark | A bookmark object to attach beneath this bookmark as its child. |
| nIndex | (optional) The 0-based slot in the bookmark's children array where the new child gets inserted. It defaults to 0. |

Example: Grab the first child bookmark and shift it to the end of the bookmarks.

```javascript
var bm = bookmarkRoot.children[0];
bookmarkRoot.insertChild(bm, bookmarkRoot.children.length);
```
