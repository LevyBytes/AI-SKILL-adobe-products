# applyDisplace

23.5

**async** : _Promise_`<void>`

Executes Displace with supplied horizontal and vertical scales,
mapping type, handling for unchanged areas, and the distortion-image-map path.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `horizontalScale` | _number_ | Width-direction scale amount [-999,999]. |
| `verticalScale` | _number_ | Height-direction scale amount [-999,999]. |
| `displacementType` | [_DisplacementMapType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#displacementmaptype) | How the displacement map is fit when its size differs from the image. |
| `undefinedAreas` | [_UndefinedAreas_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#undefinedareas) | How undistorted or blank regions are handled after a Distort-category filter is applied. |
| `displacementMapFile` | File | Distortion image map path. |
