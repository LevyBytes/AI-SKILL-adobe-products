# Screen/Mouse Down

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Firing of this event begins the moment the user presses down on a screen annotation while the mouse button stays held. Keep whatever you run here lightweight — a brief sound clip is a good example. Without a preceding mouse enter event, no mouse-down event fires at all.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.
