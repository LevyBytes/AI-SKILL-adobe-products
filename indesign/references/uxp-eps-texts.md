# Eps Texts

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the EPSText.
> EPSText **item**( Mixed **index** )
>
> Gets the EPSText identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> EPSText **itemByName**( String **name** )
>
> Gets the EPSText that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> EPSText **itemByID**( Number **id** )
>
> Gets the EPSText with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> EPSText **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the EPSTexts contained in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | EPSText, index, or name that starts the range. Accepts: EPSText, Long Integer or String. |
| Mixed | to | EPSText, index, or name that ends the range. Accepts: EPSText, Long Integer or String. |

> EPSText **firstItem**()
>
> Gets the first EPSText in the collection.
> EPSText **lastItem**()
>
> Gets the last EPSText in the collection.
> EPSText **middleItem**()
>
> Gets the middle EPSText in the collection.
> EPSText **previousItem**( EPSText **obj** )
>
> Gets the EPSText whose index comes before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EPSText | obj | Index of the EPSText that follows the wanted EPSText. |

> EPSText **nextItem**( EPSText **obj** )
>
> Gets the EPSText whose index comes after the supplied EPSText in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EPSText | obj | EPSText whose index comes before the wanted EPSText. |

> EPSText **anyItem**()
>
> Gets any EPSText in the collection.
> EPSText **everyItem**()
>
> Gets every EPSText in the collection.
> String **toSource**()
>
> Produces a string that returns the EPSText when executed.
> EPSText **[]**( Number **index** )
>
> Gets the EPSText at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
