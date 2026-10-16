# mouseX

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0 | No | No | All | Number | R |

Returns the mouse's x coordinate, expressed in default user space and measured against the current page.

Example: Track the mouse position while the user drags the pointer across the viewer.

```javascript
function getMouseCoor() {
    console.println( "("+this.mouseX+","+ this.mouseY+")" );
}
var ckMouse = app.setInterval("getMouseCoor()", 100);
var timeout = app.setTimeOut(
    "app.clearInterval(ckMouse); app.clearTimeOut(timeout)",2000);
```
