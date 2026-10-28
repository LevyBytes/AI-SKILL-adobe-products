# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outline geometry. Each text line becomes a polygon object. If the converted text is one letter without internal spaces or detached parts, that polygon has only a single path. Note: To check whether outline creation is allowed for a font, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, places separate outline object(s) over the text. (Optional) |
