# setAction

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Assigns the JavaScript that the field runs in response to a particular trigger.

Companion calls are the Bookmark object's setAction method along with the Doc methods setAction, addScript, and setPageAction.

Note

Whatever action was previously attached to the selected trigger gets replaced by this method.

Parameters

| Parameter | Description |
| --- | --- |
| cTrigger | A string naming which trigger fires the action. Values are: MouseUp MouseDown MouseEnter MouseExit OnFocus OnBlur Keystroke Validate Calculate Format On a list box, the Selection Change event is reached through the Keystroke trigger. |
| cScript | Whatever JavaScript should run once the trigger fires. |

Example: build a button field via addField, give it a few properties, and wire a mouse-up handler through setAction.

```javascript
var f = this.addField("actionField", "button", 0, [20, 100, 100, 20]);
f.setAction("MouseUp", "app.beep(0);");
f.delay = true;
    f.fillColor = color.ltGray;
    f.buttonSetCaption("Beep");
    f.borderStyle = border.b;
    f.lineWidth = 3;
    f.strokeColor = color.red;
    f.highlight = highlight.p;
f.delay = false;
```
