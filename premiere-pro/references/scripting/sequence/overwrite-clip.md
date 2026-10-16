# Sequence.overwriteClip()

app.project.sequences[index].overwriteClip(projectItem, time, vTrackIndex, aTrackIndex)

### Description

Adds a clip to the sequence at the specified time on the chosen video and audio tracks, replacing clips that already occupy that position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | Project item that supplies the media. |
| time | String | Time, in seconds, at which the project item is added. |
| vTrackIndex | Integer | Zero-based track index for video insertion. |
| aTrackIndex | Integer | Zero-based track index for audio insertion. |

### Returns

Returns a boolean; true on success.
