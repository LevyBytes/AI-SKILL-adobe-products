# Field/Keystroke

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Whenever a user enters a keystroke in a text box or combo box (cut and paste counts) or picks an item from a combo box list or list box field, this event fires. A keystroke script can restrict which keys are permitted — a numeric field, for one, might accept only numeric characters.

Acrobat's interface lets an author attach a Selection Change script to list boxes, and it runs each time an item is picked. Under the hood this is the keystroke event, with the keystroke value standing in for the user's selection. The combo box behaves the same way — its "keystroke" amounts to pasting the drop-down selection into the text field.

Right before the validate event fires, the keystroke script gets one last call, which sets willCommit to true for the event. During keystroke handling it can help to run a final pre-commit check on the field value before it is locked in, giving the script author a graceful way to deal with awkward formats that only partial keystroke-by-keystroke checking can cover.

Text fields invoke the keystroke event in cases beyond the user typing or committing a value. It also fires to validate a field's default value when that value is set through the UI or by JavaScript, and to validate autofill entries. Not every event property is populated in these cases: specifically, event.target is undefined while validating default values, and event.richChange and event.richValue are undefined while validating autofill entries.

The target of this event is whichever field's keystroke script is running. It also defines the commitKey, change, changeEx, keyDown, modifier, selEnd, selStart, shift, targetName, value, and willCommit properties.

This one does heed the rc return code. Set it to false and the keystroke is dropped. When the script wants to swap in its own keystroke, the resulting change stands in for it. Adjusting the resultant selEnd and selStart properties can shift the field's current text selection.
