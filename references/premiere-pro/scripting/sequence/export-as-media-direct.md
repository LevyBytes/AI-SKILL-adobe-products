# Sequence.exportAsMediaDirect()

app.project.sequences[index].exportAsMediaDirect(outputPath, presetPath, workAreaType)

### Description

Renders the sequence to the requested output path, applies the chosen output preset (.epr file), and follows the selected work area type.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| outputPath | String | Output path where the media should be rendered. |
| presetPath | String | Path to the .epr preset file that stores the encoding settings. |
| workAreaType | Integer | The render scope for the work area type. One of: - 0 - Renders the full sequence. - 1 - Renders the range between the sequence in and out points. - 2 - Renders the sequence work area. |

### Returns

Returns a boolean; true on success.
