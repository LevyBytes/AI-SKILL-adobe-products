# onScript

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Hitting a script trigger embedded in the media as it plays is what fires the Script event. The companion afterScript is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, a Script event's event object carries the following as well:

| media.command | Command name |
| --- | --- |
| media.param | Command parameter string |

Whatever the media clip supplies can fill these two strings. Nothing guarantees they hold runnable JavaScript; reading and acting on them is left to the onScript or afterScript EventListener.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |
