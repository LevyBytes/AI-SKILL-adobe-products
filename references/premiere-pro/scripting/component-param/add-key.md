# ComponentParam.addKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].addKey(time)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].addKey(time)

### Description

Adds a keyframe to the component parameter stream at the specified time. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time where the keyframe should be added. |

### Returns

0 indicates success; on non-color properties, an "Unknown error" exception can be thrown.
