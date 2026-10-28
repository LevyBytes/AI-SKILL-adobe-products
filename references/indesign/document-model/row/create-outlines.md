# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes text into outlines. A polygon object is produced for each text line. If the converted text consists of a single letter with no internal spaces or detached pieces, that polygon has one path only. Note: to check whether outlines may be created for a font, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | True removes the original text; false places separate outline object(s) above it. (Optional) |
