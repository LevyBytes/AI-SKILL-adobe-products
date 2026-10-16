# applyGlassEffect

23.5

**async** : _Promise_`<void>`

Executes Glass.

Supported color modes: RGB 8 bits, Duotone 8 bits, Grayscale 8 bits, Multichannel 8 bits

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `distortion` | _number_ | - | Adjust how strongly the glass distorts the image [0,20]. |
| `smoothness` | _number_ | - | Adjust glass smoothness [1,15]. |
| `scaling` | _number_ | - | Percentage used for scaling [50,200]. |
| `invert` | _boolean_ | false | Glass inversion flag (default: false). |
| `texture` | [_TextureType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#texturetype) | - | Glass texture type. Ignored when "textureFile" is supplied. (default: TextureType.CANVAS) |
| `textureFile?` | File | - | Optional glass-distortion mapping file. |
