# Color arrays

JavaScript expresses a color through an array of 1, 2, 4, or 5 entries, which map respectively onto a Transparent, Gray, RGB, or CMYK color space. A string naming the color space type sits in the array's first slot. After it come numbers, each falling somewhere from zero through one inclusive. Red, as one example, can be written ["RGB", 1, 0, 0].

When a color array carries a bad string or too few entries, the color resolves to black.

| Color space | String | Number of additional elements | Description |
| --- | --- | --- | --- |
| Transparent | “T” | 0 | Signalling that color is entirely absent, a transparent color space lets whatever sits beneath the current field show through. |
| Gray | “G” | 1 | One value—how intense the achromatic light is—carries each color here. Within this space, black sits at 0 and white at 1, with the figures between standing for grades of gray. Take .5, which yields medium gray. |
| RGB | “RGB” | 3 | Three values—the strength of the red, green, and blue parts of the output—carry each color. Video displays, typically built on red, green, and blue phosphors, lean on RGB as a rule. |
| CMYK | “CMYK” | 4 | Four values—the proportions of cyan, magenta, yellow, and black in the output—carry each color. Color printers favor this space, since those are the ink colors behind four-color printing. Cyan, magenta, and yellow alone would do, yet black ink earns its place in printing both because it yields a richer black than blending cyan, magenta, and yellow does and because it runs cheaper than the rest. |
