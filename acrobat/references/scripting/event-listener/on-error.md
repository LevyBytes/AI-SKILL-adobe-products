# onError

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Whenever something goes wrong inside a MediaPlayer, the Error event fires. The companion afterError is documented too; EventListener spells out how the on- and after- forms differ.

Beyond the usual event properties, an Error event's event object carries the following as well:

| media.code | Status code value |
| --- | --- |
| media.serious | true for serious errors, false for warnings |
| media.text | Error message text |

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | <br>The EventListener receives this event object automatically as its argument. |

onEscape

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Pressing Escape while a MediaPlayer is open and holds the keyboard focus fires the Escape event. It is possible for a MediaPlayer to get an Escape event ahead of its Ready event.

The companion afterEscape is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |
