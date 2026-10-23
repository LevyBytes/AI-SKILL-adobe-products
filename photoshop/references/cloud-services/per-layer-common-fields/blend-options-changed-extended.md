# `blendOptions` - CHANGED (extended)

Earlier `blendOptions` data contained only `{blendMode, opacity}`.

V2 expands `blendOptions` with:

| New field | Type | Notes |
| --- | --- | --- |
| `clipped` | boolean | Clipping mask state |
| `interior` | boolean | Interior effects state |
| `fillOpacity` | number | Fill opacity (0–100), separate from layer opacity |
| `pixelMaskAsGlobalMask` | boolean |  |
| `vectorMaskAsGlobalMask` | boolean |  |
| `transparencyShapesLayer` | boolean |  |
| `knockout` | string | e.g. `"none"` |
| `channelRestrictions` | array | Per-channel blend restrictions |
| `blendRanges` | array | Blend-if ranges |
