# Application.convertSampleColor()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.convertSampleColor(
    sourceColorSpace,
    sourceColor,
    destColorSpace,
    colorConvertPurpose
    [, sourceHasAlpha]
    [, destHasAlpha]
)
```

### Description

Transforms sample-component color values from one color space into another.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceColorSpace | ImageColorSpace | Source color space |
| sourceColor | ColorComponents | Color value to convert |
| destColorSpace | ImageColorSpace | Destination color space |
| colorConvertPurpose | ColorConvertPurpose | Conversion purpose |
| sourceHasAlpha | Boolean, optional | Indicates whether alpha is present in the source |
| destHasAlpha | Boolean, optional | Indicates whether alpha is present in the destination |

### Returns

Array of ColorComponents
