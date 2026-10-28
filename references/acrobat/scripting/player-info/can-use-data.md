# canUseData

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Reports whether the player can drive playback from the data handed in through its oData parameter. The answer is true when that data is usable for playback, false when it is not.

Parameters

| Parameter | Description |
| --- | --- |
| oData | A MediaData object (MediaSettings.data documents what it contains). Several routes produce one: app.media.getAltTextData, app.media.getURLData, or — by a more roundabout path — Rendition.getPlaySettings. |

Returns

Boolean
