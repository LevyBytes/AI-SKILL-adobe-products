# constructor

23.0

[_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md)

Default color values are white before assignment.

```javascript
const SolidColor = require("photoshop").app.SolidColor;
const color = new SolidColor();
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `model?` | [_ColorModel_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#colormodel) | Initial color model. |

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| cmyk | [_CMYKColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/colors/cmykcolor.md) | R W | 23.0 | CMYK-space view of the color. |
| gray | [_GrayColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/colors/graycolor.md) | R W | 23.0 | Grayscale view of the color. |
| hsb | [_HSBColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/colors/hsbcolor.md) | R W | 23.0 | HSB-space view of the color. |
| lab | [_LabColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/colors/labcolor.md) | R W | 23.0 | LAB-space view of the color. |
| nearestWebColor | [_RGBColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/colors/rgbcolor.md) | R | 23.0 | Closest color among the 216 web-safe RGB choices. |
| rgb | [_RGBColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/colors/rgbcolor.md) | R W | 23.0 | RGB-space view of the color. |
| typename | _string_ | R | 24.2 | Class name for the referenced object: _"SolidColor"_. |

### Methods
