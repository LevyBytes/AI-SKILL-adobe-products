# preserveBlack

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 8.0 | No | No | Acrobat Pro only | Boolean | R/W |

When a matched object is set to convert and preserveBlack reads true, the conversion runs through a “black-preserving” transform that treats text and line art objects as a special case. Take a CMYK color of (0.0, 0.0, 0.0, 1.0), an RGB color of (0.0, 0.0, 0.0), or a gray color of (0.0): with preserveBlack true, each counts as special-case black and converts straight to black, the conversion profile bypassed. Whatever the matching black is for the target profile's color space governs the result — so if the convert profile is RGB, the outcome is (0.0, 0.0, 0.0) regardless of what the color profile dictates.
