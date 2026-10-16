# Defining behavior with event callbacks and listeners — Registering event listeners for windows or controls

You can define window and control behavior by registering a handler function for a particular event type on that window or control. With this approach, the script can react as the event travels through nested containers and controls.

Register the handler with addEventListener() or addEventListener(). The registered function receives an event object, derived from the UIEvent base class, containing the event details. While an event moves down a hierarchy and then back upward, a handler may act at any level; it can also call the UIEvent object's stopPropagation() method to end propagation at that point.

Registration can use either form:

```javascript
myButton.addEventListener( "click", myFunction );
```

```javascript
myButton.addEventListener( "click", "function( e ) { /*handler code*/ }" );
```

When the chosen event is fired on the target, ScriptUI runs the handler or the registered code statement. A script may also create an event object with ScriptUI.events.createEvent() and send it to an event target through dispatchEvent(), which simulates the event programmatically.

To detach a previously registered handler, call removeEventListener() on the event target. Its arguments must match the original addEventListener() call exactly. Scripts commonly attach all handlers while initializing and detach them when shutting down, although that final cleanup is optional.

Handlers can also be registered on a parent or any ancestor of the real target; the next section describes that pattern.

The built-in UIEvent types map to the callback names as shown here:

| Callback | UIEvent type |
| --- | --- |
| "onChange" | "change" |
| "onChanging" | "changing" |
| "onClick" | "click" (detail = 1) |
| "onDoubleClick" | "click" (detail = 2) |
| "onEnterKey" | "enterKey" |
| "onMove" | "move" |
| "onMoving" | "moving" |
| "onResize" | "resize" |
| "onResizing" | "resizing" |
| "onShow" | "show" |
| "onActivate" | "focus" |
| "onDeactivate" | "blur" |

ScriptUI also supplies W3C event types following the W3C DOM level 3 functional specification for UI events, with these differences and omissions:

- ScriptUI omits the DOMImplementation interface's hasFeature() method, so scripts cannot query whether a particular W3C DOM feature exists in ScriptUI.
- ScriptUI maps the W3C EventTarget interface onto UI element objects such as Button, Window, and similar objects.
- ScriptUI treats a W3C AbstractView object as a UI element, for example Button or Window.
- Namespace-related properties and methods are unavailable, including initEventNS and initMouseEventNS.

For W3C mouse events, ScriptUI follows the W3C DOM level 3 functional specification for MouseEvent except for these points:

- Create a MouseEvent instance with ScriptUI.events.createEvent( "MouseEvent" ), not DocumentEvent.createEvent( "MouseEvent" ).
- MouseEvent.getModifierState is not implemented.

ScriptUI's W3C keyboard-event support follows the W3C DOM level 3 functional specification for KeyboardEvent.
