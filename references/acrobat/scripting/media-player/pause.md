# pause

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Halts playback of the current media and fires a Pause event (onPause or afterPause). That Pause event may land during the pause call or later on, according to the player.

When the media is already paused or stopped, or playback has yet to begin or has finished, pause does nothing. Pause is not supported by every media player and media format; streaming formats in particular usually lack it. In those cases players either throw an exception or quietly disregard pause.

Example: seek demonstrates this in context.
