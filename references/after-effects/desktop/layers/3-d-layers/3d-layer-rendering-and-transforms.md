# 3D layers - 3D layer interactions, render order, and collapsed transformations

When certain layer types sit at particular spots in the layer stacking order within the Timeline panel, they stop groups of 3D layers from being evaluated as one unit for intersections and shadows.

If a 3D layer casts a shadow, that shadow reaches neither a 2D layer nor anything sitting past the 2D layer in the stacking order. By the same token, a 3D layer won't intersect a 2D layer or anything beyond that 2D layer in the stacking order. Lights, however, carry no such limitation.

An example shows how slipping a 2D layer in between keeps three 3D layers from intersecting.

Beyond 2D layers, several other layer types likewise block the 3D layers flanking them from intersecting or casting shadows on each other:

An adjustment layer

A 3D layer that has a layer style applied

A 3D precomposition layer carrying an effect, a closed mask (with a mask mode other than None), or a track matte

A 3D precomposition layer that lacks collapsed transformations

Turn on Collapse Transformations for a precomposition and it stops getting in the way of how the 3D layers on either side interact — provided every layer inside that precomposition is itself a 3D layer. Collapsing transformations brings out the 3D properties of the layers making up the precomposition. In effect, it lets each of those 3D layers composite separately into the main composition, rather than baking the precomposition into one 2D composite and dropping that into the main composition. The cost is that you lose the option to set certain layer settings on the precomposition as a single unit — things like blending mode, quality, and motion blur.

When a 3D layer is continuously rasterized (text layers included), effects you apply to that layer leave its cast shadow untouched. Should you want the shadow to reflect the effect, precompose the layer together with its effect.

Note

To keep the shadow sitting where you expect on a 3D layer that has a track matte, precompose the 3D layer and the track matte layer as a pair (leaving transformations uncollapsed), then apply the shadow to that precomposition.

Effects on continuously rasterized vector layers that carry 3D properties render in 2D first and then get projected onto the 3D layer. That projection step is skipped for compositions whose transformations are collapsed.

### More like this

- Per-character 3D text properties
- Importing and using 3D files from other applications
- 3D layers (keyboard shortcuts)
- Precompose layers
