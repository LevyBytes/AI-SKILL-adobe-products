# Encoder.encodeSequence()

app.encoder.encodeSequence(sequence, outputPath, presetPath, workArea, removeUponCompletion)

### Description

Sends the specified Sequence object to Adobe Media Encoder for rendering with the provided settings.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequence | Sequence object | Sequence to render. |
| outputPath | String | Path for the output file. |
| presetPath | String | Path to a preset (.epr) file. |
| workArea | Integer | Integer selecting the work area: - 0 - `ENCODE_ENTIRE` - 1 - `ENCODE_IN_TO_OUT` - 2 - `ENCODE_WORK_AREA` |
| removeUponCompletion | Integer | When 1, removes the job after completion. |

### Returns

Returns a String job ID for the render job added to the AME queue, or 0 on failure.
