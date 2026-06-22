# Capitalization, Caption Metadata Variable Preference, Cell Style Group, Cell Style Groups ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Capitalization — Class; CaptionMetadataVariablePreference; CellStyleGroup; CellStyleGroups; CellStyleMapping; CellStyleMappings.

## Capitalization — Class

> _Read Only_
>
> Number **NORMAL** = 1852797549
>
> Leaves text capitalization unchanged.
> _Read Only_
>
> Number `SMALL_CAPS` = 1936548720
>
> Applies small caps to lowercase letters.
> _Read Only_
>
> Number `ALL_CAPS` = 1634493296
>
> Applies uppercase letters throughout.
> _Read Only_
>
> Number `CAP_TO_SMALL_CAP` = 1664250723
>
> Applies OpenType small caps.
> _Read Only_
>
> Number `TITLE_CASE` = 1953068131
>
> Changes text to Title case.
> _Read Only_
>
> Number `SENTENCE_CASE` = 1936027235
>
> Changes text to Sentence case.
> _Read Only_
>
> Number `LOWER_CASE` = 1819244387
>
> Changes text to Lower case.

## CaptionMetadataVariablePreference

Preferences that define a caption metadata variable.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> TextVariable **parent**
>
> Parent TextVariable for the CaptionMetadataVariablePreference.
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
> String **textBefore**
>
> Text placed before the variable value. (Limit: 128 characters)
> String **metadataProviderName**
>
> Metadata provider name.
> String **textAfter**
>
> Text placed after the variable value. (Limit: 128 characters)
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> String **toSource**()
>
> Produces a string that can be executed to recreate the CaptionMetadataVariablePreference reference.
> CaptionMetadataVariablePreference **getElements**()
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

## CellStyleGroup

A group for cell styles.

### Instance

> _Read Only_
>
> CellStyle **allCellStyles**
>
> All Cell styles.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the CellStyleGroup.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the CellStyleGroup, either a Document, Application or CellStyleGroup.
> _Read Only_
>
> Number **index**
>
> Position of the CellStyleGroup inside its containing object.
> _Read Only_
>
> CellStyles **cellStyles**
>
> Cell style collection.
> _Read Only_
>
> CellStyleGroups **cellStyleGroups**
>
> Cell style group collection.
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
> String **name**
>
> Name of the CellStyleGroup.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> CellStyleGroup **duplicate**()
>
> Copies this CellStyleGroup object.
> CellStyleGroup **move**( LocationOptions **to**, Mixed **reference** )
>
> Places the style at the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. |
| Mixed | reference | Reference object; needed if to specifies before or after. Accepts: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

> **remove**( Mixed **replacingWith** )
>
> Deletes the style.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Replacement style applied where the deleted style had been used. Accepts: ParagraphStyle or CharacterStyle. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to store. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Fetches the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the CellStyleGroup reference.
> CellStyleGroup **getElements**()
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

## CellStyleGroups

Cell style groups represented as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> CellStyleGroup **add**( Object **withProperties** )
>
> Creates a CellStyleGroup.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new CellStyleGroup. (Optional) |

> Number **count**()
>
> Reports the CellStyleGroup element count.
> CellStyleGroup **item**( Mixed **index** )
>
> Gets the CellStyleGroup for the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name value. Accepts: Long Integer or String. |

> CellStyleGroup **itemByName**( String **name** )
>
> Gets the CellStyleGroup that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> CellStyleGroup **itemByID**( Number **id** )
>
> Gets the CellStyleGroup with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> CellStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the CellStyleGroups contained in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | CellStyleGroup, index, or name that starts the range. Accepts: CellStyleGroup, Long Integer or String. |
| Mixed | to | CellStyleGroup, index, or name that ends the range. Accepts: CellStyleGroup, Long Integer or String. |

> CellStyleGroup **firstItem**()
>
> Gets the first CellStyleGroup in the collection.
> CellStyleGroup **lastItem**()
>
> Gets the last CellStyleGroup in the collection.
> CellStyleGroup **middleItem**()
>
> Gets the middle CellStyleGroup in the collection.
> CellStyleGroup **previousItem**( CellStyleGroup **obj** )
>
> Gets the CellStyleGroup at the index before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CellStyleGroup | obj | Index of the CellStyleGroup that follows the wanted CellStyleGroup. |

> CellStyleGroup **nextItem**( CellStyleGroup **obj** )
>
> Gets the CellStyleGroup whose index comes after the supplied CellStyleGroup in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CellStyleGroup | obj | CellStyleGroup whose index is before the wanted CellStyleGroup. |

> CellStyleGroup **anyItem**()
>
> Gets any CellStyleGroup from the collection.
> CellStyleGroup **everyItem**()
>
> Gets every CellStyleGroup in the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the CellStyleGroup reference.
> CellStyleGroup **[]**( Number **index** )
>
> Gets the CellStyleGroup at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## CellStyleMapping

A mapping entry for cell styles.

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
> Parent object for the CellStyleMapping, either a Application, Document, Story or XmlStory.
> _Read Only_
>
> Number **index**
>
> Position of the CellStyleMapping inside its containing object.
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
> Enables several properties to be set in one operation.

### Methods

> **remove**()
>
> Deletes a style mapping.
> String **toSource**()
>
> Produces a string that can be executed to recreate the CellStyleMapping reference.
> CellStyleMapping **getElements**()
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

## CellStyleMappings

Cell style mappings represented as a collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> CellStyleMapping **add**( String **sourceStyleName**, String **destinationStyleName**, MapType **mappingRuleType**, Object **withProperties** )
>
> Creates a style mapping entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | sourceStyleName | Source style name. |
| String | destinationStyleName | Destination style name. |
| MapType | mappingRuleType | Mapping type. |
| Object | withProperties | Starting property values for the new CellStyleMapping. (Optional) |

> Number **count**()
>
> Reports the CellStyleMapping element count.
> CellStyleMapping **item**( Mixed **index** )
>
> Gets the CellStyleMapping for the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name value. Accepts: Long Integer or String. |

> CellStyleMapping **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the CellStyleMappings contained in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | CellStyleMapping, index, or name that starts the range. Accepts: CellStyleMapping, Long Integer or String. |
| Mixed | to | CellStyleMapping, index, or name that ends the range. Accepts: CellStyleMapping, Long Integer or String. |

> CellStyleMapping **firstItem**()
>
> Gets the first CellStyleMapping in the collection.
> CellStyleMapping **lastItem**()
>
> Gets the last CellStyleMapping in the collection.
> CellStyleMapping **middleItem**()
>
> Gets the middle CellStyleMapping in the collection.
> CellStyleMapping **previousItem**( CellStyleMapping **obj** )
>
> Gets the CellStyleMapping at the index before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CellStyleMapping | obj | Index of the CellStyleMapping that follows the wanted CellStyleMapping. |

> CellStyleMapping **nextItem**( CellStyleMapping **obj** )
>
> Gets the CellStyleMapping whose index comes after the supplied CellStyleMapping in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CellStyleMapping | obj | CellStyleMapping whose index is before the wanted CellStyleMapping. |

> CellStyleMapping **anyItem**()
>
> Gets any CellStyleMapping from the collection.
> CellStyleMapping **everyItem**()
>
> Gets every CellStyleMapping in the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the CellStyleMapping reference.
> CellStyleMapping **[]**( Number **index** )
>
> Gets the CellStyleMapping at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |
