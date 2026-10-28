# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outlines. Each text line becomes a polygon object. If the converted text is one letter with no internal spaces or detached pieces, that polygon has one path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, creates separate outline object(s) above the text. (Optional) |
