# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Turns text into outline geometry. Each text line becomes a polygon object. For a single letter with no internal spaces or detached pieces, the resulting polygon has one path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the original text. When false, puts separate outline object(s) above the text. (Optional) |
