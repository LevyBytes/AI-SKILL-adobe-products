# Copying and pasting operations with Keyframes

Keyframed operations can be copied and pasted at the Clip level while keeping their keyframes. When pasted, every keyframe is offset from the start of the destination clip by the same frame count used on the source clip.

Operations at Group and Sequence levels cannot be keyframed, so pasting a keyframed Clip operation into either of those levels removes the keyframes. Instead, the resulting operation receives the color values from the playhead position at the moment you copied/pasted or dragged/dropped.
