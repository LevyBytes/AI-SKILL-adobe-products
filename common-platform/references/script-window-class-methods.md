# Window Class Methods, Window Object Constructor, Window Object Attributes, Container Attributes ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Window Class Methods; Window Object constructor; Window Object Attributes; Container Attributes; Window Object Methods; Window event-handling callbacks.

## Window Class Methods

### Window class — Window Class Methods

Call these functions on the class. Example:

```
Window.alert("Notification to user");
```

### alert()

Window.alert(message[, title="Script Alert", errorIcon=false]);

### Description

Displays a platform-standard dialog that shows a brief message with an OK button.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | String used for the displayed message. |
| title | String | Optional. String shown as the dialog title when the platform supports titles. Alert dialogs on Mac OS do not support titles. The default title is "Script Alert" |
| errorIcon | Boolean | Optional. When true, the dialog uses the platform-standard error icon instead of the platform-standard alert icon. Default is false. |

### Returns

Nothing

### confirm()

Window.confirm(message[, noAsDflt=false, title="Script Alert"]);

### Description

Displays a platform-standard dialog that shows a brief message and the two buttons "Yes" and "No".

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | String used for the displayed message. |
| noAsDflt | Boolean | Optional. When true, the No button becomes the default selection when the user types ENTER. Default is false, so Yes is the default choice. |
| title | String | Optional. String shown as the dialog title when the platform supports titles. Confirmation dialogs on Mac OS do not support titles. The default title is "Script Alert" |

### Returns

Boolean. true when the user clicked "Yes"; false when the user clicked "No".

### find()

Window.find(resourceName)

Window.find(type, title)

### Description

Use this method to locate an existing window. That can include windows already created by a script and windows created by the application, when the application supports that case.

Warning

Not every ScriptUI implementation supports this method.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| resourceName | String | Predefined resource name available to JavaScript in the current application. |
| type | String | Optional. Window type (see Window object constructor), used when multiple windows share the same title. Can be null or the empty string. |
| title | Strign | Title text for the window. |

### Returns

Returns the Window object found or generated from the resource; returns null when no matching window or resource exists.

### prompt()

Window.prompt(message, preset[, title="Script Prompt"]);

### Description

Displays a modal dialog and returns the text entered by the user.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| message | String | String used for the displayed message. |
| preset | String | Initial value shown in the text edit field. |
| title | String | Optional. String shown as the dialog title. On Windows, the title is displayed in the window frame; on Mac OS, it is placed above the message. The default title is "Script Prompt". |

### Returns

If the user clicked OK, this returns the text edit field value; if the user clicked Cancel, it returns null.

## Window Object constructor

### Window object — Window Object constructor

A `new Window` call returns a Window object, or returns null when the window cannot be created.

```
new Window (type [, title, bounds, {creation_properties}]);
```

Parameter

Type

Description

type

String

Window category. One of: - "dialog" - Builds a modal dialog. - "palette" - Builds a modeless floating-palette dialog. (Not supported by Photoshop CC.) - "window" - Builds a basic top-level window for use as an application's main window. (Not supported by Photoshop CC.) When this argument is a ScriptUI resource specification, ScriptUI ignores every other argument. See Resource specifications.

title

String

Optional. Text for the window title. This string can be localized.

bounds

Bounds object.

Optional. Position and dimensions for the window.

creation_properties

Object

Optional. Holds any of the properties listed below.

| --- | --- | --- |

### Creation Properties

Parameter

Type

Description

resizeable

Boolean

If true, the user may resize the window. Default is false.

su1PanelCoordinates

Boolean

(Photoshop only) If true, child panels in this window adjust their children's positions automatically for compatibility with Photoshop CS, where the vertical coordinate was taken outside the frame. A panel can override the setting inherited from its parent window. Default is false.

closeButton

Boolean

If true, the title bar gets a close button when the platform and window type permit one. If false, that button is omitted. Dialogs do not use this property. Default is true.

maximizeButton

Boolean

If true, the title bar gets a button that can enlarge the window to its maximum size, typically the whole screen, when supported by the platform and window type. If false, that button is omitted. Dialogs do not use this property. Default is false for type palette, true for type window.

minimizeButton

Boolean

If true, the title bar gets a button that minimizes or iconifies the window when supported by the platform and window type. If false, that button is omitted. Main windows cannot have a minimize button in Mac OS. Dialogs do not use this property. Default is false for type palette, true for type window.

independent

Boolean

If true, a window whose type is window is independent from other application windows and can sit behind them on Windows. In Mac OS, this setting has no effect. Default is false.

borderless

Boolean

If true, the window is drawn without a title bar or borders. Settings for those title-bar and border features are ignored.

| --- | --- | --- |

## Window Object Attributes

### Window object — Window Object Attributes

These element properties are specific to Window elements:

### active

windowOrContainerObj.active

### Description

When true, this object is active; otherwise it is false. Assign true to activate a specific control or dialog.

- Any visible modal dialog counts as the active dialog.
- For palettes, the active one is the window at the front.
- For controls, active means focused: it accepts keystrokes, and a Button can be chosen by typing RETURN or ENTER.

### Type

Boolean

### cancelElement

windowOrContainerObj.cancelElement

### Description

For a dialog-type window, identifies the control notified when the user types the ESC key.

By default, ScriptUI searches for a button whose name or text is "cancel", ignoring case.

### Type

Control object

### defaultElement

windowOrContainerObj.defaultElement

### Description

For a dialog-type window, identifies the control notified when the user types the ENTER key.

By default, ScriptUI searches for a button whose name or text is "ok", ignoring case.

### Type

Control object

### frameBounds

windowOrContainerObj.frameBounds

### Description

A Bounds object giving the Window frame's screen-coordinate boundaries.

The frame includes the title bar and border area surrounding the content region, as defined by the host window system.

### Type

Bounds. Read only.

### frameLocation

windowOrContainerObj.frameLocation

### Description

Point value for the Window frame's top left corner. Equivalent to [frameBounds.x, frameBounds.y].

Set this property to move the frame to the requested screen position. The frameBounds value is updated to match.

### Type

Point

### frameSize

windowOrContainerObj.frameSize

### Description

A Dimension object describing the Window frame's screen-coordinate size and location.

### Type

Dimension. Read only.

### maximized

windowOrContainerObj.maximized

### Description

True means the window is expanded.

### Type

Boolean

### minimized

windowOrContainerObj.minimized

### Description

True means the window is minimized or iconified.

### Type

Boolean

### opacity

windowOrContainerObj.opacity

### Description

Window opacity, expressed within the range [0..1].

A value of 1.0 (the default) renders the window fully opaque; a value of 0 renders it fully transparent.

Values between those endpoints render partial transparency at the requested level.

### Type

Number

### shortcutKey

windowOrContainerObj.shortcutKey

### Description

Note

In Windows only.

Key sequence that triggers ControlEvent.onShortcutKey for this window.

### Type

String

## Container Attributes

### Window object — Container Attributes

This table covers properties shared by Window objects and container objects, namely controls of type panel, tabbedpanel, tab, and group.

### alignChildren

windowOrContainerObj.alignChildren

### Description

Controls how the layout manager aligns differently sized children inside a container's row or column. Creation order decides which children appear at the top of a column or at the left of a row; earlier children are placed nearer that top or left position.

When a child element defines alignment, that child setting takes precedence over the parent container's alignChildren value.

With one string value, the permitted choices vary according to orientation.

For orientation=row:

- top
- bottom
- center (default)
- fill

For orientation=column:

- left
- right
- center (default)
- fill

For orientation=stack:

- top
- bottom
- left
- right
- center (default)
- fill

With an array value, the first string element supplies horizontal alignment and the second supplies vertical alignment. Horizontal choices are left, right, center, or fill. Vertical choices are top, bottom, center, or fill.

Case does not matter for these values.

### Type

String, or Array of 2 Strings

### alignment

windowOrContainerObj.alignment

### Description

Used on a container's child elements. When present, this value takes precedence over the parent's alignChildren setting.

With one string value, the available choices vary according to orientation.

For orientation = row:

- top
- bottom
- center (default)
- fill

For orientation=column:

- left
- right
- center (default)
- fill

For orientation = stack:

- top
- bottom
- left
- right
- center (default)
- fill

With an array value, the first string element supplies horizontal alignment and the second supplies vertical alignment.

Horizontal choices are left, right, center, or fill. Vertical choices are top, bottom, center, or fill.

Case does not matter for these values.

### Type

String, or Array of 2 Strings

### bounds

windowOrContainerObj.bounds

### Description

Bounds value describing the screen-coordinate boundaries of the window drawable area. Compare frameBounds.

Containers of type tab do not use this property; the parent tabbedpanel supplies their bounds.

### Type

Bounds. Read only.

### children

windowOrContainerObj.children

### Description

The user-interface element collection that has been inserted into this window or container.

This array can be indexed by number or by a string holding an element's name. For container elements, the length property is the child count; for controls, the length is zero.

### Type

Array of Objects. Read only.

### graphics

windowOrContainerObj.graphics

### Description

ScriptUIGraphics value used to customize how the window draws in response to onDraw.

### Type

ScriptUIGraphics object

### layout

windowOrContainerObj.layout

### Description

LayoutManager value for a window or container. When a container first becomes visible, ScriptUI runs that manager by calling its layout function.

By default, the value is a LayoutManager instance created automatically at container-element creation time.

### Type

LayoutManager object

### location

windowOrContainerObj.location

### Description

Point value for the Window drawable area's top left corner, or for a panel, the frame's top left corner.

Equivalent to [bounds.x, bounds.y].

### Type

Point

### margins

windowOrContainerObj.margins

### Description

Margins value reporting the pixel gap between this container's edges and its outermost child elements. Each edge can receive a separate margin.

The default depends on container type and follows Adobe's standard UI guidance.

### Type

Margins

### maximumSize

windowOrContainerObj.maximumSize

### Description

Dimension

A Dimension object giving the largest rectangle available when automatic layout and resize handling adjust the window.

### Type

### minimumSize

windowOrContainerObj.minimumSize

### Description

Dimension

A Dimension object giving the smallest rectangle available when automatic layout and resize handling adjust the window.

### Type

### orientation

windowOrContainerObj.orientation

### Description

Specifies how elements are arranged inside this container.

The container's layout manager interprets this value.

The default LayoutManager object accepts these case-insensitive values:

- row
- column
- stack

Default orientation is tied to container type: Window and Panel default to column, while Group defaults to row.

The container orientation determines which values are valid for alignChildren and for child alignment properties.

### Type

String

### parent

windowOrContainerObj.parent

### Description

The element's direct parent, either a window or another container element. For Window objects, the value is null.

### Type

Object. Read only.

### preferredSize

windowOrContainerObj.preferredSize

### Description

Dimension value for the window's preferred size during automatic layout and resize handling. To assign only one dimension explicitly, pass -1 for the other dimension.

### Type

Dimension

### properties

windowOrContainerObj.properties

### Description

An object holding one or more container creation properties, which are used only at element creation time.

### Type

Object

### selection

windowOrContainerObj.selection

### Description

Info

For TabbedPanel objects only.

The active Tab child. Assigning this property switches the active tab. Its value may be null only when the panel has no children; assigning null otherwise is an error.

Whenever the value changes, whether from the user choosing another tab or from a script assignment, the panel's onChange callback is invoked.

### Type

tab

### size

windowOrContainerObj.size

### Description

Dimension value describing current geometry for a group or panel element, or for a window's content area.

### Type

Dimension

### spacing

windowOrContainerObj.spacing

### Description

The pixel gap between each child element and the neighboring sibling. Because a container has only one child row or one child column, one spacing value is sufficient.

The default depends on the container type and follows Adobe's standard UI guidance.

### Type

Number

### text

windowOrContainerObj.text

### Description

The title, label, or text that is displayed. This property does not apply to containers of type group or tabbedpanel.

Localization details for this string are in Localization in ScriptUI objects.

### Type

String

### visible

windowOrContainerObj.visible

### Description

true shows the element; false hides it.

Hiding a container hides its children too, but each child keeps its own visibility value and uses that value again the next time the parent is shown.

### Type

Boolean

### window

windowOrContainerObj.window

### Description

The top-level parent window for this container, represented by a Window object.

### Type

Window

### windowBounds

windowOrContainerObj.windowBounds

### Description

Bounds value giving this container's size and location relative to its top-level parent window.

### Type

Bounds

## Window Object Methods

### Window object — Window Object Methods

Window instances provide these functions; some are also available on Panel and Group container objects where noted.

### add()

windowOrContainerObj.add(type[, bounds, text, { creation_props } ]);

### Description

Creates a new control or container object, adds it to this window or container's children, and returns it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| type | String | Control type. See Control types and creation parameters. |
| bounds | Bounds object | Optional. Bounds data describing the new control or container size and position relative to its parent. See Bounds object for specification formats. When supplied, ScriptUI creates a Bounds object and assigns it to the new object's bounds property. |
| text | String | Optional. Starting text shown in the control as a title, label, or contents, depending on control type. When supplied, ScriptUI assigns it to the new object's text property. |
| creation_props | Object. | Optional. This object's properties provide creation parameters that vary by object type. See Control types and creation parameters. |

### Returns

The created object, or null if creation is not possible.

### addEventListener()

windowObj.addEventListener(eventName, handler[, capturePhase=false]);

### Description

Adds an event handler for the named event type on this window.

### Parameters

Parameter

Type

Description

eventName

String

String naming the event. Built-in event names include: - "change" - "changing" - "move" - "moving" - "resize" - "resizing" - "show" - "enterKey" - "focus" - "blur" - "mousedown" - "mouseup" - "mousemove" - "mouseover" - "mouseout" - "click" (detail = 1 for single, 2 for double)

handler

Function

Function to register for that event on this target. It may name a function defined in the extension or be a local handler function that runs when the event occurs. Handler functions receive a single UIEvent base class argument. See Registering event listeners for windows or controls.

capturePhase

Boolean

Optional. If true, the handler runs only during the capture phase of event propagation. Default is false, so the handler runs during bubbling when this object is an ancestor of the target, or during the at-target phase when this object is the target.

| --- | --- | --- |

### Returns

Nothing

### center()

windowObj.center([window])

### Description

Places this window at the screen center, or centers it relative to another supplied window.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| window | Window object | Optional. Window object instance. |

### Returns

Nothing

### close()

windowObj.close([result])

### Description

Closes this window. If the window defines an onClose callback, that callback is invoked before closure.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| result | Number | Optional. Number passed back from show after this modal dialog was opened. |

### Returns

Nothing

### dispatchEvent()

windowObj.dispatchEvent(eventObj)

### Description

Simulates an event on this target. A script can create a UIEvent base class for a particular event and pass it here to begin propagation of that event.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventObj | UIEvent base class | UIEvent base class instance. |

### Returns

Boolean. false if any registered listener that handled the event called the event object's preventDefault() method; otherwise true.

### findElement()

windowOrContainerObj.findElement(name)

### Description

Looks through this window or container's children for the named element and returns it when found.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Element name, as provided through name in the creation properties. |

### Returns

The control object, or null.

### hide()

windowObj.hide()

Hides this window. Hiding a window also hides its children; when the window is shown again, each child uses the visibility state it already had.

For a modal dialog, this closes the dialog with result 0.

### Returns

Nothing

### notify()

windowObj.notify([event])

### Description

Sends a notification message that imitates the specified user-interaction event.

### Parameters

Parameter

Type

Description

event

String

Optional. Name of the window event handler to invoke. One of: - onClose - onMove - onMoving - onResize - onResizing - onShow

| --- | --- | --- |

### Returns

Nothing

### Example

Example notification for dialog movement:

```
myDlg.notify("onMove")
```

### remove()

windowOrContainerObj.remove(index)

windowOrContainerObj.remove(text)

windowOrContainerObj.remove(child)

### Description

Removes the selected child control from the children array of this window or container. If the child is absent, no error is raised.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index/text/child | Number, String, or Control object | Child to remove, given as a 0-based index, its text value, or the child object itself. |

### Returns

Nothing

### removeEventListener()

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

### show()

windowOrContainerObj.show()

Displays this window, container, or control. If a window defines onShow, that callback runs before display.

When a window or container is hidden, its children are hidden as well; after it is shown again, those children keep their individual visibility states.

For a modal dialog, this opens the dialog and waits until dismissal before returning. If dismissal happens through close(), the method returns the result value passed to close(); otherwise it returns 0.

### Returns

Nothing

### update()

windowOrContainerObj.update()

Lets a script continue a lengthy task, such as copying a large file, while refreshing UI elements to show progress.

Ordinarily, UI drawing occurs in idle time, while the application is free and the OS event queue is being handled. During a long script, that normal event loop is unavailable. Call this method to force the needed synchronous drawing refreshes and process selected mouse and keyboard events, so a user can cancel the current operation, for example by clicking a Cancel button.

While update() runs, the application enters a modal state. In that state it ignores events that would activate another window or focus a control outside the window being refreshed. The modal state still permits drawing events for controls in other windows, as with a modal show() operation, so the script does not block UI updates elsewhere in the application during the operation loop.

Calling update() on a window that is not currently visible is an error.

### Returns

Nothing

## Window event-handling callbacks

### Window object — Window event-handling callbacks

The callbacks below may be defined for window event handling. To handle an event, define a function with the matching name on the Window instance. Other container types, such as controls of type panel or group, do not support these callbacks.

### onActivate

Called when the user activates the window by clicking it or otherwise giving it keyboard focus.

### onClose

Called when something requests that the window close, whether through an explicit close() call or a user action such as clicking the OS-specific title-bar close icon. The call occurs before the window closes, and returning false cancels the close operation.

### onDeactivate

Called when the user deactivates a window that had been active, for example by closing it or selecting another window for keyboard focus.

### onDraw

Called just before a container or control is drawn. The handler can change or control appearance through the control's associated ScriptUIGraphics object object. It receives one argument, a DrawState object object.

### onMove

Called after the window has moved.

### onMoving

Called repeatedly while a window is being moved, whenever its position changes. A handler can observe the move operation.

### onResize

Called after the window has been resized.

### onResizing

Called repeatedly while a window is being resized, whenever its height or width changes. A handler can observe the resize operation.

### onShortcutKey

(In Windows only)

Called when the user types a shortcut-key sequence matching this window's shortcutKey value.

### onShow

Called when show() requests opening the window, before the window becomes visible and after automatic layout has finished. A handler can adjust the automatic layout results.
