# setAction

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | Not available in Reader |

Registers a JavaScript expression that runs after each state change on this OCG.

Because assigning an action to an OCG does not dirty the document, you have to set the action while the document first opens — as document-level script — or live through user interaction.

Note

Whatever action this OCG already had gets replaced by this call.

Parameters

| Parameter | Description |
| --- | --- |
| cExpr | The expression evaluated once the OCG's state has changed. |

Example: the function that follows wires a beep onto whichever OCG it receives. After the definition, the snippet attaches that beeping action to the first OCG in the array that getOCGs hands back.

```javascript
/* Beep when the given ocg is changed */
function BeepOnChange(ocg)
{
    ocg.setAction("app.beep()");
}
var ocgs = this.getOCGs();
BeepOnChange(ocgs[0]);
```
