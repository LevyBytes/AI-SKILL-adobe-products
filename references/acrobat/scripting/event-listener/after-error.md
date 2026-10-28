# afterError

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

An Error event fires whenever something goes wrong inside a MediaPlayer. See also onError (EventListener spells out how on and after event methods differ).

An Error event's event object brings these properties along on top of the standard event properties:

| media.code | Status code value. |
| --- | --- |
| media.serious | True for serious errors, false for warnings. |
| media.text | Error message text. |

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | An event object handed to this EventListener automatically. |
