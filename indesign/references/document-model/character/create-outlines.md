# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outlines. Each text line becomes a polygon object. If the converted text is one letter without internal spaces or separated parts, the resulting polygon has a single path. Note: Check allow outlines to determine whether a font permits outline creation.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, places separate outline object(s) above the text. (Optional) |
