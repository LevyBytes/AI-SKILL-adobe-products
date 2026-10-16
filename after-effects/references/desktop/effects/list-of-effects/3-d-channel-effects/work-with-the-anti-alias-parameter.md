# Work with the anti-alias parameter

With the Anti-alias parameter you decide whether the effect's output gets anti-aliased. Smoothing the edges of depth passes helps when those mattes feed into depth compositing or color correction.

Switch this option off whenever you reach for Depth of Field or any effect that needs objects and their edges treated as sitting at one shared distance. Because anti-aliasing alters the gray values along an edge, it can shift how deep that edge reads and introduce artifacts in whatever effect relies on the matte.

Clamp Output Offered only in 32-bpc color mode, this pins the effect's grayscale output between 0 and 1.0. On by default.

Invert Depth Map flips the effect's grayscale output.

Object ID

Inside the 3D application, every object may carry its own ID value. A map drawn from this channel lets you target effects at specific objects within a 3D scene—say, for selective color adjustments. No anti-aliasing is applied to this channel.

Texture UV

Mapped into the red and green channels, this channel holds the texture mapping coordinates for your object. It receives no anti-aliasing. Reach for it when verifying UV maps or when feeding the Displacement Map effect.

Surface Normals

For each point across an object's surface, this channel writes the direction vector into the RGB channels, with those vectors measured relative to the camera. Dynamic relighting and relief rendering in third-party plug-ins can build on this channel. This channel is anti-aliased.

Coverage

How this channel behaves shifts from one 3D application to the next. Its job is to flag regions close to object edges and contours, signaling how anti-aliasing and overlap are handled there.

Background RGB

Every RGB pixel value of the background—minus any foreground objects—lives in this channel. Its typical use is holding the dynamic environmental effects that 3D programs generate, like skies or procedurally textured backdrops. This channel is anti-aliased.

Unclamped RGB

Here you get the colors exactly as the 3D application handed them to its renderer, before exposure and gamma adjustments were applied. This channel is anti-aliased.

Material ID

Within the 3D application, each material can receive its own ID value. Using a map built from this channel, you can direct effects at particular materials in a 3D scene. No anti-aliasing is applied to this channel.
