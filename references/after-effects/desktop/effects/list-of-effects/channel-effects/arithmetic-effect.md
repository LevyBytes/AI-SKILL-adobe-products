# Arithmetic effect

On an image's red, green, and blue channels, the Arithmetic effect runs an assortment of straightforward math operations.

This effect works with 8-bpc color.

Operator

Which operation runs between the value you set for a given channel and that channel's current value at each pixel in the image:

And, Or, and Xor

Apply bitwise logical operations.

Add, Subtract, Multiply, and Difference

Apply basic math functions.

Max

Sets the pixel's channel value to whichever is larger, the value you specified or the pixel's original value.

Min

Sets the pixel's channel value to whichever is smaller, the value you specified or the pixel's original value.

Block Above

Drops the pixel's channel value to zero whenever the pixel's original value tops the value you specified; otherwise the original value stays put.

Block Below

Drops the pixel's channel value to zero whenever the pixel's original value falls under the value you specified; otherwise the original value stays put.

Slice

Sets the pixel's channel value to 1.0 whenever the pixel's original value sits above the value you specified; otherwise it sets the value to zero. Either way, the remaining color channels are set to 1.0.

Screen

Takes the channel values' complements, multiplies them, then takes that result's complement. The resulting color is never darker than either input color.

Clip Result Values

Stops every function from producing color values past the valid range. Leave this option off and certain color values may wrap around.
