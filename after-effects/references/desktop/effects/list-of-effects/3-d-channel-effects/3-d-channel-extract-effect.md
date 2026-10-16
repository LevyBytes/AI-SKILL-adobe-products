# 3D Channel Extract effect

Auxiliary channels become visible—rendered either as grayscale or as multichannel color images—through the 3D Channel Extract effect. The layer it hands back can then serve as a control layer for other effects. You might, say, pull the depth data out of a 3D channel image file and feed it as an influence map into the Particle Playground effect, or draw values from the unclamped RGB channel to build a matte that throws off glowing highlights.

Note

Want a pixel's 3D channel readouts to appear in the Info panel? Apply the 3D Channel Extract effect, set the channel via the 3D Channel menu inside the Effect Controls panel, then switch to the Selection tool and click that pixel within either the Composition panel or the Layer panel.

This effect works with 8-bpc and 32-bpc color.

Original (left), with 3D Channel Extract applied using Texture UV (right)

White Point, Black Point

The value that gets mapped onto white or black.

3D Channel

Which channel to pull from the 3D image:

Z-Depth

Captures how far a given shaded pixel sits from the camera. The farthest distance shows up as white; the pixels nearest the camera read as black. Effects like the Lens Blur effect can draw on this to build depth-of-field looks. Apply the channel straight as a luma matte and you get fog.

Note

To get the cleanest result, match the effect's White Point and Black Point against whatever near and far values the camera used back in the 3D application where the 3D image originated.
