# New document fields

| Field | Type | Example | Notes |
| --- | --- | --- | --- |
| `bounds` | object | `{left, top, right, bottom}` | Document canvas bounds |
| `imageMode` | string | `"rgb"` | Color mode |
| `depth` | number | `8` | Bit depth per channel |
| `iccProfile` | string | `"sRGB IEC61966-2.1"` | Embedded ICC profile name |
| `xmp` | string | (full XMP XML) | Complete XMP metadata block |
| `title` | string | `"filename.psd"` | Document filename |
| `globalLightingAngle` | number | — | Global light angle for layer effects |
| `globalLightingAltitude` | number | — | Global light altitude for layer effects |
| `layerFXVisible` | boolean | — | Whether layer effects are visible |
| `pixelScaleFactor` | number | — | HiDPI/retina scale factor |
| `resolution` | object | `{value, unit}` | Document resolution (e.g. 72 PPI) |
