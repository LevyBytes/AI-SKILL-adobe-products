# Posterize Time effect

Posterize Time effect

Posterize Time effect

A layer gets pinned to a specific frame rate by the Posterize Time effect. Beyond standing alone as a special effect, it has subtler applications. For instance, 60-field-per-second video footage can be pinned to 24 frames per second (then field rendered at 60 fields per second) for a filmlike look. Nested compositions, too, can be pinned to a chosen frame rate. In hardware devices this effect sometimes goes by the name Strobe.

Animating the Frame Rate slider's value can produce unpredictable results. That's why Hold is the only interpolation method permitted for the frame rate.

This effect works with 8-bpc, 16-bpc, and 32-bpc color.

Note

You can reach much the same outcome as applying the Posterize Time effect to a layer another way: precompose the layer, set the precomposition's frame rate in the Composition Settings dialog box, and on the Advanced tab enable, for that precomposition, Preserve frame rate when nested or in render queue. With this method the precomposition keeps its own frame rate rather than inheriting the containing composition's settings.
