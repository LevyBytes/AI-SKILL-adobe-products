# Swatch, Swatches, Sync Conflict Resolution

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Swatch; Swatches; SyncConflictResolution.

## Swatch

A swatch value, such as a color, gradient, tint, or mixed ink.

### Instance

> _Read Only_
>
> ColorGroup **parentColorGroup**
>
> Color group containing this swatch.
> _Read Only_
>
> Number **id**
>
> Unique Swatch ID.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves successfully to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the Swatch (a Application or Document).
> _Read Only_
>
> Number **index**
>
> Position of the Swatch inside its containing object.
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
> String **name**
>
> Swatch name.
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> **remove**( Swatch **replacingWith** )
>
> Deletes this swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | replacingWith | Swatch applied where the deleted swatch had been used. (Optional) |

> Swatch **duplicate**()
>
> Duplicates this Swatch.
> Swatch **merge**( Mixed **with** )
>
> Merges the specified swatches into this swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | with | Swatch values that should be merged. Can accept: Array of Swatches, Swatch or String. |

> **insertLabel**( String **key**, String **value** )
>
> Stores the value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to set. |
| String | value | Value to assign. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to query. |

> String **toSource**()
>
> Builds executable source text that would resolve back to the Swatch.
> Swatch **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Retrieves this object's specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Adds an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Event handler to call. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Swatches

A collection containing swatches.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Reports how many elements the Swatch collection contains.
> Swatch **item**( Mixed **index** )
>
> Gets the Swatch identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> Swatch **itemByName**( String **name** )
>
> Gets the Swatch whose name matches the argument.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Swatch **itemByID**( Number **id** )
>
> Gets the Swatch identified by the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Swatch **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Swatches contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Swatch, index, or name for the range. Can accept: Swatch, Long Integer or String. |
| Mixed | to | Ending Swatch, index, or name for the range. Can accept: Swatch, Long Integer or String. |

> Swatch **firstItem**()
>
> Gets the first Swatch from the collection.
> Swatch **lastItem**()
>
> Gets the final Swatch from the collection.
> Swatch **middleItem**()
>
> Gets the middle Swatch from the collection.
> Swatch **previousItem**( Swatch **obj** )
>
> Gets the Swatch whose index comes before the supplied Swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | obj | Swatch positioned after the Swatch you want. |

> Swatch **nextItem**( Swatch **obj** )
>
> Gets the Swatch whose index comes after the supplied Swatch.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Swatch | obj | Swatch positioned before the Swatch you want. |

> Swatch **anyItem**()
>
> Gets an arbitrary Swatch from the collection.
> Swatch **everyItem**()
>
> Gets all Swatch objects in the collection.
> String **toSource**()
>
> Creates a string that returns the Swatch when evaluated.
> Swatch **[]**( Number **index** )
>
> Gets the Swatch at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## SyncConflictResolution

Conflict-resolution mode used during Version Cue synchronization.

### Class

> _Read Only_
>
> Number `SKIP_CONFLICTS` = 1986216787
>
> Bypasses files that have conflicts.
> _Read Only_
>
> Number `ASK_ABOUT_CONFLICTS` = 1986216769
>
> Prompts the user to choose conflict handling.
> _Read Only_
>
> Number `PREFER_LOCAL` = 1986216780
>
> Selects the local version.
> _Read Only_
>
> Number `PREFER_PROJECT` = 1986216784
>
> Selects the project version.
