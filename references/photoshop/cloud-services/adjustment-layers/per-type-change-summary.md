# Per-type change summary

| Type (old key / new `type`) | Key change | Field changes |
| --- | --- | --- |
| `vibrance` / `vibrance` | none | Fields hoisted: `adjustments.vibrance.{saturation,vibrance}` → `adjustments.{vibrance,saturation}` (flat) |
| `exposure` / `exposure` | none | `exposure` value renamed to `exposureValue`; all values now nested under `exposure` sub-object |
| `hueSaturation` / `hue_saturation` | snake_case | `channels[].channel` ("master") → `hueSaturationAdjustments[]`; per-channel ranges use new `localRange` fields |
| `brightnessContrast` / `brightness_contrast` | snake_case | Structure same; key renamed; V2 may add `center` and `useLegacy` |
| `colorBalance` / `color_balance` | snake_case | Structure same; key renamed |
| `levels` / `levels` | none | Fully new structure: `levels.adjustment[]` array with typed `levelsAdjustment` objects |
| — / `curves` | NEW in V2 | Only in new format; `adjustments[]` with `channel` and `curves[{horizontal,vertical}]` |
| — / `gradient_map_custom_stops` | NEW in V2 | Rich gradient with `colorStops`, `transparencyStops`, `interpolation` |
