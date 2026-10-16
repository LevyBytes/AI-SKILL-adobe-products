# ComponentParam.removeKeyRange()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].removeKeyRange(startTime, endTime)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].removeKeyRange(startTime, endTime)

### Description

Deletes every keyframe in the component parameter stream that falls within the requested time range. Note: this applies only to parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| startTime | Time object | Inclusive time at which keyframe removal starts. |
| endTime | Time object | Time at which keyframe removal stops. |

### Returns

Returns 0 on success.
