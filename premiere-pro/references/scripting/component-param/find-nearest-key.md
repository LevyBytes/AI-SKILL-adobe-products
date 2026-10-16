# ComponentParam.findNearestKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].findNearestKey(timeToCheck, threshold)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].findNearestKey(timeToCheck, threshold)

### Description

Sets whether the component parameter changes over time. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timeToCheck |  | Time where the search begins. |
| threshold | Integer | Temporal distance, in either direction, measured in ticks. |

### Returns

Time value identifying the nearest keyframe time.
