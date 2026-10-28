# Encoder.encodeFile()

app.encoder.encodeFile(filePath, outputPath, presetPath, workArea, removeUponCompletion, inPoint, outPoint)

### Description

Requests Adobe Media Encoder to render the specified file with the specified settings, optionally over a chosen range.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| filePath | String | Path to the file being rendered. |
| outputPath | String | Path for the output file. |
| presetPath | String | Path to a preset (.epr) file. |
| workArea | Integer | Integer selecting the work area: - 0 - `ENCODE_ENTIRE` - 1 - `ENCODE_IN_TO_OUT` - 2 - `ENCODE_WORK_AREA` |
| removeUponCompletion | Integer | When 1, removes the job after completion. |
| inPoint | Time object | Time object used as the new file's in point. |
| outPoint | Time object | Time object used as the new file's out point. |

### Returns

Returns a String job ID for the render job added to the AME queue, or 0 on failure.
