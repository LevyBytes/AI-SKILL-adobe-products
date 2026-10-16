# loopOut(type="cycle", numKeyframes=0)

Return type: Number or Array.

Cycles through a span of time measured backward from the layer's last keyframe toward its In point. The loop runs until the layer's Out point is reached. How big the looped span is depends on the keyframe count you supply. numKeyframes sets how many keyframe segments to repeat, with the range counted backward starting at the last keyframe. To illustrate, loopOut("cycle", 1) repeats the span between the last keyframe and the one before it. A default of 0 means every keyframe takes part in the loop. Consult the loopIn entry for further detail.
