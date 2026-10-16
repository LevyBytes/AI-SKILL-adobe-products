# addEventListener()

windowObj.addEventListener(eventName, handler[, capturePhase=false]);

### Description

Adds an event handler for the named event type on this window.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | String naming the event. Built-in event names include: - "change" - "changing" - "move" - "moving" - "resize" - "resizing" - "show" - "enterKey" - "focus" - "blur" - "mousedown" - "mouseup" - "mousemove" - "mouseover" - "mouseout" - "click" (detail = 1 for single, 2 for double) |
| handler | Function | Function to register for that event on this target. It may name a function defined in the extension or be a local handler function that runs when the event occurs. Handler functions receive a single UIEvent base class argument. See Registering event listeners for windows or controls. |
| capturePhase | Boolean | Optional. If true, the handler runs only during the capture phase of event propagation. Default is false, so the handler runs during bubbling when this object is an ancestor of the target, or during the at-target phase when this object is the target. |

### Returns

Nothing
