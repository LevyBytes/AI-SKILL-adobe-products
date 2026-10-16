# ScriptUI.events.createEvent()

ScriptUI.events.createEvent(eventType)

### Description

The events property contains this JavaScript function.

The event object created here is passed to a handler function registered for a particular event type on a window or control. Register that handler with windowObj.addEventListener() or controlObj.addEventListener().

For related information, see Registering event listeners for windows or controls.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventType | String | Event category. One of: - UIEvent - KeyboardEvent - MouseEvent |

### Returns

Returns an event object with the corresponding type:

- A UIEvent base class stores input event information for an event as it moves through a container and control hierarchy. It is the base class for the specialized keyboard and mouse event types.
- A KeyboardEvent object stores information about keyboard input events.
- A MouseEvent object stores information about mouse events.
