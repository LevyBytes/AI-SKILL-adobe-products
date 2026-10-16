# removeEventListener()

windowOrContainerObj.removeEventListener(eventName, handler[, capturePhase])

### Description

Unregisters an event handler for events of the named type in this window. Each argument must match the values originally used to register that handler.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Event name string. |
| handler | Function | Function previously registered to handle the event. |
| capturePhase | Boolean | Optional. Whether that handler was intended to run only during the capture phase. |

### Returns

Nothing
