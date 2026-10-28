# Adjustment Types Supported

For **V2**, put a snake_case `type` parameter in the `adjustments` object together with the adjustment payload. **V1** did not include a `type` field; instead, the key name, such as `brightnessContrast`, served as the implicit type indicator.

In **V2**, `adjustments.type` is mandatory; **V1** had no matching field. A V2 request without it is rejected. For the required shape, see [the V2 adjustment type requirement](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-adjustments.md#3-adjustments-structure--required-type-in-v2).

**V1 key name -> V2 `adjustments.type` mapping:**

| V1 key name (implicit type) | V2 `adjustments.type` | Notes |
| --- | --- | --- |
| `brightnessContrast` | `brightness_contrast` | Breaking: renamed to snake_case |
| `exposure` | `exposure` | Unchanged |
| `hueSaturation` | `hue_saturation` | Breaking: renamed to snake_case |
| `colorBalance` | `color_balance` | Breaking: renamed to snake_case |
| _(not in V1)_ | `curves` | New in V2 |
| _(not in V1)_ | `gradient_map_custom_stops` | New in V2 |
| _(not in V1)_ | `levels` | New in V2 |

**V1-to-V2 payload key and `type` cross-reference:**

| Adjustment | V2 `type` value | Payload key |
| --- | --- | --- |
| Brightness/Contrast | `brightness_contrast` | `brightnessContrast` |
| Exposure | `exposure` | `exposure` |
| Hue/Saturation | `hue_saturation` | `hueSaturation` |
| Color Balance | `color_balance` | `colorBalance` |
