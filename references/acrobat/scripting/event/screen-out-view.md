# Screen/OutView

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

This event fires the first time a page leaves the user's view. With the page layout set to Continuous or Continuous - Facing, the firing lands after the Screen/Close event.

Whichever ScreenAnnot object kicked off the event is its target. targetName holds the screen annotation's title. The modifier and shift properties are likewise defined on this event.

The rc return code is ignored by this event.
