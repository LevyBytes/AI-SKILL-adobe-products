# onEveryEvent

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Give an Events object an onEveryEvent or afterEveryEvent property and its EventListener methods run on every event rather than on one in particular.

Ahead of any listener functions tied to a named event, the EventListener methods sitting in an onEveryEvent or afterEveryEvent property run first. (EventListener spells out how the on- and after- forms differ.)

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |

onFocus

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Keyboard focus arriving at a screen annotation or a MediaPlayer is what fires the Focus event. The companion afterFocus is documented too; EventListener spells out how the on- and after- forms differ.

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | The EventListener receives this event object automatically as its argument. |
