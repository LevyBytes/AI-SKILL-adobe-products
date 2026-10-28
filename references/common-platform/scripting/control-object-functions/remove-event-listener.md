# removeEventListener()

controlbj.removeEventListener(eventName, handler[, capturePhase]);

### Description

Removes a handler registration for the given event type on this control. Every argument must match the values originally supplied when the handler was registered.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Event name. |
| handler | Function | Function previously registered to handle the event. |
| capturePhase | Boolean | Optional. Whether the handler was limited to the capture phase. |

### Returns

Nothing
