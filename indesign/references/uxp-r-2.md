# Real Editboxes, Record Selection, Records Per Page

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: RealEditboxes; RecordSelection; RecordsPerPage.

## RealEditboxes

Real-number editbox collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> RealEditbox **add**( Object **withProperties** )
>
> Adds a RealEditbox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new RealEditbox. (Optional) |

> Number **count**()
>
> Shows how many elements are in the RealEditbox.
> RealEditbox **item**( Mixed **index** )
>
> Gets the RealEditbox identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name. Accepted types: Long Integer or String. |

> RealEditbox **itemByID**( Number **id** )
>
> Gets the RealEditbox with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> RealEditbox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the RealEditboxes covered by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | First RealEditbox, index, or name in the range. Can accept: RealEditbox, Long Integer or String. |
| Mixed | to | Last RealEditbox, index, or name in the range. Can accept: RealEditbox, Long Integer or String. |

> RealEditbox **firstItem**()
>
> Gets the collection's first RealEditbox.
> RealEditbox **lastItem**()
>
> Gets the collection's last RealEditbox.
> RealEditbox **middleItem**()
>
> Gets the collection's middle RealEditbox.
> RealEditbox **previousItem**( RealEditbox **obj** )
>
> Gets the RealEditbox at the index immediately before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RealEditbox | obj | RealEditbox index that follows the target RealEditbox. |

> RealEditbox **nextItem**( RealEditbox **obj** )
>
> Gets the RealEditbox whose index comes after the supplied RealEditbox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RealEditbox | obj | RealEditbox whose index precedes the target RealEditbox. |

> RealEditbox **anyItem**()
>
> Gets any RealEditbox from the collection.
> RealEditbox **everyItem**()
>
> Gets every RealEditbox from the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the RealEditbox.
> RealEditbox **[]**( Number **index** )
>
> Gets the RealEditbox at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## RecordSelection

Records selected for merging.

### Class

> _Read Only_
>
> Number `ALL_RECORDS` = 1684881778
>
> Merges every record.
> _Read Only_
>
> Number `ONE_RECORD` = 1684885362
>
> Merges one chosen record.
> _Read Only_
>
> Number **RANGE** = 1684886130
>
> Merges the records included in the chosen range.

## RecordsPerPage

Record count placed on each page.

### Class

> _Read Only_
>
> Number `SINGLE_RECORD` = 1684886386
>
> Starts a new page for each record.
> _Read Only_
>
> Number `MULTIPLE_RECORD` = 1684884850
>
> Fits multiple records on a page when space allows.
