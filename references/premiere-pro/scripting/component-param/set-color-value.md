# ComponentParam.setColorValue()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setColorValue(alpha, red, green, blue, updateUI)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setColorValue(alpha, red, green, blue, updateUI)

### Description

Writes Color channel values into a component parameter stream.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| alpha | Integer | Opacity-channel value. |
| red | Integer | Red-channel value. |
| green | Integer | Green-channel value. |
| blue | Integer | Blue-channel value. |
| updateUI | Integer | When 1, Premiere Pro refreshes the UI after the stream value is changed. |

### Returns

Returns 0 on success.
