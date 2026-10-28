# Channel Mixer effect

Blending the existing color channels, the Channel Mixer effect reworks a single color channel. Lean on this effect for inventive color tweaks the other color adjustment tools don't handle easily: decide each color channel's percentage contribution to build top-notch grayscale images, produce high-grade sepia-tone or other tinted results, and duplicate or swap channels.

output channel]-[input channel

What percentage of the input channel's value gets added onto the output channel's value. Take a Red-Green setting of 10: it lifts each pixel's red channel value by 10% of that pixel's green channel value. Set Blue-Green to 100 alongside Blue-Blue at 0 and the blue channel values are overwritten with the green channel values.

output channel]-Const

A constant value, given as a percentage, added onto the output channel's value. A Red-Const setting of 100, for example, maxes out every pixel's red channel by piling on 100% red.

Monochrome

Feeds the red output channel's value into the red, green, and blue output channels alike, producing a grayscale image.

It runs in 8-bpc and 16-bpc color.
