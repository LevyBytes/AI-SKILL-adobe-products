# TrackItem.move()

app.project.sequences[index].audioTracks[index].clips[index].move(newInPoint)

app.project.sequences[index].videoTracks[index].clips[index].move(newInPoint)

### Description

Moves the track item's inPoint by shifting it to a new time by a number of seconds.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newInPoint | Time object | Time amount, in seconds, used to shift the track item's start. |

### Returns

0 indicates success.
