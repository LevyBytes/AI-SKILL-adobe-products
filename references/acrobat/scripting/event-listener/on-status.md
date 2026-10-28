# onStatus

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Each time a MediaPlayer reports one of its assorted status changes, the Status event fires. The companion afterStatus is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, a Status event's event object carries the following as well:

| media.code | Status code value, defined in app.media.status |
| --- | --- |
| media.text | Status message text |

Only a subset of media players set the values below, and only while media.code == app.media.status.buffering. At all other times they read zero.

| media.progress | Progress value from 0 to media.total |
| --- | --- |
| media.total | Maximum progress value |

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |
