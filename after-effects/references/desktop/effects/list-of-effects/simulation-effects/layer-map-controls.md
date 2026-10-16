# Layer Map controls

Out of the box, the Cannon, Grid, Layer Exploder, and Particle Exploder make dot particles. Swap the dots for a layer in the composition by using the Layer Map. Feed in a movie of one bird flapping its wings as a particle source layer, for example, and After Effects swaps every dot for an instance of that bird movie, building a flock. For a particle source layer, a still image, a solid, or a nested After Effects composition all qualify.

A multiframe layer is any whose source shifts over time, like a movie or a composition. Mapping new particles onto a multiframe layer, you set how the layer's frames get used through the Time Offset Type control. Pick Absolute, say, to map a static image onto a particle, or Relative to map an animating run of frames onto one. Both Absolute and Relative can be randomized across particles.

Note

Choose a layer for Layer Map and Particle Playground disregards any changes you made to that layer inside the composition, drawing on the layer in its original form instead. To hold onto a layer's transformations, effects, masks, rasterization options, expressions, or keyframe changes when it feeds particles, precompose it.

Use Layer

Names the layer you want serving as the particles.

Time Offset Type

Sets how the frames of a multiframe layer get used. Take a layer of a bird flapping its wings: choose Relative for Time Offset Type with a Time Offset of 0 and every instance of the bird flaps in unison. That might pass for a marching band, but not for a flock of birds. To start each bird flapping from a different frame in the layer, reach for Relative Random.

- Relative: Picks the layer's opening frame from the Time Offset you set, measured against where the effect layer currently sits, and from there keeps pace with the current time of the Particle Playground layer. Set a Time Offset of 0 and every particle reads the frame matching the effect layer's current time. Set a Time Offset of 0.1 with a composition at 30 fps, and each fresh particle lands on the frame falling 0.1 seconds past the prior particle's frame. Whatever Time Offset you pick, the opening particle always reads the source layer frame that lines up with the effect layer's current time.

- Absolute: Pulls one frame from the layer per the Time Offset you set, paying no mind to the current time. Reach for Absolute when a particle should hold a single frame of a multiframe source layer across its whole lifespan rather than running through frames as the effect layer moves ahead in time. Pick Absolute with a Time Offset of 0, for instance, and each particle clings to the source layer's first frame for its entire lifespan. Want a frame past the first? Slide the layer earlier until that frame aligns with the Particle Playground layer's In point. A Time Offset of 0.1, say, puts each new particle on a frame 0.1 second beyond the previous particle's (every third frame in a 30-fps animation).

- Relative Random: Playback begins from a layer frame picked at random somewhere between the effect layer's present time and however much Random Time Max you've entered. Say you pick Relative Random with a Random Time Max of 1; in that case each particle kicks off from a frame drawn at random between now and one second later. Enter a negative Random Time Max instead — say - 1 — and the window sits before the present moment, so the band in which fresh particles begin shifts forward as the playhead moves. Even so, that band always spans from the present time back to one second prior.

- Absolute Random: Grabs a frame at random out of the layer, drawing from a window that runs from 0 up to your Random Time Max. Reach for Absolute Random whenever each particle should stand in for its own distinct frame of a layer with many frames. As an illustration, with Absolute Random and a Random Time Max of 1, every particle displays a layer frame pulled from somewhere between 0 seconds and 1 second into the layer's run.

Time Offset

Sets which frame the layer's sequential playback begins on.

Affects

Picks the particles that the Layer Map controls act upon.
