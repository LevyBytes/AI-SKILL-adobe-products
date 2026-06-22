# Channel Effects

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Jun 26, 2025

Within this category, After Effects ships these third-party effects:

CC Composite effect

See Third-party plug-ins included with After Effects.

## Additional resources about Channel effects

On the After Effects Scripts website, Satya Meka makes the Separate RGB effect plug-in available. Built using Pixel Bender, it offsets, scales, and rotates each of an image's color channels on its own.

Over on his website, Chris Forrester offers a video tutorial demonstrating how the Channel Mixer, Shift Channels, and Set Matte effects can build mattes out of color ID passes coming from 3D applications. Bundled with the tutorial is an animation preset that configures the parameters in the Channel Mixer effect so an RGBCMY color ID pass can be used.

## Arithmetic effect

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

## Blend effect

Using one of five modes, the Blend effect combines two layers.

Blending modes let you combine layers more readily and faster, yet they can't be animated. What the Blend effect offers in exchange is that it can be animated. (See Blending modes and layer styles.)

This effect works with 8-bpc and 16-bpc color.

Blend With Layer

The layer to blend with (the secondary or control layer).

Note

When you want a layer to serve as the Blend effect's control layer without it appearing elsewhere in the composition, switch off that control layer's Video switch. (See Layer switches and columns in the Timeline panel.)

Mode

Blending mode:

Color Only tints each pixel of the original image according to the matching pixel's color in the secondary image.

Tint Only works much like Color Only, except it tints the original image's pixels only when they already carry color.

Darken Only darkens any pixel in the original image that comes out lighter than its counterpart in the secondary image.

Lighten Only lightens any pixel in the original image that comes out darker than its counterpart in the secondary image.

Crossfade fades the original image out at the same time the secondary image fades in.

Note

Animating the Opacity property of one layer stacked over another lets you build a crossfade without any effect at all. That approach falls apart, though, when the frontmost layer carries any transparent regions (which let the layer below peek through even at full opacity). Even with transparent regions on both layers, the Crossfade mode delivers a clean crossfade between the two.

Blend With Original

The transparency of the effect. The effect's result gets blended into the original image, with the effect result laid on top. Raise this value and the effect touches the layer less. As an example, the effect leaves no visible result on the layer at 100%; at 0% the original image stays hidden.

If Layer Sizes Differ

Sets where the control layer goes. The layer's quality setting touches Blend only when Stretch To Fit is on and the layers differ in size. At Best quality the stretching comes out far smoother.

## Calculations effect

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

## Channel Combiner effect

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

## Compound Arithmetic effect

The Compound Arithmetic effect mathematically merges the layer it's applied to with a control layer. Its sole purpose is backward compatibility with projects made in older After Effects versions that relied on the Compound Arithmetic effect. As a rule, blending modes do the job better than the Compound Arithmetic effect.

This effect works with 8-bpc color.

Second Source Layer

The layer to use with the current layer in the given operation.

Operator

The operation to perform between the two layers.

Operate On Channels

The channels to which the effect is applied.

Overflow Behavior

The way the effect remaps values landing outside the 0-255 grayscale range.

Clip

Anything above 255 maps to 255. Anything below 0 maps to 0.

Wrap

Values over 255 and under 0 get wrapped back around into the 0-255 range. So 258 wraps around to 2, 256 wraps around to 0, and -3 wraps around to 253.

Scale

The top and bottom values get remapped to 255 and 0, with the values in between stretched or squeezed to fit the range.

Stretch Second Source To Fit

Sizes the second layer up to the current layer's width and height. Turn this option off and the second layer keeps its source's current size, lined up with the source layer's upper left corner.

Blend With Original

The transparency of the effect. The effect's result gets blended into the original image, with the effect result laid on top. Raise this value and the effect touches the layer less. As an example, the effect leaves no visible result on the layer at 100%; at 0% the original image stays hidden.

## Invert effect

The Invert effect flips an image's color information. GPU-acceleration gives it faster performance. This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (left), and with effect applied (right)

Original (left), and with effect applied (right)

Channel

Which channel or channels get inverted. Every group of items works within one particular color space, flipping either the whole image in that color space or just one channel.

RGB/Red/Green/Blue

RGB flips all three additive color channels. Red, Green, and Blue each flip a single color channel.

HLS/Hue/Lightness/Saturation

HLS flips all three calculated color channels. Hue, Lightness, and Saturation each flip a single color channel.

YIQ/Luminance/In Phase Chrominance/Quadrature Chrominance

YIQ flips the trio of NTSC luminance-and-chrominance channels all at once. Y (luminance), I (in-phase chrominance), and Q (quadrature chrominance) each flip a single channel.

Alpha

Flips the image's alpha channel. Being no color channel, the alpha channel sets transparency instead.

Blend With Original

The transparency of the effect. The effect's result gets blended into the original image, with the effect result laid on top. Raise this value and the effect touches the layer less. As an example, the effect leaves no visible result on the layer at 100%; at 0% the original image stays hidden.

For faster rendering, the Invert effect leans on GPU acceleration.

## Minimax effect

The Minimax effect gives each of a pixel's channels the smallest or largest value it finds for that channel inside a radius you set. GPU-Acceleration gives it faster performance.

You can lean on this effect to grow or shrink a matte. Take a white solid region ringed by black: with Minimum and a radius of 1, it pulls in by one pixel on every side.

The layer's quality setting has no bearing on Minimax.

This effect works with 8-bpc, 16-bpc color, and 32-bpc color.

Operation

Minimum gives each of a pixel's channels the smallest value for the chosen channel inside the chosen radius. Maximum gives each of a pixel's channels the largest value. Minimum Then Maximum runs the Minimum operation first, then the Maximum operation. Maximum Then Minimum runs the Maximum operation first, then the Minimum operation.

Direction

Which axis to scan along for values. Horizontal & Vertical scans every direction.

## Remove Color Matting effect

The Remove Color Matting effect strips color fringes (halos) off layers whose color channels are premultiplied. Halos tend to show up when a partially transparent area holds onto its original background color and then gets composited into a setting whose background color differs. Pair this effect with effects that produce transparency—keying effects, for instance—for tighter control over how partially transparent areas look. (See Alpha channel interpretation: premultiplied or straight.)

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Original (left), and with Remove Color Matting effect applied (right)

Original (left), and with Remove Color Matting effect applied (right)

Set the new background color with Use Background Color. Working in 32-bpc color, switch off Clip HDR Values to let this effect put out color values beyond the 0.0-1.0 range.

The Remove Color Matting effect once went by the name Unmultiply effect. That former name points to how the effect operates by unpremultiplying color channels—undoing, in partially transparent areas, the background color that was premultiplied into the layer's color channels. This is not the same as what Knoll Unmult and other effects do when they build an alpha channel out of an image's color channels.

## Set Channels effect

The Set Channels effect carries channels over from control layers (source layers) into the effect layer's red, green, blue, and alpha channels. GPU-acceleration gives it faster performance. For instance, you could grab the luminance values of a control layer's pixels and put them to work as the blue values for the effect layer's pixels.

This effect works with 8-bpc, 16-bpc color, and 32-bpc color.

## Set Matte effect

The Set Matte effect swaps a layer's alpha channel (matte) for a channel taken from another layer above it, which lets you build traveling matte results. GPU-acceleration gives it faster performance. Its sole purpose is backward compatibility with projects made in older After Effects versions that relied on the Set Matte effect.

This effect works with 8-bpc and 16-bpc color. In After Effects CS6 or later, this effect works in 32-bit color.

Original (upper-left), matte layer (lower-left), and result (lower-right)

Original (upper-left), matte layer (lower-left), and result (lower-right)

Building traveling mattes with a track matte rather than the Set Matte effect is sometimes the quicker, simpler route. That said, the Set Matte effect brings a few benefits over flagging a layer as a track matte layer. With the Set Matte effect, the layer serving as the matte can sit anywhere in the layer stacking order—a track matte layer, by contrast, has to sit directly above the matted layer. On top of that, the Set Matte effect lets a single layer act as the matte for several layers. (See Track mattes and traveling mattes.)

Take Matte From Layer

Whichever layer supplies the replacement matte.

Use For Matte

Which channel feeds the matte.

Invert Matte

Flips the matte's transparency values.

Stretch Matte To Fit

Scales the chosen layer to match the current layer's size. Leave Stretch Matte To Fit off and the layer named as the matte gets centered within the first layer.

Composite Matte With Original

Composites the new matte against the current layer in place of replacing it. The matte that results lets the image come through only where both the current matte and the new matte carry some opacity.

Premultiply Matte Layer

Runs premultiplication on the new matte layer against the current layer.

## Shift Channels effect

The Shift Channels effect swaps the image's red, green, blue, and alpha channels for values drawn from other channels. GPU-acceleration gives it faster performance.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Take Channel From

The channel to use as a source.

## Solid Composite effect

The Solid Composite effect is a fast route to compositing a fresh color solid behind the original source layer.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Source Opacity

The opacity of the source layer.

Color

The color of the solid.

Opacity

The opacity of the solid.

Blending Mode

The blending mode used to combine the layer and the solid color.

### More like this

- Blending modes and layer styles
