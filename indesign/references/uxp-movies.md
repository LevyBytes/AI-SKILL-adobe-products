# Movies

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Movie collection.

## Instance

> _Read Only_
>
> Number **length**
>
> Collection length.

### Methods

> Movie **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Adds a new Movie.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Selects the layer that will contain the created Movie. (Optional) |
| LocationOptions | at | Sets where the Movie is inserted against the reference object, or inside the container object. (Optional) |
| Mixed | reference | Provides the reference object. Note: this is required when `at` is before or after. Accepted forms: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new Movie. (Optional) |

> Number **count**()
>
> Shows how many elements the Movie contains.
> Movie **item**( Mixed **index** )
>
> Gets the Movie identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Supplies the index or name. Accepted forms: Long Integer or String. |

> Movie **itemByName**( String **name** )
>
> Gets the Movie with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Specifies the name. |

> Movie **itemByID**( Number **id** )
>
> Gets the Movie with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | Specifies the ID. |

> Movie **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Movies that fall inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Marks the starting Movie, index, or name for the range. Accepted forms: Movie, Long Integer or String. |
| Mixed | to | Marks the ending Movie, index, or name for the range. Accepted forms: Movie, Long Integer or String. |

> Movie **firstItem**()
>
> Gets the first Movie from the collection.
> Movie **lastItem**()
>
> Gets the last Movie from the collection.
> Movie **middleItem**()
>
> Gets the middle Movie from the collection.
> Movie **previousItem**( Movie **obj** )
>
> Gets the Movie immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Movie | obj | Identifies the Movie index that comes after the desired Movie. |

> Movie **nextItem**( Movie **obj** )
>
> Gets the Movie whose position comes after the specified Movie in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Movie | obj | Identifies the Movie whose index precedes the desired Movie. |

> Movie **anyItem**()
>
> Gets any Movie from the collection.
> Movie **everyItem**()
>
> Gets each Movie in the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the Movie.
> Movie **[]**( Number **index** )
>
> Gets the Movie at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Specifies the index. |
