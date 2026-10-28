# Screen/Close

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Whenever the page on screen stops being the current one — the user moved to another page or closed the document — this event fires.

The target of this event is the ScreenAnnot object that set it off. targetName holds the screen annotation's title. It also defines the modifier, shift, and target properties.

The rc return code carries no weight for this event.
