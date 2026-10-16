# createGuides

> **createGuides**( Number **numberOfRows**, Number **numberOfColumns**, Measurement Unit (Number or String)=any **rowGutter**, Measurement Unit (Number or String)=any **columnGutter**, Mixed **guideColor**, Boolean **fitMargins**, Boolean **removeExisting**, Layer **layer** )
>
> Adds multiple guides across every page of the spread.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | numberOfRows | Row count added per page. (Optional) |
| Number | numberOfColumns | Column count added per page. (Optional) |
| Measurement Unit (Number or String)=any | rowGutter | Gutter height between rows. (Optional) |
| Measurement Unit (Number or String)=any | columnGutter | Gutter width between columns. (Optional) |
| Mixed | guideColor | Color used for the guides, given either as an array of three doubles with values from 0 to 255 for R, G, and B, or as a UI color. Accepts: Array of 3 Reals (0 - 255) or UIColors enumerator. (Optional) |
| Boolean | fitMargins | When true, row height and column width are based on the area inside page margins; when false, the full page is used for those calculations. (Optional) |
| Boolean | removeExisting | When true, old guides are removed as the new guides are created. (Optional) |
| Layer | layer | Layer where the guides are created. (Optional) |
