# JPEG Save Options - Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| color | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | R W | - | - | 22.5 | Custom fill color for anti-aliased edges bordering transparent pixels. Not allowed alongside 'matteColor'. |
| customMatte | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | R W | - | - | 22.5 | Custom matting color; takes precedence over matteColor |
| embedColorProfile | _boolean_ | R W | - | - | 22.5 | False omits the document color profile from embedding |
| formatOptions | [_JPEGFormatOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#jpegformatoptions) | R W | STANDARDBASELINE | - | 22.5 | JPEG format option selection. |
| matteColor | [_MatteColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#mattecolor) | R W | - | - | 22.5 | Fill color for anti-aliased edges bordering transparent pixels. Not allowed alongside 'color'. |
| quality | _number_ | R W | 8 | 0...12 | 22.5 | Image quality setting; changes compression and file size. |
| scans | _number_ | R W | 3 | 3...5 | 22.5 | Count of scans used for progressive page display. Requires JPEGFormatOptions.PROGRESSIVE in formatOptions. |
| typename | _string_ | R | - | - | 22.5 | Referenced object's class name: _"JPEGSaveOptions"_. |
