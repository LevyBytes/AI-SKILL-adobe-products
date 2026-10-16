# Channel Combiner effect

The Channel Combiner effect pulls out, shows, and tweaks a layer's channel values. GPU-Acceleration gives it faster performance.

Note

To see any channel rendered as a grayscale image, pick that channel from the From menu and pick Lightness Only from the To menu.

This effect works with 32-bpc color.

Use 2nd Layer

Pull values from Source Layer, which may be any layer in the composition.

From

Which values feed in as input; since the menu's first few entries are multichannel combinations of input and output options, they spare you from having to set a To value.

Saturation Multiplied takes the saturation value and multiplies it by the lightness value, lightness being the shortest distance to black or white. So a dark or light blue pixel carries a lower value than a bright or pure blue one. Of the ways to view a pixel's saturation value, this option is the most common.

Min RGB takes the smallest value among the red, green, and blue channel values.

Max RGB takes the largest value among the red, green, and blue channel values.

To

The channels that the values get applied to. Pick Red Only, Green Only, and Blue Only to put the value on a single channel while zeroing the other color channels. Pick Alpha Only to put the value on the alpha channel while setting the color channels to 1.0. Pick Hue Only and the applied hue value gets paired with 50% lightness and 100% saturation. Pick Lightness Only and the applied lightness value gets paired with 0% saturation, which leaves the hue with no influence. Pick Saturation Only and the applied saturation values get paired with 0% hue and 50% lightness.

Invert

Flips (subtracts from 1.0) the output channel values.

Solid Alpha

Drives the alpha channel value to 1.0 (complete opacity) across the whole layer.
