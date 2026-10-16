# dispatchEvent()

controlObj.dispatchEvent(eventObj)

### Description

Makes an event occur on this target. A script can build a specific event object with ScriptUI.events.createEvent(), then pass that object here to begin propagation for the event.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventObj | Object | An object derived from the UIEvent base class. |

### Returns

Boolean. Returns false if any registered listener that processed the event called preventDefault() on the event object; otherwise returns true.
