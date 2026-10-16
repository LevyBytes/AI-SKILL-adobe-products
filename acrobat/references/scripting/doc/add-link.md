# addLink

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | Not available in Reader |

Provided the user holds permission to add links to the document, attaches a fresh link at the coordinates you give on the page you name. See also getLinks, removeLinks and the Link object.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | Which page is to receive the new link. |
| oCoords | Four numbers, in rotated user space, that set the link's size and where it sits. They give the bounding rectangle's coordinates in this sequence: upper-left x, upper-left y, lower-right x and lower-right y . |

Returns

The Link object that was just made.

Example 1: Place plain navigational links into the bottom-left and bottom-right corners on every page of the current document. The bottom-left link jumps to the prior page, while the bottom-right one advances to the following page.

```javascript
var linkWidth = 36, linkHeight = 18;
for ( var i=0; i < this.numPages; i++)
{
    var cropBox = this.getPageBox("Crop", i);
    var linkRect1 = [0,linkHeight,linkWidth,0];
    var offsetLink = cropBox[2] - cropBox[0] - linkWidth;
    var linkRect2 = [offsetLink,linkHeight,linkWidth + offsetLink,0]
    var lhLink = this.addLink(i, linkRect1);
    var rhLink = this.addLink(i, linkRect2);
    var nextPage = (i + 1) % this.numPages;
    var prevPage = (i - 1) % this.numPages;
    var prevPage = (prevPage>=0) ? prevPage : -prevPage;
    lhLink.setAction( "this.pageNum = " + prevPage);
    lhLink.borderColor = color.red;
    lhLink.borderWidth = 1;
    rhLink.setAction( "this.pageNum = " + nextPage);
    rhLink.borderColor = color.red;
    rhLink.borderWidth = 1;
}
```

Turn to the Link object to learn how a link's properties and action get configured.

Example 2: Hunt through the document for the word "Acrobat" and wrap a link around each occurrence.

```javascript
for (var p = 0; p < this.numPages; p++)
{
    var numWords = this.getPageNumWords(p);
    for (var i=0; i<numWords; i++)
    {
        var ckWord = this.getPageNthWord(p, i, true);
        if ( ckWord == "Acrobat")
        {
            var q = this.getPageNthWordQuads(p, i);
            // Convert quads in default user space to rotated
            // User space used by Links.
            m = (new Matrix2D).fromRotated(this,p);
            mInv = m.invert()
            r = mInv.transform(q)
            r=r.toString()
            r = r.split(",");
            l = addLink(p, [r[4], r[5], r[2], r[3]]);
            l.borderColor = color.red;
            l.borderWidth = 1;
            l.setAction("this.getURL('http://www.example.com/')");
        }
    }
}
```
