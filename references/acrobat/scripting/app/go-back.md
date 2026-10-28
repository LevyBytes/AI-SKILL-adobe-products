# goBack

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Returns to the prior view held on the view stack — the same result as pressing the Previous View button on the Acrobat toolbar.

Example: Build a go-back button. As one use, this code might sit inside a batch sequence to drop navigation buttons onto the chosen PDF documents.


```javascript
var aRect = this.getPageBox();
var width = aRect[2] - aRect[0];
// The rectangle is 12 points high and 18 points wide, centered at bottom
rect = [width/2-8, 10, width/2+8, 22];
f = this.addField("goBack", "button", 0, rect);
f.textFont="Wingdings";
f.textSize=0;
f.buttonSetCaption("u00E7");              // Left pointing arrow
f.setAction("MouseUp", "app.goBack()");    // Add an action
```
