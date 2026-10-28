# argsDWIM

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

A "do what I mean" helper that app.media.createPlayer, app.media.openPlayer, and app.media.startPlayer rely on. For any property left unset in the PlayerArgs object, it supplies a default pulled from the event object — which is what lets those functions run as rendition action event handlers without arguments, or run inside custom JavaScript where the arguments are spelled out.

Parameters

| Parameter | Description |
| --- | --- |
| args | A PlayerArgs object (see app.media. createPlayer). |

Returns

PlayerArgs object

Example: See createPlayer for an example of usage.
