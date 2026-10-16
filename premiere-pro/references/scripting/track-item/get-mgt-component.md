# TrackItem.getMGTComponent()

app.project.sequences[index].videotracks[index].getMGTComponent

app.project.sequences[index].audiotracks[index].getMGTComponent

### Description

Adds an After Effects Motion Graphics Template, a Mogrt, to the selected track at the specified time.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| mogrtPath | String | Full path to a valid .mogrt created in After Effects. |
| targetTime | String | Tick time where the .mogrt should be inserted. |
| vidTrackOffset | Integer | Offset from 0, the first available track, for .mogrt video insertion. |
| audTrackOffset | Integer | Offset from 0, the first available track, for .mogrt audio insertion. |

### Returns

Component object for the .mogrt parameters exposed by the creator.
