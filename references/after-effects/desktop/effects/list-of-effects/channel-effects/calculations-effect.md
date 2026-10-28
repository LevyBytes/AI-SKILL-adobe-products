# Calculations effect

The Calculations effect merges one layer's channels with those of a second layer.

This effect works with 8-bpc and 16-bpc color.

Input Channel

Whichever channel gets pulled out and fed into the blending operation. RGBA shows every channel as normal. Gray turns all of a pixel's color channel values into the original pixel's luminance value. Red, Green, or Blue turns all of a pixel's color channel values into the value of the chosen color channel from the original pixel. Alpha turns every channel into the value of the original pixel's alpha channel.

Invert Input

Flips the layer (taking each channel value away from 1.0) before the effect pulls out the channel information you specified.

Second Layer

The control layer that Calculations blends against the original layer.

Second Layer Channel

Which channel gets blended against the input channels.

Second Layer Opacity

The opacity of the second layer. Set it to 0% to keep the second layer from affecting the output at all.

Invert Second Layer

Flips the second layer (taking each channel value away from 1.0) before the effect pulls out the channel information you specified.

Stretch Second Layer To Fit

Scales the second layer up to the original layer's dimensions ahead of blending. Leave it off to instead center the second layer over the original layer.

Preserve Transparency

Keeps the original layer's alpha channel from being altered.
