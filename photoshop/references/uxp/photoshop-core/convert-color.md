# convertColor

23.0

RGBColorDescriptor \| RGB32ColorDescriptor

Converts a supplied color descriptor to RGB and returns the converted descriptor.

This internal API supports [SolidColor](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md)
and the other color classes.

At present, conversion uses the application's color settings (Edit > Color Settings...). '
Future versions are expected to support embedded-profile conversion.

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.RGB |

LabColorDescriptor

Convert to Lab

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.Lab |

HSBColorDescriptor

Convert to HSB

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.HSB |

GrayscaleColorDescriptor

Convert to Grayscale

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.Gray |

CMYKColorDescriptor

Convert to CMYK

### Parameters

| Name | Type |
| --- | --- |
| `sourceColor` | ColorDescriptor |
| `targetModel` | ColorConversionModel.CMYK |
