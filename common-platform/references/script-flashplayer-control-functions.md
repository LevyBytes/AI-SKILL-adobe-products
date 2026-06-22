# Flashplayer Control Functions, Control Event Handling Callbacks, Drawstate, Graphic Customization Objects

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FlashPlayer control functions; Control event-handling callbacks; DrawState; Graphic customization objects.

## FlashPlayer control functions

### Control objects — FlashPlayer control functions

Info

For FlashPlayer objects only.

### Limitations

Playback control for Flash movies has these restrictions:

- Avoid using stopMovie() and playMovie() as a suspend-then-resume or restart mechanism for an SWF file created by Flex(TM).
- For some SWF files made with Flash Authoring, the stopMovie() and playMovie() sequence may be inappropriate, depending on implementation details. The sequence might fail to return the file to its initial state when the rewind argument to playMovie() is true, and might also fail to pause and then continue the file's execution when rewind is false.
- Calling stopMovie() from the player's hosting environment does not affect an SWF file running inside a ScriptUI Flash Player element. An SWF created with Flash Authoring can still be built so that it stops itself in response to user interaction.
- Avoid calling playMovie() while an SWF file is in playback.

### invokePlayerFunction()

flashPlayerObj.invokePlayerFunction(fnName, [arg1[,...argN]] )

### Description

Calls an ActionScript function that exists in the Flash application.

### Parameters

Parameter

Type

Description

fnName

String

Name of a Flash ActionScript function that the currently loaded SWF file registered with the ExternalInterface object; see Calling ActionScript functions from a ScriptUI script.

args

Any

Optional. Pass one or more arguments through to the function, using any of these types: - Array - Boolean - null - Number - Object - String - undefined

| --- | --- | --- |

### Returns

Returns the invoked function's result, which must use one of the allowed types. Return values cannot be ActionScript class objects or date objects.

### loadMovie()

flashPlayerObj.loadMovie(file)

### Description

Places a movie in the Flash Player and starts it playing. If the control was created without an associated movie file, load one with this function.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | File object | SWF file to load. |

### Returns

Nothing

### playMovie()

flashPlayerObj.playMovie(rewind)

### Description

Begins playback again for a stopped movie.

Warning

Call only after the movie has stopped playing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| rewind | Boolean | When true, playback begins again from the start; otherwise playback resumes from where it stopped. |

### Returns

Nothing

### stopMovie()

flashPlayerObj.stopMovie()

### Description

Halts the movie currently loaded for playback.

Note

Ineffective when invoked from the player's hosting environment.

### Returns

Nothing

## Control event-handling callbacks

### Control objects — Control event-handling callbacks

Certain control types signal the events listed here. To handle one, add a function with the matching name to the control object. Handler functions receive no arguments and do not expect return values; see Defining behavior with event callbacks and listeners.

### onActivate

Runs when the user gives keyboard focus to a control by clicking it or moving into it with tab navigation.

### onClick

Runs when the user clicks one of these control types:

- Button
- Checkbox
- IconButton
- RadioButton

### onChange

Runs after the user completes a change in one of these control types:

- DropDownList
- EditNumber
- EditText
- ListBox
- Scrollbar
- Slider
  TreeView

For controls of type EditNumber or EditText, it runs only once editing is complete, such as after focus leaves the control or the user types ENTER.

- The creation parameter enterKeySignalsOnChange controls the exact behavior; see the EditText description.

- For a Slider or Scrollbar, it runs once the user is done dragging the position marker or has clicked the control.
  - This can occur when a script directly sets the property, when a selected item is removed from the list, or when the user changes the selection.

### onChanging

Runs for each step of an incremental change in one of these control types:

- EditNumber
- EditText
- Scrollbar
  Slider

For EditNumber and EditText controls, it runs on every keypress while the control has focus.

- For a Slider or Scrollbar, it runs for any movement of the position marker.

### onCollapse

Runs when the user collapses (closes) a node in a TreeView control.

This function receives the collapsed ListItem node object as its parameter.

### onDeactivate

Runs after a previously active control loses keyboard focus because the user clicks elsewhere or tabs away.

### onDoubleClick

Runs on a double-click of an item in a ListBox control.

The clicked item becomes the value of the list's selection property.

### onEnterKey

Warning

This method/property is not officially documented and was identified through research. The details here may be wrong, and the method/property might disappear or stop working at some point. Please contribute if you have more information on it!

Runs when the user presses return or enter in a EditText control.

### onDraw

Runs just before a container or control is drawn. The script can adjust or manage appearance through the control's related ScriptUIGraphics object. The handler receives one argument, a DrawState object.

### onExpand

Runs when the user expands (opens) a node in a TreeView control. This function receives the expanded ListItem node object as its parameter.

### onShortcutKey

Info

For Windows objects only.

Runs when a typed shortcut-key sequence matches the shortcutKey value for an element in the active window.

## DrawState

### Control objects — DrawState object

DrawState is a helper object describing the input state when the onDraw event fires. Its properties indicate whether the current control has input focus, plus the mouse-button and key-press state.

No object constructor exists.

### DrawState object properties

These read-only properties are present on the object:

| Property | Type | Behaviour |
| --- | --- | --- |
| altKeyPressed | Boolean | True means the ALT key was pressed. (In Windows OS only.) |
| capsLockKeyPressed | Boolean | True means the CAPSLOCK key was pressed. |
| cmdKeyPressed | Boolean | True means the CMD key was pressed. (In Mac OS only.) |
| ctrlKeyPressed | Boolean | True means the CTRL key was pressed. |
| hasFocus | Boolean | True means the control containing this object has the input focus. |
| leftButtonPressed | Boolean | True means the left mouse button was pressed. |
| middleButtonPressed | Boolean | True means the middle mouse button was pressed. |
| mouseOver | Boolean | True means the cursor was inside the bounds of the control containing this object. |
| numLockKeyPressed | Boolean | True means the NUMLOCK key was pressed. |
| optKeyPressed | Boolean | True means the OPT key was pressed. (In Mac OS only.) |
| rightButtonPressed | Boolean | True means the right mouse button was pressed. |
| shiftKeyPressed | Boolean | True means the SHIFT key was pressed. |

### Event handling

Several helper classes supply lower-level support for event handling.

ScriptUI usually creates event objects and delivers them to your handler. To imitate a user action, build an event object with ScriptUI.events.createEvent() and send it to the target object's controlobj-dispatchEvent function.

Keyboard state object is another helper object, giving global access to keyboard state while a function runs outside the event-handling framework.

### Event handling — UIEvent Base Class

UIEvent stores input-event details for an event as it moves through a container and control hierarchy. KeyboardEvent object and MouseEvent object are more specialized classes based on it.

### UIEvent Object Attributes

Keyboard and mouse events share these properties.

### bubbles

eventObj.bubbles

### Description

True indicates that the event can use the bubbling phase.

### Type

Boolean

### cancelable

eventObj.cancelable

### Description

True indicates that the handler may call this object's preventDefault() method to cancel the event's default action.

### Type

Boolean

### currentTarget

eventObj.currentTarget

### Description

Element object on which the currently running handler was registered.

If the handler runs during capture or bubbling, this value may be an ancestor of the target object.

### Type

Object

### eventPhase

eventObj.eventPhase

### Description

Active phase of event propagation. Allowed constants:

- Event.`NOT_DISPATCHING`
- Event.`CAPTURING_PHASE`
- Event.`AT_TARGET`
- Event.`BUBBLING_PHASE`

### Type

Number

### target

eventObj.target

### Description

Element object at which the event happened.

### Type

Object

### timeStamp

eventObj.timeStamp

### Description

Initiation time for the event. A JavaScript Date object.

### Type

Object

### type

eventObj.type

### Description

Event name. Predefined events types are:

- "blur"
- "change"
- "changing"
- "enterKey"
- "focus"
- "move"
- "moving"
- "resize"
- "resizing"
- "show"

Other type names are specific to keyboard and mouse events.

### Type

String

### view

eventObj.view

### Description

Object, either a container or a control, that sent the event.

### Type

Container or Control object

### UIEvent Object Methods

### initUIEvent()

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

### preventDefault()

eventObj.preventDefault()

### Description

Cancels this event's default action when the event is cancelable, meaning cancelable is true.

For example, an OK button normally closes its containing dialog when clicked; this call prevents that behavior.

### Returns

Nothing

### stopPropagation()

eventObj.stopPropagation()

### Description

Stops bubbling and capturing after the handler or handlers on the current target have run.

### Returns

Nothing

### Event handling — KeyboardEvent Object

This object type is delivered to a registered event handler when keyboard input generates an event. Its properties record the keypress and modifier-key state from the time the keyboard event was created.

Info

All properties are read only.

### KeyboardEvent Object Methods

Beyond the UIEvent base class properties, a keyboard event includes these properties.

### altKey

eventObj.altKey

### Description

True means the ALT key was active.

For modifier-key keyIdentifier values, this property is undefined.

### Type

Boolean

### ctrlKey

eventObj.ctrlKey

### Description

True means the CTRL key was active.

For modifier-key keyIdentifier values, this property is undefined.

### Type

Boolean

### metaKey

eventObj.metaKey

### Description

True means the META or COMMAND key was active.

For modifier-key keyIdentifier values, this property is undefined.

### Type

Boolean

### shiftKey

eventObj.shiftKey

### Description

True means the SHIFT key was active.

For modifier-key keyIdentifier values, this property is undefined.

### Type

Boolean

### keyIdentifier

eventObj.keyIdentifier

### Description

The key producing the keypress event, represented by a W3C identifier string such as "U+0044". See W3 Keyset Article.

### Type

String

### keyLocation

eventObj.keyLocation

### Description

Constant that identifies the keyboard location for the keypress.

One of:

- `DOM_KEY_LOCATION_STANDARD`
- `DOM_KEY_LOCATION_LEFT`
- `DOM_KEY_LOCATION_RIGHT`
- `DOM_KEY_LOCATION_NUMPAD`

### Type

Number

### keyName

eventObj.keyName

### Description

The key producing the keypress event, represented as a simple key name such as "A".

### Type

String

### type

eventObj.type

### Description

Event name. Key events types are:

- keyup
- keydown

### Type

String

### KeyboardEvent Object Methods

Alongside the functions defined by the UIEvent base class, a keyboard event includes these functions.

### getModifierState()

eventObj.getModifierState(keyIdentifier)

### Description

Gets the modifier keys currently active for this event.

Note

For script-wide modifier-key checks (alt/ctrl/meta/shift) outside event handling, consult Keyboard state object.

### Parameters

Parameter

Type

Description

keyIdentifier

String

String containing one modifier-key identifier, selected from: - Alt - CapsLock - Control - Meta - NumLock - Scroll - Shift

| --- | --- | --- |

### Returns

Boolean. true means the specified modifier was active at event time; otherwise false.

### initKeyboardEvent()

eventObj.initKeyboardEvent(eventName, bubble, isCancelable, view, keyID, keyLocation, modifiersList)

### Description

Reinitializes the object so event properties can be changed after construction. The arguments populate the matching properties.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Event name string. |
| bubble | Boolean | True means the event should fire on ancestors of the target object during bubbling. |
| isCancelable | Boolean | True means the event can be canceled. |
| view | Container or Control object | Object, either a container or a control, that sent the event. |
| keyID | String | Assigns the keyIdentifier value. |
| keyLocation | String | Assigns the keyLocation. value. |
| modifiersList | String | Modifier key names separated by whitespace, such as "Control Alt". |

### Returns

Nothing

### Event handling — MouseEvent Object

This object type is passed to a registered event handler when mouse input creates an event. Its properties capture the button state, modifier-key state, and pointer position at event creation time.

With nested elements, mouse event types always target the deepest nested element. Ancestors of that target can rely on bubbling to receive notice of mouse events that happen inside descendant elements.

### MouseEvent Object Attributes

A mouse event adds these properties beyond those defined for the UIEvent base class.

Info

All properties are read only.

### altKey

eventObj.altKey

### Description

True means the ALT key was active.

For modifier-key keyIdentifier values, this property is undefined.

### Type

Boolean

### button

eventObj.button

### Description

Mouse button whose state changed.

One of:

- 0: Left button on a two- or three-button mouse, or the single button on a one-button mouse; used for UI button activation or text selection.
- 1: Middle button on a three-button mouse, or the mouse wheel.
- 2: Right button, used to show a context menu when one exists.

Some mice can provide or emulate additional buttons, with values above 2 representing those buttons.

### Type

Number

### clientX and clientY

eventObj.clientX

eventObj.clientY

### Description

Horizontal and vertical event coordinates measured against the target object. The origin sits inside any border decorations at the upper-left corner of the control or window.

### Type

Number

### ctrlKey

eventObj.ctrlKey

### Description

True means the CTRL key was active.

For modifier-key keyIdentifier values, this property is undefined.

### Type

Boolean

### detail

eventObj.detail

### Description

Event details whose meaning varies with the event type.

For click, mousedown, and mouseup events, 1 means a single click, and 2 means a double click.

### Type

Number

### metaKey

eventObj.metaKey

### Description

True means the META or COMMAND key was active.

For modifier-key keyIdentifier values, this property is undefined.

### Type

Boolean

### relatedTarget

eventObj.relatedTarget

### Description

- For a mouseover event, any UI element that the pointer exits.
- For a mouseout event, any UI element that the pointer enters.

For other cases, the value is undefined.

### Type

Object

### screenX and screenY

eventObj.screenX

eventObj.screenY

### Description

Horizontal and vertical event coordinates relative to the screen.

### Type

Number

### shiftKey

eventObj.shiftKey

### Description

True means the SHIFT key was active.

For modifier-key keyIdentifier values, this property is undefined.

### Type

Boolean

### type

eventObj.type

### Description

Event name. Mouse events types are:

- "mousedown"
- "mouseup"
- "mousemove"
- "mouseover"
- "mouseout"
- "click" (detail = 1 for single, 2 for double)

Click events occur in this order: mousedown, mouseup, click.

### Type

String

### MouseEvent Object Methods

A mouse event also includes these functions in addition to those defined for the UIEvent base class.

### getModifierState()

eventObj.getModifierState(keyIdentifier)

### Description

Gets the modifier keys currently active for this event.

### Parameters

Parameter

Type

Description

keyIdentifier

String

String containing one modifier-key identifier, selected from: - "Alt" - "CapsLock" - "Control" - "Meta" - "NumLock" - "Scroll" - "Shift"

| --- | --- | --- |

### Returns

Boolean. true means the specified modifier was active at event time; otherwise false.

### initMouseEvent()

```
eventObj.initMouseEvent(
    eventName,
    bubble,
    isCancelable,
    view,
    detail,
    screenX,
    screenY,
    clientX,
    clientY,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey,
    button,
    relatedTarge
)
```

### Description

Reinitializes the object so event properties can be changed after construction. The arguments populate the matching properties.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Event name string. |
| bubble | Boolean | True means the event should fire on ancestors of the target object during bubbling. |
| isCancelable | Boolean | True means the event can be canceled. |
| view | Container or Control object | Object, either a container or a control, that sent the event. |
| detail | Number | Assigns the single-double click value for the click event. |
| screenX, screenY | Number | Assigns event coordinates relative to the screen. |
| clientX, clientY | Number | Assigns event coordinates measured from the target object. The origin sits inside any border decorations at the upper-left corner of the control or window. |
| ctrlKey, altKey, metaKey | Boolean | Assigns the modifier key states. |
| button | Number | Assigns the mouse button. |
| relatedTarget | Object | Optional. For mouseover or mouseout, assigns any related target. |

### Returns

Nothing

## Graphic customization objects

These objects let scripts change user-interface control appearance before drawing occurs:

- ScriptUIGraphics object
- ScriptUIBrush object
- ScriptUIFont object
- ScriptUIImage object
- ScriptUIPath object
- ScriptUIPen object

Also, when the Adobe application in use supports it, the Custom element class lets you define fully customized UI elements rendered by the application according to your definition.
