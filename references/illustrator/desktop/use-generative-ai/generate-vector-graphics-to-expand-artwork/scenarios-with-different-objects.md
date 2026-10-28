# Scenarios with different objects

- Running Generative Expand on artwork that contains raster image, Symbol, Symbol Set, Graph, Live Paint, Image Trace output, Envelope Distort, Envelope Mesh, Envelope Warp, Mesh, Blend, Shaper Group, Brush path, Radial Repeat, Grid Repeat, Mirror Repeat, Radial Gradient, Freeform Gradient, color stop in gradient, non-native art, Perspective object, Intertwine object, Dimension object, and Mockup object makes the output imitate their visual look rather than create those object types. After you combine the expanded section with the original artwork, those objects remain separate instead of merging.
- Artwork with linear gradients can be expanded. Afterward, you can combine the original area with the expansion and continue editing them as linear gradients.
- Clip groups are eligible for expansion. The original and expanded sections can be combined afterward.
- Text objects are expandable only when the selection also contains other supported object types.
- Locked objects are not eligible for expansion.
- For stronger results, use filled artwork whose edges are cropped closely enough to make the scene fill the area.
