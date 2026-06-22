# Character Styles

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Character styles are exposed as a collection.

## Instance

> _Read Only_
>
> Mixed **length**
>
> Collection object count. Can return: Long Integer or NothingEnum enumerator.

### Methods

> CharacterStyle **add**( Object **withProperties** )
>
> Creates a CharacterStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new CharacterStyle. (Optional) |

> Number **count**()
>
> Shows how many elements are in the CharacterStyle.
> CharacterStyle **item**( Mixed **index** )
>
> Gets the CharacterStyle identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup index or lookup name. Can accept: Long Integer or String. |

> CharacterStyle **itemByName**( String **name** )
>
> Gets the CharacterStyle that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> CharacterStyle **itemByID**( Number **id** )
>
> Gets the CharacterStyle that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> CharacterStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the CharacterStyles falling inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | CharacterStyle, index, or name at the range start. Can accept: CharacterStyle, Long Integer or String. |
| Mixed | to | CharacterStyle, index, or name at the range end. Can accept: CharacterStyle, Long Integer or String. |

> CharacterStyle **firstItem**()
>
> Gets the first CharacterStyle in the collection.
> CharacterStyle **lastItem**()
>
> Gets the last CharacterStyle in the collection.
> CharacterStyle **middleItem**()
>
> Gets the middle CharacterStyle in the collection.
> CharacterStyle **previousItem**( CharacterStyle **obj** )
>
> Gets the CharacterStyle whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyle | obj | Index of the CharacterStyle that follows the wanted CharacterStyle. |

> CharacterStyle **nextItem**( CharacterStyle **obj** )
>
> Gets the collection member that comes after the specified CharacterStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CharacterStyle | obj | CharacterStyle whose index precedes the wanted CharacterStyle. |

> CharacterStyle **anyItem**()
>
> Gets any CharacterStyle in the collection.
> CharacterStyle **everyItem**()
>
> Gets every CharacterStyle in the collection.
> String **toSource**()
>
> Produces executable source text that returns the CharacterStyle when run.
> CharacterStyle **[]**( Number **index** )
>
> Gets the CharacterStyle identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
