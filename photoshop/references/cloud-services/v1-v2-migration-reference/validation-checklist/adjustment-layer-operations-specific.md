# Adjustment layer operations specific

- [ ] Rename layer type `"adjustmentLayer"` to `"adjustment_layer"`
- [ ] Include the V2-required `adjustments.type` discriminant, which V1 did not have: `"brightness_contrast"`, `"exposure"`, `"hue_saturation"`, `"color_balance"`; new values also include `"curves"`, `"levels"`, and `"gradient_map_custom_stops"`
- [ ] Inside the `exposure` payload, rename the amount field from `exposure` to `exposureValue`
- [ ] For Hue/Sat, change V1 `channels[]` with `channel: "master"` into V2 `hueSaturationAdjustments[]`; omit `localRange` for master, and include `localRange` with `channelId` for a specific color range only when `colorize: false`
- [ ] Adjustment layers do not use `transformMode`, so leave it out
