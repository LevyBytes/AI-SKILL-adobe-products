# Color Link effect

Using another layer's average pixel values, the Color Link effect tints one layer. It's handy when you need to quickly land on a color that pairs with a background layer's color.

It runs in 8-bpc color.

Source Layer

Which layer the colors are sampled from. Pick None and the layer carrying the effect doubles as the source layer, with any masks and other effects on that layer factored in. Pick a layer's name off the menu and the source layer is taken without its masks and effects.

Sample

Sets which values get sampled and which operation runs on them.

Clip

What percentage of pixels at the extreme channel values to disregard. This clipping helps tamp down the sway of noise or other unrepresentative pixels.

Stencil Original Alpha

The effect lays a stencil of the layer's original alpha channel over the new value.

Opacity

How opaque the effect is. The effect's output gets blended with the original image, the effect's result sitting on top. Lower this value and the effect grips the layer less. Set it to 0%, for example, and the effect leaves no visible mark on the layer; set it to 100% and the original image stays hidden.

Blending Mode

Which blending mode merges the effect's result with the original layer. These blending modes drop out when the layer's alpha channel values are being averaged.
