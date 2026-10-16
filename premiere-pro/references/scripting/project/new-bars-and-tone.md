# Project.newBarsAndTone()

app.project.newBarsAndTone(width, height, timeBase, PARNum, PARDen, audioSampleRate, name)

### Description

Builds a new Sequence object named by name using the preset (.sqpreset file) identified by the path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| width | Integer |  |
| height | Integer |  |
| timeBase |  | Timebase for the new project item. |
| PARNum | Integer | Numerator for pixel aspect ration. |
| PARDen | Integer | Denominator for pixel aspect ration. |
| audioSampleRate |  | Audio sample rate. |
| name | String | Name assigned to the new project item. |

### Returns

On success, returns a ProjectItem object for the new bars and tone; otherwise returns 0.
