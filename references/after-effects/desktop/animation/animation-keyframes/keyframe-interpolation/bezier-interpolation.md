# Bezier interpolation

The tightest control comes from Bezier interpolation, since you shape the value graph or motion path segments flanking the keyframe by hand. Where Auto Bezier and Continuous Bezier differ, a Bezier keyframe's pair of direction handles work on their own in both the value graph and the motion path.

Apply Bezier interpolation to all keyframes of a layer property and After Effects produces a smooth handoff between them. Those direction handles start out positioned by the very method Auto Bezier interpolation uses. Adjusting a Bezier keyframe's value leaves the existing direction handle positions intact, courtesy of After Effects.

What sets Bezier interpolation apart from the rest is that it permits any mix of curves and straight runs across the motion path. With the two Bezier direction handles acting independently, a curving path can abruptly become a hard corner at a Bezier keyframe. For tracing a motion path along an intricate shape — a map route, say, or a logo's outline — Bezier spatial interpolation works best.

Move a motion-path keyframe and its existing direction handle positions hold. Motion speed along the path is set by whichever temporal interpolation each keyframe carries.
