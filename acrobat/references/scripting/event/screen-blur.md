# Screen/Blur

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Trailing every other event, this one fires right as the screen annotation gives up focus. It is raised whether or not a mouse click did the deactivating (the tab key, say, might do it instead).

The target of this event is the ScreenAnnot object that set it off. targetName holds the screen annotation's title. It also defines the modifier and shift properties.

The rc return code carries no weight for this event.
