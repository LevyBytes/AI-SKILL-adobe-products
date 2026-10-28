# getPageBox

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Hands back a rotated-user-space rectangle that bounds the page's named box. See also setPageBoxes.

Parameters

| Parameter | Description |
| --- | --- |
| cBox | (optional) Which box type. Values are: Art Bleed BBox Crop (default) Trim — turn to the PDF Reference for what each box means. |
| nPage | (optional) A 0-based page index; left unset it falls back to 0, meaning the document's opening page. |

Returns

In rotated user space, a rectangle bounding the page's named box.

Example: Get the dimensions of the Media box.

```javascript
var aRect = this.getPageBox("Media");
var width = aRect[2] - aRect[0];
var height = aRect[1] - aRect[3];
console.println("Page 1 has a width of " + width + " and a height of "

     + height);
```
