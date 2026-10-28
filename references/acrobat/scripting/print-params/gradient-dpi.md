# gradientDPI

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | Not available in Reader | Integer | R/W |

How many dots per inch to apply when rasterizing gradients. You can usually pitch this below bitmapDPI, since it touches regions the eye notices less. It has to land between 1 and 9600. Illegal values fall back to 150. Where the document protections cap the printing resolution, whichever of the two figures is smaller gets used. 150 is the default.
