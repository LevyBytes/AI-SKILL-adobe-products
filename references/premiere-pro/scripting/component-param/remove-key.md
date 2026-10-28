# ComponentParam.removeKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].removeKey(time)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].removeKey(time)

### Description

Removes a keyframe from the component parameter stream at the specified time. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time value at which to remove the keyframe. |

### Returns

Returns 0 on success.
