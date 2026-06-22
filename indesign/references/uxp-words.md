# Words

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Collection object containing Word entries.

## Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the Word.
> Word **item**( Mixed **index** )
>
> Gets the Word at the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> Word **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Words inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Word, index, or name that starts the range. Accepts: Word, Long Integer or String. |
| Mixed | to | Word, index, or name that ends the range. Accepts: Word, Long Integer or String. |

> Word **firstItem**()
>
> Gets the first Word in the collection.
> Word **lastItem**()
>
> Gets the last Word in the collection.
> Word **middleItem**()
>
> Gets the middle Word in the collection.
> Word **previousItem**( Word **obj** )
>
> Gets the Word whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Word | obj | Index of the Word that follows the requested Word. |

> Word **nextItem**( Word **obj** )
>
> Gets the Word whose index comes after the specified Word in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Word | obj | Word whose index is before the requested Word. |

> Word **anyItem**()
>
> Gets any Word in the collection.
> Word **everyItem**()
>
> Gets every Word in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the Word.
> Word **[]**( Number **index** )
>
> Gets the Word at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
