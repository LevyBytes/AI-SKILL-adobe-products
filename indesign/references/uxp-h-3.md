# Hyperlink Page Item Source, Hyperlink Page Item Sources, Hyperlink Text Destination, Hyperlink Text Destinations ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: HyperlinkPageItemSource; HyperlinkPageItemSources; HyperlinkTextDestination; HyperlinkTextDestinations; HyperlinkTextSource; HyperlinkTextSources; HyperlinkURLDestination; HyperlinkURLDestinations.

## HyperlinkPageItemSource

Hyperlinked page item.

### Instance

> _Read Only_
>
> Boolean **hidden**
>
> True indicates that the hyperlink is not visible.
> _Read Only_
>
> Number **id**
>
> Unique identifier for this HyperlinkPageItemSource.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owning Document for the HyperlinkPageItemSource.
> _Read Only_
>
> Number **index**
>
> Position of the HyperlinkPageItemSource in its container.
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
> Name assigned to the HyperlinkPageItemSource.
> PageItem **sourcePageItem**
>
> Page item used as the hyperlink source.
> String **label**
>
> String value available for arbitrary labeling.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes this HyperlinkPageItemSource.
> **showSource**()
>
> Moves the view to the hyperlink source.
> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces a string that can recreate the HyperlinkPageItemSource when executed.
> HyperlinkPageItemSource **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
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

## HyperlinkPageItemSources

Collection containing hyperlink page item sources.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> HyperlinkPageItemSource **add**( PageItem **source**, Object **withProperties** )
>
> Adds a hyperlink page item source.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | source | Page item to turn into a hyperlink source. |
| Object | withProperties | Starting property values for the new HyperlinkPageItemSource. (Optional) |

> Number **count**()
>
> Shows how many elements are in the HyperlinkPageItemSource collection.
> HyperlinkPageItemSource **item**( Mixed **index** )
>
> Fetches the HyperlinkPageItemSource identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier supplied as index or name. Accepted values: Long Integer or String. |

> HyperlinkPageItemSource **itemByName**( String **name** )
>
> Fetches the HyperlinkPageItemSource matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> HyperlinkPageItemSource **itemByID**( Number **id** )
>
> Fetches the HyperlinkPageItemSource matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> HyperlinkPageItemSource **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the HyperlinkPageItemSources included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as HyperlinkPageItemSource, index, or name. Accepted values: HyperlinkPageItemSource, Long Integer or String. |
| Mixed | to | Range end, supplied as HyperlinkPageItemSource, index, or name. Accepted values: HyperlinkPageItemSource, Long Integer or String. |

> HyperlinkPageItemSource **firstItem**()
>
> Gets the first HyperlinkPageItemSource from the collection.
> HyperlinkPageItemSource **lastItem**()
>
> Gets the final HyperlinkPageItemSource from the collection.
> HyperlinkPageItemSource **middleItem**()
>
> Gets the middle HyperlinkPageItemSource from the collection.
> HyperlinkPageItemSource **previousItem**( HyperlinkPageItemSource **obj** )
>
> Gets the HyperlinkPageItemSource whose index immediately precedes the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkPageItemSource | obj | Index-bearing HyperlinkPageItemSource after the desired HyperlinkPageItemSource. |

> HyperlinkPageItemSource **nextItem**( HyperlinkPageItemSource **obj** )
>
> Gets the HyperlinkPageItemSource whose index immediately follows the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkPageItemSource | obj | HyperlinkPageItemSource positioned before the desired HyperlinkPageItemSource. |

> HyperlinkPageItemSource **anyItem**()
>
> Gets any HyperlinkPageItemSource from the collection.
> HyperlinkPageItemSource **everyItem**()
>
> Gets all HyperlinkPageItemSource objects in the collection.
> String **toSource**()
>
> Produces a string that can recreate the HyperlinkPageItemSource when executed.
> HyperlinkPageItemSource **[]**( Number **index** )
>
> Fetches the HyperlinkPageItemSource at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## HyperlinkTextDestination

Hyperlink destination backed by text or an insertion point.

### Instance

> _Read Only_
>
> Boolean **hidden**
>
> True indicates that the hyperlink is not visible.
> _Read Only_
>
> Number **id**
>
> Unique identifier for this HyperlinkTextDestination.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owning Document for the HyperlinkTextDestination.
> _Read Only_
>
> Number **index**
>
> Position of the HyperlinkTextDestination in its container.
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
> Name assigned to the HyperlinkTextDestination.
> InsertionPoint **destinationText**
>
> Text or insertion point targeted by the hyperlink. Can also accept: Text.
> String **label**
>
> String value available for arbitrary labeling.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes this HyperlinkTextDestination.
> **showDestination**()
>
> Moves the view to the hyperlink destination.
> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces a string that can recreate the HyperlinkTextDestination when executed.
> HyperlinkTextDestination **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
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

## HyperlinkTextDestinations

Collection containing hyperlink text destinations.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> HyperlinkTextDestination **add**( Text **destination**, Object **withProperties** )
>
> Adds a hyperlink text destination.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Text | destination | Text or insertion point location targeted by the hyperlink. |
| Object | withProperties | Starting property values for the new HyperlinkTextDestination. (Optional) |

> Number **count**()
>
> Shows how many elements are in the HyperlinkTextDestination collection.
> HyperlinkTextDestination **item**( Mixed **index** )
>
> Fetches the HyperlinkTextDestination identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier supplied as index or name. Accepted values: Long Integer or String. |

> HyperlinkTextDestination **itemByName**( String **name** )
>
> Fetches the HyperlinkTextDestination matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> HyperlinkTextDestination **itemByID**( Number **id** )
>
> Fetches the HyperlinkTextDestination matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> HyperlinkTextDestination **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the HyperlinkTextDestinations included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as HyperlinkTextDestination, index, or name. Accepted values: HyperlinkTextDestination, Long Integer or String. |
| Mixed | to | Range end, supplied as HyperlinkTextDestination, index, or name. Accepted values: HyperlinkTextDestination, Long Integer or String. |

> HyperlinkTextDestination **firstItem**()
>
> Gets the first HyperlinkTextDestination from the collection.
> HyperlinkTextDestination **lastItem**()
>
> Gets the final HyperlinkTextDestination from the collection.
> HyperlinkTextDestination **middleItem**()
>
> Gets the middle HyperlinkTextDestination from the collection.
> HyperlinkTextDestination **previousItem**( HyperlinkTextDestination **obj** )
>
> Gets the HyperlinkTextDestination whose index immediately precedes the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkTextDestination | obj | Index-bearing HyperlinkTextDestination after the desired HyperlinkTextDestination. |

> HyperlinkTextDestination **nextItem**( HyperlinkTextDestination **obj** )
>
> Gets the HyperlinkTextDestination whose index immediately follows the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkTextDestination | obj | HyperlinkTextDestination positioned before the desired HyperlinkTextDestination. |

> HyperlinkTextDestination **anyItem**()
>
> Gets any HyperlinkTextDestination from the collection.
> HyperlinkTextDestination **everyItem**()
>
> Gets all HyperlinkTextDestination objects in the collection.
> String **toSource**()
>
> Produces a string that can recreate the HyperlinkTextDestination when executed.
> HyperlinkTextDestination **[]**( Number **index** )
>
> Fetches the HyperlinkTextDestination at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## HyperlinkTextSource

Hyperlinked text object or insertion point.

### Instance

> _Read Only_
>
> Boolean **hidden**
>
> True indicates that the hyperlink is not visible.
> _Read Only_
>
> Number **id**
>
> Unique identifier for this HyperlinkTextSource.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owning Document for the HyperlinkTextSource.
> _Read Only_
>
> Number **index**
>
> Position of the HyperlinkTextSource in its container.
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
> Name assigned to the HyperlinkTextSource.
> Text **sourceText**
>
> Hyperlinked text or insertion point.
> CharacterStyle **appliedCharacterStyle**
>
> Character style applied to the hyperlink text source.
> String **label**
>
> String value available for arbitrary labeling.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **remove**()
>
> Removes this HyperlinkTextSource.
> **showSource**()
>
> Moves the view to the hyperlink source.
> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to use. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Produces a string that can recreate the HyperlinkTextSource when executed.
> HyperlinkTextSource **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
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

## HyperlinkTextSources

Collection containing hyperlink text sources.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> HyperlinkTextSource **add**( Text **source**, Object **withProperties** )
>
> Adds a hyperlink text source.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Text | source | Text or insertion point to turn into a hyperlink source. |
| Object | withProperties | Starting property values for the new HyperlinkTextSource. (Optional) |

> Number **count**()
>
> Shows how many elements are in the HyperlinkTextSource collection.
> HyperlinkTextSource **item**( Mixed **index** )
>
> Fetches the HyperlinkTextSource identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier supplied as index or name. Accepted values: Long Integer or String. |

> HyperlinkTextSource **itemByName**( String **name** )
>
> Fetches the HyperlinkTextSource matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> HyperlinkTextSource **itemByID**( Number **id** )
>
> Fetches the HyperlinkTextSource matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> HyperlinkTextSource **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the HyperlinkTextSources included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as HyperlinkTextSource, index, or name. Accepted values: HyperlinkTextSource, Long Integer or String. |
| Mixed | to | Range end, supplied as HyperlinkTextSource, index, or name. Accepted values: HyperlinkTextSource, Long Integer or String. |

> HyperlinkTextSource **firstItem**()
>
> Gets the first HyperlinkTextSource from the collection.
> HyperlinkTextSource **lastItem**()
>
> Gets the final HyperlinkTextSource from the collection.
> HyperlinkTextSource **middleItem**()
>
> Gets the middle HyperlinkTextSource from the collection.
> HyperlinkTextSource **previousItem**( HyperlinkTextSource **obj** )
>
> Gets the HyperlinkTextSource whose index immediately precedes the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkTextSource | obj | Index-bearing HyperlinkTextSource after the desired HyperlinkTextSource. |

> HyperlinkTextSource **nextItem**( HyperlinkTextSource **obj** )
>
> Gets the HyperlinkTextSource whose index immediately follows the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkTextSource | obj | HyperlinkTextSource positioned before the desired HyperlinkTextSource. |

> HyperlinkTextSource **anyItem**()
>
> Gets any HyperlinkTextSource from the collection.
> HyperlinkTextSource **everyItem**()
>
> Gets all HyperlinkTextSource objects in the collection.
> String **toSource**()
>
> Produces a string that can recreate the HyperlinkTextSource when executed.
> HyperlinkTextSource **[]**( Number **index** )
>
> Fetches the HyperlinkTextSource at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## HyperlinkURLDestination

Hyperlink destination whose target is a URL.

### Instance

> _Read Only_
>
> Boolean **hidden**
>
> True means the hyperlink is kept hidden.
> _Read Only_
>
> Number **id**
>
> Identifier assigned uniquely to the HyperlinkURLDestination.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Owning Document for the HyperlinkURLDestination.
> _Read Only_
>
> Number **index**
>
> Position of the HyperlinkURLDestination inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection associated with the object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing the object's event listeners.
> String **name**
>
> Name assigned to the HyperlinkURLDestination.
> String **destinationURL**
>
> URL used as the hyperlink target.
> String **label**
>
> User-settable string storage for the object.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **remove**()
>
> Removes the HyperlinkURLDestination.
> **showDestination**()
>
> Moves the view to the hyperlink destination.
> **insertLabel**( String **key**, String **value** )
>
> Stores **value** as the label entry for the supplied **key**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Lookup key. |
| String | value | Value stored under the key. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the supplied **key**.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label lookup key. |

> String **toSource**()
>
> Builds a string that returns the HyperlinkURLDestination when executed.
> HyperlinkURLDestination **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Reads the object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event category. |
| Mixed | handler | Event callback. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## HyperlinkURLDestinations

Container for hyperlink URL destinations.

### Instance

> _Read Only_
>
> Number **length**
>
> Total objects available.

### Methods

> HyperlinkURLDestination **add**( String **destination**, Object **withProperties** )
>
> Creates a hyperlink URL destination.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | destination | URL used by the hyperlink. (Optional) |
| Object | withProperties | Starting property values for the new HyperlinkURLDestination. (Optional) |

> Number **count**()
>
> Shows how many elements are in the HyperlinkURLDestination collection.
> HyperlinkURLDestination **item**( Mixed **index** )
>
> Gets the HyperlinkURLDestination identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector by position or name; accepts Long Integer or String. |

> HyperlinkURLDestination **itemByName**( String **name** )
>
> Gets the HyperlinkURLDestination matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Destination name. |

> HyperlinkURLDestination **itemByID**( Number **id** )
>
> Gets the HyperlinkURLDestination matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | Destination ID. |

> HyperlinkURLDestination **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the HyperlinkURLDestinations covered by the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting HyperlinkURLDestination, index, or name for the range. Can accept: HyperlinkURLDestination, Long Integer or String. |
| Mixed | to | Ending HyperlinkURLDestination, index, or name for the range. Can accept: HyperlinkURLDestination, Long Integer or String. |

> HyperlinkURLDestination **firstItem**()
>
> Gets the first HyperlinkURLDestination in the collection.
> HyperlinkURLDestination **lastItem**()
>
> Gets the last HyperlinkURLDestination in the collection.
> HyperlinkURLDestination **middleItem**()
>
> Gets the middle HyperlinkURLDestination in the collection.
> HyperlinkURLDestination **previousItem**( HyperlinkURLDestination **obj** )
>
> Gets the HyperlinkURLDestination positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkURLDestination | obj | HyperlinkURLDestination index that follows the requested HyperlinkURLDestination. |

> HyperlinkURLDestination **nextItem**( HyperlinkURLDestination **obj** )
>
> Gets the HyperlinkURLDestination positioned immediately after the specified HyperlinkURLDestination in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HyperlinkURLDestination | obj | HyperlinkURLDestination whose index precedes the requested HyperlinkURLDestination. |

> HyperlinkURLDestination **anyItem**()
>
> Gets any HyperlinkURLDestination from the collection.
> HyperlinkURLDestination **everyItem**()
>
> Gets every HyperlinkURLDestination in the collection.
> String **toSource**()
>
> Builds a string that returns the HyperlinkURLDestination when executed.
> HyperlinkURLDestination **[]**( Number **index** )
>
> Gets the HyperlinkURLDestination at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Collection index. |
