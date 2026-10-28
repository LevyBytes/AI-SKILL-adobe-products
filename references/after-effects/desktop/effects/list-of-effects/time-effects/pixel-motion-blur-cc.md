# Pixel Motion Blur | CC

Computer-built motion or sped-up footage tends to look fake because it lacks motion blur. By studying the video footage and reading motion vectors, the Pixel Motion Blur effect synthesizes a motion blur from them. That added blur makes the motion read as more realistic, since it supplies the blur a camera would normally introduce while shooting.

Shutter Control

Pick Manual to dial in Shutter Angle and Shutter Samples values on their own. Pick Automatic to adopt the values set for the layer or composition.

Shutter Angle

Measured in degrees, the shutter angle simulates the exposure a rotating shutter would permit. It draws on the footage frame rate to gauge the simulated exposure, which drives how much pixel motion blur appears. Enter 90° (25% of 360°) for 24-fps footage, for instance, and you get an effective exposure of 1/96 of a second (25% of 1/24 of a second). Enter 1° for almost no pixel motion blur, or 720° for a heavy dose of blur.

Shutter Samples

Governs how good the pixel motion blur looks. A higher value smooths the motion blur out but stretches the render time.

Vector Detail

Sets how many motion vectors go into computing the blur. At a value of 100, one vector serves each pixel. Raising it won't necessarily improve the result, but it will lengthen the render.
