# buttonSetCaption

5.0

D


Assigns the caption attached to a button.

To read the current caption, turn to buttonGetCaption.

On how the icon and caption sit on the button face, see buttonAlignX, buttonAlignY, buttonFitBounds, buttonPosition, buttonScaleHow, and buttonScaleWhen.

Parameters

| Parameter | Description |
| --- | --- |
| cCaption | The caption attached to the button. |
| nFace | (optional) When given, assigns a caption of the stated type:<br><br>0: (default) normal caption<br><br>1: down caption<br><br>2: rollover caption |

Example:

```javascript
var f = this.getField("myButton");
f.buttonSetCaption("Hello");
```
