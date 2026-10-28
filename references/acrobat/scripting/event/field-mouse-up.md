# Field/Mouse Up

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Clicking a form field and letting the mouse button go is what fires this event — the usual spot to hang routines such as a form's submit action. A mouse-up event cannot happen unless a mouse-down event preceded it.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.
