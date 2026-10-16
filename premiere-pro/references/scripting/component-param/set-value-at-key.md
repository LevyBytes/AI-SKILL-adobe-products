# ComponentParam.setValueAtKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setValueAtKey(time, value, updateUI)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setValueAtKey(time, value, updateUI)

### Description

Updates the component parameter stream value at the keyframe time supplied. Note: use this only with keyframeable parameter streams.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time where the keyframe value is written. |
| value |  | Value to write at that keyframe. |
| updateUI | Integer | When 1, Premiere Pro refreshes the UI after the stream value is changed. |

### Returns

Returns 0 on success.
