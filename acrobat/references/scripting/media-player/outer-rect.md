# outerRect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array | R/W |

A rectangle array describing the player's outer rectangle. As with the other arrays of this kind in JavaScript for Acrobat, the order is [ left, top, right, bottom ]. Everything ringing the player's edges — controller, window title, and similar gadgets — falls within this rectangle. Until the player opens, the value is undefined.

With a docked media player, that rectangle sits in device space and is read-only. Trying to set it throws an exception. To resize a docked player, call MediaPlayer.triggerGetRect instead. A floating media player reports its rectangle in screen coordinates and accepts writes, though the user's security settings can override whatever you assign. Move a floating media player offscreen, for instance, and it can be forced back into view; no exception results. Read the property after writing it to check whether your value was overridden.

See also innerRect.
