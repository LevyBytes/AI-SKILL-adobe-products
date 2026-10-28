# addField

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | F |

Builds a fresh form field and hands it back as a Field object.

Note

(Acrobat 6.0): From Acrobat 6.0 onward, documents whose forms usage rights are turned on can invoke this method inside Adobe Reader. Earlier than 6.0, Adobe Reader could not reach it.

Parameters

| Parameter | Description |
| --- | --- |
| cName | What to name the field being created. A hierarchy can be expressed through the dot separator syntax (as an illustration, name.last yields a parent node, name, plus a child node, last). |
| cFieldType | Which kind of form field to build. The permitted types are: text button combobox listbox checkbox radiobutton signature |
| nPageNum | A 0-based index identifying the page that receives the field. |
| oCoords | Four numbers, given in rotated user space, that fix the form field's dimensions and location. They list the bounding rectangle's coordinates in this sequence: upper-left x, upper-left y, lower-right x and lower-right y . Consult also the rect property on the Field object. - Coordinates pulled from the Info panel for the bounding rectangle have to be converted out of info space into rotated user space. Achieve this by taking the info space y coordinate away from the on-screen page height. |

Returns

The Field object that was just made.

Example: A batch sequence could run the code below to drop a navigational icon onto every page of a document, across each document within a chosen group of documents.

```javascript
var inch = 72;
for (var p = 0; p < this.numPages; p++) {
    // Position a rectangle (.5 inch, .5 inch)
    var aRect = this.getPageBox( {nPage: p} );
    aRect[0] += .5*inch;            // from upper left hand corner of page.
    aRect[2] = aRect[0]+.5*inch;    // Make it .5 inch wide
    aRect[1] -= .5*inch;
    aRect[3] = aRect[1] - 24;       // and 24 points high

    // Now construct a button field with a right arrow from ZapfDingbats
    var f = this.addField("NextPage", "button", p, aRect )
    f.setAction("MouseUp", "this.pageNum++");
    f.delay = true;
    f.borderStyle = border.s;
    f.highlight = "push";
    f.textSize = 0;                 // Auto-sized
    f.textColor = color.blue;
    f.fillColor = color.ltGray;
    f.textFont = font.ZapfD
    f.buttonSetCaption("341")      // A right arrow
    f.delay = false;
}
```

For a further illustration, look at the setAction method on the Field object.
