# Control Types And Creation Parameters (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Control objects — Control types and creation parameters

These keywords may be used in string literals as the add method's type specifier on Window and container (Panel and Group) objects. Class names may appear in resource specifications to define controls inside a container element, such as Window, Panel, or Group.

Every control type, containers included, has an optional creation parameter name for assigning a unique object name.

### button

Class Name: Button

### Description

Button provides mouse-sensitive pushbutton text. It calls onClick when the user clicks the control or invokes notify() on it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| text | String | Optional. Text shown in the control. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. In a modal dialog, using the special name "ok" sets this as defaultElement, and using "cancel" sets this as the parent dialog's cancelElement. |

### Example

Example:

```
w.add("button"[, bounds, text, {creation_properties}]);
```

### checkbox

Class Name: Checkbox

### Description

Checkbox shows two states: a checkmarked box when value is true and an empty box when value is false.

It calls onClick when the user clicks the control or invokes notify() on it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| text | String | Optional. Text shown in the control. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |

### Example

Example:

```
w.add("checkbox"[, bounds, text, {creation_properties}]);
```

### dropdownlist

Class Name: DropDownList

### Description

DropDownList contains zero or more items. It calls onChange when a script or user action changes the selected item, or when notify() is invoked on the object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| items | Array of strings | Optional. Provide either this argument or creation_properties, not both. Each list item uses the corresponding text. A ListItem object is created for every item. An item whose text string is "-" creates a separator item. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |
| items | Array of strings | Per-item text values. Details are in the Parameters table. |

### Example

Example:

```
w.add( "dropdownlist", bounds[, items, {creation_properties}] );
```

### editnumber

Class Name: EditNumber

Note

This feature was introduced in Photoshop 20.0 (CC 2019) and may be unavailable in other hosts.

### Description

EditNumber provides an editable text field for decimal-number entry. Fractional values are allowed.

It calls onChange after text changes and the user types ENTER, after focus leaves the control, or after notify() is invoked on it.

It calls onChanging for any text change.

The textselection property holds the text currently selected.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| text | String | Optional. Text shown in the control. |
| minValue | Number | Optional. Minimum accepted numeric input value. |
| maxValue | Number | Optional. Maximum accepted numeric input value. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |
| readonly | Boolean | Optional. false (the default) permits text input. true blocks editing and leaves the control as a display for the text property contents. |
| noecho | Boolean | Optional. false (the default) shows entered text. true suppresses the typed characters, as in password input fields. |
| enterKeySignalsOnChange | Boolean | Optional. false (the default) sends onChange after editable text is modified and keyboard focus exits the control, including tabbing away, clicking elsewhere, or typing ENTER. true sends onChange only after editable text is modified and the user types ENTER; other focus changes do not send the event. |
| borderless | Boolean | Optional. true omits the control border. Default: false. |

### Example

Example:

```
w.add("editnumber"[, bounds, text, minValue, maxValue, {creation_properties}]);
```

### edittext

Class Name: EditText

### Description

EditText provides a user-editable text field. It calls onChange when the text changes and the user types ENTER, when the control loses focus, or when notify() is invoked on it. It calls onChanging whenever text changes.

The textselection property holds the text currently selected.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| text | String | Optional. Text shown in the control. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |
| readonly | Boolean | false (the default) permits text input. true blocks editing and leaves the control as a display for the text property contents. |
| noecho | Boolean | false (the default) shows entered text. true suppresses the typed characters, as in password input fields. |
| enterKeySignalsOnChange | Boolean | false (the default) sends onChange after editable text is modified and keyboard focus exits the control, including tabbing away, clicking elsewhere, or typing ENTER. true sends onChange only after editable text is modified and the user types ENTER; other focus changes do not send the event. |
| borderless | Boolean | true omits the control border. Default: false. |
| multiline | Boolean | false (the default) accepts a single text line. true accepts multiple lines and wraps text inside the control width. |
| scrollable | Boolean | (For multiline elements only) true (the default) adds a vertical scrollbar that activates when the element contains more text than the visible area can show. false omits the vertical scrollbar; when text exceeds the visible area, the arrow keys can scroll it up and down. |

### Example

Example:

```
w.add("edittext"[, bounds, text, {creation_properties}]);
```

### flashplayer

Class Name: FlashPlayer

### Description

FlashPlayer hosts a Flash Player capable of loading and playing Flash movies saved as SWF files.

The ScriptUI FlashPlayer element hosts the Flash application inside an Adobe application. That Flash application runs ActionScript, which is a JavaScript implementation separate from the ExtendScript JavaScript implementation used by Adobe applications.

This control type provides functions for loading SWF files and controlling playback. It also communicates with ActionScript; see FlashPlayer control functions.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| moveToLoad | String or File object | Optional. SWF source loaded into the player, provided as a path, URL string, or File. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |

### Example

Example:

```
w.add("flashplayer"[, bounds, movieToLoad, {creation_properties}]);
```

### group

Class Name: Group

### Description

Group holds other controls. Containers also provide child-management properties; see Container Attributes.

When a group is hidden, every child inside it is hidden too. Showing the group displays only children whose own visibility is not hidden.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |

### Example

Example:

```
w.add("group"[, bounds, {creation_properties}]);
```

### iconbutton

Class Name: IconButton

### Description

IconButton presents a mouse-sensitive pushbutton with an icon. It calls onClick when the user clicks the control or invokes notify() on it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| icon | Named resource, pathname, or File object | Optional. Icon source shown in the button control, either a named icon/icon-family resource or a pathname or File for an image file. PNG is required for images. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

Property

Type

Description

name

String

Unique control name.

style

String

String specifying the visual style, one of: - button: Shows a visible border with raised or 3D appearance. - toolbutton: Shows a flat appearance suited to toolbar placement

toggle

Boolean

For a button-style control, true makes the first click give it a pressed-button look, and later clicks switch between pressed and unpressed. The control's value property reflects the toggle state.

| --- | --- | --- |

### Example

Example:

```
w.add("iconbutton"[, bounds, icon, {creation_properties}]);
```

### image

Class Name: Image

### Description

Shows an icon or image.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| icon | Named resource, pathname, or File object | Optional. Icon source shown in the button control, either a named icon/icon-family resource or a pathname or File for an image file. PNG is required for images. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

```
w.add("image"[, bounds, icon, {creation_properties}]);
```

### item

Class Name: Array of ListItem

### Description

For a list box or drop-down list, these are the selectable choice entries. They are generated when the parent list object receives items during construction, or later through the list control's add() method.

A drop-down list entry can use the type separator; such an entry displays as a horizontal rule and is not selectable.

List items expose these properties that other controls do not provide:

- checked
- expanded
- image
- index
- selected

### listbox

Class Name: ListBox

### Description

ListBox can show any number of items, including none. A selection change from script or user interaction calls onChange; calling the object's notify() method does the same. A double click selects the clicked item and invokes onDoubleClick.

### Parameters

| Parameter | Type | Description |  |
| --- | --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |  |
| items | Array of Strings | Optional. Supplies the text for each list entry. Each entry creates a ListItem object. Pass either this argument or the items property in creation_properties; do not use both. A ListItem object is generated for every item. A text string of "-" creates a separator item. |  |
| creation_properties | Object | Optional. Holds any of the properties listed below. |  |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |
| multiselect | Boolean | false (the default) permits one selected item only. true permits multiple selected items. |
| items | Array of Strings | Provides the text for every list entry. Use this property or the items argument, not both. This form is mainly useful for elements declared with Resource specifications. |
| numberOfColumns | Number | Specifies how many columns show the items; default is 1. With multiple columns, every ListItem object represents one selectable row. The text and image values provide the first-column label, while subitems supplies labels for later columns. |
| showHeaders | Boolean | true shows column titles. |
| columnWidths | Array of Numbers | Preferred column widths in pixels, one number per column. |
| columnTitles | Array of Strings | Title strings corresponding to the columns; they appear when showHeaders is true. |

### Example

Add this control to window w with:

```
w.add("listbox", bounds[, items, {creation_properties}]);
```

### panel

Class Name: Panel

### Description

This is a container for other control types and may include a frame.

Containers expose extra child-management properties; see Container Attributes. Hiding a panel also hides its children. Showing it again displays only those children whose own hidden state does not suppress them.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| text | String | Optional. Supplies the text shown in the panel border. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

Property

Type

Description

name

String

Gives this control a unique name.

borderStyle

String

Specifies the panel border drawing style. Default: etched. Values: - black - etched - gray - raised - sunken - topDivider: draws only the panel's top horizontal line.

Warning

topDivider is not officially documented and was identified through research. Add details if you have better information about it.

subPanelCoordinates

Boolean

When true, the panel automatically shifts child positions for compatibility with Photoshop CS. The default is false; in that state the panel leaves child positions unchanged, even when automatic adjustment is active on the parent window.

| --- | --- | --- |

### Example

Add this control to window w with:

```
w.add("panel"[, bounds, text, {creation_properties}]);
```

### progressbar

Class Name: Progressbar

### Description

This horizontal rectangle visualizes an operation's progress.

Every progressbar is horizontal. Its value property stores the current indicator position; the default is 0. Although minvalue exists, it always remains 0; attempts to assign a different value are ignored without reporting an error.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| value | Number | Optional. Sets the progress indicator's initial position. Default is 0. |
| minvalue | Number | Optional. Sets the smallest value accepted by value. Default is 0. Along with maxvalue, defines the range. |
| maxvalue | Number | Optional. Sets the largest value accepted by value. Default is 100. Along with minvalue, defines the range. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

```
w.add("progressbar"[, bounds, value, minvalue, maxvalue, creation_properties}]);
```

### radiobutton

Class Name: RadioButton

### Description

This dual-state control belongs to a radiobutton group, which permits a single selected member. value true shows the selected state; value false leaves the control empty. A click, or a notify() call, invokes onClick.

Create every radiobutton in a group consecutively, without creating other element types between them. A group can have only one selected radiobutton at once; selecting a different one clears the previous selection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| text | String | Optional. Provides the text shown in the control. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

```
w.add("radiobutton"[, bounds, text, {creation_properties}]);
```

### scrollbar

Class Name: Scrollbar

### Description

A scrollbar provides a draggable scroll indicator plus stepper buttons that move it. Its orientation is horizontal when width exceeds height at creation time, and vertical when height exceeds width.

onChange runs after the indicator moves or notify() is called. onChanging keeps firing while the user drags the indicator.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| value | Number | Stores the scrollbar indicator's current position inside the scrolling area, constrained by minvalue and maxvalue. |
| stepdelta | Number | Sets the unit moved by the up or down arrow. Default is 1. |
| jumpdelta | Number | Sets the jump amount; for example, clicking the bar away from the indicator or arrows uses this value. Default is 20% of the minvalue-to-maxvalue range. |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| value | Number | Optional. Sets the scroll indicator's starting position. Default is 0. |
| minvalue | Number | Optional. Sets the smallest value accepted by value. Default is 0. Along with maxvalue, defines the scrolling range. |
| maxvalue | Number | Optional. Sets the largest value accepted by value. Default is 100. Along with minvalue, defines the scrolling range. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

```
w.add("scrollbar"[, bounds, value, minvalue, maxvalue, {creation_properties}]);
```

### slider

Class Name: Slider

### Description

This control has a movable position indicator and is always horizontal. Moving the indicator or calling notify() triggers onChange.

During user movement of the indicator, onChanging runs repeatedly.

The value property stores the indicator's current position within the minvalue-to-maxvalue range.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| value | Number | Optional. Sets the scroll indicator's starting position. Default is 0. |
| minvalue | Number | Optional. Sets the smallest value accepted by value. Default is 0. Along with maxvalue, defines the range. |
| maxvalue | Number | Optional. Sets the largest value accepted by value. Default is 100. Along with minvalue, defines the range. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

```
w.add("slider"[, bounds, value, minvalue, maxvalue, {creation_properties}]);
```

### statictext

Class Name: StaticText

### Description

This text field is read-only for users.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| text | String | Optional. Provides the text shown in the control. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

Property

Type

Description

name

String

Gives this control a unique name.

multiline

Boolean

false (the default) displays a single line of text. true displays multiple lines and wraps the text inside the control's width.

scrolling truncate

Boolean String

false (the default) disallows scrolling the displayed text. true enables vertical scrollbar scrolling, which also treats multiline as true. Truncate behaviour, one of: - middle - end - none If middle or end, ellipsis replacement occurs after characters are removed from that part of text when the specified title exceeds reserved space. If none, overlong text is shortened at the end without adding an ellipsis character.

| --- | --- | --- |

### Example

Add this control to window w with:

```
w.add("statictext"[, bounds, text, {creation_properties}]);
```

### tab

Class Name: Tab

### Description

This container holds other control types. Unlike a panel element, it must be a direct child of a tabbedpanel element, displays its title in the selection tab, and has no script-definable border. The parent's selection property stores the currently active tab.
