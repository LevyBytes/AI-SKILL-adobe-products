# GIF Save Options - Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| colors | _number_ | R W | 22.5 | Palette color count. Applies only with palette values: Palette.LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE; or WINDOWSPALETTE |
| dither | [_Dither_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#dither) | R W | 22.5 | Dither method. |
| ditherAmount | _number_ | R W | 22.5 | Dither amount. Requires dither = Dither.DIFFUSION. |
| forced | [_ForcedColors_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#forcedcolors) | R W | 22.5 | Colors category forced into the color palette. |
| interlaced | _boolean_ | R W | 22.5 | True when rows are written interlaced. |
| matte | [_MatteColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#mattecolor) | R W | 22.5 | Matte fill for anti-aliased edges beside transparent pixels. If image transparency is disabled, those transparent pixels receive the matte color. |
| palette | [_Palette_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#palette) | R W | 22.5 | Palette type to use. |
| preserveExactColors | _boolean_ | R W | 22.5 | True to keep color-table entries in the image out of dithering. Requires dither = DITHER.DIFFUSION |
| transparency | _boolean_ | R W | 22.5 | True to retain transparent image areas during conversion to GIF format. |
| typename | _string_ | R | 22.5 | Referenced object's class name: _"GIFSaveOptions"_. |
