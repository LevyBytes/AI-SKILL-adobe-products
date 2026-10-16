# Field/Mouse Exit

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Sliding the mouse pointer back out of a field's rectangle is what fires this event. A mouse exit event cannot happen unless a mouse enter event preceded it.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.
