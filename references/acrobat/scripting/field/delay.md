# delay

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | F | Boolean | R/W |

Holds off the redraw of a field's appearance. Typically it serves to batch up a run of changes to a field's properties before asking the field to rebuild its look. Set the property true and the field waits until delay returns to false; only then does its appearance refresh, redrawing the field with its newest settings.

A matching Doc delay flag exists for when many fields are being changed at once.

Fields

all

Example: alter a check box's look — flip delay to true, apply the changes, then flip delay back to false.

```javascript
// Get the myCheckBox field
var f = this.getField("myCheckBox");
// Set the delay and change the fields properties
// to beveled edge and medium thickness line.
f.delay = true;
f.borderStyle = border.b;
// Apply any additional field changes before clearing delay.
f.strokeWidth = 2;
f.delay = false; // Force the changes now
```
