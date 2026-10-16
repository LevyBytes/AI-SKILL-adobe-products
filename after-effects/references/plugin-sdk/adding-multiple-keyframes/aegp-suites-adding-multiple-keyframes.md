# AEGP Suites — Adding Multiple Keyframes

Every single call to `AEGP_InsertKeyframe`() pushes the whole stream onto the undo stack.

For just one or two keyframes that's no concern. But if a keyframer is what you're building, you'll want to handle it the _right_ way.

Ahead of adding any keyframes, call the (very-appropriately-named) `AEGP_StartAddKeyframes` and pass it an opaque `AEGP_AddKeyframesInfoH`.

For every keyframe you want to add, first call `AEGP_AddKeyframes` to fix the time it uses (and obtain the index of the freshly added keyframe), then call `AEGP_SetAddKeyframe` to name the value it uses.

When you're done, a call to `AEGP_EndAddKeyframes` tells After Effects the moment has come to push the altered parameter stream onto the undo stack.
