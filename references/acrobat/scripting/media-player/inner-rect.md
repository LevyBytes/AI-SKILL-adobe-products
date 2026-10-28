# innerRect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array | R/W |

A rectangle array describing the player's inner rectangle. Like the other such arrays in JavaScript, its coordinates run [left, top, right, bottom]. Window titles and similar edge gadgets fall outside this rectangle, yet the player controller, when shown, sits inside it. While the player stays closed, the value is undefined.

With a docked media player, that rectangle lives in device space and is read-only — assigning to it throws an exception. To make a docked player resize, call triggerGetRect instead. A floating media player gives its rectangle in screen coordinates and lets you write to it, but the user's security settings can override whatever you assign. Push a floating media player offscreen, say, and it can be shoved back into view; no exception results. Read the property back after assigning it to learn whether your value survived.

See also outerRect.
