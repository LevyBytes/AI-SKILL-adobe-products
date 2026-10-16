# Track.insertClip()

app.project.sequences[index].audioTracks[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)

app.project.sequences[index].videoTracks[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)

### Description

Adds a 'clip' (media segment from a ProjectItem object) to the track at the given time. The media is inserted at that position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | Project item that supplies the media. |
| time | String | Time, in ticks, at which the project item is added. |
| vTrackIndex | Integer | Zero-based track index for video insertion. |
| aTrackIndex | Integer | Zero-based track index for audio insertion. |

### Returns

No return value.
