# addEventListener()

controlObj.addEventListener(eventName, handler[, capturePhase=false]);

### Description

Attaches a handler for the named event type when that event happens on this control.

### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Name string for the event. Supported built-ins are: - "change" - "changing" - "move" - "moving" - "resize" - "resizing" - "show" - "enterKey" - "focus" - "blur" - "mousedown" - "mouseup" - "mousemove" - "mouseover" - "mouseout" - "keyup" - "keydown" - "click" (detail = 1 for single, 2 for double) |
| handler | Function | Function registered against the specified event on this target. It can refer to a function named by the extension, or to a locally declared handler that runs when the event fires. The handler receives one argument: a UIEvent base-class object. See Registering event listeners for windows or controls. |
| capturePhase | Boolean | Optional. A true value limits the call to the capturing phase during event propagation. The default is false, so the handler runs during bubbling when this object is an ancestor of the target, or during the at-target phase when this object is the target. |

### Returns

Nothing
