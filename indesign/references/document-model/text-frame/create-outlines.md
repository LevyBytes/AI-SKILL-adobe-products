# createOutlines

> PageItem **createOutlines**( Boolean **deleteOriginal** )
>
> Changes the text into outlines. In the result, every text line is represented as a polygon object. If the converted text is one letter with no inner spaces and no separated parts, that polygon has a single path only. Note: To check whether a font permits outline creation, see allow outlines.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | deleteOriginal | When true, the original text is removed. When false, separate outline object(s) are created above the text. (Optional) |
