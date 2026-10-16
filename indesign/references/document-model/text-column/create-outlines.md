# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Converts the text into outlines. Every text line becomes a polygon object. If the converted text is one letter without internal spaces or separate parts, the polygon has a single path only. Note: see allow outlines to determine whether a font permits outline creation.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, leaves the text in place and creates separate outline object(s) above it. (Optional) |
