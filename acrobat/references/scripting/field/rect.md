# rect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | F | Array | R/W |

Four numbers, given in rotated user space, that pin down the form field's size and location. They are the bounding rectangle's coordinates, supplied in this sequence: upper-left x, upper-left y, lower-right x, then lower-right y.

Note

A rect property exists on the Annotation object too. Its coordinates, however, are not in rotated user space and follow a different order than the Field object's rect property.

Fields

all

Example 1: Place a 2-inch-wide text field immediately to the right of the field "myText".

```javascript
var f = this.getField("myText");  // Get the Field object
var myRect = f.rect;              // and get its rectangle
myRect[0] = f.rect[2];            // The ulx for new = lrx for old
myRect[2] += 2 * 72;               // Move two inches for lry
f = this.addField("myNextText", "text", this.pageNum, myRect);
f.strokeColor = color.black;
```

Example 2: Shift an existing button field 10 points to the right.

```javascript
var b = this.getField("myButton");
var aRect = b.rect;   // Make a copy of b.rect
aRect[0] += 10;       // Increment first x coordinate by 10
aRect[2] += 10;       // Increment second x coordinate by 10
b.rect = aRect;       // Update the value of b.rect
```
