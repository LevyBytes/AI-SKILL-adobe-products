# Motion tracking controls

Setup, launching, and applying of motion tracking all happen through the Tracker panel.

Motion Source

This is the layer holding the motion you intend to track.

Note

A layer shows up in the Motion Source menu when it either carries source footage items capable of holding motion or is itself a composition layer. Precomposing a layer is one way to get it to appear in the Motion Source menu.

Current Track

The tracker that's currently active. Pick any tracker from this menu whenever you want to change its settings.

Track Type

This is the tracking mode you'll work in. Each mode runs the identical tracking engine underneath; what sets them apart is the count of track points and the way tracking data lands on the target:

Stabilize follows position, rotation, and/or scale so it can counteract motion in the tracked (source) layer. Following position here yields one track point and writes Anchor Point keyframes onto the source layer. Following rotation here yields a pair of track points and writes Rotation keyframes onto the source layer. Following scale here yields a pair of track points and writes Scale keyframes onto the source layer.

Transform follows position, rotation, and/or scale in order to drive some other layer. Following position under this mode drops one track point on the tracked layer plus Position keyframes for the target. Following rotation under this mode drops a pair of track points on the tracked layer plus Rotation keyframes for the target. Following scale under this mode drops a pair of track points plus Scale keyframes for the target.

Parallel Corner Pin tracks skew and rotation while leaving perspective alone; lines that start parallel stay parallel, and the relative distances hold. It draws on three track points in the Layer panel—deriving the fourth on its own—and writes keyframes for four corner points within a Corner Pin effect property group that gets attached to the target. Where those four corner points sit is marked by the four attach points.

Perspective Corner Pin tracks skew, rotation, plus perspective shifts within the tracked layer. It draws on four track points in the Layer panel and writes keyframes for four corner points within a Corner Pin effect property group that gets attached to the target. Where those four corner points sit is marked by the four attach points. Reach for this option when pinning an image onto a door as it opens or onto the flank of a bus as it rounds a corner.

Raw tracks position by itself. Turn to Raw when you need tracking data that won't be committed with the Apply button. As an instance, you might copy the Attach Point property keyframes and paste them onto the Position property of a paint stroke, or wire the Stereo Mixer effect's properties to the Attach Point property's x coordinate by way of expressions. The tracked layer is where this tracking data lives. With this tracking option, neither the Edit Target button nor the Apply button can be used. To pile more track points onto a tracker, pick New Track Point off the Tracker panel menu.

Motion Target

Whichever layer or effect control point the tracking data gets applied to. To move or steady it, After Effects attaches properties and keyframes to the target. Switch which target is used by clicking Edit Target. When Track Type is set to Raw, a tracker has no target tied to it.

Analyze buttons

Kicks off the frame-by-frame analysis of the track point inside the source footage:

Analyze 1 frame backward : Looks at the current frame by stepping back to the prior frame.

Analyze backward : Works from the current-time indicator back toward the start of the trimmed layer duration.

Analyze forward : Works from the current-time indicator forward to the close of the trimmed layer duration.

Analyze 1 frame forward : Looks at the current frame by stepping ahead to the following frame.

Note

Once analysis starts, the Analyze backward and Analyze forward buttons turn into a Stop button so you can halt the analysis the moment the track drifts or breaks down.

Reset

Returns the feature region, search region, and attach point to where they sit by default and clears the tracking data off the track that's currently selected. Whatever tracker control settings and keyframes you've already committed to the target layer stay put.

Apply

Pushes the tracking data, expressed as keyframes, over to the target layer or effect control point.
