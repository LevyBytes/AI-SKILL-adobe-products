# RGBColor

RGB color data for a [SolidColor](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) object.

Please note: RGB at 32 bits per channel is not currently supported. Color values are rounded to the closest
range valid for RGB with 16 bits per channel.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| blue | _number_ | R W | 255 | 0..255 | 23.0 | Blue channel value. |
| green | _number_ | R W | 255 | 0..255 | 23.0 | Green channel value. |
| hexValue | _string_ | R W | "FFFFFF" | - | 23.0 | Hexadecimal color text. Ex. returns _FF9801_, while accepting _#ff9801_ or _FF9801_. |
| red | _number_ | R W | 255 | 0..255 | 23.0 | Red channel value. |
| typename | _string_ | R | - | - | 23.0 | Referenced object's class name: _"RGBColor"_. |
