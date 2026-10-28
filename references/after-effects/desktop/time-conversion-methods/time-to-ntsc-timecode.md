# timeToNTSCTimecode(t = time + thisComp.displayStartTime, ntscDropFrame = false, isDuration = false)

Return type: String.

Argument type: t is a Number, ntscDropFrame and isDuration are Booleans.

Turns t into a String holding NTSC timecode. Consult timeToFrames regarding the t and isDuration arguments. With ntscDropFrame left false (the default), the resulting String is NTSC non-drop-frame timecode; set it true and the String becomes NTSC drop-frame timecode.
