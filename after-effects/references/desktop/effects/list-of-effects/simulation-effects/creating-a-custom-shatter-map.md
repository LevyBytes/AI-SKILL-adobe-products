# Creating a custom shatter map

Every layer in After Effects — monochrome images included — is held as an RGBA image. To build a custom shatter map, the Shatter effect works out each channel's luminance threshold. It computes the 50% luminance threshold per channel, producing an image made of just eight colors: red, green, blue, yellow, magenta, cyan, white, and black. Those eight arise as the channel combinations driven fully on (255) or fully off (0). Along the borders between these differently colored regions, the shatter layer divides.

When you build custom shatter maps, manually fixing each image channel's threshold at 50% can help (the Curves effect handles that). Setting the threshold reveals how the image will fracture. As an alternative, draw a custom shatter map using only the eight colors named above, with no in-between shades or anti-aliasing.

Note

Reach for the Colorama effect to posterize an image's colors down to these eight. Switch off Interpolate Palette in the Colorama effect controls.

Whether a shattered fragment exists comes down to the alpha channel: a white alpha value yields a fragment, a black one yields none. Working through an alpha channel, you can build a tile map riddled with holes or turn out simple 3D models such as extruded text.

Note

What shapes a layer breaks into is set by the custom shatter map, yet when those fragments break is not. The Force controls handle the timing, which a gradient layer can refine further.
