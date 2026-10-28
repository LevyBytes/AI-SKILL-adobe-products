# applyDeInterlace

23.5

**async** : _Promise_`<void>`

Executes De-Interlace.

Unsupported color modes: Indexed Color, Bitmap, CMYK 8 bits, CMYK 16 bits, Duotone 8 bits

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eliminateFields` | [_EliminateFields_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#eliminatefields) | Choose EVENFIELDS or ODDFIELDS as the field order to eliminate. |
| `createFields` | [_CreateFields_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#createfields) | Use DUPLICATION or INTERPOLATION when creating fields. |
