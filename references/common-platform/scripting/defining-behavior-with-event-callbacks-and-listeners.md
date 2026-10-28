# Defining behavior with event callbacks and listeners

Controls need defined behavior before they can react usefully to user interaction. Define event-handling callback functions as part of a control or window definition. For a particular event, create a handler function and store a reference to it in the matching property on the window or control object. Different window and control types respond to different user actions, or events:

- To react when a user opens or closes the window, define onShow and onClose callback functions.

- For the event itself, define an onClick callback function.

- EditNumber, EditText, Scrollbar, and Slider controls fire events when content or values change, such as user typing in an edit field or moving a scroll or slider indicator. Handle those events with onChange and onChanging callback functions.

  - TreeView also fires events when the user expands or collapses a node; handle them with onExpand and onCollapse callback functions.

- ListBox also fires an event when an item is double-clicked. Handle that interaction with an onDoubleClick callback function.

  - A handler can use methods on the control's associated ScriptUIGraphics object to alter or control how the container or control is drawn.

- On Windows only, shortcutKey can register a key sequence for a window or for most control types. Define onShortcutKey on that control to handle the key sequence.
