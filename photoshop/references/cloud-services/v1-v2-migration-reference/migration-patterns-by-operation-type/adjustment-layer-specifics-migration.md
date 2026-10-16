# Adjustment Layer Specifics migration

**Adjustment Layer Specifics:**

- Layer type: V1 `"adjustmentLayer"` maps to V2 `"adjustment_layer"`
- V2 requires the `adjustments.type` discriminant, which V1 did not have; leaving it out makes the request fail

| V1 implicit key | V2 `adjustments.type` | Payload key |
| --- | --- | --- |
| `brightnessContrast` | `"brightness_contrast"` | `brightnessContrast` |
| `exposure` | `"exposure"` | `exposure` |
| `hueSaturation` | `"hue_saturation"` | `hueSaturation` |
| `colorBalance` | `"color_balance"` | `colorBalance` |
| (not in V1) | `"curves"` | - |
| (not in V1) | `"levels"` | - |
| (not in V1) | `"gradient_map_custom_stops"` | - |

- **Exposure payload rename:** In the `exposure` payload, V1's amount field `exposure` becomes `exposureValue` in V2, with range -20 to 20.
- **Hue/Saturation restructure:** V1 `hueSaturation.channels[]` using `channel: "master"` becomes V2 `hueSaturation.hueSaturationAdjustments[]`. For master, omit `localRange` to affect the full image. For a specific color range, add `localRange` with `channelId` set to `REDS`, `YELLOWS`, `GREENS`, `CYANS`, `BLUES`, or `MAGENTAS`; this applies only when `colorize: false`.
- Adjustment layers ignore `transformMode`.
- Accepted numeric ranges: `brightnessContrast.brightness`/contrast` (-150 to 150); `exposureValue` (-20 to 20), `offset` (-0.5 to 0.5), `gammaCorrection` (0.01 to 9.99); `hue` (-180 to 180, or 0-360 when `colorize: true`); `saturation`/lightness` (-100 to 100, or 0-100 when `colorize: true`); color balance levels (-100 to 100)
