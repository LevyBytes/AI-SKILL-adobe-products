# Rule Data Object, Rule Data Objects, Rule Data Type, Rule Width ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: RuleDataObject; RuleDataObjects; RuleDataType; RuleWidth; RulerOrigin.

## RuleDataObject

A data object for a preflight rule.

### Instance

> _Read Only_
>
> String **name**
>
> RuleDataObject name value.
> _Read Only_
>
> RuleDataType **dataType**
>
> Data type value.
> _Read Only_
>
> String **id**
>
> ID assigned to this rule data object.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent for the RuleDataObject, either a PreflightProfileRule or PreflightRuleInstance.
> _Read Only_
>
> Number **index**
>
> Position of the RuleDataObject inside the object that contains it.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Mixed **dataValue**
>
> Stored value for this data object. Return forms: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects.
> Object **properties**
>
> Property bag used to set several properties in one operation.

### Methods

> **remove**()
>
> Removes the RuleDataObject.
> String **toSource**()
>
> Produces a string that can be executed to return the RuleDataObject.
> RuleDataObject **getElements**()
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
| String | eventType | Event type value. |
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

## RuleDataObjects

A collection containing prefight rule data objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size in objects.

### Methods

> RuleDataObject **add**( String **name**, RuleDataType **dataType**, Mixed **dataValue**, Object **withProperties** )
>
> Creates preflight rule data on a preflight profile rule.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Rule data name to create |
| RuleDataType | dataType | Data type for the entry |
| Mixed | dataValue | Data value. Can accept: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects. |
| Object | withProperties | Starting property values for the new RuleDataObject (Optional) |

> Number **count**()
>
> Reports how many elements the RuleDataObject contains.
> RuleDataObject **item**( Mixed **index** )
>
> Fetches the RuleDataObject identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup key, either an index or a name. Can accept: Long Integer or String. |

> RuleDataObject **itemByName**( String **name** )
>
> Fetches the RuleDataObject that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> RuleDataObject **itemByID**( Number **id** )
>
> Fetches the RuleDataObject that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> RuleDataObject **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches RuleDataObjects spanning the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting RuleDataObject, index, or name for the range. Can accept: RuleDataObject, Long Integer or String. |
| Mixed | to | Ending RuleDataObject, index, or name for the range. Can accept: RuleDataObject, Long Integer or String. |

> RuleDataObject **firstItem**()
>
> Fetches the collection's first RuleDataObject.
> RuleDataObject **lastItem**()
>
> Fetches the collection's final RuleDataObject.
> RuleDataObject **middleItem**()
>
> Fetches the collection's middle RuleDataObject.
> RuleDataObject **previousItem**( RuleDataObject **obj** )
>
> Fetches the RuleDataObject immediately before the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RuleDataObject | obj | RuleDataObject whose position follows the desired RuleDataObject. |

> RuleDataObject **nextItem**( RuleDataObject **obj** )
>
> Fetches the RuleDataObject immediately after the supplied RuleDataObject in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RuleDataObject | obj | RuleDataObject whose position precedes the desired RuleDataObject. |

> RuleDataObject **anyItem**()
>
> Fetches one arbitrary RuleDataObject in the collection.
> RuleDataObject **everyItem**()
>
> Fetches every RuleDataObject in the collection.
> String **toSource**()
>
> Builds a string that, when run, returns the RuleDataObject.
> RuleDataObject **[]**( Number **index** )
>
> Fetches the RuleDataObject at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## RuleDataType

Identifies which data category this data object uses.

### Class

> _Read Only_
>
> Number `INTEGER_DATA_TYPE` = 1920223598
>
> Uses int32 data.
> _Read Only_
>
> Number `SHORT_INTEGER_DATA_TYPE` = 1920226153
>
> Uses int16 data.
> _Read Only_
>
> Number `REAL_DATA_TYPE` = 1920225900
>
> Uses a real-number data type.
> _Read Only_
>
> Number `STRING_DATA_TYPE` = 1920226162
>
> Uses a string data type.
> _Read Only_
>
> Number `BOOLEAN_DATA_TYPE` = 1920221804
>
> Uses a boolean data type.
> _Read Only_
>
> Number `OBJECT_DATA_TYPE` = 1920225122
>
> Uses an object data type.
> _Read Only_
>
> Number `LIST_DATA_TYPE` = 1920224372
>
> Uses a list data type.

## RuleWidth

Options that choose the object used as the basis for the paragraph rule above width.

### Class

> _Read Only_
>
> Number `TEXT_WIDTH` = 1886681207
>
> Sets the paragraph rule above to match the first text line's width in the paragraph.
> _Read Only_
>
> Number `COLUMN_WIDTH` = 1265399652
>
> Sets the rule width to the column width.

## RulerOrigin

Choices for where the zero point is placed.

### Class

> _Read Only_
>
> Number `SPREAD_ORIGIN` = 1380143983
>
> Places the zero point at the spread's top-left corner, with ruler increments continuing across every page in that spread.
> _Read Only_
>
> Number `PAGE_ORIGIN` = 1380143215
>
> Makes each page's top-left corner serve as a fresh zero point on the horizontal ruler.
> _Read Only_
>
> Number `SPINE_ORIGIN` = 1380143984
>
> Places the zero point at the left-most page's top-left corner and at the top of the binding spine. The horizontal ruler counts from the leftmost page to the binding edge, then continues from the spine to the right edge of the right-most page. This also locks the zero point and blocks manual overrides.
