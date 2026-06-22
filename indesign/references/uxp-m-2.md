# Measurement Combobox, Measurement Comboboxes, Measurement Editbox, Measurement Editboxes ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: MeasurementCombobox; MeasurementComboboxes; MeasurementEditbox; MeasurementEditboxes; MeasurementUnits.

## MeasurementCombobox

MeasurementCombobox is a measurement input control that combines a pop-up menu with an entry field.

### Instance

> _Read Only_
>
> Number **id**
>
> Supplies the MeasurementCombobox unique ID.
> _Read Only_
>
> Boolean **isValid**
>
> Indicates whether the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the container of the MeasurementCombobox: DialogColumn, DialogRow, EnablingGroup, or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Gives the MeasurementCombobox position inside its container.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listeners collection.
> Number **minimumValue**
>
> Minimum value a user may enter in a numeric editbox or combobox. Note: measurement editbox and combobox values are interpreted in points no matter which edit units the control specifies. When the dialog opens, the points value is converted automatically to the edit unit.
> Number **maximumValue**
>
> Maximum value a user may enter in a numeric editbox or combobox. Note: measurement editbox and combobox values are interpreted in points no matter which edit units the control specifies. When the dialog opens, the points value is converted automatically to the edit unit.
> Number **smallNudge**
>
> Increment or decrement amount applied when the user selects the control and presses a keyboard arrow key.
> Number **largeNudge**
>
> Increment or decrement amount applied when a user selects the control, holds the Shift key, and presses a keyboard arrow key.
> MeasurementUnits **editUnits**
>
> Measurement units shown in the measurement control.
> String **stringList**
>
> Menu entries for a dropdown or combobox control, supplied as an array of strings.
> String **editContents**
>
> Default contents for an editbox control. Note: do not provide both editContents and editValue. If both are present, the value that appears later in the script is used.
> Number **editValue**
>
> Real-number default for the editbox or combobox. Note: measurement controls interpret the value in points, and the dialog converts that points value to edit units when it opens. Note: do not provide both editValue and editContents. If both are present, the value that appears later in the script is used.
> Number **minWidth**
>
> Control width; for an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the MeasurementCombobox.
> MeasurementCombobox **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## MeasurementComboboxes

MeasurementComboboxes is the collection for measurement comboboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Gives the collection's object count.

### Methods

> MeasurementCombobox **add**( Object **withProperties** )
>
> Creates a MeasurementCombobox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new MeasurementCombobox. (Optional) |

> Number **count**()
>
> Reports how many elements are in the MeasurementCombobox collection.
> MeasurementCombobox **item**( Mixed **index** )
>
> Gets the MeasurementCombobox identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> MeasurementCombobox **itemByID**( Number **id** )
>
> Gets the MeasurementCombobox that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MeasurementCombobox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the MeasurementComboboxes included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a MeasurementCombobox, index, or name. Accepts: MeasurementCombobox, Long Integer, or String. |
| Mixed | to | Range end, supplied as a MeasurementCombobox, index, or name. Accepts: MeasurementCombobox, Long Integer, or String. |

> MeasurementCombobox **firstItem**()
>
> Gets the first MeasurementCombobox in the collection.
> MeasurementCombobox **lastItem**()
>
> Gets the last MeasurementCombobox in the collection.
> MeasurementCombobox **middleItem**()
>
> Gets the middle MeasurementCombobox in the collection.
> MeasurementCombobox **previousItem**( MeasurementCombobox **obj** )
>
> Gets the MeasurementCombobox whose index comes immediately before the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MeasurementCombobox | obj | MeasurementCombobox index that follows the desired MeasurementCombobox. |

> MeasurementCombobox **nextItem**( MeasurementCombobox **obj** )
>
> Gets the MeasurementCombobox whose index comes immediately after the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MeasurementCombobox | obj | MeasurementCombobox whose index comes before the desired MeasurementCombobox. |

> MeasurementCombobox **anyItem**()
>
> Gets any MeasurementCombobox in the collection.
> MeasurementCombobox **everyItem**()
>
> Gets every MeasurementCombobox in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the MeasurementCombobox.
> MeasurementCombobox **[]**( Number **index** )
>
> Gets the MeasurementCombobox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to access. |

## MeasurementEditbox

MeasurementEditbox is a measurement entry field.

### Instance

> _Read Only_
>
> Number **id**
>
> Supplies the MeasurementEditbox unique ID.
> _Read Only_
>
> Boolean **isValid**
>
> Indicates whether the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the container of the MeasurementEditbox: DialogColumn, DialogRow, EnablingGroup, or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Gives the MeasurementEditbox position inside its container.
> _Read Only_
>
> Events **events**
>
> Holds the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds the event listeners collection.
> Number **minimumValue**
>
> Minimum value a user may enter in a numeric editbox or combobox. Note: measurement editbox and combobox values are interpreted in points no matter which edit units the control specifies. When the dialog opens, the points value is converted automatically to the edit unit.
> Number **maximumValue**
>
> Maximum value a user may enter in a numeric editbox or combobox. Note: measurement editbox and combobox values are interpreted in points no matter which edit units the control specifies. When the dialog opens, the points value is converted automatically to the edit unit.
> Number **smallNudge**
>
> Increment or decrement amount applied when the user selects the control and presses a keyboard arrow key.
> Number **largeNudge**
>
> Increment or decrement amount applied when a user selects the control, holds the Shift key, and presses a keyboard arrow key.
> MeasurementUnits **editUnits**
>
> Measurement units shown in the measurement control.
> String **editContents**
>
> Default contents for an editbox control. Note: do not provide both editContents and editValue. If both are present, the value that appears later in the script is used.
> Number **editValue**
>
> Real-number default for the editbox or combobox. Note: measurement controls interpret the value in points, and the dialog converts that points value to edit units when it opens. Note: do not provide both editValue and editContents. If both are present, the value that appears later in the script is used.
> Number **minWidth**
>
> Control width; for an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the MeasurementEditbox.
> MeasurementEditbox **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## MeasurementEditboxes

MeasurementEditboxes is the collection for measurement editboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Gives the collection's object count.

### Methods

> MeasurementEditbox **add**( Object **withProperties** )
>
> Creates a MeasurementEditbox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new MeasurementEditbox. (Optional) |

> Number **count**()
>
> Reports how many elements are in the MeasurementEditbox collection.
> MeasurementEditbox **item**( Mixed **index** )
>
> Gets the MeasurementEditbox identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> MeasurementEditbox **itemByID**( Number **id** )
>
> Gets the MeasurementEditbox that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> MeasurementEditbox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the MeasurementEditboxes included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a MeasurementEditbox, index, or name. Accepts: MeasurementEditbox, Long Integer, or String. |
| Mixed | to | Range end, supplied as a MeasurementEditbox, index, or name. Accepts: MeasurementEditbox, Long Integer, or String. |

> MeasurementEditbox **firstItem**()
>
> Gets the first MeasurementEditbox in the collection.
> MeasurementEditbox **lastItem**()
>
> Gets the last MeasurementEditbox in the collection.
> MeasurementEditbox **middleItem**()
>
> Gets the middle MeasurementEditbox in the collection.
> MeasurementEditbox **previousItem**( MeasurementEditbox **obj** )
>
> Gets the MeasurementEditbox whose index comes immediately before the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MeasurementEditbox | obj | MeasurementEditbox index that follows the desired MeasurementEditbox. |

> MeasurementEditbox **nextItem**( MeasurementEditbox **obj** )
>
> Gets the MeasurementEditbox whose index comes immediately after the specified item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| MeasurementEditbox | obj | MeasurementEditbox whose index comes before the desired MeasurementEditbox. |

> MeasurementEditbox **anyItem**()
>
> Gets any MeasurementEditbox in the collection.
> MeasurementEditbox **everyItem**()
>
> Gets every MeasurementEditbox in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the MeasurementEditbox.
> MeasurementEditbox **[]**( Number **index** )
>
> Gets the MeasurementEditbox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to access. |

## MeasurementUnits

MeasurementUnits defines the measurement unit.

### Class

> _Read Only_
>
> Number **POINTS** = 2054188905
>
> Unit value for points.
> _Read Only_
>
> Number **PICAS** = 2054187363
>
> Unit value for picas.
> _Read Only_
>
> Number **INCHES** = 2053729891
>
> Unit value for inches.
> _Read Only_
>
> Number `INCHES_DECIMAL` = 2053729892
>
> Unit value for decimal inches.
> _Read Only_
>
> Number **MILLIMETERS** = 2053991795
>
> Unit value for millimeters.
> _Read Only_
>
> Number **CENTIMETERS** = 2053336435
>
> Unit value for centimeters.
> _Read Only_
>
> Number **CICEROS** = 2053335395
>
> Unit value for ciceros.
> _Read Only_
>
> Number **CUSTOM** = 1131639917
>
> Measurement is still based on points, while the specified ruler uses the configured point interval between major tick marks. Refer to horizontal custom points or vertical custom points for related details.
> _Read Only_
>
> Number **AGATES** = 2051106676
>
> Unit value for agates.
> _Read Only_
>
> Number **U** = 2051691808
>
> Unit value for U.
> _Read Only_
>
> Number **BAI** = 2051170665
>
> Unit value for Bai.
> _Read Only_
>
> Number **MILS** = 2051893612
>
> Unit value for mils.
> _Read Only_
>
> Number **PIXELS** = 2054187384
>
> Unit value for pixels.
> _Read Only_
>
> Number **Q** = 2054255973
>
> Unit value for Q.
> _Read Only_
>
> Number **HA** = 1516790048
>
> Unit value for Ha.
> _Read Only_
>
> Number `AMERICAN_POINTS` = 1514238068
>
> Unit value for American points.
