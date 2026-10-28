# Keyframe Interpolation

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

Shape how your animation is timed in Adobe After Effects, tuning motion, speed, and the transitions from one keyframe to the next through keyframe interpolation.

Filling in the unknown data that sits between two known values is what interpolation does. By setting keyframes you pin a property's values at particular key times, and After Effects then works out that property's values for every moment falling between those keyframes.

Since interpolation produces the property values lying between keyframes, it sometimes goes by the name tweening. What it can drive between keyframes runs the gamut: movement, effects, audio levels, image adjustments, transparency, color shifts, and plenty of other visual and audio elements.

Once your keyframes and motion paths are in place to vary values over time, you might want finer control over how that variation plays out. To that end, After Effects supplies a range of interpolation methods governing how the in-between values get computed.

Interpolating values across time is temporal interpolation; interpolating them across space is spatial interpolation. A few properties — Opacity among them — carry only a temporal component. Others, Position for one, add spatial components as well.
