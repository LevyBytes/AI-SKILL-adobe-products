# Puppet Overlap controls

As you warp one part of an image, there may be times you'd like to govern which parts show in front of others. Keeping an arm ahead of the face while the arm waves is one such case. The Puppet Overlap tool lets you drop Overlap pins onto the parts of an object whose apparent depth you want to govern.

Overlap pins go on the original outline, not on the distorted image.

Overlap pin with negative In Front value (top), and Overlap pin with positive In Front value (bottom)

These are the properties carried by each Overlap pin:

In Front

How close to the viewer something seems. Overlap pins build on one another, meaning their In Front values get summed wherever extents overlap on the mesh. A negative In Front value lets you cancel out the pull of another Overlap pin at a particular spot.

Anywhere on the mesh that no Overlap pin reaches carries an implied In Front value of zero. A fresh Overlap pin starts at 50 by default.

Note

While animating the In Front value, Hold keyframes are usually the way to go. You rarely want a gradual interpolation from a foreground element to a background one.

Extent

How far the pin's pull reaches out from the Overlap pin. That pull stops sharply rather than tapering off with distance from the pin. A fill across the affected parts of the mesh marks the extent visually — the fill turns dark when In Front is negative and light when In Front is positive.
