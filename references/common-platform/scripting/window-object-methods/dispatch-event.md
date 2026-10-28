# dispatchEvent()

windowObj.dispatchEvent(eventObj)

### Description

Simulates an event on this target. A script can create a UIEvent base class for a particular event and pass it here to begin propagation of that event.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventObj | UIEvent base class | UIEvent base class instance. |

### Returns

Boolean. false if any registered listener that handled the event called the event object's preventDefault() method; otherwise true.
