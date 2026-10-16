# CMYKColor

CMYK color data for use with [SolidColor](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md).

**_Fixes in Photoshop 24.2:_**

- _Getter returns a number rather than `undefined`_
- _Setter values passed to Photoshop are now honored_

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| black | _number_ | R W | 0 | 0.0..100.0 | 23.0 | Black channel percentage. |
| cyan | _number_ | R W | 0 | 0.0..100.0 | 23.0 | Cyan channel percentage. |
| magenta | _number_ | R W | 0 | 0.0..100.0 | 23.0 | Magenta channel percentage. |
| typename | _string_ | R | - | - | 23.0 | Referenced object's class name: _"CMYKColor"_. |
| yellow | _number_ | R W | 0 | 0.0..100.0 | 23.0 | Yellow channel percentage. |
