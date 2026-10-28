# placeIntoCopy

> PageItem **placeIntoCopy**( Mixed **on**, Measurement Unit (Number or String)=any **placePoint**, PageItem **copyItem**, Boolean **retainExistingFrame** )
>
> Links the XML element to a copy of a page item.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | on | Page or spread where the new page item is created. Accepts: Spread, Page or MasterSpread. |
| Measurement Unit (Number or String)=any | placePoint | Coordinates for the page item's upper-left corner, expressed as [y1, x1]. |
| PageItem | copyItem | Page item used as the copy source. |
| Boolean | retainExistingFrame | When true, the XML element is associated with the existing page item and that item is moved rather than duplicating it. (Optional) |
