# Paragraph Styles

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Collection holding paragraph styles.

## Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> ParagraphStyle **add**( Object **withProperties** )
>
> Adds a ParagraphStyle.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new ParagraphStyle. (Optional) |

> Number **count**()
>
> Reports how many ParagraphStyle elements are present.
> ParagraphStyle **item**( Mixed **index** )
>
> Retrieves the ParagraphStyle matching the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup value interpreted as either an index or a name. Can accept: Long Integer or String. |

> ParagraphStyle **itemByName**( String **name** )
>
> Retrieves the ParagraphStyle with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> ParagraphStyle **itemByID**( Number **id** )
>
> Retrieves the ParagraphStyle with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> ParagraphStyle **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the ParagraphStyles in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ParagraphStyle, index, or name that starts the range. Can accept: ParagraphStyle, Long Integer or String. |
| Mixed | to | ParagraphStyle, index, or name that ends the range. Can accept: ParagraphStyle, Long Integer or String. |

> ParagraphStyle **firstItem**()
>
> Retrieves the first ParagraphStyle in the collection.
> ParagraphStyle **lastItem**()
>
> Retrieves the last ParagraphStyle in the collection.
> ParagraphStyle **middleItem**()
>
> Retrieves the middle ParagraphStyle in the collection.
> ParagraphStyle **previousItem**( ParagraphStyle **obj** )
>
> Retrieves the ParagraphStyle at the index immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyle | obj | Index of the ParagraphStyle that comes after the desired ParagraphStyle. |

> ParagraphStyle **nextItem**( ParagraphStyle **obj** )
>
> Retrieves the ParagraphStyle whose index comes immediately after the specified ParagraphStyle in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ParagraphStyle | obj | ParagraphStyle positioned before the desired ParagraphStyle. |

> ParagraphStyle **anyItem**()
>
> Retrieves any ParagraphStyle in the collection.
> ParagraphStyle **everyItem**()
>
> Retrieves every ParagraphStyle in the collection.
> String **toSource**()
>
> Produces a string that returns the ParagraphStyle when executed.
> ParagraphStyle **[]**( Number **index** )
>
> Retrieves the ParagraphStyle at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |
