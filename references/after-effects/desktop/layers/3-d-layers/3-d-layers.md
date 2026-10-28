# 3D Layers

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Turn a layer into a 3D layer and the layer stays flat itself, yet it picks up extra properties — Position (z), Anchor Point (z), Scale (z), Orientation, X Rotation, Y Rotation, Z Rotation, Geometry Options, and Material Options.

- How a layer responds to light and shadows is set through its Material Options properties. Shadows, lights, and cameras only register with 3D layers.
- Geometry Options properties let you bevel the edge of a shape or text, adding depth so the object reads as more three-dimensional.

Here a 2D layer has been turned into a 3D layer with some of its added 3D properties adjusted.

Within a text layer, single characters can be made 3D sublayers, each carrying its own 3D properties. Switch on Enable Per-character 3D for a text layer (Animate > Enable Per-character 3D) and it acts just like a precomposition made of one 3D layer per character. Every camera and light layer comes with 3D properties.

Layers start out at a depth — z-axis position — of 0. After Effects places the coordinate system's origin at the upper-left corner: x (width) grows from left to right, y (height) grows from top to bottom, and z (depth) grows from near to far. A number of video and 3D applications run a coordinate system spun 180 degrees about the x axis; there, y grows from bottom to top and z grows from far to near.

Picking an axis mode lets you transform a 3D layer against the composition's coordinate space, the layer's own coordinate space, or a custom one.

You can drop effects and masks onto 3D layers, mix 3D layers with 2D ones, and build and animate camera and light layers to view or light 3D layers from whatever angle you choose. At final-output render time, 3D layers render through the active camera's perspective.

Every effect is 2D, even the ones that fake 3D distortions. Look at a layer carrying the Bulge effect from the side, for example, and no protrusion shows.

Like every mask, a mask on a 3D layer has its coordinates in the layer's 2D coordinate space.
