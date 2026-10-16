# BMP Save Options

Save-option object for BMP output through [Document.saveAs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#saveas).

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| alphaChannels | _boolean_ | R W | 22.5 | Set to true to include alpha channels. |
| depth | [_BMPDepthType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#bmpdepthtype) | R W | 22.5 | Bits per channel. |
| flipRowOrder | _boolean_ | R W | 22.5 | Set to true for top-to-bottom row order; requires osType as OperatingSystem.WINDOWS |
| osType | [_OperatingSystem_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#operatingsystem) | R W | 22.5 | Destination OS. |
| rleCompression | _boolean_ | R W | 22.5 | Set to true for RLE compression |
| typename | _string_ | R | 22.5 | Referenced object's class name: _"BMPSaveOptions"_. |
