# Ground controls

The ground layer's look is set through the Ground controls.

Ground

Sets which layer shows at the water's floor. Feed it an animated layer and Wave World reads only the first frame. Wave World works out where the water surface meets the ground's edge, calculates the waves rebounding off the shore, and tunes wave speed to suit the depth. The layer's brightness fixes the ground surface: white stands for higher ground, black for lower.

Steepness

Tunes how steep the ground runs by stretching and squeezing the displaced wireframe's height. The mesh is pinned at the black level, so it always rises from the floor. Put another way, you can't dig the bottom of a canyon deeper; you can only lift its rim higher. To deepen the canyon, pair a higher Steepness with a lower Height.

Height

Governs the gap between the water surface and the ground's lowest possible point. Use it to deepen or shallow the body of water. Change the water's depth and the waves respond in kind — running faster in deep water, slower in shallow. (Tuning the Height control with the wireframe preview up may look like it drops the ground level, but the wireframe camera always tracks the water level.)

Wave Strength

Governs how large the resulting waves grow when the ground's height or steepness is animated. At 0, no waves form.

Note

You can build a pulsing wave effect by animating the ground's steepness so it pokes up through the water and throws off waves. Then turn to the Wave Strength control to amplify it.
