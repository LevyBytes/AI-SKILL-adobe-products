# play

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Begins playback of the current media and fires a Play event (onPlay or afterPlay). That Play event may land during the play call or later on, according to the player.

Media that is already playing keeps going, firing no event. From a paused, rewinding, or fast-forwarding state it picks up at the current position. From a stopped state — at either end of the media — it starts over from the beginning.

Example: refer to the second example under [seek](seek.md).
