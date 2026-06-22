# Ovals, Override Type

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Ovals; OverrideType.

## Ovals

An ellipse collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements the Oval contains.
> Oval **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates an Oval.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the Oval is created. (Optional) |
| LocationOptions | at | Insertion location for the Oval, either relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object; this value is mandatory for before/after placements. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new Oval. (Optional) |

> Oval **item**( Mixed **index** )
>
> Finds the Oval identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> Oval **itemByName**( String **name** )
>
> Finds the Oval that has the given name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Oval **itemByID**( Number **id** )
>
> Finds the Oval whose ID matches the supplied value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Oval **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the Ovals contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, given as the Oval, index, or name. Can accept: Oval, Long Integer or String. |
| Mixed | to | Range end, given as the Oval, index, or name. Can accept: Oval, Long Integer or String. |

> Oval **firstItem**()
>
> Returns the collection's first Oval.
> Oval **lastItem**()
>
> Returns the collection's final Oval.
> Oval **middleItem**()
>
> Returns the collection's middle Oval.
> Oval **previousItem**( Oval **obj** )
>
> Returns the Oval whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Oval | obj | Index of the Oval after the desired Oval. |

> Oval **nextItem**( Oval **obj** )
>
> Returns the Oval whose index comes immediately after the specified Oval in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Oval | obj | Oval positioned before the desired Oval. |

> Oval **anyItem**()
>
> Returns any Oval from the collection.
> Oval **everyItem**()
>
> Returns each Oval in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the Oval.
> Oval **[]**( Number **index** )
>
> Returns the Oval at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## OverrideType

Choices for clearing overrides.

### Class

> _Read Only_
>
> Number **ALL** = 1634495520
>
> Removes every override type.
> _Read Only_
>
> Number `CHARACTER_ONLY` = 1667789423
>
> Removes only overrides from character styles.
> _Read Only_
>
> Number `PARAGRAPH_ONLY` = 1885434479
>
> Removes only overrides from paragraph styles.
