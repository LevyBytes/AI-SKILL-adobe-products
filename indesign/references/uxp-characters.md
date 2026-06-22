# Characters

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Character collection.

## Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Reports how many elements the Character contains.
> Character **item**( Mixed **index** )
>
> Returns the Character identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector supplied as a name or index. Can accept: Long Integer or String. |

> Character **itemByRange**( Mixed **from**, Mixed **to** )
>
> Provides the Characters covered by the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting range boundary: Character, index, or name. Can accept: Character, Long Integer or String. |
| Mixed | to | Ending range boundary: Character, index, or name. Can accept: Character, Long Integer or String. |

> Character **firstItem**()
>
> Returns the collection's first Character.
> Character **lastItem**()
>
> Returns the collection's last Character.
> Character **middleItem**()
>
> Returns the collection's middle Character.
> Character **previousItem**( Character **obj** )
>
> Returns the Character whose index precedes the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Character | obj | Index of the Character after the desired Character. |

> Character **nextItem**( Character **obj** )
>
> Returns the Character with an index after the specified Character in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Character | obj | Character positioned immediately ahead of the desired Character. |

> Character **anyItem**()
>
> Returns an arbitrary Character from the collection.
> Character **everyItem**()
>
> Returns all Characters in the collection.
> String **toSource**()
>
> Produces a string that returns the Character when executed.
> Character **[]**( Number **index** )
>
> Returns the Character at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
