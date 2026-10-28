# Screen/InView

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

The first time a new page comes into the user's view, this event fires. With the page layout set to Continuous or Continuous - Facing, it precedes the Screen/Open event.

The target of this event is the ScreenAnnot object that set it off. targetName holds the screen annotation's title. It also defines the modifier and shift properties.

The rc return code carries no weight for this event.
