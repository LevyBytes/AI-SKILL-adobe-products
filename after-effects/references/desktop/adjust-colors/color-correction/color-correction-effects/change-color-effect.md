# Change Color effect

Across a span of colors, the Change Color effect tunes hue, lightness, and saturation.

It runs in 8-bpc and 16-bpc color.

View

The Corrected Layer choice displays what the Change Color effect produced. The Color Correction Mask choice displays a grayscale matte marking the layer regions slated to change. In that color correction mask, white regions shift the most while dark regions shift the least.

Hue Transform

By how many degrees the hue gets adjusted.

Lightness Transform

The matched pixels grow brighter at positive values and darker at negative ones.

Saturation Transform

At positive values the matched pixels gain saturation (heading toward pure color); at negative values they lose it (heading toward gray).

Color To Change

The hub color of the range that will change.

Matching Tolerance

The degree to which colors may stray from Color To Change yet still register as a match.

Matching Softness

How far the effect reaches into unmatched pixels, scaled by how close they are to Color To Change.

Match Colors

Sets which color space is used to gauge color similarity. RGB weighs colors in an RGB color space. Hue weighs only the hues, setting saturation and brightness aside — so bright red and light pink register as a match, for one. Chroma leans on the two chrominance components to judge similarity, setting luminance (lightness) aside.

Invert Color Correction Mask

Flips the mask that decides which colors are affected.
