# initUIEvent()

eventObj.initUIEvent(eventName, bubble, isCancelable, view, detail)

### Description

Changes an event before dispatch to its targets. The change applies only while UIEvent.eventPhase is Event.`NOT_DISPATCHING`.

All other phases ignore it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Event name string. |
| bubble | Boolean | True means the event should fire on ancestors of the target object during bubbling. |
| isCancelable | Boolean | True means the event can be canceled. |
| view | Container or Control object | Object, either a container or a control, that sent the event. |
| detail | Any | Event details, varying by event type. For the click event, 1 or 2 indicates a single or double click. |

### Returns

Nothing
