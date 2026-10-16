# getRenditionSettings

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Runs Rendition.select to obtain a MediaSelection object, then MediaSelection.rendition.getPlaySettings to obtain a MediaSettings object for playback. Should either step fail, it turns to the getAltTextSettings method for a MediaSettings object covering alternate text playback. In the end it returns whatever MediaSettings object results, or null when getAltTextSettings returned null — meaning alternate text was either unspecified or disallowed.

Parameters

| Parameter | Description |
| --- | --- |
| args | A PlayerArgs object. |

Returns

MediaSettings object or null

Example: See example 3 following openPlayer.
