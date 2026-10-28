# afterDestroy

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

A Destroy event fires whenever a screen annotation is destroyed.

By the time the afterDestroy event method runs, the screen annotation is already gone from the document and its JavaScript object is dead.

See also onDestroy (EventListener spells out how on and after event methods differ).

Parameters

| Parameter | Description |
| --- | --- |
| oMediaEvent | An event object handed to this EventListener automatically. |
