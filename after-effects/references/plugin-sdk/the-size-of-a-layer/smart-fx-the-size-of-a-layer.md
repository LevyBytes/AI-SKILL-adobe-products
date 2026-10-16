# SmartFX — The "Size" Of A Layer

Just like non-smart effects, every smart effect is free to shrink or grow its requested input however it likes. They can't count on a fixed frame size, and the input's size may shift over time.

The user might, for instance, apply an animated drop shadow to a layer, which would tack pixels onto different edges of the layer at different moments, according to the direction the shadow is thrown.

Certain effects (those that need to line up one layer against another, for example) call for some idea of "size." That could be pinned down in two ways, each carrying its own trade-offs.

in_data>width/height gives the original layer's size, prior to any effects or downsampling. Because nothing applied afterward touches this value, it can serve as an absolute reference for things such as center points.

This isn't foolproof, though, since the user might have applied a distortion or translation effect. Beyond that, the value exists only for the layer the effect is applied to, not for other layer parameters.

...or...

Every layer input carries a max_result_rect taking in all its pixel data, which in a sense is the master "size" of a layer.

It exists for all layers, yet shifts over time with previously applied effects, sometimes in ways that catch the user off guard (as the drop-shadow case above shows).

Be aware that you can get an input's ref_width/height and max_result_rect without rendering, by calling checkout_layer with an empty request_rect.

That is reasonably efficient and comes in handy when you need a layer's "size" first to work out precisely which pixels rendering will require.

Here is a case of requesting a layer in pre-render and then never calling checkout_layer (here, there are none).
