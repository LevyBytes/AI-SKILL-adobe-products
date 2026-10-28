# removeLinks

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | Not available in Reader |

Provided the user holds permission to strip links from the document, clears every link on the named page that falls within the named coordinates

Worth consulting as well: addLink, getLinks, and the Link object.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | The 0-based index of the page that links get removed from. |
| oCoords | A four-number array in rotated user space — the coordinates of a rectangle, listed in this order: upper-left x, upper-left y, lower-right x, and lower-right y . |

Example: Strip every link out of the document.

```javascript
// Remove all links from the document
for ( var p = 0; p < this.numPages; p++)
{
    var b = this.getPageBox("Crop", p);
    this.removeLinks(p, b);
}
```

To tally how many links got removed, lean on getLinks.
