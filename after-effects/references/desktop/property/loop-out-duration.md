# loopOutDuration(type="cycle", duration=0)

Return type: Number or Array.

Cycles through a span of time measured backward from the layer's last keyframe toward its In point. The loop runs until the layer's Out point is reached. Here the span to repeat is governed by the duration you provide. The duration value gives how many composition seconds belong to the looped span, with that range counted backward from the last keyframe. For instance, loopOutDuration("cycle", 1) repeats the closing second of the whole animation. With the default of 0, the looped span starts at the layer In point. Consult the loopIn entry for further detail.
