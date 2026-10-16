# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outlines. Every text line becomes a polygon object. If the converted text is one letter without interior spaces or detached pieces, that polygon has a single path only. Note: use allow outlines to check whether outlines can be created for a font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, removes the source text; when false, leaves the text in place and puts separate outline object(s) above it. (Optional) |
