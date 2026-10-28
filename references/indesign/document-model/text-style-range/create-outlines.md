# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outlines. The conversion makes each text line into a polygon object. If the converted text consists of one letter with no internal spaces and no detached parts, the polygon has just one path. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, creates separate outline object(s) above the text. (Optional) |
