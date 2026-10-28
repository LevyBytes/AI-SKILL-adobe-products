# ComponentParam.setValue()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setValue(value, updateUI)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setValue(value, updateUI)

### Description

Writes a value to the component parameter stream. Note: this works only for parameters that are not time-variant.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| value |  | Provide a value whose type matches the component parameter stream. |
| updateUI | Integer | When 1, Premiere Pro refreshes the UI after the stream value is changed. |

### Returns

Returns 0 on success.
