# applyUnSharpMask

24.0

**async** : _Promise_`<void>`

Executes Unsharp Mask.

Unsupported color modes: Indexed Color, Bitmap

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `amount` | _number_ | Sharpening amount as a whole-number percentage [1,500]. |
| `radius` | _number_ | Radius in pixels [0.1,1000]. |
| `threshold` | _number_ | Contrast threshold [0,255]. |
