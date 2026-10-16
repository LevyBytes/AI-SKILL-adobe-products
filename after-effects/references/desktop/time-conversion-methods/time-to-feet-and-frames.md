# timeToFeetAndFrames(t = time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, framesPerFoot = 16, isDuration = false)

Return type: String.

Argument type: t, fps, and framesPerFoot are Numbers; isDuration is a Boolean.

Turns the value of t into a String holding feet of film plus frames. Consult timeToFrames regarding the t, fps, and isDuration arguments. The framesPerFoot argument names how many frames fit in one foot of film and defaults to 16, the rate most common for 35mm footage.
