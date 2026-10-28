# style

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader | Integer | R/W (Adobe Reader: R only) |

Sets the bookmark font's style: 0 for normal, 1 for italic, 2 for bold, and 3 for bold-italic. See also the color property.

Example: Here the snippet renders the top-level bookmark in boldface.

```javascript
var bkm = this.bookmarkRoot.children[0];
bkm.style = 2;
```
