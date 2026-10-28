# Precomposing, nesting, and pre-rendering - Collapsing transformations

Switch on the Collapse Transformations switch for a nested composition and its transformations hold off until the masks and effects of the containing composition have rendered. Thanks to that ordering, the nested composition's transformations and the containing composition's transformations can merge — collapse — and run as one. Vector layers that aren't continuously rasterized behave the same way.

Note

Where you'd find a Collapse Transformations switch, vector layers instead carry a Continuously Rasterize switch in the very same spot. Shape layers, text layers, and layers whose source footage is a vector graphic file all qualify as vector layers. Text layers and shape layers stay continuously rasterized at all times.

Take a case where a layer is halved in a nested composition and that nested composition is doubled in the containing composition: collapsing transformations can hold the resolution steady. Instead of running both transformations and shedding image data, a single transformation runs — accomplishing nothing, because the two transformations cancel out.

Leave transformations uncollapsed and a nested composition that holds 3D layers renders as a flat 2D image of the 3D setup, shot through the default composition camera. That flattening keeps the nested composition from intersecting 3D layers, throwing shadows onto them, or catching shadows from them in the containing composition. Neither do the containing composition's cameras and lights govern the nested composition.

Collapse the transformations and the 3D properties of the nested composition's layers become visible to the containing composition. The nested composition can now intersect 3D layers, cast shadows onto 3D layers, and take on shadows from 3D layers in the containing composition. Its cameras and lights gain control over the nested composition too.

At bottom, collapsing transformations for a nested composition signals After Effects to skip flattening and cropping that composition's layers. Yet because an adjustment layer acts on the composite of everything beneath it inside the same composition, an adjustment layer placed in a nested composition with collapsed transformations forces exactly the flattening and cropping that collapsing transformations would normally hold off.

Apply a closed mask (with a mask mode other than None), a layer style, or an effect to a nested composition that has collapsed transformations, and the nested composition's layers render on their own first, then the masks and effects go on, and only then does the result composite into the main composition. Under that order, the nested layers' blending modes never touch any layers beneath them in the main composition, and 3D layers above and below the collapsed layer can't intersect or cast shadows on one another.

### More like this

- Creating layers
- 3D layers
- Managing layers
- Precomposing, nesting, and pre-rendering
