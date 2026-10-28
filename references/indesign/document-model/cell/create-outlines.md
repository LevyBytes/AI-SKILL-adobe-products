# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Converts text into outlines. Each text line becomes a polygon object. If the converted text is a single letter with no internal spaces or detached pieces, its polygon has one path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True deletes the source text. False puts separate outline object(s) above the text. (Optional) |
