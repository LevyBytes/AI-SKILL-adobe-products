# Modal Dialogs, Size And Location Objects, Size And Location Object Types, Drawing Objects ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Modal dialogs; Size and location objects; Size and location object types; Drawing objects; Resource specifications; Using resource strings; Defining behavior with event callbacks and listeners; Defining event-handler callback functions; Simulating user events; Registering event listeners for windows or controls; How registered event-handlers are called; Communicating with the Flash application.

## Modal dialogs

### Types of controls — Modal dialogs

A modal dialog starts out hidden. A script opens it with the show method, and show does not return until the dialog has closed. The user can close it with a platform-specific window action or with one of the dialog controls you provide, commonly OK or Cancel. For a button used this way, its onClick method must call close or hide. The close method can receive a value that show returns.

For a sample showing those button definitions and callbacks, refer to Defining behavior with event callbacks and listeners.

### Working with modal dialogs

A dialog usually contains controls the user works with so the script can collect selections or entered values. Sometimes the user's result is stored on the control object and can be read after dismissal. For example, when the user changes a Checkbox or RadioButton, the updated state is available from the control's value property.

When a script must react while the dialog remains open, assign the relevant control a callback for the interaction event, such as onClick or onChange. That callback function becomes the control's onClick or onChange property value.

For example, validation of a value entered in an edittext control can happen inside that control's onChange callback handler. The callback may run the validation and display an alert when the user must correct errors.

In some modal dialogs, user choices must be valid before the script permits dismissal. To validate the dialog state after OK is clicked, define an onClose event handler for the dialog. This callback runs whenever a window is closing. Returning true allows the window to close; returning false cancels the close operation and leaves the window open.

An onClose handler can inspect any dialog control states for validity, then use alert messages or other modal dialogs to report problems that must be fixed. It can return true to dismiss the dialog, or false to keep the dialog open for correction.

### Dismissing a modal dialog

Every modal dialog needs at least one button the user can click to close it. Most modal dialogs use OK and Cancel buttons so the user can close while either accepting or abandoning the dialog's changes.

Button onClick callbacks can close the parent dialog by calling its close method. You may pass a value to close; that value is forwarded through and returned by the show method that opened the dialog. The return value lets the script tell closing events apart; for example, OK might return 1 and Cancel might return 2. For that common pattern, explicit callbacks are unnecessary; see Default and cancel elements.

A simple alert that has only OK usually does not need to return any value. More involved dialogs with several possible actions may need more outcomes. When more than two closing states must be distinguished, define custom closing callbacks instead of using the default behavior.

If a modal dialog is accidentally built without dismissal buttons, or if its buttons exist but their onClick handlers fail, the user can still close it by pressing ESC. In that situation, the system calls the dialog's close method with a value of 2. This is not a recommended dialog design; it exists as a fallback so an application is not left hanging because of a dialog operation error.

### Default and cancel elements

Users commonly close a modal dialog by clicking OK or Cancel, or by using certain keyboard shortcuts. Convention treats ENTER as equivalent to clicking OK or the default button, and ESC as equivalent to clicking Cancel. The shortcut behaves the same as calling notify for the related button control.

Set the Dialog object's defaultElement and cancelElement properties to choose which control receives each keyboard shortcut notification. Each value is the control object to notify when the user presses the corresponding shortcut.

- When a button is assigned to defaultElement and has no onClick handler, clicking it or pressing ENTER calls the parent dialog's close method, passing 1 back through the show call that opened the dialog.
- When a button is assigned to cancelElement and has no onClick handler, clicking it or pressing ESC calls the parent dialog's close method, passing 2 back through the show call that opened the dialog.

If defaultElement and cancelElement are not set directly, ScriptUI attempts to choose sensible defaults just before the dialog is first displayed. For the default element, it searches for a button whose name or text value is "ok" without considering case. For the cancel element, it searches for a button whose name or text value is "cancel" without considering case. Because name is examined before text, the behavior still works when the visible text is localized. If the dialog has no matching button, the property stays null and the keyboard shortcut does nothing in that dialog.

For best use of this feature, always include the name creation property on buttons intended for these roles.

## Size and location objects

ScriptUI uses specialized objects for the complex property values that position and size windows or user-interface elements. Scripts do not instantiate these objects directly; they are produced when the corresponding property is set, and that property then returns the object. For instance, reading bounds returns a Bounds object.

These properties can be assigned from objects, strings, or arrays.

- e.prop = Object - Provide an object containing the full property set required for that type, as shown in the table below. The property values are integers.
- e.prop = String - Provide a string containing an executable JavaScript inline object declaration that follows the same object description.
- e.prop = Array - Provide integer coordinate values in the order required for the type, as shown in the table below. For example:

These examples are equivalent ways to position a 380 by 390 pixel window near the screen's upper-left corner:

```
var dlg = new Window( "dialog", "Alert Box Builder ");
dlg.bounds = { x:100, y:100, width:380, height:390 }; // Object
dlg.bounds = { left:100, top:100, right:480, bottom:490 }; // Object
dlg.bounds = "x:100, y:100, width:380, height:390"; // String
dlg.bounds = "left:100, top:100, right:480, bottom:490"; // String
dlg.bounds = [100, 100, 480, 490]; // Array
```

The resulting object can be read either as an array in the type-defined value order or as an object using that type's supported properties.

## Size and location object types

### Size and location objects — Size and location object types

The following list identifies the property-value object types, the element properties that produce and contain them, and the corresponding array and object-property forms.

### Bounds

Bounds describes the edges of a window in screen coordinates, or a user-interface element in its container's coordinate space. It contains [left, top, right, bottom], an array giving the upper-left and lower-right corner coordinates.

Setting an element's bounds property creates a Bounds object, and reading that property returns the Bounds object.

- Required object-property names: left, top, right, bottom, or x, y, width, height.
- Required array value order: [left, top, right, bottom].

### Dimension

Dimension represents the size of a Window or user-interface element. Its [ width, height ] array stores the element's pixel dimensions.

Setting an element's size or preferredSize property creates a Dimension object. A preferredSize of -1 makes the size automatic.

- Required object-property names: width and height.
- Required array value order: [ width, height ].

### Margins

Margins records pixel spacing from a container's edges to its outermost child elements. Its [ left, top, right, bottom ] array gives the spacing from the left edge to the leftmost child, and similarly for the other sides.

Setting an element's margins property creates a Margins object.

- Required object-property names: left, top, right, and bottom.
- Required array value order: [ left, top, right, bottom ].

You may also assign a number to margins; all array entries then use that number.

### Point

Point represents the location of a Window or user-interface element. Its [ x, y ] array stores the element's x and y pixel offsets, measured from the origin of that coordinate space.

Setting an element's location property creates a Point object.

- Required object-property names: x and y.
- Required array value order: [ x, y ].

## Drawing objects

ScriptUI can draw directly on controls to alter their appearance. Implement this by responding to onDraw and calling methods on the ScriptUIGraphics object; see Defining behavior with event callbacks and listeners.

Those methods receive helper objects that package drawing-related data, including these objects:

| Object | Description |
| --- | --- |
| ScriptUIGraphics | Encapsulates the drawing methods. The graphics object is associated with each control is found in the control object's graphics property. |
| ScriptUIBrush | Describes the brush used to paint textures in a control. |
| ScriptUIFont | Describes the font used to write text into a control. |
| ScriptUIImage | Describes an image to be drawn in a control. |
| ScriptUIPath | Describes a drawing path for a figure to be drawn into a control. |
| ScriptUIPen | Describes the pen used to draw lines in a control. |

For more information about these objects, see Graphic customization objects.

ScriptUIGraphics includes factory methods for the other graphics objects. For example, ScriptUIGraphics.newBrush() produces a ScriptUIBrush instance with a specified color. The resulting graphics objects can then be assigned as ScriptUIGraphics property values, determining how a user-interface element is rendered. If the new Brush object is assigned to backgroundColor, for example, that brush color is used for the element's background.

This code makes a window background light gray:

```
g = myWindow.graphics;
myBrush = g.newBrush( g.BrushType.SOLID_COLOR, [ 0.75, 0.75, 0.75, 1 ] );
g.backgroundColor = myBrush;
```

The Adobe ExtendScript SDK includes these graphic-customization examples:

| Example | Description |
| --- | --- |
| ColorSelector.jsx | Uses graphic objects to change the background color of a window as the user selects the color value with a slider. |
| ColorPicker.jsx | A more complex version of the color-selection dialog shows how to use additional graphics objects, including fonts and paths. |

The Custom element class also lets scripts define fully customized controls of several kinds, including ranges, buttons, and lists, with all appearance handled by the onDraw implementation.

## Resource specifications

A resource specification can create one or several user-interface elements at once. This specially formatted string gives a compact way to define an element, including a container and any components inside it. Pass the resource-specification string as the type parameter to the Window() or add() constructor function.

A typical resource specification starts with an element type, such as dialog, followed by a braced property-definition section.

```
var myResource = "dialog{ control_specs }";
var myDialog = new Window ( myResource );
```

Inside windows and other containers, controls are declared as properties. For each control, write the control class name and then its properties inside braces. This example specifies a button:

```
testBtn: Button { text: "Test" }
```

This resource string defines a panel containing grouped StaticText and EditText controls:

```
"msgPnl: Panel { orientation:'column', alignChildren:['right', 'top'],\
    text: 'Messages', \
    title: Group { \
        st: StaticText { text:'Alert box title:' }, \
        et: EditText { text:'Sample Alert', characters:35 } \
    }
    msg: Group { \
        st: StaticText { text:'Alert message:' }, \
        et: EditText { properties:{multiline:true}, \
        text:'<your message here>' \
    } \
}"
```

The property named properties holds creation properties; see Creation properties.

Valid property-value forms are the literals null, true, and false; String and Number values; inline Array values; and Object values.

```
[ value, value, ... ]
```

```
{ classname inlineObject }
```

```
{ propertyName: propertyValue, propertyName: propertyValue, ... }
```

## Using resource strings

### Resource specifications — Using resource strings

These Adobe ExtendScript SDK examples show resource specification strings in use:

| AlertBoxBuilder1.jsx | Demonstrates one way to use resource strings, creating a dialog that allows the user to enter some values, and then using those values to construct the resource string for a customizable alert dialog. |
| --- | --- |
| AlertBoxBuilder2.jsx | Constructs the same dialog, using a resource string (rather than the add() method) to specify all of the dialog contents for the user-input dialog. |

Both Alert Box Builder examples build the same dialog for gathering user-entered values.

After values are collected, the Build button event handler assembles a resource string and the dialog invocation function returns it. The script then writes that resource string to a file. Later, the saved resource string can create and display the user-configured alert box.

The resource specification format is also valid for creating one element or container together with its child elements. For example, if alertBuilderResource did not already include the btnPnlResource panel, you could define that resource separately and then add it to the dialog like this:

```
var btnPnlResource = "btnPnl: Panel { orientation:'row', \
    text: 'Build it', \
    testBtn: Button { text:'Test' }, \
    buildBtn: Button { text:'Build', properties:{name:'ok'} }, \
    cancelBtn: Button { text:'Cancel', properties:{name:'cancel'} } \
}";

dlg = new Window( alertBuilderResource );
dlg.btnPnl = dlg.add( btnPnlResource );
dlg.show();
```

## Defining behavior with event callbacks and listeners

Controls need defined behavior before they can react usefully to user interaction. Define event-handling callback functions as part of a control or window definition. For a particular event, create a handler function and store a reference to it in the matching property on the window or control object. Different window and control types respond to different user actions, or events:

- To react when a user opens or closes the window, define onShow and onClose callback functions.

- For the event itself, define an onClick callback function.

- EditNumber, EditText, Scrollbar, and Slider controls fire events when content or values change, such as user typing in an edit field or moving a scroll or slider indicator. Handle those events with onChange and onChanging callback functions.

  - TreeView also fires events when the user expands or collapses a node; handle them with onExpand and onCollapse callback functions.

- ListBox also fires an event when an item is double-clicked. Handle that interaction with an onDoubleClick callback function.

  - A handler can use methods on the control's associated ScriptUIGraphics object to alter or control how the container or control is drawn.

- On Windows only, shortcutKey can register a key sequence for a window or for most control types. Define onShortcutKey on that control to handle the key sequence.

## Defining event-handler callback functions

### Defining behavior with event callbacks and listeners — Defining event-handler callback functions

A script may define an event handler either as a named function referenced from the callback property, or as an inline anonymous function assigned directly to that property.

```
function hasBtnsCbOnClick() { /* do something interesting */ }
hasBtnsCb.onClick = hasBtnsCbOnClick;
```

```
UI-element.callback-name = function () { handler-definition };
```

Event-handler functions receive no arguments.

For example, this assignment stores an onClick function on hasBtnsCb that turns on a sibling control:

```
hasBtnsCb.onClick = function () {
    this.parent.alertBtnsPnl.enabled = this.value;
};
```

The following statements assign onClick handlers to buttons that close their containing dialog. Each handler returns a different value to the show method that opened the dialog, allowing the calling script to identify the clicked button:

```
buildBtn.onClick = function() {
    this.parent.parent.close( 1 );
};

cancelBtn.onClick = function() {
    this.parent.parent.close( 2 );
};
```

## Simulating user events

### Defining behavior with event callbacks and listeners — Simulating user events

Scripts can imitate user actions by calling notify on a window or control to send an event notification directly. Using notify, a script can generate window-control events as though the user had clicked buttons, typed text, or moved the window. If the element has an event-handler callback, notify calls it.

notify accepts an optional argument naming the event to simulate. When a control can produce only one event type, a notification without an event name uses that sole default event.

Controls that generate the onClick event:

- Button
- Checkbox
- IconButton
- RadioButton

Controls that generate the onChange event:

- DropDownList
- EditNumber
- EditText
- ListBox
- Scrollbar
- Slider
- TreeView

Controls that generate the onChanging event:

- EditNumber
- EditText
- Scrollbar
- Slider

In ListBox, double-clicking an item generates onDoubleClick.

For RadioButton and Checkbox controls, the boolean value property changes automatically when the user clicks. A notify() call that simulates a click changes value in the same way a real user click would.

For example, if hasBtnsCb currently has value true, this code switches it to false:

```
if ( dlg.hasBtnsCb.value == true ) {
    dlg.hasBtnsCb.notify(); // dlg.hasBtnsCb.value is now `false`
}
```

## Registering event listeners for windows or controls

### Defining behavior with event callbacks and listeners — Registering event listeners for windows or controls

You can define window and control behavior by registering a handler function for a particular event type on that window or control. With this approach, the script can react as the event travels through nested containers and controls.

Register the handler with addEventListener() or addEventListener(). The registered function receives an event object, derived from the UIEvent base class, containing the event details. While an event moves down a hierarchy and then back upward, a handler may act at any level; it can also call the UIEvent object's stopPropagation() method to end propagation at that point.

Registration can use either form:

```
myButton.addEventListener( "click", myFunction );
```

```
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

## How registered event-handlers are called

### Defining behavior with event callbacks and listeners — How registered event-handlers are called

When an event fires on a target, ScriptUI invokes every handler registered for that event on that target. The same event can have handlers on several different targets, including multiple targets of one type. For instance, a dialog with two checkboxes might assign a click handler to each checkbox object when each checkbox needs different click behavior.

An ancestor object can also receive events from its children. If the two checkboxes should perform the same response to a mouse click, both can share one handler registered on the parent window or container. A click in either child control then calls the handler attached to that parent window.

Both patterns can be used together, producing more than one reaction to one event. A script can attach a broad handler to the parent and a more specialized handler for the same event to the child object that is the actual target.

The order for multiple handlers is determined by the three propagation phases:

- Capture phase - For an event in an object hierarchy, ScriptUI first checks the highest ancestor that has a handler for that event, such as the window. If the top ancestor has no handler, ScriptUI continues down through ancestors, for example the dialog, until it reaches the target's direct parent. Once it finds a handler on an ancestor of the target, it runs that handler and then moves to the next phase.
- At-target phase - ScriptUI runs any handlers registered directly on the actual target object.
- Bubble phase - The event then travels outward through the hierarchy. ScriptUI looks again for handlers registered on ancestor objects for that event, beginning with the immediate parent and moving upward to the highest ancestor. When it runs a handler in this phase, propagation ends.

As an example, imagine a dialog window containing a group, and that group containing a button. The script registers one click event handler on the Window object, one on the group object, and one on the button object, which is the actual target.

After the user clicks the button, ScriptUI calls the Window object's handler first in the capture phase, then calls the button object's handler in the at-target phase. It then calls the group object's registered handler during the bubble phase.

For a handler registered on an ancestor of the actual event target, the third addEventListener() argument controls whether that ancestor handler responds during capture only rather than during bubbling. This example registers a click handler on the parent dialog object for capture-phase handling:

```
myDialog.addEventListener( "click", handleAllItems, true );
```

The default for that value is false. When it is omitted, the handler can respond in the bubbling phase if a descendant is the target, or in the at-target phase if the object itself receives the event.

To identify which registered handler is currently running, inspect eventPhase and currentTarget on the event object. During capture and bubbling, currentTarget contains the target object's ancestor where the executing handler was registered.

## Communicating with the Flash application

ScriptUI includes a Flash Player that can host a Flash application inside a window belonging to an Adobe application. That Flash application executes ActionScript, which is a JavaScript implementation separate from the ExtendScript JavaScript engine used by Adobe applications.

Create the Flash Player by adding a FlashPlayer control to the ScriptUI window. This control object provides functions for loading SWF files and controlling movie playback. It also provides functions that let the Adobe application script exchange calls and data with the Flash application's ActionScript environment. See FlashPlayer control functions.

Only these data types can cross between the two scripting environments:

- Number
- String
- Boolean
- null
- undefined
- Object
- Array

ActionScript class objects and date objects cannot be used as parameter values.

For two-way communication, the ActionScript code in the Flash application must expose the External API. Import ExternalInterface into the Flash application:

```
import flash.external.ExternalInterface;
```
