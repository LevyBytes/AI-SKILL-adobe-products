# Bending a footage layer

With the Ray-traced renderer in use, your 3D layer along with nested composition layers gains these geometry options for wrapping them around a vertical axis:

- Curvature: How much bend is applied, given as a percentage. The default sits at 0% (flat), yet it ranges from -100% to 100% to mimic things like video walls or wings in motion.
- Segments: How smooth the bend is, or how many facets it has — a smaller value yields a rougher result with broader facets.

You can add masks and effects to these layers, but beveling or extruding them isn't possible. On top of that, masks and effects get disregarded on collapsed 3D composition layers.
