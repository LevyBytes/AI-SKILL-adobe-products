# Color mode validation table

| Export Path | Target Format | Supported Modes | Fallback | ICC Profile Specified |
| --- | --- | --- | --- | --- |
| Full document | JPEG | RGB, Grayscale, CMYK | Convert to RGB if needed | No |
| Full document | JPEG | RGB, Grayscale, CMYK | No conversion | Yes |
| Full document | PNG | RGB, Grayscale | Convert to RGB if needed | No |
| Full document | PNG | RGB, Grayscale | No conversion | Yes |
| Full document | TIFF | All | No conversion | N/A |
| Full document | PSD | All | No conversion | N/A |
| Full document | PSDC | All | No conversion | N/A |
| Single layer | JPEG | RGB, Grayscale, CMYK | Convert to RGB if needed | N/A |
| Single layer | PNG | RGB, Grayscale | Convert to RGB if needed | N/A |
| Single layer | TIFF | All | No conversion | N/A |
| Single layer | PSD | RGB, Grayscale, CMYK | Convert to RGB if needed | N/A |
| Layers composite | JPEG | — | No conversion | N/A |
| Layers composite | PNG | — | No conversion | N/A |
| Layers composite | TIFF | — | No conversion | N/A |
