# color

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader | Array | R/W (Adobe Reader: R only) |

Sets a bookmark's color. You define values with gray, RGB, or CMYK color. For how to define color arrays and how their values play into this property, see Color arrays. See also the style property.

Example: The fun script below cycles the top-level bookmark through red, green, and blue.

```javascript
var bkm = this.bookmarkRoot.children[0];
bkm.color = color.black;
var C = new Array(1, 0, 0);
var run = app.setInterval(
    'bkm.color = ["RGB",C[0],C[1],C[2]]; C.push(C.shift());', 1000);
var stoprun=app.setTimeOut(
    "app.clearInterval(run); bkm.color=color.black",12000);
```
