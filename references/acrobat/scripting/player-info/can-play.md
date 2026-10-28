# canPlay

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Tests whether this media player is allowed for playback, weighing the user's security settings.

With bRejectPlayerPrompt set true, the call returns false whenever using this player would trip a security prompt. Left otherwise, it returns true if playback can proceed at all, prompt or no prompt. (The check itself never raises a security prompt, though a later attempt to spin up a media player might.)

Parameters

| Parameter | Description |
| --- | --- |
| oDoc | A Doc |
| bRejectPlayerPrompt | A Boolean defaulting to false. Set it true and the call yields false whenever this player would trigger a security prompt; leave it false and the call yields true as long as playback is permitted at all, whether or not a prompt appears. |

Returns

Boolean
