# Motion blur settings in the Advanced tab of Composition Settings

Reach for the controls in the Motion Blur section to tune motion blur and land convincing, realistic results.

Samples Per Frame

Sets the floor on samples. After Effects falls back to this minimum on any frame where it can't work out an adaptive sampling rate from the layer's motion. 3D layers and shape layers run on this rate.

Adaptive Sample Limit

Sets the ceiling on samples.

Shutter Angle

Stated in degrees, the shutter angle mimics how much exposure a spinning shutter would let through. It leans on the footage frame rate to gauge that simulated exposure, which in turn dictates how much motion blur you get. Take 24-fps footage: dialing in 90° (25% of 360°) yields an effective exposure of 1/96 of a second (25% of 1/24 of a second). At 1° there's barely any motion blur; at 720° the blur is heavy.

Shutter Phase

The shutter phase is likewise given in degrees. It sets an offset fixing when the shutter opens against the start of a frame. Tweak it when a blurred object seems to trail behind where that same object sits without motion blur.

Note

For a layer composited over another via motion tracking data, the sweet spot is a Shutter Phase set to -1/2 of the Shutter Angle. (Say, Shutter Phase = -90 with Shutter Angle = 180.) Pairing those values centers the resulting blur on the original object.
