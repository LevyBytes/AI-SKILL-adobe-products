# transparencyLevel

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | Not available in Reader | Integer | R/W |

A whole number between 1 and 100 expresses how aggressively Acrobat works to keep high-level drawing operators intact. At 1 the image is fully rasterized, trading image quality away for speed. At 100 as much as can be is retained, though print speed may suffer for it. Illegal entries default to 75. During rasterization the bitmapDPI and gradientDPI values come into play. The default value is 75.
