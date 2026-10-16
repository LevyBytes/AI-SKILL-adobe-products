# alwaysShowFocus

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R/W |

By default a screen annotation toggles a focus rectangle on and off to signal whether it holds the keyboard focus. Set this property to true and the focus rectangle stays drawn even while the annotation lacks focus. The point of this is docked media playback: the annotation's focus rectangle can stay on screen although the keyboard focus has actually moved to the media player.

The PDF file does not store this property. Any change you make lasts only for the current session.
