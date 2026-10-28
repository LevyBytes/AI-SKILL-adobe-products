# 7a. Adjustment layers (`adjustmentLayer` → `adjustment_layer`)

**Type rename:** `"adjustmentLayer"` → `"adjustment_layer"`

**V2 requires `adjustments.type`; V1 had no matching field.** V1 identified the adjustment from the key name, such as `brightnessContrast`. In V2, put the required snake_case value in `adjustments.type`.

**V1:**

```json
{ "adjustments": { "brightnessContrast": { "brightness": 25 } } }
```

**V2:**

```json
{ "adjustments": { "type": "brightness_contrast", "brightnessContrast": { "brightness": 25 } } }
```

**Adjustment type name mapping:**

| V1 key name | V2 `adjustments.type` | Status |
| --- | --- | --- |
| `brightnessContrast` | `brightness_contrast` | Breaking: renamed |
| `exposure` | `exposure` | Unchanged |
| `hueSaturation` | `hue_saturation` | Breaking: renamed |
| `colorBalance` | `color_balance` | Breaking: renamed |
| _(not in V1)_ | `curves` | New in V2 |
| _(not in V1)_ | `gradient_map_custom_stops` | New in V2 |
| _(not in V1)_ | `levels` | New in V2 |

**Field changes within adjustment payloads:**

| Adjustment | V1 field | V2 field | Notes |
| --- | --- | --- | --- |
| Exposure | `exposure.exposure` | `exposure.exposureValue` | Breaking: renamed |
| Hue/Saturation | Master channel only | `localRange.channelId` for per-channel | New in V2 |
