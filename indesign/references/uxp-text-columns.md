# Text Columns

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Represents a text-column collection.

## Instance

> _Read Only_
>
> Number **length**
>
> Number of objects contained in the collection.

### Methods

> Number **count**()
>
> Reports how many elements the TextColumn collection contains.
> TextColumn **item**( Mixed **index** )
>
> Returns the TextColumn identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Accepts: Long Integer or String. |

> TextColumn **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns TextColumns between the specified endpoints.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start endpoint: a TextColumn, index, or name. Accepts: TextColumn, Long Integer or String. |
| Mixed | to | Range end endpoint: a TextColumn, index, or name. Accepts: TextColumn, Long Integer or String. |

> TextColumn **firstItem**()
>
> Retrieves the collection's first TextColumn.
> TextColumn **lastItem**()
>
> Retrieves the collection's last TextColumn.
> TextColumn **middleItem**()
>
> Retrieves the collection's middle TextColumn.
> TextColumn **previousItem**( TextColumn **obj** )
>
> Returns the TextColumn whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextColumn | obj | TextColumn index immediately after the TextColumn to return. |

> TextColumn **nextItem**( TextColumn **obj** )
>
> Returns the TextColumn positioned after the specified TextColumn in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextColumn | obj | TextColumn immediately before the TextColumn to return. |

> TextColumn **anyItem**()
>
> Retrieves any TextColumn from the collection.
> TextColumn **everyItem**()
>
> Retrieves every TextColumn in the collection.
> String **toSource**()
>
> Builds an executable string that returns the TextColumn.
> TextColumn **[]**( Number **index** )
>
> Returns the TextColumn at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |
