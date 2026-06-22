# Control Object Properties, Control Object Functions, List Control Object Functions

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Control object properties; Control object functions; List control object functions.

## Control object properties

### Control objects — Control object properties

The table below lists ScriptUI control element properties. Some values are restricted to particular control types, as noted.

For properties on container elements, see Container Attributes; that set applies to controls whose type is panel, tabbedpanel, tab, or group.

### active

controlObj.active

### Description

true means the object is active; false means it is not. Assign true to activate a specific control or dialog.

- A visible modal dialog is active by definition.
- The active palette is the front-most window.
- The focused control is active: it receives keystrokes, or for a Button, can be chosen by ENTER in Windows or the spacebar in Mac OS.

### Type

Boolean

### alignment

controlObj.alignment

### Description

This applies to child elements inside a container. When present, it takes precedence over the parent container's alignChildren setting.

With a single string value, the permitted values are determined by the parent container's orientation value.

orientation Value

Allowed values

"row"

- "bottom"
- "center" (default)
- "fill"
- "top"

"column"

- "center" (default)
- "fill"
- "left"
- "right"

"stack"

- "bottom"
- "center" (default)
- "fill"
- "left"
- "right"
- "top"

| --- | --- |

For arrays, string element 1 controls horizontal alignment, and string element 2 controls vertical alignment.

Valid horizontal alignment values are "left", "right", "center" and "fill".

Valid vertical alignment values are "top", "bottom", "center", and "fill".

Note

Case does not matter for these values.

### Type

String or Array of 2 Strings

### bounds

controlObj.bounds

### Description

This Bounds object describes element boundaries. Window elements use screen coordinates; child elements use coordinates relative to their parent (compare windowBounds). For windows, bounds covers only the content region.

Warning

Changing an element's size or location also changes bounds, and changing bounds likewise affects size or location.

### Type

Bounds

### characters

controlObj.characters

### Description

LayoutManager uses this value to compute the default preferredSize for StaticText or EditText.

The control is made wide enough to show the specified count of X characters in the control's font. Setting this property is the preferred way to reserve display space for a maximum character count.

### Type

Number

### checked

controlObj.checked

### Description

Info

For ListItem objects only.

- true marks the item with the checkmark appropriate for the platform.
- false draws no checkmark, but still reserves left-margin space so the item aligns with other checkable entries.
- undefined reserves no checkmark space.

### Type

Boolean

### columns

controlObj.columns

### Description

Info

For ListBox objects only.

This JavaScript object has two read-only properties; creation parameters set their values.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| titles | Array of Strings | Column title strings whose count matches the columns specified at creation. |
| preferredWidths | Array of Numbers | Column widths whose count matches the columns specified at creation. |

### Type

Object

### enabled

controlObj.enabled

### Description

- true enables the control so it accepts input.
- false prevents control elements from accepting input and dims every element type.

Note

A disabled ListItem is unavailable for selection in a ListBox, DropDownList, or TreeView.

### Type

Boolean

### expanded

controlObj.expanded

### Description

For type node ListItem objects in TreeView list controls. true expands the item and shows its children; false collapses it and hides the children.

### Type

Boolean

### graphics

controlObj.graphics

### Description

Use this ScriptUIGraphics object to customize the control's appearance in response to onDraw.

### Type

ScriptUIGraphics object

### helpTip

controlObj.helpTip

### Description

When the cursor hovers over a UI control element, this short help message, also known as a tool tip, appears in a small floating window.

Assign an empty string or null to clear the help text.

### Type

String

### icon

controlObj.icon

### Description

Danger

Do not use icon; use Image.

### Type

String or File object

### image

controlObj.image

### Description

This value can be a ScriptUIImage object, an icon resource name, a pathname, or a File object that points to a platform-specific PNG or JPEG image file, or to a shortcut or alias for such a file.

- For an IconButton, the button content is the icon.
- For an Image, the element's entire content is the image.
  - When its parent is a multi-column ListBox, the first-column label uses this image, and subitems supplies labels for later columns.
  - See Creating multi-column lists.

### Type

ScriptUIImage object

### indent

controlObj.indent

### Description

This indent is measured in pixels during automatic layout. It applies for left alignment in column orientation, and for top alignment in row orientation.

### Type

Number

### index

controlObj.index

### Description

Info

Applies only to ListItem objects.

This item's position is measured within the parent list control's items collection.

### Type

Number. Read only.

### items

controlObj.items

### Description

Info

Applies only to ListBox, DropDownList, or TreeView objects.

This is the collection of ListItem objects for list entries. Access it with 0-based indexes.

Tip

Use items.length to get the number of items in the list.

### Type

Array of Objects. Read only.

### itemSize

controlObj.itemSize

### Description

Info

Applies only to ListBox, DropDownList, or TreeView objects.

This Dimension object describes each list item's pixel width and height.

When preferredSize for the list is not otherwise specified, auto-layout uses this value.

If no explicit value is assigned, every item is sized to match the largest height and width found among all list items.

### Type

Dimension object

### jumpdelta

controlObj.jumpdelta

### Description

Info

For Scrollbar objects only.

This is the amount by which a Scrollbar indicator's position increases or decreases when the user clicks before or after the movable element.

Default: 20% of the maxvalue-to-minvalue range.

### Type

Number

### justify

controlObj.justify

### Description

This property sets how StaticText and EditText text is justified.

One of:

- "left" (default)
- "center"
- "right"

Note

Justification is honored only when set at creation through a resource specification or creation parameters.

### Type

String

### location

controlObj.location

### Description

This Point object gives the element location as [x, y], the upper-left corner coordinates. Window elements use screen coordinates; other elements use coordinates relative to their parent.

location is defined as [bounds.x, bounds.y].

By default, location remains undefined until the parent container's layout manager runs.

Warning

Changing an element's size or location also changes bounds, and changing bounds likewise affects size or location.

### Type

Point object

### maximumSize

controlObj.maximumSize

### Description

This Dimension object defines the maximum height and width allowed for an element.

By default, each dimension is 50 pixels less than the screen size. In Windows, that can cover the full screen, so define maximumSize large enough for the intended use.

### Type

Dimension object

### minimumSize

controlObj.minimumSize

### Description

Element minimum height and width are defined by this Dimension object. Default: [0,0].

### Type

Dimension object

### maxvalue

controlObj.maxvalue

### Description

The largest value accepted by the value property.

- If resetting maxvalue would put it below value, value becomes maxvalue.
- If resetting maxvalue would put it below minvalue, minvalue becomes maxvalue.

### Type

Number

### minvalue

controlObj.minvalue

### Description

The smallest value accepted by the value property.

- If resetting minvalue would put it above value, value becomes minvalue.
- If resetting minvalue would put it above maxvalue, maxvalue becomes minvalue.

### Type

Number

### parent

controlObj.parent

### Description

This element's immediate parent object.

### Type

Control Object. Read only.

### preferredSize

controlObj.preferredSize

### Description

Layout managers use this Dimension object to choose the best size for each element. If a script does not set it explicitly, the user-interface framework hosting ScriptUI supplies the value, based on element attributes such as text, font, font size, icon size, and other framework-specific UI attributes.

Before invoking the layout manager, a script may set preferredSize explicitly to request an element size other than the default. To specify only one dimension, set the other dimension to -1.

### Type

Dimension object

### properties

controlObj.properties

### Description

This object stores one or more creation properties for the element; those properties are used only while creating the element.

### Type

Object

### selected

controlObj.selected

### Description

Info

For ListItem objects only.

- true means the item belongs to the parent list's selection.
- false means the item is not selected.

Assign true to select this item in a single-selection list; in a multi-selection list, true adds it to the selection array.

### Type

Boolean

### selection

controlObj.selection

### Description

Info

Applies only to ListBox objects.

For a ListBox, this value is an array of ListItem objects representing the current selection in a multi-selection list. Assigning it highlights the selected item and scrolls that item into view when needed. With no selected items, the value is null. Assign null to clear every selection.

The value can also change when the user clicks or double-clicks an item, or when remove() or removeAll() removes an item. Each change calls onChange. If the change comes from a double click, onDoubleClick is called.

Instead of object references, the value may be assigned with an item index or an array of indices. Out-of-range index assignments are ignored. Even when assigned with index values, the property returns object references.

- Assigning an array to a single-selection list selects only the first item in that array.
- Assigning one item to a multi-selection list adds that item to the existing selection.

### Type

Array of ListItem objects

### selection

controlObj.selection

### Description

Info

Applies only to DropDownList or TreeView objects.

The currently selected ListItem object.

Assigning this value highlights the selected item and scrolls that item into view when needed. With no selected item, the value is null. Assign null to clear the selection.

The value can also change when the user clicks an item, or when remove() or removeAll() removes an item.

Whenever this value changes, onChange is called.

Instead of object references, the value may be assigned with an item index or an array of indices. Out-of-range index assignments are ignored. Even when assigned with an index value, the property returns an object reference.

### Type

ListItem

### shortcutKey

controlObj.shortcutKey

### Description

In Windows only, this key sequence invokes onShortcutKey for the element.

### Type

String

### size

controlObj.size

### Description

This Dimension object defines an element's actual dimensions.

It starts as undefined; unless a script assigns it explicitly, a LayoutManager object defines it.

A script can set size before invoking the layout manager to request an element size other than preferredSize or the default size, but doing so is not recommended.

Defined as [bounds.width, bounds.height].

Warning

Changing an element's size or location also changes bounds, and changing bounds likewise affects size or location.

### Type

Dimension object

### stepdelta

controlObj.stepdelta

### Description

Stepper-button clicks move a Scrollbar element by this amount.

### Type

Number

### subitems

controlObj.subitems

### Description

Info

For ListItem objects only.

In a multi-column ListBox parent, ListItem.text and ListItem.image describe the first-column label, while this property supplies labels for the row's remaining columns.

This property contains an array of JavaScript objects. Its length is one less than the number of columns. Each member defines a label in the matching column, with the first member (subitems[0]) defining the label in the second column.

### Properties

Each object has two properties; you may provide either one or both:

| Property | Type | Description |
| --- | --- | --- |
| text | String | A localizable display string used for this label. |
| image | Image | An Image object used for this label. |

### Type

Array

### text

controlObj.text

### Description

This is the title, label, or displayed text. For group containers, it is ignored.

Its meaning for controls depends on the control type. For example, buttons use text as a label, while edit fields use it to access content.

For ListItem objects, this value is the list choice's display string. In a multi-column list box, it supplies the first-column label's display string, and subitems supplies labels for later columns. See Creating multi-column lists.

This string can be localized; see Localization in ScriptUI objects.

### Type

String

### textselection

controlObj.textselection

### Description

This is the selected text in a text-displaying control, or an empty string when nothing is selected.

Assigning the value replaces the current text selection and changes the text property. If there is no active selection, the new value is inserted into the text string at the current insertion point. After changing text, textselection resets to an empty string.

Note

Assigning textselection before the EditText control's parent Window exists has undefined behavior.

### Type

String

### title

controlObj.title

### Description

Info

Applies only to DropDownList, FlashPlayer, IconButton, Image, or TabbedPanel objects.

This text label belongs to the element. It may appear left, right, above, or below the element, or it may be superimposed over the element's center. The titleLayout value controls placement.

### Type

String

### titleLayout

controlObj.titleLayout

### Description

Info

Applies only to DropDownList, FlashPlayer, IconButton, Image, or TabbedPanel objects.

For a control that has a title value, this property describes how the text label is placed relative to the element.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| alignment | Array or Numbers | Title position relative to the element as [horizontal_alignment, vertical_alignment]. See alignment for permitted alignment values. Here, fill is invalid for both horizontal and vertical alignment. |
| characters | Number | If 1 or greater, reserves enough title width for the specified number of "X" characters in this element's font. If 0, layout operations calculate title width from the title property value. |
| spacing | Number | 0 or greater. Pixel gap between the title and the element. |
| margins | Array of Numbers, [left, top, right, bottom] | Pixel gap from each element edge to that element's visible content. This replaces the default margins. |
| justify | String | One of "left", "center", or "right"; determines text justification when allocated title width exceeds the actual text width. |
| truncate | String | If "middle" or "end", overlong text loses characters at that location and receives an ellipsis ("...") when the specified title exceeds reserved space. If "none", text that still exceeds the space is shortened at the end without adding an ellipsis character. |

### Type

Object

### type

controlObj.type

### Description

Stores the type name supplied when the element was created.

- For Window objects, the value is one of the type names window, palette, or dialog.
- For controls, the add method that created the control supplies this type.

### Type

String. Read only.

### value

controlObj.value

### Description

Info

Applies only to Checkbox or RadioButton objects.

true indicates selected or set; false indicates neither state.

### Type

Boolean

### value

controlObj.value

### Description

Info

Applies only to Scrollbar or Slider objects.

The indicator's current position. Values outside the minvalue-to-maxvalue range are automatically reset to the nearest boundary.

### Type

Number

### visible

controlObj.visible

### Description

true shows the element; false hides it.

When a container is hidden, its children are hidden too, but their individual visibility values are retained and used when the parent is shown again.

### Type

Boolean

### window

controlObj.window

### Description

The Window containing this control.

### Type

Window object. Read only.

### windowBounds

controlObj.windowBounds

### Description

This Bounds object records the control bounds in containing-window coordinates. Compare it with the control object's .bounds property, where coordinates use the immediate parent container as the reference.

### Type

Bounds object. Read only.

### function_name

controlObj.function_name

### Description

With the FlashPlayer control, this defines a callback function from the Flash ActionScript environment.

No special naming rules apply, but the function may accept and return only these supported data types:

- Array
- Boolean
- Null
- Number
- Object
- String
- undefined

Note

ActionScript class and date objects cannot be used as parameter values.

### Type

Function

## Control object functions

### Control objects — Control object functions

For the element types, and for the specific controls called out below, the table identifies the available methods.

### addEventListener()

controlObj.addEventListener(eventName, handler[, capturePhase=false]);

### Description

Attaches a handler for the named event type when that event happens on this control.

### Parameter

Parameter

Type

Description

eventName

String

Name string for the event. Supported built-ins are: - "change" - "changing" - "move" - "moving" - "resize" - "resizing" - "show" - "enterKey" - "focus" - "blur" - "mousedown" - "mouseup" - "mousemove" - "mouseover" - "mouseout" - "keyup" - "keydown" - "click" (detail = 1 for single, 2 for double)

handler

Function

Function registered against the specified event on this target. It can refer to a function named by the extension, or to a locally declared handler that runs when the event fires. The handler receives one argument: a UIEvent base-class object. See Registering event listeners for windows or controls.

capturePhase

Boolean

Optional. A true value limits the call to the capturing phase during event propagation. The default is false, so the handler runs during bubbling when this object is an ancestor of the target, or during the at-target phase when this object is the target.

| --- | --- | --- |

### Returns

Nothing

### dispatchEvent()

controlObj.dispatchEvent(eventObj)

### Description

Makes an event occur on this target. A script can build a specific event object with ScriptUI.events.createEvent(), then pass that object here to begin propagation for the event.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventObj | Object | An object derived from the UIEvent base class. |

### Returns

Boolean. Returns false if any registered listener that processed the event called preventDefault() on the event object; otherwise returns true.

### hide()

controlObj.hide()

### Description

Conceals this container or control. Hiding a window or container also hides its children, but after the parent is shown again, each child keeps its own visibility setting.

### Returns

Nothing

### notify()

controlObj.notify([event])

### Description

Issues a notification message that imitates the chosen user interaction event.

### Parameters

Parameter

Type

Description

event

String

Optional. Name of the control event handler to invoke. One of: - "onClick" - "onChange" - "onChanging" By default, this imitates onChange for an EditText control, and onClick where that event is supported.

| --- | --- | --- |

### Returns

Nothing

### removeEventListener()

controlbj.removeEventListener(eventName, handler[, capturePhase]);

### Description

Removes a handler registration for the given event type on this control. Every argument must match the values originally supplied when the handler was registered.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| eventName | String | Event name. |
| handler | Function | Function previously registered to handle the event. |
| capturePhase | Boolean | Optional. Whether the handler was limited to the capture phase. |

### Returns

Nothing

### show()

controlObj.show()

### Description

Makes the current control or container visible.

If a window or container is hidden, its children are hidden too; after it is shown again, each child still uses its own visibility setting.

### Returns

Nothing

### toString()

listItemObj.toString()

### Description

Info

For ListItem objects only.

Gets this item's text property value and provides it in string form.

### Returns

String

### valueOf()

listItemObj.valueOf()

### Description

Info

For ListItem objects only.

Gets this item's index number within the parent list's items array.

### Returns

Number

## List control object functions

### Control objects — List control object functions

Only list objects define the methods shown in this table.

### add()

listObj.add(type, text[, index=listObj.numItems])

### Description

Info

Applies only to ListBox, DropDownList, or TreeView objects.

Inserts an item into the items array at the specified index.

### Parameters

Parameter

Type

Description

type

String

Item kind to add. One of: - item: A simple selectable entry labeled with text. - separator: A separator. For DropDownList objects only. In this situation, the text value is ignored, and the method returns null.

text

String

Localizable label text for the item.

index

Number

Optional. Index in the current item list after which the new item is inserted. If omitted, or if the value is greater than the existing list length, insertion happens at the end.

| --- | --- | --- |

### Returns

Returns an Item object when type = "item"; returns null when type = "separator".

### find()

listObj.find(text)

### Description

Info

Applies only to ListBox, DropDownList, or TreeView objects.

Searches this object's items array for an item object whose text value matches the supplied value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | Text belonging to the item being searched for. |

### Returns

Returns the ListItem object on a match; returns null when no match is found.

### remove()

containerObj.remove(index)

containerObj.remove(text)

containerObj.remove(child)

### Description

- For containers (Panel, Group): removes the selected child control from the children array owned by the container.
- For ListBox, DropDownList, or TreeView objects: deletes the selected item from this object's items array.

If the item is absent, no error is generated.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index, text, child | Number of String or Control object | Item or child being removed, supplied as a 0-based index, text value, or control object. |

### Returns

Nothing

### removeAll()

listObj.removeAll()

### Description

Info

Applies only to ListBox, DropDownList, or TreeView objects.

Empties the items array on the object.

### Returns

Nothing

### revealItem()

listObj.revealItem(item)

### Description

Info

Applies only to ListBox objects.

Scrolls when needed so the specified item can be seen.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| item | Control object | Item or child to reveal, supplied as a control object. |

### Returns

Nothing
