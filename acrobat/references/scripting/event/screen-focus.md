# Screen/Focus

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Arriving after the mouse-down event but before the mouse-up once the field takes focus, this routine runs whether or not a mouse click activated the screen annotation (the tab key might serve instead). It is the ideal spot for any work that must finish before the user can interact with the field.

The target of this event is the ScreenAnnot object that set it off. targetName holds the screen annotation's title. It also defines the modifier and shift properties.

The rc return code carries no weight for this event.
