# Sequence.insertClip()

app.project.sequences[index].insertClip(projectItem, time, vTrackIndex, aTrackIndex)

### Description

Places a clip in the sequence at the specified time on the selected video and audio tracks.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | Project item that supplies the media. |
| time | Time | Time at which the project item is added. |
| vTrackIndex | Integer | Zero-based track index for video insertion. |
| aTrackIndex | Integer | Zero-based track index for audio insertion. |

### Returns

Boolean; true on success.
