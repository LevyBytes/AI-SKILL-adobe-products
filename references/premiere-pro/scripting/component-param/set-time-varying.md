# ComponentParam.setTimeVarying()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setTimeVarying(varying)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setTimeVarying(varying)

### Description

Controls whether the component parameter changes over time. Note: only keyframe-capable parameters can be configured this way.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| varying | Boolean | true makes the component parameter time-varying; false leaves it constant. |

### Returns

Returns 0 on success.
