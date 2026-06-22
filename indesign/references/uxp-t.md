# Tab Stop Alignment, Tab Stop, Tab Stops, Table Direction Options ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TabStopAlignment; TabStop; TabStops; TableDirectionOptions; TableFormattingOptions; TableStyleGroup; TableStyleGroups; TableStyleMapping; TableStyleMappings.

## TabStopAlignment

Options for aligning tab stops.

### Class

> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Align left.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Align center.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Align right.
> _Read Only_
>
> Number `CHARACTER_ALIGN` = 1952604515
>
> Uses the specified character as the alignment point for the tab stop.

## TabStop

Single tab stop.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the TabStop: TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory.
> _Read Only_
>
> Number **index**
>
> Position of the TabStop within its container.
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
> TabStopAlignment **alignment**
>
> Alignment used by the tab stop.
> String **alignmentCharacter**
>
> Character used for tab-stop alignment. Note: Applies when alignment is character align.
> String **leader**
>
> Leader string for the tab stop.
> Measurement Unit (Number or String)=any **position**
>
> Position assigned to the tab stop.
> Object **properties**
>
> Object used to set several properties in one operation.

### Methods

> **remove**()
>
> Removes the TabStop.
> String **toSource**()
>
> Creates a string that returns the TabStop when evaluated.
> TabStop **getElements**()
>
> Turns the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type string. |
| Mixed | handler | Handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TabStops

Collection containing tab stops.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> TabStop **add**( Object **withProperties** )
>
> Adds a new TabStop.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property values used when creating the TabStop. (Optional) |

> Number **count**()
>
> Reports how many TabStop elements are present.
> TabStop **item**( Mixed **index** )
>
> Gets the TabStop identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> TabStop **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TabStops contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TabStop, index, or name for the range. Can accept: TabStop, Long Integer or String. |
| Mixed | to | Ending TabStop, index, or name for the range. Can accept: TabStop, Long Integer or String. |

> TabStop **firstItem**()
>
> Gets the first TabStop from the collection.
> TabStop **lastItem**()
>
> Gets the final TabStop from the collection.
> TabStop **middleItem**()
>
> Gets the middle TabStop from the collection.
> TabStop **previousItem**( TabStop **obj** )
>
> Gets the TabStop whose index comes before the supplied TabStop.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TabStop | obj | TabStop positioned after the TabStop you want. |

> TabStop **nextItem**( TabStop **obj** )
>
> Gets the TabStop whose index comes after the supplied TabStop.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TabStop | obj | TabStop positioned before the TabStop you want. |

> TabStop **anyItem**()
>
> Gets an arbitrary TabStop from the collection.
> TabStop **everyItem**()
>
> Gets all TabStop objects in the collection.
> String **toSource**()
>
> Creates a string that returns the TabStop when evaluated.
> TabStop **[]**( Number **index** )
>
> Gets the TabStop at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TableDirectionOptions

Options controlling table direction.

### Class

> _Read Only_
>
> Number `LEFT_TO_RIGHT_DIRECTION` = 1278366308
>
> Sets table direction from left to right.
> _Read Only_
>
> Number `RIGHT_TO_LEFT_DIRECTION` = 1379028068
>
> Sets table direction from right to left.

## TableFormattingOptions

Options for formatting imported spreadsheets.

### Class

> _Read Only_
>
> Number `EXCEL_FORMATTED_TABLE` = 2020361812
>
> Keeps formatting from the original spreadsheet.
> _Read Only_
>
> Number `EXCEL_UNFORMATTED_TABLE` = 2020365652
>
> Converts the spreadsheet into a table without formatting.
> _Read Only_
>
> Number `EXCEL_UNFORMATTED_TABBED_TEXT` = 2018858068
>
> Converts the spreadsheet into unformatted tab-delimited text.
> _Read Only_
>
> Number `EXCEL_FORMAT_ONLY_ONCE` = 2017873748
>
> Converts the spreadsheet into a table whose formatting applies only on initial import, not on update.

## TableStyleGroup

Group that contains table styles.

### Instance

> _Read Only_
>
> TableStyle **allTableStyles**
>
> All Table styles in this group.
> _Read Only_
>
> Number **id**
>
> Unique ID for the TableStyleGroup.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the TableStyleGroup: Document, Application or TableStyleGroup.
> _Read Only_
>
> Number **index**
>
> Position of the TableStyleGroup within its container.
> _Read Only_
>
> TableStyles **tableStyles**
>
> Table styles collection.
> _Read Only_
>
> TableStyleGroups **tableStyleGroups**
>
> Table style groups collection.
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
> String **name**
>
> Name of the TableStyleGroup.
> String **label**
>
> String value available as a label property.
> Object **properties**
>
> Object used to set several properties in one operation.

### Methods

> TableStyleGroup **duplicate**()
>
> Copies the TableStyleGroup.
> TableStyleGroup **move**( LocationOptions **to**, Mixed **reference** )
>
> Repositions the style at the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Destination relation, either relative to the reference object or inside the containing object. |
| Mixed | reference | Object used as the reference point. Note: Required if to is before or after. Allowed types: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

> **remove**( Mixed **replacingWith** )
>
> Removes the style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Style to use instead of the removed style. Can accept: ParagraphStyle or CharacterStyle. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value stored for the key. |

> String **extractLabel**( String **key** )
>
> Fetches the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Creates a string that returns the TableStyleGroup when evaluated.
> TableStyleGroup **getElements**()
>
> Turns the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type string. |
| Mixed | handler | Handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TableStyleGroups

Collection containing table style groups.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> TableStyleGroup **add**( Object **withProperties** )
>
> Adds a new TableStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Property values used when creating the TableStyleGroup. (Optional) |

> Number **count**()
>
> Reports how many TableStyleGroup elements are present.
> TableStyleGroup **item**( Mixed **index** )
>
> Gets the TableStyleGroup identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> TableStyleGroup **itemByName**( String **name** )
>
> Gets the TableStyleGroup whose name matches the argument.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> TableStyleGroup **itemByID**( Number **id** )
>
> Gets the TableStyleGroup identified by the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> TableStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TableStyleGroups contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TableStyleGroup, index, or name for the range. Can accept: TableStyleGroup, Long Integer or String. |
| Mixed | to | Ending TableStyleGroup, index, or name for the range. Can accept: TableStyleGroup, Long Integer or String. |

> TableStyleGroup **firstItem**()
>
> Gets the first TableStyleGroup from the collection.
> TableStyleGroup **lastItem**()
>
> Gets the final TableStyleGroup from the collection.
> TableStyleGroup **middleItem**()
>
> Gets the middle TableStyleGroup from the collection.
> TableStyleGroup **previousItem**( TableStyleGroup **obj** )
>
> Gets the TableStyleGroup whose index comes before the supplied TableStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TableStyleGroup | obj | TableStyleGroup positioned after the TableStyleGroup you want. |

> TableStyleGroup **nextItem**( TableStyleGroup **obj** )
>
> Gets the TableStyleGroup whose index comes after the supplied TableStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TableStyleGroup | obj | TableStyleGroup positioned before the TableStyleGroup you want. |

> TableStyleGroup **anyItem**()
>
> Gets an arbitrary TableStyleGroup from the collection.
> TableStyleGroup **everyItem**()
>
> Gets all TableStyleGroup objects in the collection.
> String **toSource**()
>
> Creates a string that returns the TableStyleGroup when evaluated.
> TableStyleGroup **[]**( Number **index** )
>
> Gets the TableStyleGroup at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TableStyleMapping

Mapping between table styles.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the TableStyleMapping: Application, Document, Story or XmlStory.
> _Read Only_
>
> Number **index**
>
> Position of the TableStyleMapping within its container.
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
> String **sourceStyleName**
>
> Source style name property.
> String **destinationStyleName**
>
> Destination style name property.
> MapType **mappingRuleType**
>
> Mapping rule type.
> Object **properties**
>
> Object used to set several properties in one operation.

### Methods

> **remove**()
>
> Removes a style mapping.
> String **toSource**()
>
> Creates a string that returns the TableStyleMapping when evaluated.
> TableStyleMapping **getElements**()
>
> Turns the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type string. |
| Mixed | handler | Handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TableStyleMappings

Collection containing table style mappings.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> TableStyleMapping **add**( String **sourceStyleName**, String **destinationStyleName**, MapType **mappingRuleType**, Object **withProperties** )
>
> Creates a style mapping entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | sourceStyleName | Name of the source style. |
| String | destinationStyleName | Name of the destination style. |
| MapType | mappingRuleType | Mapping rule type. |
| Object | withProperties | Starting property values for the created TableStyleMapping. (Optional) |

> Number **count**()
>
> Reports how many TableStyleMapping elements are present.
> TableStyleMapping **item**( Mixed **index** )
>
> Gets the TableStyleMapping addressed by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> TableStyleMapping **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TableStyleMappings found inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TableStyleMapping, index, or name for the range. Can accept: TableStyleMapping, Long Integer or String. |
| Mixed | to | Ending TableStyleMapping, index, or name for the range. Can accept: TableStyleMapping, Long Integer or String. |

> TableStyleMapping **firstItem**()
>
> Gets the first TableStyleMapping from the collection.
> TableStyleMapping **lastItem**()
>
> Gets the final TableStyleMapping from the collection.
> TableStyleMapping **middleItem**()
>
> Gets the center TableStyleMapping from the collection.
> TableStyleMapping **previousItem**( TableStyleMapping **obj** )
>
> Gets the TableStyleMapping positioned immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TableStyleMapping | obj | TableStyleMapping index that comes after the TableStyleMapping being requested. |

> TableStyleMapping **nextItem**( TableStyleMapping **obj** )
>
> Gets the TableStyleMapping positioned after the supplied TableStyleMapping in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TableStyleMapping | obj | TableStyleMapping whose position is before the TableStyleMapping being requested. |

> TableStyleMapping **anyItem**()
>
> Gets an arbitrary TableStyleMapping from the collection.
> TableStyleMapping **everyItem**()
>
> Gets all TableStyleMapping entries in the collection.
> String **toSource**()
>
> Builds executable source text that resolves back to the TableStyleMapping.
> TableStyleMapping **[]**( Number **index** )
>
> Gets the TableStyleMapping at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
