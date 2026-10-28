# buttonAlignY

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | F | Integer | R/W |

Sets how leftover space gets allotted, measured from the bottom edge of the button face, relative to the icon. The figure is a percentage running from 0 to 100 inclusive, defaulting to 50.

Scale the icon anamorphically — which leaves no space differences — and this property goes unused.

Fields

button

Example: An elevator animation is what this sample produces. "myElevator" here is a button form field built narrow and tall, with an icon brought in to serve as its appearance face.

```javascript
function MoveIt()
{
    if ( f.buttonAlignY == 0 ) {
        f.buttonAlignY++;
        run.dir = true;
        return;
    }
    if ( f.buttonAlignY == 100 ) {
        f.buttonAlignY--;
        run.dir = false;
        return;
    }
    if (run.dir) f.buttonAlignY++;
    else f.buttonAlignY--;
}
var f = this.getField("myElevator");
f.buttonAlignY=0;
run = app.setInterval("MoveIt()", 100);
run.dir=true;
toprun = app.setTimeOut(
    "app.clearInterval(run); app.clearTimeOut(toprun)", 2*20000+100);
```
