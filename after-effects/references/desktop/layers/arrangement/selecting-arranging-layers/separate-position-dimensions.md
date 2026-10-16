# Separate dimensions of Position to animate components individually

Out of the box, a Position property holds either two or three components, each one carrying the value for a single spatial dimension (axis). You're free to break those components out into separate properties — X Position, Y Position, and, for 3D layers, Z Position. Once split apart, the layer's position along the x axis, y axis, and z axis can each be edited or animated on its own.

To break a chosen Position property into its own X Position, Y Position, and (on 3D layers) Z Position properties, take one of these routes:

- Pick Animation > Separate Dimensions.
- Or, from a Position property's context menu — reached by right-click (Windows) / Control-click (macOS) — choose Separate Dimensions.

Rejoining a batch of individual Position properties back into one multi-component Position property uses the very same commands you used to split them.

Note

Folding separate Position properties back into a single Position property costs you some motion-path and speed detail, because the several Bezier curves standing in for the individual components get flattened into one Bezier curve at every keyframe. Splitting dimensions likewise sheds a little speed detail, though the motion path itself is untouched. For any given property, stick with separate dimensions or stay without them across a whole project instead of flipping between the two.

Whether separate dimensions suit you comes down to your goal. Driving position from a single property has the upside of yielding smooth motion with less effort. A single position property also opens the door to roving keyframes, which deliver even speed. Splitting dimensions trades away some of that automatic smoothing in exchange for tighter command over spatial animation. It can also simplify certain simulations, particularly when the simulated forces pushing on a layer run orthogonal (perpendicular) to one another.

Take a ball thrown sideways while bouncing up and down: separating dimensions makes that far easier to animate. Two keyframes handle the X Position property — one at the start point, one at the end — and this horizontal pass captures the speed of the throw. A lone expression then drives the Y Position property, modeling gravity's pull and the vertical rebound off the floor. A boat drifting downriver under a shifting crosswind is much the same kind of case.
