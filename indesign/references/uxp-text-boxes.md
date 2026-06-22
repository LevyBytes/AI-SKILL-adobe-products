# Text Boxes

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

TextBoxes is the collection object for text boxes.

## Instance

> _Read Only_
>
> Number **length**
>
> Count of objects contained by the collection.

### Methods

> Number **count**()
>
> Reports how many elements the TextBox collection contains.
> TextBox **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Adds one TextBox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the TextBox is created. (Optional) |
| LocationOptions | at | Insertion point for the TextBox, either relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: required for before and after placements. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new TextBox. (Optional) |

> TextBox **item**( Mixed **index** )
>
> Retrieves the TextBox addressed by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Item specifier. Can accept: Long Integer or String. |

> TextBox **itemByName**( String **name** )
>
> Retrieves the TextBox whose name matches the argument.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> TextBox **itemByID**( Number **id** )
>
> Retrieves the TextBox whose ID matches the argument.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> TextBox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the TextBoxes that fall within the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, provided as a TextBox, index, or name. Can accept: TextBox, Long Integer or String. |
| Mixed | to | Range end, provided as a TextBox, index, or name. Can accept: TextBox, Long Integer or String. |

> TextBox **firstItem**()
>
> Retrieves the first TextBox in the collection.
> TextBox **lastItem**()
>
> Retrieves the last TextBox in the collection.
> TextBox **middleItem**()
>
> Retrieves the middle TextBox in the collection.
> TextBox **previousItem**( TextBox **obj** )
>
> Retrieves the TextBox whose position precedes the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextBox | obj | TextBox index that comes after the TextBox you want. |

> TextBox **nextItem**( TextBox **obj** )
>
> Retrieves the TextBox positioned after the supplied TextBox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextBox | obj | TextBox whose index is immediately before the TextBox you want. |

> TextBox **anyItem**()
>
> Retrieves any TextBox from the collection.
> TextBox **everyItem**()
>
> Retrieves every TextBox in the collection.
> String **toSource**()
>
> Builds source text that evaluates back to the TextBox.
> TextBox **[]**( Number **index** )
>
> Retrieves the TextBox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
