# Compound Arithmetic effect

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
