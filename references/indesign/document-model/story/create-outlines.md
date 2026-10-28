# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outline geometry. Each text line is produced as a polygon object. If the converted text is a single letter without internal spaces or detached pieces, the polygon has only one path. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text. When false, creates separate outline object(s) above the text. (Optional) |
