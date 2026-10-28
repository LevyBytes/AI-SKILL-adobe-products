# Keyframe interpolation methods

Within layer bar mode, how a keyframe icon looks is governed by whichever interpolation method you've assigned to the span between keyframes. A half-dark-gray icon signals one of two things: either there's no neighboring keyframe on that side, or the Hold interpolation carried over from the keyframe just before it has overridden that side's interpolation.

A keyframe relies on a single interpolation method out of the box, yet two are allowed at once: as the playhead nears a keyframe, the incoming method governs the property value, while the outgoing method takes over once the playhead moves past it. Assigning distinct incoming and outgoing methods alters the keyframe icon in layer bar mode to match — the left half shows the incoming interpolation icon and the right half shows the outgoing one.

Note

Switching the display between keyframe icons and keyframe numbers is done by picking Use Keyframe Icons or Use Keyframe Indices from the Timeline panel menu.

Examples of keyframe icons in Timeline panel in layer bar mode

A. Linear B. Linear in, Hold out C. Auto Bezier D. Continuous Bezier or Bezier E. Linear in, Bezier out

Examples of keyframe icons in Timeline panel in layer bar mode

Every interpolation method in After Effects derives from Bezier interpolation, which supplies direction handles for governing how the transitions between keyframes behave. The methods lacking direction handles are simply restricted forms of Bezier interpolation, handy for particular jobs.

Want to see how the various methods act on temporal properties? Lay down three or more keyframes carrying different values on a temporal layer property — Opacity, for instance — then swap the interpolation methods while watching the value graph in the Timeline panel's Graph Editor mode.

For a sense of how the methods shape a motion path instead, place three keyframes with differing values on a spatial property such as Position along a motion path, swap the interpolation methods, and preview the resulting movement in the Composition panel.

Note

Reassigning a method starts by right-clicking a keyframe; from the menu that pops up pick Keyframe Interpolation, then choose an entry under the Temporal Interpolation menu.

For the sake of clarity, the method descriptions that follow each treat the outcome as though the method had been applied to every keyframe on a layer property. Real-world usage lets you assign whichever available method you like to whichever keyframe you like.
