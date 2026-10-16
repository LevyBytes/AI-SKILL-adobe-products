# newPage

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | Yes | Not allowed in Reader: Only available in Acrobat products |

Drops a fresh page into the active document.

Note

Batch and console events alone permit this method. See Privileged context.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | (optional) Within a 1-based page-numbering scheme, the page that the new page lands after. The default is the document's last page. Pass 0 to put a page ahead of the first one. An out-of-range page range gets clipped back to the valid span of pages. |
| nWidth | (optional) The page width, in points. Its default value is 612. |
| nHeight | (optional) The page height, in points. Its default value is 792. |

Example: Tack on a fresh page sized to mirror the doc's pages.

```javascript
var Rect = this.getPageBox("Crop");
this.newPage(0, Rect[2], Rect[1]);
```
