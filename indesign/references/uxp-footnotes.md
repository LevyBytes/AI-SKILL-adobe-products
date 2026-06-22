# Footnotes

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Footnote collection.

## Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Displays the Footnote element count.
> Footnote **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a footnote.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | at | Placement of the main-text footnote reference number, either in relation to the reference object or within the story. (Optional) |
| Mixed | reference | Reference object. Note: Use an insertion point or note; this is required when at specifies before or after. Accepts: Note or InsertionPoint. (Optional) |
| Object | withProperties | Starting property values for the new Footnote (Optional) |

> Footnote **item**( Mixed **index** )
>
> Gives back the Footnote with the requested index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> Footnote **itemByName**( String **name** )
>
> Gives back the Footnote with the requested name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Footnote **itemByID**( Number **id** )
>
> Gives back the Footnote with the requested ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Footnote **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gives back the Footnotes inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Footnote, index, or name at the start of the range. Accepts: Footnote, Long Integer or String. |
| Mixed | to | Footnote, index, or name at the end of the range. Accepts: Footnote, Long Integer or String. |

> Footnote **firstItem**()
>
> Gives back the first Footnote in the collection.
> Footnote **lastItem**()
>
> Gives back the last Footnote in the collection.
> Footnote **middleItem**()
>
> Gives back the middle Footnote in the collection.
> Footnote **previousItem**( Footnote **obj** )
>
> Gives back the Footnote immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Footnote | obj | Footnote index located after the desired Footnote. |

> Footnote **nextItem**( Footnote **obj** )
>
> Gives back the collection member that follows the specified Footnote.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Footnote | obj | Footnote located before the desired Footnote. |

> Footnote **anyItem**()
>
> Gives back any Footnote in the collection.
> Footnote **everyItem**()
>
> Gives back every Footnote in the collection.
> String **toSource**()
>
> Builds a string that returns the Footnote when executed.
> Footnote **[]**( Number **index** )
>
> Gives back the Footnote with the requested index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
