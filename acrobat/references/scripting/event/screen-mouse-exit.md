# Screen/Mouse Exit

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Acting as the counterpart to Mouse Enter, this event fires once the pointer leaves a screen annotation's rectangle. No Mouse Exit event can fire unless a Mouse Enter event preceded it.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.
