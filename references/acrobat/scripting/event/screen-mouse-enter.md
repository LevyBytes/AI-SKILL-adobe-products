# Screen/Mouse Enter

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Moving the mouse pointer so that it falls within a screen annotation's rectangle is what fires this event.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.
