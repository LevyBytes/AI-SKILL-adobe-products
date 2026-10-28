# timeToFrames(t = time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, isDuration = false)

Return type: Number.

Argument type: t and fps are Numbers; isDuration is a Boolean.

Turns the value of t — which defaults to the present composition time — into a whole number of frames. The frames-per-second count comes from the fps argument, defaulting to the current composition's frame rate (1.0 / thisComp.frameDuration). The isDuration argument defaults to false and should be set true when t stands for a gap between two times rather than an absolute time. Absolute times round downward toward negative infinity; durations round away from zero (upward for positive values).
