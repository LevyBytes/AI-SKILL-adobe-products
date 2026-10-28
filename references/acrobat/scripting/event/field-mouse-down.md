# Field/Mouse Down

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Fired the moment a user begins clicking a form field while the mouse button stays pressed. No mouse-down event happens unless a mouse enter event came first. Keep processing here to a minimum — playing a brief sound, for example.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.
