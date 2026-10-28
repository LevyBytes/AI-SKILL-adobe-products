# loopInDuration(type="cycle", duration=0)

Return type: Number or Array.

Cycles through a span of time measured forward from the layer's first keyframe in the direction of its Out point. Playback of the loop begins at the layer's In point. Here the span to repeat is governed by the duration you provide. The duration value gives how many composition seconds belong to the looped span, with that range counted from the first keyframe. For instance, loopInDuration("cycle",1) repeats the opening second of the whole animation. With the default of 0, the looped span starts at the layer Out point. Consult the loopIn entry for further detail.
