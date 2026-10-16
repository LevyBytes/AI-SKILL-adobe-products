# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outline artwork. A polygon object is created for each text line. If the converted text consists of one letter without interior gaps or separate pieces, that polygon has one path only. Note: check allow outlines to learn whether a font permits outline creation.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True removes the source text; false leaves the text in place and adds the outline object(s) above it. (Optional) |
