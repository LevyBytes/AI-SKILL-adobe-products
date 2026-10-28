# Common layer property changes

| V1 | V2 | Impact |
| --- | --- | --- |
| `locked: true/false` | `protection: ["all"]/["none"]` | Breaking |
| `visible` | `isVisible` | Breaking |
| `blendOptions.opacity` | `opacity` (top-level) | Breaking: de-nested |
| `blendOptions.blendMode` | `blendMode` (top-level) | Breaking: de-nested |
| `bounds: {left, top, width, height}` | `transform: {offset: {horizontal, vertical}, dimension: {width, height}}` | Breaking |
| `mask.clip: true` | `isClipped: true` (top-level) | Breaking |
| `mask.linked`/enabled`/`input` | `pixelMask.linked`/enabled`/`source.url` | Breaking (also: prefix changed from `mask` to `pixelMask`) |
| `fillToCanvas: true` | **Not supported** | Feature gap |
