# getPlaySettings

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Builds and hands back a MediaSettings object, which you can then turn into a MediaPlayer object.

Only a MediaRendition offers this method.

Parameters

| Parameter | Description |
| --- | --- |
| bGetData | (optional) A Boolean. Set it true and the MediaSettings object hands back the MediaData (See MediaSettings. data). |

Returns

A MediaSettings object

Note

app.media.getAltTextSettings invokes getPlaySettings(false) to pull the right settings for showing alternate text.

Among the properties carried on this MediaSettings object are:

| Property | Condition |
| --- | --- |
| autoPlay |  |
| baseURL | (if specified in rendition) |
| bgColor |  |
| bgOpacity |  |
| data | (if bGetData is true) |
| duration |  |
| endAt |  |
| layout |  |
| monitorType |  |
| palindrome |  |
| showUI |  |
| rate |  |
| repeat |  |
| startAt |  |
| visible |  |
| volume |  |
| windowType |  |

As things stand in this release of Acrobat, the settings object carries every one of these properties, save for the exceptions flagged above. Where a value such as startAt was never set, null stands in. Down the road this could shift toward reporting only the values genuinely provided and assuming defaults for whatever is left.

Example:

Get the settings with `myRendition.getPlaySettings()`. Test `settings.startAt` for truthiness before using it. The source explicitly warns against `settings.startAt !== null`, which does not also exclude undefined.

See app.media. getAltTextSettings and app.media. openPlayer for examples of usage.
