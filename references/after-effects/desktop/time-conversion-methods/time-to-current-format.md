# timeToCurrentFormat(t = time + thisComp.displayStartTime, fps = 1.0 / thisComp.frameDuration, isDuration = false)

Return type: String.

Argument type: t and fps are Numbers; isDuration is a Boolean.

Turns the value of t into a String holding time in the display format of the current Project Settings. Consult timeToFrames for a definition of every argument.

An optional ntscDropFrame argument was added to the timeToCurrentFormat() function in After Effects CS5.5 and later. Default: ntscDropFrame = thisComp.ntscDropFrame.

Note

When you want finer control over how the timecode looks in your footage, generate it with the timeToCurrentFormat method — or another timeTo method — rather than the Timecode or Numbers effect. Add a text layer, attach an expression to its Source Text property, and type timeToCurrentFormat() into the expression field. Done this way, the timecode text can be styled and animated, and it picks up the same display style set by the current project settings.
