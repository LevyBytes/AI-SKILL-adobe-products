# Create a seamless loop using Fractal Noise

Pick a layer in the Timeline panel, then choose Effect > Noise & Grain > Fractal Noise.

Lay down two keyframes for Evolution.

Tweak the spacing between keyframes and the count of Evolution revolutions until the noise animation looks right to you.

Turn on Cycle Evolution and assign a value to Cycle.

Across the span fixed by the distance between Evolution keyframes, the evolution runs through however many revolutions you set for Cycle. Set the Cycle value by weighing how much of this cycle you'll need to render before it loops back, and pick the shortest length that suits your project so you save render time.

At first the closing frame of a cycle matches the opening frame exactly. To get a seamless loop, drop that last frame by placing the layer's Out point one frame ahead of the cycle's final frame.

Slide the current time indicator to the moment the cycle finishes. If Cycle is set to 2, for example, find the frame where the Evolution value reaches 2.

Should you have keyframed other Fractal Noise controls, send them back to their starting values at the point where the cycle loops in the timeline; otherwise those controls won't loop.

Step the current time indicator back by one frame.

Trim the layer's Out point to land on this frame.

8. Pre-render the layer, then bring that rendered movie back into your project.
   With the brought-in footage item selected in the Project panel, choose File > Interpret Footage. Then set Loop to however many loops the layer's duration in the project calls for.
