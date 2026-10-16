# Time.getFormatted()

myTime.getFormatted(frameRate, displayFormat)

### Description

Returns the supplied Time value as a string formatted with the requested display format.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| frameRate | Time object | Time object whose duration is one frame at the frame rate being used. |
| displayFormat | Integer | Display format to apply. One of: - `TIMEDISPLAY_24Timecode` = 100; - `TIMEDISPLAY_25Timecode` = 101; - `TIMEDISPLAY_2997DropTimecode` = 102; - `TIMEDISPLAY_2997NonDropTimecode` = 103; - `TIMEDISPLAY_30Timecode` = 104; - `TIMEDISPLAY_50Timecode` = 105; - `TIMEDISPLAY_5994DropTimecode` = 106; - `TIMEDISPLAY_5994NonDropTimecode` = 107; - `TIMEDISPLAY_60Timecode` = 108; - `TIMEDISPLAY_Frames` = 109; - `TIMEDISPLAY_23976Timecode` = 110; - `TIMEDISPLAY_16mmFeetFrames` = 111; - `TIMEDISPLAY_35mmFeetFrames` = 112; - `TIMEDISPLAY_48Timecode` = 113; - `TIMEDISPLAY_AudioSamplesTimecode` = 200; - `TIMEDISPLAY_AudioMsTimecode` = 201; |

### Returns

String.
