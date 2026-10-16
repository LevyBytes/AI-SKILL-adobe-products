# Set Matte effect

The Set Matte effect swaps a layer's alpha channel (matte) for a channel taken from another layer above it, which lets you build traveling matte results. GPU-acceleration gives it faster performance. Its sole purpose is backward compatibility with projects made in older After Effects versions that relied on the Set Matte effect.

This effect works with 8-bpc and 16-bpc color. In After Effects CS6 or later, this effect works in 32-bit color.

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
