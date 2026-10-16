# getUserUnitSize

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 12.0 | No | No | All | Integer | R |

Hands back a page's UserUnit value. That value helps you work out page sizes when the pages run large — handy, say, for pages whose size goes past 14,400 units.

Per the PDF reference, UserUnit is a positive number stating the size of default user space units as multiples of 1 / 72 inch. Because user space coordinates cap the largest page size at 14,400, UserUnit becomes a scaling factor that lets you express bigger pages. Pair getUserUnitSize with any size-related API — getPageBox among them — to work out a page's true dimensions.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | The page's 0-based index. |

Returns

A number giving the page's UserUnit value.

Example (Acrobat)

Determine the page size in inches:

```javascript
var aRect = this.getPageBox("Media");
var pageHeight = aRect[1];
var pageWidth = aRect[2];
var userUnit  = this.getUserUnitSize(0);
var pageHeightInches = ((pageHeight * userUnit) / 72);
var pageWidthInches = ((pageWidth * userUnit) / 72);
console.println("nPage 1 height : " + pageHeightInches +
           " inches nPage 1 width : " + pageWidthInches + " inchesn");
```
