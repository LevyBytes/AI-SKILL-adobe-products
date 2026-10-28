# getLinks

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Yields an array of the Link objects that fall inside the coordinates you name on a page. See also addLink and removeLinks.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | Whichever page holds the Link objects; page numbering starts at 0. |
| oCoords | A set of four rotated-user-space numbers spelling out a rectangle, listed as: upper-left x, upper-left y, lower-right x and lower-right y . |

Returns

An array of Link objects.

Example: Count the number of links in a document and report to the console.

```javascript
var numLinks=0;
for ( var p = 0; p < this.numPages; p++)
{
    var b = this.getPageBox("Crop", p);
    var l = this.getLinks(p, b);
    console.println("Number of Links on page " + p +" is " + l.length);
    numLinks += l.length;
}
console.println("Number of Links in Document is " + numLinks);
```
