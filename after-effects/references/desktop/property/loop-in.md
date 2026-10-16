# loopIn(type="cycle", numKeyframes=0)

Return type: Number or Array.

Cycles through a span of time measured forward from the layer's first keyframe in the direction of its Out point. Playback of the loop begins at the layer's In point. Which span gets repeated is set by the numKeyframes value: the looped span runs from the first keyframe up to the (numKeyframes+1) keyframe. As an illustration, loopIn("cycle", 3) repeats the span between the first and fourth keyframes. When left at its default of 0, every keyframe is included in the loop.

The keyframe-looping methods exist so you can repeat a run of keyframes, and they work on the majority of properties. Some properties are off-limits — those that the Timeline panel can't express as plain numeric values, namely the Source Text property, path shape properties, and the Levels effect's Histogram property. If a keyframe count or duration is larger than allowed, it gets clamped down to the maximum legal value; if it's too small, the result is a steady, unchanging loop.

| loop type | result |
| --- | --- |
| cycle | (default) Repeats the specified segment. |
| pingpong | Repeats the specified segment, alternating between forward and backward. |
| offset | Repeats the specified segment, but offsets each cycle by the difference in the value of the property at the start and end of the segment, multiplied by the number of times the segment has looped. |
| continue | Does not repeat the specified segment, but continues to animate a property based on the velocity at the first or last keyframe. For example, if the last keyframe of a Scale property of a layer is 100%, the layer continues to scale from 100% to the Out point, instead of looping directly back to the Out point. This type does not accept a keyframes or duration argument. |
