# Buttons

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

Buttons grouped as a collection.

## Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> Number **count**()
>
> Reports the Button element count.
> Button **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a Button.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the Button is created. (Optional) |
| LocationOptions | at | Insertion position for the Button, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object; needed if at is before or after. Accepts: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Starting property values for the new Button. (Optional) |

> Button **item**( Mixed **index** )
>
> Gets the Button for the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name value. Accepts: Long Integer or String. |

> Button **itemByName**( String **name** )
>
> Gets the Button that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> Button **itemByID**( Number **id** )
>
> Gets the Button with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> Button **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Buttons contained in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Button, index, or name that starts the range. Accepts: Button, Long Integer or String. |
| Mixed | to | Button, index, or name that ends the range. Accepts: Button, Long Integer or String. |

> Button **firstItem**()
>
> Gets the first Button in the collection.
> Button **lastItem**()
>
> Gets the last Button in the collection.
> Button **middleItem**()
>
> Gets the middle Button in the collection.
> Button **previousItem**( Button **obj** )
>
> Gets the Button at the index before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Button | obj | Index of the Button that follows the wanted Button. |

> Button **nextItem**( Button **obj** )
>
> Gets the Button whose index comes after the supplied Button in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Button | obj | Button whose index is before the wanted Button. |

> Button **anyItem**()
>
> Gets any Button from the collection.
> Button **everyItem**()
>
> Gets every Button in the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the Button reference.
> Button **[]**( Number **index** )
>
> Gets the Button at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |
