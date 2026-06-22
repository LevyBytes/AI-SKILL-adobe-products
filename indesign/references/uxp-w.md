# Warichu Alignment, Watermark Horizontal Position Enum, Watermark Preference, Watermark Vertical Position Enum ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: WarichuAlignment; WatermarkHorizontalPositionEnum; WatermarkPreference — Instance; WatermarkVerticalPositionEnum; WhenScalingOptions — Class; Widget; Widgets; Window — Class; Windows; WMFs.

## WarichuAlignment

Options for Warichu text alignment.

### Class

> _Read Only_
>
> Number **AUTO** = 1635019116
>
> Uses automatic placement for warichu characters.
> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Places warichu against the left side of the text frame.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Centers warichu within the text frame.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Places warichu along the right side of the text frame.
> _Read Only_
>
> Number `FULLY_JUSTIFIED` = 1718971500
>
> Spreads warichu lines so every line has the same length.
> _Read Only_
>
> Number `LEFT_JUSTIFIED` = 1818915700
>
> Justifies warichu lines while keeping the final line left aligned.
> _Read Only_
>
> Number `CENTER_JUSTIFIED` = 1667920756
>
> Justifies warichu lines while centering the final line.
> _Read Only_
>
> Number `RIGHT_JUSTIFIED` = 1919578996
>
> Justifies warichu lines while aligning the final line to the right.

## WatermarkHorizontalPositionEnum

Enum type for horizontal watermark placement.

### Class

> _Read Only_
>
> Number `WATERMARK_H_LEFT` = 1883787372
>
> Positions the watermark at the left horizontally.
> _Read Only_
>
> Number `WATERMARK_H_CENTER` = 1883787363
>
> Positions the watermark at the horizontal center.
> _Read Only_
>
> Number `WATERMARK_H_RIGHT` = 1883787378
>
> Positions the watermark at the right horizontally.

## WatermarkPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the WatermarkPreference, either a Document or an Application.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Boolean **watermarkVisibility**
>
> Controls document watermark visibility.
> Boolean **watermarkDoPrint**
>
> Controls whether the document watermark prints.
> Boolean **watermarkDrawInBack**
>
> Controls whether the document watermark is drawn behind content.
> String **watermarkText**
>
> Text used for the document watermark.
> String **watermarkFontFamily**
>
> Display name of the watermark font family.
> String **watermarkFontStyle**
>
> Name of the watermark font style.
> Number **watermarkFontPointSize**
>
> Point size for the document watermark font.
> Mixed **watermarkFontColor**
>
> Color assigned to the document watermark. Possible return forms: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Number **watermarkOpacity**
>
> Opacity percentage for the watermark. (Range: 0 to 100)
> Number **watermarkRotation**
>
> Rotation value used by the document watermark.
> WatermarkHorizontalPositionEnum **watermarkHorizontalPosition**
>
> Horizontal positioning enum for the document watermark.
> Measurement Unit (Number or String)=any **watermarkHorizontalOffset**
>
> Horizontal offset used by the document watermark.
> WatermarkVerticalPositionEnum **watermarkVerticalPosition**
>
> Vertical positioning enum for the document watermark.
> Measurement Unit (Number or String)=any **watermarkVerticalOffset**
>
> Vertical offset used by the document watermark.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the WatermarkPreference.
> WatermarkPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## WatermarkVerticalPositionEnum

Enum type for vertical watermark placement.

### Class

> _Read Only_
>
> Number `WATERMARK_V_TOP` = 1884704884
>
> Positions the watermark at the top vertically.
> _Read Only_
>
> Number `WATERMARK_V_CENTER` = 1884704867
>
> Positions the watermark at the vertical center.
> _Read Only_
>
> Number `WATERMARK_V_BOTTOM` = 1884704866
>
> Positions the watermark at the bottom vertically.

## WhenScalingOptions — Class

> _Read Only_
>
> Number `APPLY_TO_CONTENT` = 1934192243
>
> Applies scaling to the item's content.
> _Read Only_
>
> Number `ADJUST_SCALING_PERCENTAGE` = 1934587252
>
> Changes the scaling percentage stored in the item's transform.

## Widget

Widget is the broad name for an object inside a dialog column or dialog row. The category covers dialog controls, including radio button groups and checkboxes, plus editboxes, dropdowns, and comboboxes; it also covers static text objects, plus enabling groups, plus border panels, plus nested dialog columns and dialog rows. Related entries include dialog column; for rows, dialog row; for labels, static text; for frames, border panel; for grouping, enabling group; radiobutton group; checkbox control; angle editbox; angle combobox; integer editbox; integer combobox; measurement editbox; measurement combobox; percent editbox; percent combobox; real editbox; real combobox; and text editbox.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Widget.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Widget, which is a DialogColumn, DialogRow, EnablingGroup, BorderPanel or RadiobuttonGroup.
> _Read Only_
>
> Number **index**
>
> Position of the Widget inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Number **minWidth**
>
> Width assigned to the control. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the Widget.
> Widget **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## Widgets

Collection containing Widget objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Widget collection.
> Widget **item**( Mixed **index** )
>
> Gets the Widget identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Accepts a Long Integer index or a String name. |

> Widget **itemByID**( Number **id** )
>
> Gets the Widget with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Widget **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Widgets included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Widget, index, or name for the range. Can accept: Widget, Long Integer or String. |
| Mixed | to | Ending Widget, index, or name for the range. Can accept: Widget, Long Integer or String. |

> Widget **firstItem**()
>
> Gets the first Widget in the collection.
> Widget **lastItem**()
>
> Gets the last Widget in the collection.
> Widget **middleItem**()
>
> Gets the middle Widget in the collection.
> Widget **previousItem**( Widget **obj** )
>
> Gets the Widget whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Widget | obj | Widget positioned immediately after the Widget being requested. |

> Widget **nextItem**( Widget **obj** )
>
> Gets the Widget whose index comes after the specified Widget in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Widget | obj | Widget whose index comes before the desired Widget. |

> Widget **anyItem**()
>
> Gets any Widget from the collection.
> Widget **everyItem**()
>
> Gets every Widget in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the Widget.
> Widget **[]**( Number **index** )
>
> Gets the Widget at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Window — Class

> _Read Only_
>
> String `AFTER_SELECTION_CHANGED` = afterSelectionChanged
>
> After the active selection changes, this event fires, bubbles, and cannot be canceled.
> _Read Only_
>
> String `AFTER_SELECTION_ATTRIBUTE_CHANGED` = afterSelectionAttributeChanged
>
> When an attribute on the active selection changes, this event fires, bubbles, and cannot be canceled.
> _Read Only_
>
> String `BEFORE_DEACTIVATE` = beforeDeactivate
>
> Before the Window becomes inactive, this event fires, bubbles, and cannot be canceled.
> _Read Only_
>
> String `AFTER_ACTIVATE` = afterActivate
>
> Once the Window becomes active, this event fires, bubbles, and cannot be canceled.
> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> When a property value changes on this Window, this event fires, bubbles, and cannot be canceled.
> _Read Only_
>
> String `AFTER_OPEN` = afterOpen
>
> After a Window opens, this event fires, bubbles, and cannot be canceled.
> _Read Only_
>
> String `BEFORE_CLOSE` = beforeClose
>
> Before a Window closes, this event fires, bubbles, and can be canceled.
> _Read Only_
>
> String `AFTER_CLOSE` = afterClose
>
> While a Window is closing, this event fires and bubbles. Because the close is already committed, cancellation is no longer possible.

### Window — Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the Window.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the Window, which is a Document.
> _Read Only_
>
> Number **index**
>
> Position of the Window inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Object **selection**
>
> Currently selected object or objects. Can also accept: Object or NothingEnum enumerator.
> Number **bounds**
>
> Pixel bounds of the window, expressed as [top, left, bottom, right].
> PageItem **selectionKeyObject**
>
> Key object for the selection. Can also accept: NothingEnum enumerator.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
>
> Selects the supplied object(s).

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | selectableItems | Selectable objects. Accepted forms are an Object, an Array of Objects, a NothingEnum enumerator or a SelectAll enumerator. |
| SelectionOptions | existingSelection | Selection status of the Window compared with earlier selections. (Optional) |

> **close**()
>
> Runs the close operation on the Window.
> **maximize**()
>
> Runs the maximize operation on the window.
> **minimize**()
>
> Runs the minimize operation on the window.
> **restore**()
>
> Runs the restore operation on the window.
> **bringToFront**()
>
> Moves the object to the front.
> String **toSource**()
>
> Produces a string that, when executed, returns the Window.
> Window **getElements**()
>
> Resolves the object specifier and creates an array of object references.
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

## Windows

Collection containing Window objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Window collection.
> Window **add**( Object **withProperties** )
>
> Adds a new Window.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new Window. (Optional) |

> Window **item**( Mixed **index** )
>
> Gets the Window identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Accepts a Long Integer index or a String name. |

> Window **itemByName**( String **name** )
>
> Gets the Window with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Window **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Windows included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Window, index, or name for the range. Can accept: Window, Long Integer or String. |
| Mixed | to | Ending Window, index, or name for the range. Can accept: Window, Long Integer or String. |

> Window **firstItem**()
>
> Gets the first Window in the collection.
> Window **lastItem**()
>
> Gets the last Window in the collection.
> Window **middleItem**()
>
> Gets the middle Window in the collection.
> Window **previousItem**( Window **obj** )
>
> Gets the Window whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Window | obj | Window positioned immediately after the Window being requested. |

> Window **nextItem**( Window **obj** )
>
> Gets the Window whose index comes after the specified Window in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Window | obj | Window whose index comes before the desired Window. |

> Window **anyItem**()
>
> Gets any Window from the collection.
> Window **everyItem**()
>
> Gets every Window in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the Window.
> Window **[]**( Number **index** )
>
> Gets the Window at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## WMFs

Collection containing WMF graphics.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the WMF collection.
> WMF **item**( Mixed **index** )
>
> Gets the WMF identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Accepts a Long Integer index or a String name. |

> WMF **itemByName**( String **name** )
>
> Gets the WMF with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> WMF **itemByID**( Number **id** )
>
> Gets the WMF with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> WMF **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the WMFs included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting WMF, index, or name for the range. Can accept: WMF, Long Integer or String. |
| Mixed | to | Ending WMF, index, or name for the range. Can accept: WMF, Long Integer or String. |

> WMF **firstItem**()
>
> Gets the first WMF in the collection.
> WMF **lastItem**()
>
> Gets the last WMF in the collection.
> WMF **middleItem**()
>
> Gets the middle WMF in the collection.
> WMF **previousItem**( WMF **obj** )
>
> Gets the WMF whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| WMF | obj | WMF positioned immediately after the WMF being requested. |

> WMF **nextItem**( WMF **obj** )
>
> Gets the WMF whose index comes after the specified WMF in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| WMF | obj | WMF whose index comes before the desired WMF. |

> WMF **anyItem**()
>
> Gets any WMF from the collection.
> WMF **everyItem**()
>
> Gets every WMF in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the WMF.
> WMF **[]**( Number **index** )
>
> Gets the WMF at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
