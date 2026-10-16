# Indexed Conversion Options

Options used by [Document.changeMode](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#changemode) when converting an RGB image to an indexed color model

### Properties

| Name | Type | Access | Default | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| colors | _number_ | R W | - | 23.0 | Number of colors in the palette. Palette types that allow this field are: LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE, or WINDOWSPALETTE. |
| dither | [_Dither_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#dither) | R W | - | 23.0 | Dithering method. |
| ditherAmount | _number_ | R W | - | 23.0 | Dither strength. Applies only for dither = DIFFUSION. |
| forced | [_ForcedColors_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#forcedcolors) | R W | - | 23.0 | Colors forced into the palette. |
| matte | [_MatteColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#mattecolor) | R W | WHITE | 23.0 | Color for filling anti-aliased edges bordering transparent image areas. If transparency equals false, this matte color fills those pixels. |
| palette | [_Palette_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#palette) | R W | - | 23.0 | Palette type. |
| preserveExactColors | _boolean_ | R W | - | 23.0 | When true, colors matching entries in the image color table are not dithered. |
| transparency | _boolean_ | R W | - | 23.0 | When true, transparent image areas are kept during conversion to GIF format. |
| typename | _string_ | R | - | 23.0 | Class name for the referenced object: _"IndexedConversionOptions"_. |
