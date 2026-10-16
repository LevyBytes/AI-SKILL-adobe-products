# New artboard-specific fields

| Field | Notes |
| --- | --- |
| `typeAttributes.artboard.artboardBackgroundType` | number — background type (0 = transparent, 1 = white, etc.) |
| `typeAttributes.artboard.artboardPresetName` | string — device preset name (e.g. `"iPhone 16 Pro"`) |
| `typeAttributes.artboard.artboardRect` | `{type, left, top, right, bottom}` — artboard geometry |
| `typeAttributes.artboard.color` | `{type, red, grain, blue}` — background color |
| `typeAttributes.artboard.guideIDs` | array — guide IDs associated with the artboard |
| `typeAttributes.layerSection` | `"layerSectionStart"` — dual typing retained for compatibility |
| `typeAttributes.type` | `"layerSection"` — inner discriminant |
