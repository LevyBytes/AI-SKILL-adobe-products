# setFocus

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hands keyboard focus to the media player and fires a Focus event (onFocus or afterFocus). When some other player or PDF object holds focus, that object gets a Blur event (onBlur or afterBlur). When the media player already holds focus, nothing happens. An exception is thrown if the player is closed or not visible.

Example: look to createPlayer for a usage sample.
