# PNG Save Options — Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| compression | _number_ | R W | 6 | 0...9 | 22.5 | Compression setting applied when method = PNGMethod.QUICK |
| interlaced | _boolean_ | R W | false | - | 22.5 | When method = PNGMethod.QUICK, true writes the image with interlaced rows. |
| method | [_PNGMethod_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#pngmethod) | R W | - | - | 22.5 | Chooses the PNG file-size optimization strategy. |
| typename | _string_ | R | - | - | 22.5 | Referenced object class name: _"PNGSaveOptions"_. |
