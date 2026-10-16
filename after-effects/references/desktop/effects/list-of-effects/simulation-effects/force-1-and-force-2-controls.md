# Force 1 and Force 2 controls

Two separate Forces drive the blast regions through the Force 1 and Force 2 controls.

Position

Sets where the blast is currently centered within (x,y) space.

Depth

Marks the present center along the z axis — that is, the blast point's distance ahead of or behind the layer. Tune Depth to govern how much of the blast radius reaches the layer. Since the radius traces a sphere while the layer stays a plane, the sphere meets the plane only along a circular slice. As the layer sits farther from the blast's center, that circular slice shrinks. Exploding pieces travel outward from the force center, and Depth dictates their direction: positive numbers throw the fragments forward toward the camera (given the default camera setting of 0, 0, 0), while negative numbers drive them backward, away from the camera. The Wireframe + Force Sphere view lets you observe what a given Depth setting does.

Radius

Sets how large the blast sphere becomes. Measured as the span from a circle's (or sphere's) center out to its edge, this value lets you dial in precisely which fragments break apart. Altering it shifts both how fast and how thoroughly the explosion plays out. Keyframing it from a small to a large value produces an expanding, shockwave-style burst.

Note

Animate the Radius property — not the Strength property — when you want shattering to begin at some moment other than layer time zero. Gravity drags any pieces sitting inside the force sphere defined by Radius out past the frame even with Strength at 0. Hold the Radius property at 0 using Hold keyframes right up until the moment shattering should kick off.

Strength

Sets how quickly the burst fragments move — that is, how forcefully they get flung from or drawn back toward the blast point. Positive values push the pieces outward from that point; negative values pull them inward toward it. A larger positive value sends them flying faster and farther from the center, whereas a larger negative value launches them more rapidly toward the heart of the force sphere. Once launched, the pieces escape the force sphere's influence and the Physics settings govern them instead. A negative Strength does not vacuum the fragments into a black hole; rather, they pass through one another and exit the far side of the sphere. A low Strength fractures the layer into shapes and opens cracks without actually scattering the pieces. Whenever gravity is set to anything but 0, the fragments drift along gravity's pull after they break up.

Note

Each shatter fragment comprises vertices (the dots or points marking the shape's corners), edges (the lines joining those dots), and planes (the shape's walls). To decide when a shape has touched a force sphere, Shatter watches for the moment a vertex meets the sphere.
