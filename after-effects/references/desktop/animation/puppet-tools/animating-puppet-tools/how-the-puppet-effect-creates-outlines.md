# How the Puppet effect creates outlines

Whenever a Puppet mesh comes into being, an outline sets its edges, and that outline can come from any of these kinds of closed path:

An unlocked mask path

A shape path on a shape layer

A text character's outline

Apply the Puppet effect to a layer that has no unlocked masks, shapes, or text characters, and it falls back on Auto-trace to derive paths from the alpha channel. The Puppet effect uses these paths solely to work out outlines, and they never turn up as masks on the layer. On a raster layer that lacks an alpha channel, what you get is one rectangular path hugging the layer's bounds. For an intricate image, or to set up Auto-trace preferences, run Auto-trace ahead of the Puppet tools.

A text character made up of several separate closed paths — the letter i, say — counts as several distinct paths.

The stroke of a shape or text character plays no part in working out outlines; only the path counts. To wrap a mesh built from such items around its stroke, raise the Expansion value. At its default of three pixels, Expansion takes in any stroke reaching three pixels or less from its path.

Note

Lay down paint strokes on a layer with the Brush tool while the Paint On Transparent option is on. Painting with that option active yields a raster layer holding nothing but the paint strokes, marked out by an alpha channel. From there the Puppet tools can animate those paint strokes. Skip using a mask on the layer.

When several masks, shapes, or characters overlap on one layer, the outline is built from the union of whichever overlapping shapes, characters, or masks are involved. Where a mask overlaps a text character or shape, outlines get built for the whole character or shape, for the slice of it inside the mask, and for the mask on its own.

Note

To warp several separate characters or shapes as a single object, ring the individual objects with a mask (its mask mode set to None) and feed that mask path in as the outline the mesh is built from. Once the mesh exists, you're free to delete the mask.

If the Puppet effect is already on a layer, outlines light up with a yellow highlight as you slide a Puppet tool pointer across them. You can pick the outline where an initial pin goes to build a mesh. Every click within an outline using a Puppet tool builds a mesh.

If the Puppet effect isn't yet on a layer, that layer's outlines haven't been computed. Your click prompts the Puppet effect to compute outlines and check whether you landed inside one. If you did, it builds a mesh defined by the outline you hit. If not, you can slide the pointer around the layer to choose the outline where a pin goes to build a mesh. Sliding the pointer around the layer helps you see various objects' outlines and decide which ones to build a mesh from.

Outline for the union of two shape paths, indicated by yellow highlight, visible because the Puppet tool pointer is within the area defined by outline.
