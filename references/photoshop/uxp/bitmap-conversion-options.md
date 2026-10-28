# Bitmap Conversion Options

Use these options when [Document.changeMode](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#changemode) converts an image to bitmap mode with `ChangeMode.BITMAP`.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| angle | _number_ | R W | - | -180...180 | 23.0 | Dot orientation angle, in degrees. See shape property below. Applies only for method = `BitmapConversionType.HALFTONESCREEN`. |
| frequency | _number_ | R W | - | 1.0..999.99 | 23.0 | Dots per inch to use. Applies only for method = `BitmapConversionType.HALFTONESCREEN`. |
| method | [_BitmapConversionType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#bitmapconversiontype) | R W | DIFFUSIONDITHER | - | 23.0 | Conversion method. |
| patternName | _string_ | R W |  | - | 23.0 | Pattern name to use. Applies only for method = BitmapConversionType.CUSTOMPATTERN. |
| resolution | _number_ | R W | 72 | - | 23.0 | Pixels-per-inch output resolution. |
| shape | [_BitmapHalfToneType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#bitmaphalftonetype) | R W | - | - | 23.0 | Dot shape. Applies only for method = BitmapConversionType.HALFTONESCREEN. |
| typename | _string_ | R | - | - | 23.0 | Class name for the referenced object: _"BitmapConversionOptions"_. |
