# Create a depth map using the 3D Channel Extract effect

3D Channel Extract produces a grayscale depth map: scene areas nearer the camera read brighter, while more distant elements read darker. Feed that map into other effects, such as a post-processing blur or color correction. Shifting the black and white point alters the map's range, and those same values double as a handy reference when you dial in other depth-aware effects.

The look before and after the 3D Channel Extract effect is applied to build a depth map from extracted depth data.

Build a 3D scene, then precompose it by picking the timeline layers > Layer > Pre-compose.

Name the precomposition.

Pick the precomp and choose Effect > 3D Channel > 3D Channel Extract.

With the effect applied, the Composition panel shows depth data that records how far each point on a surface sits from the camera. Distance from the camera reads as black, while the nearest points read as white.

Over in the Effect Controls panel, beneath the 3D Channel Extract effect, the Black Point and White Point options let you tune their values and range.

From here, layer effects onto this depth map to produce stylized animation variants.

A sample in which the Colorama effect is applied to the depth map built with the 3D Channel Extract effect.
