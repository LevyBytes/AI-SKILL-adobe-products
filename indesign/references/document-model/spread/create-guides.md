# createGuides

> **createGuides**( Number **numberOfRows**, Number **numberOfColumns**, Measurement Unit (Number or String)=any **rowGutter**, Measurement Unit (Number or String)=any **columnGutter**, Mixed **guideColor**, Boolean **fitMargins**, Boolean **removeExisting**, Layer **layer** )
>
> Creates multiple guides across all pages in the spread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | numberOfRows | Rows generated per page. (Optional) |
| Number | numberOfColumns | Columns generated per page. (Optional) |
| Measurement Unit (Number or String)=any | rowGutter | Gutter height between rows. (Optional) |
| Measurement Unit (Number or String)=any | columnGutter | Gutter width between columns. (Optional) |
| Mixed | guideColor | Guide color, provided as either a three-double array with R, G, and B components from 0 to 255 or as a UI color. Accepted forms: Array of 3 Reals (0 - 255) or UIColors enumerator. (Optional) |
| Boolean | fitMargins | True calculates row height and column width from the area inside page margins; false uses the full page area for those calculations. (Optional) |
| Boolean | removeExisting | True removes current guides while creating the new guides. (Optional) |
| Layer | layer | Layer where the guides are created. (Optional) |
