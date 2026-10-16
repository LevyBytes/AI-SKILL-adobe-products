# Creating layers — Adjustment layers

Apply an effect to a layer and it touches that layer only, none of the rest. An effect can stand on its own, though, if you set up an adjustment layer to hold it. Whatever effects ride on an adjustment layer reach every layer sitting beneath it in the stacking order. Park an adjustment layer at the very bottom of the stacking order and it produces no visible result.

Since effects on an adjustment layer hit all the layers below, they're handy for treating many layers in one move. Otherwise an adjustment layer acts like any layer — keyframes or expressions work with any of its properties, for instance.

Note

Put more precisely, an adjustment layer applies its effect to the composite assembled from every layer below it in the stacking order. That's why running an effect on an adjustment layer renders faster than running the same effect on each underlying layer one at a time.

Note

To treat a group of layers with one effect or transformation, precompose them first and then apply that effect or transformation to the resulting precomposition layer. (See Precompose layers.)

Mask an adjustment layer to confine an effect to just portions of the layers underneath. Those masks can be animated to track subjects moving through the underlying layers.

- Building an adjustment layer is done with Layer > New > Adjustment Layer, or by pressing Ctrl+Alt+Y (Windows) or Command+Option+Y (Mac OS).
- Converting selected layers into adjustment layers means turning on the Adjustment Layer switch for them in the Timeline panel or choosing Layer > Switches > Adjustment Layer.

Note

Switching off the Adjustment Layer switch for a layer turns it back into a normal layer.
