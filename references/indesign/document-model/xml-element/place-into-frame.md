# placeIntoFrame

> PageItem **placeIntoFrame**( Mixed **on**, Measurement Unit (Number or String)=any **geometricBounds** )
>
> Creates a new rectangular page item and places the XML element into it. If the XML element already had a page item association, that page item is removed.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | on | Page or spread where the new page item is created. Accepts: Spread, Page or MasterSpread. |
| Measurement Unit (Number or String)=any | geometricBounds | Page item bounds without stroke width, expressed as [y1, x1, y2, x2]. |
