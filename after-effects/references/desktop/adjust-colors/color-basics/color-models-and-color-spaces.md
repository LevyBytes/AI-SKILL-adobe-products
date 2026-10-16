# Color models and color spaces

Describing color through numbers, so computers have something to work with, is what a color model does. After Effects builds on the RGB color model, where every color is expressed as quantities of red, green, and blue light combined to produce it. CMYK, HSB, YUV, and XYZ count among the other color models.

A given color model gives rise to variants called color spaces. What sets a color space apart is its gamut (range of colors), its set of primary colors (primaries), its white point, and its tone response. The RGB color model, for instance, contains several color spaces, which — ranked from largest gamut down — include ProPhoto RGB, Adobe RGB, sRGB IEC61966-2.1, and Apple RGB. These color spaces all map color along the identical three axes (R, G, and B), yet their gamuts and tone response curves diverge.

Plenty of devices lean on red, green, and blue components to record or render color, but those components vary in character — one camera's blue, say, isn't precisely another camera's blue. Every device that records or renders color carries its own color space. As an image passes between devices, its colors can shift in appearance because each device reads the RGB values through its own color space.

Through color profiles, color management converts colors out of one color space and into another, keeping colors consistent across devices.
