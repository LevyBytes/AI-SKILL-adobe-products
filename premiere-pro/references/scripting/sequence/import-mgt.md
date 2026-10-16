# Sequence.importMGT()

app.project.sequences[index].importMGT(path, time, vidTrackOffset, audTrackOffset)

### Description

Imports a MOGRT, or an After Effects Motion Graphics Template, onto the specified video or audio track at the given time.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Absolute path for a valid MOGRT (.mogrt file) created in After Effects. |
| time | String | Time, in ticks, where the .mogrt should be inserted. |
| vidTrackOffset | Integer | Track offset from video track zero where .mogrt content is inserted. |
| audTrackOffset | Integer | Track offset from audio track zero where .mogrt content is inserted. |

### Returns

A TrackItem object is returned.
