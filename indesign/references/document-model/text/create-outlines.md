# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outline geometry. Each text line becomes a polygon object. For a converted single letter with no interior spaces or separated pieces, the resulting polygon has just one path. Note: To check whether outline creation is allowed for a font, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, places separate outline object(s) above the text. (Optional) |
