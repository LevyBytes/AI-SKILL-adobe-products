# stop

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Ends playback of the current media, whenever it is playing or paused, and fires a Stop event (onStop or afterStop). That Stop event may land while the stop method runs or later on, according to the player. When the media is neither playing nor paused, it does nothing.

An exception is thrown when the player is closed.

Once playback ends, the player parks the media position at either the start or the end of media, according to the player. Calling MediaPlayer.play afterward begins playback from the start of media.
