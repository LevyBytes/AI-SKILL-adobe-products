# Track or stabilize motion with the point tracker

Under the hood, tracking motion and stabilizing motion run the same process — what differs is the target and the outcome. Track Motion follows the motion and hands the result to a separate layer or effect control point. Stabilize Motion follows the motion and applies the result back onto the tracked layer to cancel that motion out (removing camera shake, for example).

Stabilizing a layer works like this: After Effects tracks a feature that ought to stay put in the frame, then uses that tracking data to lay down keyframes that drive the opposite motion. You can cancel out any mix of position, rotation, and scale changes while leaving the motion you want to keep intact. If the camera is panning, for instance, leave Position deselected but turn on Scale and Rotation as the properties to stabilize.

Choosing Rotation or Scale in the Tracker panel gives you two track points in the Layer panel. The attach points are joined by a line, with an arrow running from the first attach point (the base) to the second. Where you can, set the feature regions on opposite faces of one object, or at minimum on objects sitting the same distance from the camera. Greater separation between the regions sharpens the calculations and improves the outcome.

Rotation is worked out by After Effects from how much the angle of the line between the attach points changes. Applying that tracking data to the target makes After Effects build keyframes for the Rotation property.

Scale is worked out by After Effects by weighing the distance between attach points on each frame against their distance on the start frame. Applying that tracking data to the target makes After Effects build keyframes for the Scale property.

Track motion with either parallel or perspective corner-pinning and After Effects lays down keyframes for the Corner Pin effect on the layer, scaling and skewing the target layer however it must to fill the four-sided area marked out by the feature regions. Those feature regions ought to sit in one plane in the real world — on the side of a bus, on a single wall, or on the floor, say. The attach points should likewise share a single plane, though not necessarily the same plane the feature regions occupy.

Note

For parallel corner-pinning only – To switch which point sits inactive, Alt-click (Windows) or Option-click (macOS) on the feature region of whichever point you want made inactive. (Keeping the lines parallel requires one point to stay inactive.)

In the Timeline panel, highlight the layer you intend to track.

- Hit Track Motion in the Tracker panel (or choose Animation > Track Motion), then use Edit Target to pick the target that the tracking data will feed.

- Hit Stabilize Motion in the Tracker panel (or choose Animation > Stabilize Motion). Here the tracked (source) layer doubles as the target layer.

Tick Position, Rotation, and/or Scale to decide which kinds of keyframes the target receives.

4. Drag the current-time indicator onto whichever frame you want tracking to start from.
   With the Selection tool, fine-tune the feature region, search region, and attach point on each track point.

In the Tracker panel, click either Analyze Forward or Analyze Backward to start tracking.

Should the tracking drift out of accuracy, click the Stop button, fix the issue as laid out in Correct a motion track, and pick the analysis back up.

Once the feature region and attach point hold their positions across the whole track to your satisfaction, click Apply to push the motion onto the target you specified.

After Effects creates keyframes for the target layer.

When you track position and hand that position data to a target, you can opt to apply only the x (horizontal) component of motion or only the y (vertical) one. For instance, applying the tracking data to the x axis keeps a speech bubble (the motion target) pinned at the top of the frame even as the actor (the motion source) drops downward.

X And Y (default): movement is permitted on both axes.

X Only: the motion target is held to horizontal movement alone.

Y Only: the motion target is confined to vertical movement.

If you'd rather skip the Motion Tracker Apply Options dialog box and reuse whatever setting you applied last, keep Alt (Windows) or Option (macOS) pressed while clicking Apply.

Note

Steps 1-3 can be reordered: pick the destination property first (Scale, Position, or Rotation), then run Animation > Track This Property. At that point After Effects asks which layer should serve as the motion source.

Stabilizing a layer can backfire: the corrective motion sometimes pushes the layer so far one way that the composition's background peeks through or the action slips outside the action-safe zone. A modest scale tweak on the layer fixes that. Locate the worst frame, then raise or lower the layer's scale until the issue clears up. Doing it this way holds the scale steady for the whole layer; alternatively, animate the scale so it zooms in and out at separate moments to address the same problem.
