# Radio Buttons, Radiobutton Control, Radiobutton Controls, Radiobutton Group ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: RadioButtons; RadiobuttonControl; RadiobuttonControls; RadiobuttonGroup; RadiobuttonGroups; RangeSortOrder; RasterResolutionOptions; RealCombobox; RealComboboxes; RealEditbox.

## RadioButtons

A RadioButtons object groups radio button controls as one collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the RadioButton collection.
> RadioButton **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a RadioButton object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer that receives the new RadioButton. (Optional) |
| LocationOptions | at | Insertion location for the RadioButton, either relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: Required when the at parameter is before or after. Allowed values: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new RadioButton. (Optional) |

> RadioButton **item**( Mixed **index** )
>
> Gets the RadioButton identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Allowed values: Long Integer or String. |

> RadioButton **itemByName**( String **name** )
>
> Gets the RadioButton that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> RadioButton **itemByID**( Number **id** )
>
> Gets the RadioButton that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> RadioButton **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the RadioButtons included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | RadioButton, index, or name that starts the range. Allowed values: RadioButton, Long Integer or String. |
| Mixed | to | RadioButton, index, or name that ends the range. Allowed values: RadioButton, Long Integer or String. |

> RadioButton **firstItem**()
>
> Gets the collection's first RadioButton.
> RadioButton **lastItem**()
>
> Gets the collection's last RadioButton.
> RadioButton **middleItem**()
>
> Gets the RadioButton positioned in the middle of the collection.
> RadioButton **previousItem**( RadioButton **obj** )
>
> Gets the RadioButton whose index immediately precedes the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RadioButton | obj | Index of the RadioButton that comes after the requested RadioButton. |

> RadioButton **nextItem**( RadioButton **obj** )
>
> Gets the RadioButton whose index comes after the supplied RadioButton in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RadioButton | obj | RadioButton located before the requested RadioButton. |

> RadioButton **anyItem**()
>
> Gets one arbitrary RadioButton from the collection.
> RadioButton **everyItem**()
>
> Gets all RadioButton objects in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the RadioButton.
> RadioButton **[]**( Number **index** )
>
> Gets the RadioButton at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## RadiobuttonControl

RadiobuttonControl represents one member control inside a radiobutton group.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the RadiobuttonControl.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> RadiobuttonGroup **parent**
>
> Parent object for the RadiobuttonControl (a RadiobuttonGroup).
> _Read Only_
>
> Number **index**
>
> Position of the RadiobuttonControl within its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> String **staticLabel**
>
> Label text shown in the RadiobuttonControl.
> Boolean **checkedState**
>
> When true, the dialog opens with this control checked.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Property bundle used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that evaluates back to the RadiobuttonControl.
> RadiobuttonControl **getElements**()
>
> Resolves this object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type name. |
| Mixed | handler | Event handler value. Allowed values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type name. |
| Mixed | handler | Registered event handler value. Allowed values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## RadiobuttonControls

RadiobuttonControls is a collection containing individual radiobutton controls.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> RadiobuttonControl **add**( Object **withProperties** )
>
> Creates a RadiobuttonControl object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new RadiobuttonControl. (Optional) |

> Number **count**()
>
> Reports how many elements are in the RadiobuttonControl collection.
> RadiobuttonControl **item**( Mixed **index** )
>
> Gets the RadiobuttonControl identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Allowed values: Long Integer or String. |

> RadiobuttonControl **itemByID**( Number **id** )
>
> Gets the RadiobuttonControl that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> RadiobuttonControl **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the RadiobuttonControls included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | RadiobuttonControl, index, or name that starts the range. Allowed values: RadiobuttonControl, Long Integer or String. |
| Mixed | to | RadiobuttonControl, index, or name that ends the range. Allowed values: RadiobuttonControl, Long Integer or String. |

> RadiobuttonControl **firstItem**()
>
> Gets the collection's first RadiobuttonControl.
> RadiobuttonControl **lastItem**()
>
> Gets the collection's last RadiobuttonControl.
> RadiobuttonControl **middleItem**()
>
> Gets the RadiobuttonControl positioned in the middle of the collection.
> RadiobuttonControl **previousItem**( RadiobuttonControl **obj** )
>
> Gets the RadiobuttonControl whose index immediately precedes the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RadiobuttonControl | obj | Index of the RadiobuttonControl that comes after the requested RadiobuttonControl. |

> RadiobuttonControl **nextItem**( RadiobuttonControl **obj** )
>
> Gets the RadiobuttonControl whose index comes after the supplied RadiobuttonControl in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RadiobuttonControl | obj | RadiobuttonControl located before the requested RadiobuttonControl. |

> RadiobuttonControl **anyItem**()
>
> Gets one arbitrary RadiobuttonControl from the collection.
> RadiobuttonControl **everyItem**()
>
> Gets all RadiobuttonControl objects in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the RadiobuttonControl.
> RadiobuttonControl **[]**( Number **index** )
>
> Gets the RadiobuttonControl at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## RadiobuttonGroup

RadiobuttonGroup is one control container that holds one or more radiobutton controls.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the RadiobuttonGroup.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the RadiobuttonGroup (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
> _Read Only_
>
> Number **index**
>
> Position of the RadiobuttonGroup within its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> _Read Only_
>
> RadiobuttonControls **radiobuttonControls**
>
> Collection containing individual radiobutton controls.
> _Read Only_
>
> Widgets **widgets**
>
> Widget collection.
> Number **selectedButton**
>
> Index for the selected item in a radiobutton group.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Property bundle used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that evaluates back to the RadiobuttonGroup.
> RadiobuttonGroup **getElements**()
>
> Resolves this object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type name. |
| Mixed | handler | Event handler value. Allowed values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type name. |
| Mixed | handler | Registered event handler value. Allowed values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## RadiobuttonGroups

RadiobuttonGroups is a collection of radiobutton group controls.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> RadiobuttonGroup **add**( Object **withProperties** )
>
> Creates a RadiobuttonGroup object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new RadiobuttonGroup. (Optional) |

> Number **count**()
>
> Reports how many elements are in the RadiobuttonGroup collection.
> RadiobuttonGroup **item**( Mixed **index** )
>
> Gets the RadiobuttonGroup identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Allowed values: Long Integer or String. |

> RadiobuttonGroup **itemByID**( Number **id** )
>
> Gets the RadiobuttonGroup that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> RadiobuttonGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the RadiobuttonGroups included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | RadiobuttonGroup, index, or name that starts the range. Allowed values: RadiobuttonGroup, Long Integer or String. |
| Mixed | to | RadiobuttonGroup, index, or name that ends the range. Allowed values: RadiobuttonGroup, Long Integer or String. |

> RadiobuttonGroup **firstItem**()
>
> Gets the collection's first RadiobuttonGroup.
> RadiobuttonGroup **lastItem**()
>
> Gets the collection's last RadiobuttonGroup.
> RadiobuttonGroup **middleItem**()
>
> Gets the RadiobuttonGroup positioned in the middle of the collection.
> RadiobuttonGroup **previousItem**( RadiobuttonGroup **obj** )
>
> Gets the RadiobuttonGroup whose index immediately precedes the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RadiobuttonGroup | obj | Index of the RadiobuttonGroup that comes after the requested RadiobuttonGroup. |

> RadiobuttonGroup **nextItem**( RadiobuttonGroup **obj** )
>
> Gets the RadiobuttonGroup whose index comes after the supplied RadiobuttonGroup in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RadiobuttonGroup | obj | RadiobuttonGroup located before the requested RadiobuttonGroup. |

> RadiobuttonGroup **anyItem**()
>
> Gets one arbitrary RadiobuttonGroup from the collection.
> RadiobuttonGroup **everyItem**()
>
> Gets all RadiobuttonGroup objects in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the RadiobuttonGroup.
> RadiobuttonGroup **[]**( Number **index** )
>
> Gets the RadiobuttonGroup at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## RangeSortOrder

RangeSortOrder defines sort direction for hyperlink ranges.

### Class

> _Read Only_
>
> Number `NO_SORT` = 1852797812
>
> Leaves ranges unsorted.
> _Read Only_
>
> Number `ASCENDING_SORT` = 1634952307
>
> Orders ranges from low to high.
> _Read Only_
>
> Number `DESCENDING_SORT` = 1685287796
>
> Orders ranges from high to low.

## RasterResolutionOptions

RasterResolutionOptions lists raster-resolution choices for PDF export.

### Class

> _Read Only_
>
> Number `SEVENTY_TWO_PPI` = 1937010800
>
> 72 pixels per inch.
> _Read Only_
>
> Number `NINETY_SIX_PPI` = 1853059184
>
> 96 pixels per inch.
> _Read Only_
>
> Number `ONE_HUNDRED_FORTY_FOUR_PPI` = 1868984432
>
> 144 pixels per inch.

## RealCombobox

RealCombobox is a high-precision numeric input control with both a pop-up menu and a text-entry field.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the RealCombobox.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the RealCombobox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
> _Read Only_
>
> Number **index**
>
> Position of the RealCombobox within its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> String **stringList**
>
> Array of strings used as menu items on a dropdown or combobox control.
> Number **minimumValue**
>
> Smallest value a user may enter in a numeric editbox or combobox. Note: For a measurement editbox or combobox, the value is treated as points no matter which edit units the control specifies. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **maximumValue**
>
> Largest value a user may enter in a numeric editbox or combobox. Note: For a measurement editbox or combobox, the value is treated as points no matter which edit units the control specifies. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **smallNudge**
>
> Value step applied for arrow-key changes while the control has focus.
> Number **largeNudge**
>
> Value step applied for Shift plus arrow-key changes while the control has focus.
> String **editContents**
>
> Initial text shown by the editbox control. Note: Avoid setting edit contents and edit value together; if both appear, the script uses the later one.
> Number **editValue**
>
> Default real-number value for the editbox or combobox. Note: Measurement controls treat this value as points; at dialog open, that point value is converted into edit units. Note: Avoid setting edit value and edit contents together; if both appear, the script uses the later one.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Property bundle used to set multiple properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that evaluates back to the RealCombobox.
> RealCombobox **getElements**()
>
> Resolves this object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type name. |
| Mixed | handler | Event handler value. Allowed values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type name. |
| Mixed | handler | Registered event handler value. Allowed values: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## RealComboboxes

RealComboboxes is a collection of real-number combobox controls.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> RealCombobox **add**( Object **withProperties** )
>
> Creates a RealCombobox object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new RealCombobox. (Optional) |

> Number **count**()
>
> Reports how many elements are in the RealCombobox collection.
> RealCombobox **item**( Mixed **index** )
>
> Gets the RealCombobox identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Allowed values: Long Integer or String. |

> RealCombobox **itemByID**( Number **id** )
>
> Gets the RealCombobox that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> RealCombobox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the RealComboboxes included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | RealCombobox, index, or name that starts the range. Allowed values: RealCombobox, Long Integer or String. |
| Mixed | to | RealCombobox, index, or name that ends the range. Allowed values: RealCombobox, Long Integer or String. |

> RealCombobox **firstItem**()
>
> Gets the collection's first RealCombobox.
> RealCombobox **lastItem**()
>
> Gets the collection's last RealCombobox.
> RealCombobox **middleItem**()
>
> Gets the RealCombobox positioned in the middle of the collection.
> RealCombobox **previousItem**( RealCombobox **obj** )
>
> Gets the RealCombobox whose index immediately precedes the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RealCombobox | obj | Index of the RealCombobox that comes after the requested RealCombobox. |

> RealCombobox **nextItem**( RealCombobox **obj** )
>
> Gets the RealCombobox whose index comes after the supplied RealCombobox in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RealCombobox | obj | RealCombobox located before the requested RealCombobox. |

> RealCombobox **anyItem**()
>
> Gets one arbitrary RealCombobox from the collection.
> RealCombobox **everyItem**()
>
> Gets all RealCombobox objects in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the RealCombobox.
> RealCombobox **[]**( Number **index** )
>
> Gets the RealCombobox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## RealEditbox

RealEditbox is a high-precision field for numeric entry.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier for the RealEditbox.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for this RealEditbox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
> _Read Only_
>
> Number **index**
>
> Position of the RealEditbox inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Number **minimumValue**
>
> Lowest value a user may enter in a numeric editbox or combobox. Note: measurement editbox or combobox values use points internally, no matter which edit units the control specifies. When the dialog opens, the point measurement is automatically translated to the edit unit.
> Number **maximumValue**
>
> Highest value a user may enter in a numeric editbox or combobox. Note: measurement editbox or combobox values are treated as points regardless of the edit units chosen for the control. Opening the dialog converts that point value automatically into the edit unit.
> Number **smallNudge**
>
> Increment or decrement applied when the control is selected and the user presses a keyboard arrow key.
> Number **largeNudge**
>
> Increment or decrement applied when the selected control is adjusted with Shift plus a keyboard arrow key.
> String **editContents**
>
> Default text placed in an editbox control. Note: avoid setting both edit contents and edit value; if both appear, the later assignment in the script wins.
> Number **editValue**
>
> Real-number default for the editbox or combobox. Note: measurement controls interpret the value as points, then convert it to edit units when the dialog opens. Note: do not define both edit value and edit contents; the script uses whichever one appears later.
> Number **minWidth**
>
> Control width; for an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Property bundle used to set several properties in one operation.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the RealEditbox.
> RealEditbox **getElements**()
>
> Resolves the object specifier and builds an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
