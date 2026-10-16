# ComponentParam.getValueAtKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getValueAtKey(time)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getValueAtKey(time)

### Description

Reads the component parameter stream value for the specified keyframe time. Use it only with parameter streams that can have keyframes.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time whose keyframe value should be read. |

### Returns

Returns the stream value at time, or 0 on failure.
