# Time-remapping

Through a technique called time-remapping, you can stretch out, squeeze together, run backward, or hold a section of a layer's duration. Say you've shot a person walking: you could run the footage forward as they advance, rewind a handful of frames so they back up, then run it forward again to send them walking once more. Slow motion, fast motion, and reverse motion all combine nicely under time-remapping.

Comparable capabilities come from the Timewarp effect, which grants finer control over certain frame-blending aspects, though being applied as an effect saddles it with extra restrictions.

Frames from non-time-remapped footage are displayed at a constant speed in one direction.

Time-remapping distorts time for a range of frames within a layer.

Audio and video stay in sync when you time-remap a layer that holds both. Audio files can be remapped to ramp the pitch up or down gradually, to run in reverse, or to produce a warbled or scratchy texture. Layers made of still images can't be time-remapped.

Time can be remapped from either the Layer panel or the Graph Editor. Remap the video in one and the outcome shows up in both. Each gives you a distinct angle on the layer's duration:

The Layer panel offers a visual reference of the frames you alter along with the frame number. It shows the current-time indicator plus a remap-time marker, which you reposition to pick the frame meant to play at the current time.

By tagging your changes with keyframes and a graph resembling the ones used for other layer properties, the Graph Editor presents a view of the adjustments you make over time.

While remapping time in the Graph Editor, lean on the values shown in the Time Remap graph to figure out and steer which movie frame plays at which moment. Every Time Remap keyframe carries a time value matching a specific frame in the layer, and that value is plotted vertically on the Time Remap value graph. The moment you turn on time remapping for a layer, After Effects drops a Time Remap keyframe at both the layer's start and end. Those first Time Remap keyframes hold vertical time values that match their horizontal spot on the timeline.

Laying down extra Time Remap keyframes lets you build intricate motion. Every additional Time Remap keyframe gives you one more spot to alter playback speed or direction. Sliding the keyframe up or down within the value graph changes which video frame is set to play at the current time. From that point to the next Time Remap keyframe, After Effects fills in the in-between frames and runs the footage forward or backward. Scanning the value graph left to right, an upward slope means forward playback and a downward slope means reverse, with the steepness of that slope reflecting playback speed.

In the same way, the value shown beside the Time Remap property name tells you which frame plays at the current time. Dragging a value graph marker up or down shifts this value to match and, where needed, sets a Time Remap keyframe. You can highlight the value and key in a new one, or drag the value to tweak it.

Once you remap time, the source footage's original duration may stop being valid, since portions of the layer no longer run at their first rate. Where necessary, give the layer a new duration before you remap time.

Just as with other layer properties, the Time Remap graph values can be viewed as either a value graph or a speed graph.

When remapping pushes the resulting frame rate far from the original, motion quality within the layer can suffer. Add frame blending to sharpen time remapping for slow or fast motion.

Note

Lean on the readings in the Info panel to steer you while you work with time-remapping. Expressed in seconds/sec, that ratio reports the present playback speed—how many seconds of the original layer run for every second following the remap.
