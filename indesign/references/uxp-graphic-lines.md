# Graphic Lines

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

A collection containing graphic lines.

## Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Displays how many elements are in the GraphicLine collection.
> GraphicLine **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Constructs a new GraphicLine.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer on which the GraphicLine is created. (Optional) |
| LocationOptions | at | Insertion location for the GraphicLine, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: required when the at parameter is before or after. Accepts Document, Spread, MasterSpread, Page, Layer, or PageItem. (Optional) |
| Object | withProperties | Initial property values for the new GraphicLine. (Optional) |

> GraphicLine **item**( Mixed **index** )
>
> Returns the GraphicLine identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String. |

> GraphicLine **itemByName**( String **name** )
>
> Returns the GraphicLine matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> GraphicLine **itemByID**( Number **id** )
>
> Returns the GraphicLine matching the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> GraphicLine **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the GraphicLines contained in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | GraphicLine, index, or name at the range start. Accepts GraphicLine, Long Integer, or String. |
| Mixed | to | GraphicLine, index, or name at the range end. Accepts GraphicLine, Long Integer, or String. |

> GraphicLine **firstItem**()
>
> Returns the collection's first GraphicLine.
> GraphicLine **lastItem**()
>
> Returns the collection's last GraphicLine.
> GraphicLine **middleItem**()
>
> Returns the collection's middle GraphicLine.
> GraphicLine **previousItem**( GraphicLine **obj** )
>
> Returns the GraphicLine whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GraphicLine | obj | GraphicLine positioned after the desired GraphicLine in index order. |

> GraphicLine **nextItem**( GraphicLine **obj** )
>
> Returns the collection member positioned after the specified GraphicLine.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GraphicLine | obj | GraphicLine positioned before the desired GraphicLine in index order. |

> GraphicLine **anyItem**()
>
> Returns any GraphicLine from the collection.
> GraphicLine **everyItem**()
>
> Returns all GraphicLine objects in the collection.
> String **toSource**()
>
> Generates executable source text that returns the GraphicLine.
> GraphicLine **[]**( Number **index** )
>
> Returns the GraphicLine at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |
