# ComponentParam.getValueAtTime()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getValueAtTime(time)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getValueAtTime(time)

### Description

Retrieves the component parameter stream value at the specified time. If that time falls between two keyframes, interpolation is applied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time whose keyframe value should be read. |

### Returns

Returns the stream value at time, or 0 on failure.
