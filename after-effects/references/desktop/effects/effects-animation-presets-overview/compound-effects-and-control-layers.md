# Compound effects and control layers

A number of effects take a control layer (also called a layer map) as their input. Such compound effects read the pixel values of that control layer to work out how they should alter the pixels of the layer the effect sits on — the destination layer. The reading varies: at times it's the brightness of the control layer's pixels that matters, and at other times it's the per-channel values of those pixels.

Take the Displacement Map effect, which leans on a control layer's brightness values to decide both how far and which way it nudges the underlying layer's pixels. Or the Shatter effect, which can draw on two control layers at once — one shaping the broken fragments, the other timing when particular regions of the destination layer blow apart.

Any effects, masks, and transformations on the control layer are disregarded by the compound effect. Should you want those results to count, precompose the layer first and then feed the precomposition layer in as the control layer.

A frequent practice is to keep the control layer itself hidden — in other words, its Video switch switched off.

A Stretch Map To Fit option (or one named much like it) ships with most compound effects; it briefly scales a control layer up or down to match the destination layer's dimensions, so that each destination-layer pixel has a matching control-layer pixel. Turn the option off and the compound effect runs its math as though the control layer sat centered over the destination layer at its native size.

Drawing or painting inside an image editor such as Adobe Photoshop is one way to build control layers.
