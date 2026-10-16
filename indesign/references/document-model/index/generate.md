# generate

> Story **generate**( Mixed **on**, Measurement Unit (Number or String)=any **placePoint**, Layer **destinationLayer**, Boolean **autoflowing**, Boolean **includeOverset** )
>
> Creates a new index story.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | on | Spread or page where the story is placed. Accepts: Page, Spread or MasterSpread. (Optional) |
| Measurement Unit (Number or String)=any | placePoint | Upper-left coordinates for the story bounding box, in [x, y] format. (Optional) |
| Layer | destinationLayer | Layer that receives the story. (Optional) |
| Boolean | autoflowing | When true, lets the story continue onto later pages if it does not fit on the specified page; if the document has no later pages, the needed pages are created. (Optional) |
| Boolean | includeOverset | When true, includes topics that live in overset text in the story. (Optional) |
