# Adjustment layer critical changes

| Change | V1 | V2 |
| --- | --- | --- |
| `adjustments.type` | **Not present** (type inferred from key) | **Required** — snake_case enum |
| `brightnessContrast` type | _(implicit)_ | `type: "brightness_contrast"` |
| `hueSaturation` type | _(implicit)_ | `type: "hue_saturation"` |
| `colorBalance` type | _(implicit)_ | `type: "color_balance"` |
| Exposure amount field | `exposure.exposure` | `exposure.exposureValue` |
