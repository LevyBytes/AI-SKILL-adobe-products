# ComponentParam.findPreviousKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].findPreviousKey(timeToCheck)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].findPreviousKey(timeToCheck)

### Description

Returns the keyframe before the provided timeToCheck. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timeToCheck |  | Time where the search begins. |

### Returns

Time value for the closest keyframe, or 0 when no earlier keyframe is available.
