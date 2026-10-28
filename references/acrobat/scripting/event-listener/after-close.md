# afterClose

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

A Close event fires whenever a media player shuts down for any reason. See also onClose (EventListener spells out how on and after event methods differ).

Before launching another media player out of the Close event, check doc.media.canPlay first to confirm playback is permitted. Playback might be barred, for one, because the document is in the middle of closing.

A Close event's event object brings these properties along on top of the standard event properties:

| Parameter | Description |
| --- | --- |
| media.closeReason | Why the player was closed, from app.media.closeReason. |
| media.hadFocus | Whether focus rested on the player at the moment it closed. |

Should a player close while holding the focus, a Blur event reaches it first and the Close event follows. Within the Close event, media.hadFocus tells you whether the player held the focus prior to closing.

By the time the afterClose event method runs, the MediaPlayer is already gone and its JavaScript object is dead.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | An event object handed to this EventListener automatically. |

Example: See onClose for a representative example.
