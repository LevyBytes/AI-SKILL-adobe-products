# Screen/Mouse Up

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Releasing the mouse button after clicking a screen annotation is what fires this event. Hooking up actions like launching a multimedia clip belongs right here. A mouse-up event cannot fire unless a mouse-down event came first.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.
