# currentFormatToTime()

currentFormatToTime(formattedTime, fps[, isDuration])

### Description

Takes a frame time written as a formatted string and, against a given frame rate, returns the matching count of seconds. Say the formatted frame time reads 0:00:12 (a project setting dictates the precise string layout) and the rate is 24 fps; that resolves to 0.5 seconds (12/24). At 30 fps the same string yields 0.4 seconds (12/30). Durations have their frames tallied beginning at 0; everything else is tallied from the project's start frame (see Project.displayStartFrame).

### Parameters

| Parameter | Description |
| --- | --- |
| formattedTime | The frame time value, a string specifying a number of frames in the project's current time display format. |
| fps | The frames-per-second, a floating-point value. |
| isDuration | Optional. When true, the time is a duration (measured from frame 0). When false (the default), the time is measured from the project's starting frame. |

### Returns

Floating-point value, the number of seconds.
