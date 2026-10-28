# Bit depth validation

| Export path | Target format | Supported depths | Fallback | ICC profile specified |
| --- | --- | --- | --- | --- |
| Full document | JPEG | 8-bit only | Convert to 8-bit if needed | No |
| Full document | JPEG | 8-bit only | No conversion | Yes |
| Full document | PNG | 8-bit, 16-bit | Convert to 8-bit if needed | No |
| Full document | PNG | 8-bit, 16-bit | No conversion | Yes |
| Full document | TIFF | 8, 16, 32-bit | No conversion | N/A |
| Full document | PSD | 8, 16, 32-bit | No conversion | N/A |
| Full document | PSDC | 8, 16, 32-bit | No conversion | N/A |
| Single layer | JPEG | 8-bit only | Convert to 8-bit if needed | N/A |
| Single layer | PNG | 8-bit, 16-bit | Convert to 8-bit if needed | N/A |
| Single layer | TIFF | 8, 16, 32-bit | No conversion | N/A |
| Single layer | PSD | 8, 16-bit | Convert to 8-bit if needed | N/A |
| Layers composite | JPEG | — | No conversion | N/A |
| Layers composite | PNG | — | No conversion | N/A |
| Layers composite | TIFF | — | No conversion | N/A |
