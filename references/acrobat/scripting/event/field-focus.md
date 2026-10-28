# Field/Focus

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.05 | No | No | All |

Landing after the mouse-down event yet ahead of the mouse-up event once the field takes focus, this event arises no matter whether a mouse click activated the field (the tab key serves too), and it is the ideal spot for any work that must finish before the user starts interacting with the field.

The target of this event is whichever field's validation script is running. It also defines the modifier, shift, and targetName properties.

The rc return code carries no weight for this event.
