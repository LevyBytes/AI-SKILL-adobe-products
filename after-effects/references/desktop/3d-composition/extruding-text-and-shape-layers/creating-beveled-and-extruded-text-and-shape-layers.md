# Creating beveled and extruded text and shape layers

Under the Ray-traced renderer, an extrusion or bevel can be applied to 3D text and shape layers. Producing a beveled and extruded text or shape layer runs as follows:

Build a Ray-traced 3D composition.

Add a text or shape layer.

Switch on 3D for that layer.

For more, see enabling 3D for a layer and converting 3D layers.

Tune the bevel and extrusion controls.

Their look is governed by the following properties found in the layer's Geometry Options section of the Timeline panel:

- Bevel Style: The bevel's shape. The choices are None (default), Angular, Concave, and Convex.
- Bevel Depth: How big the bevel is, in pixels, measured both horizontally and vertically.
- Hole Bevel Depth: The bevel size for the interior portions of a character — think of the hollow in an "O". This is given as a percentage of the Bevel Depth.
- Extrusion Depth: The extrusion's thickness in pixels. That extruded side surface sits at a right angle to the front surface.

Rather than the pixel-based text and shapes you get from the Classic 3D renderer, these 3D objects derive from swept-surface geometry — a 2D shape traveling along a defined path. Because of that, applying masking, effects, or track mattes to the geometry simply doesn't apply. The geometric nature of the text and shapes carries through, which is why character styling such as kerning, font size, and subscript still works.

Be aware of these known issues:

- Gradients for fill or stroke aren't supported on 3D shape layers.
- Even-odd winding within shapes doesn't behave correctly right now. A Merge Paths operator may be the workaround you need.
- Filling can go wrong on shapes whose paths intersect themselves. Likewise, objects built from compound paths with several nested holes may fail to render properly.
