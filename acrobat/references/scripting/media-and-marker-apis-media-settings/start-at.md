# startAt

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | MediaOffset object | R/W |

Marks where playback begins, by time or by frame. As laid out under MediaOffset, this can be an outright time or frame value, a marker name, or a marker combined with a time or frame. Playback opens at that time or frame, or at the closest spot the media player can actually halt on. Leave startAt unset and it defaults to the start of the media.

See also endAt.

Example — refer to the sample given just under endAt.
