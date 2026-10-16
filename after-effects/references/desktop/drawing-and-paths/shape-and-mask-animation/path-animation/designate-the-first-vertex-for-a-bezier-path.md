# Designate the first vertex for a Bezier path

When a path is animated, the vertex sitting at the top of the shape at the first keyframe becomes the first vertex, and After Effects numbers every vertex after it in order, counting up from that one. Those same numbers are then carried over to the matching vertices on every later keyframe. From one keyframe to the next, After Effects interpolates each vertex as it travels from its starting spot to where the like-numbered vertex sits at the following keyframe. You are free to promote a different vertex to first vertex at any point during the animation, and doing so prompts After Effects to renumber the whole path. That renumbering shifts how the path animates, since After Effects now pairs the fresh vertex numbers against the original numbers that remain stored at each successive keyframe.

If you copy a closed path onto a motion path, whichever vertex serves as the first vertex of the closed path becomes the start of the motion path. Every motion path is an open path.

A handful of shape path operations — Trim Paths among them — also rely on the first vertex as the cue for how they reshape the path.

Note

Normally, adding a vertex puts it on the path for the entire span of the path while only altering the shape at the moment you added it. Removing a vertex at one point in time, by contrast, strips it from the path across the whole duration. To stop After Effects from inserting and removing vertices over the full length of the path, go to Edit > Preferences > Composition (Windows) or After Effects > Preferences > Composition (macOS) and turn off Preserve Constant Vertex Count and Feather Point Count when Editing Masks.

1. Create an animated path.
   Within the Timeline panel, drag the current-time indicator to the moment where a new first vertex should be set.

2. Click the vertex you intend to promote to first vertex.
   Select Layer > Mask and Shape Path > Set First Vertex.

In the Composition panel, the vertex you set as first appears a bit larger than the rest.
