# Depth passes for 3D compositions

Black-and-white data that tracks distance is what a depth pass holds. Picture a scene full of black fog and white objects: the objects sitting farther from the camera read darker than those nearer to it.

The 3D channel effects can pull Z-depth out of a nested composition that holds 3D layers. Use that to drive 3D depth effects on the composition layer—a depth of field blur, for instance—or to build a matte for depth compositing or color correction.

Either composition renderer—Classic 3D or Cinema 4D—supports depth passes.

Extract depth pass

Extract depth pass

Pulling Z-depth out of a nested 3D composition is possible with these 3D channel effects:

- 3D Channel Extract
- Depth Matte
- Depth of Field
- Fog 3D
