# Project.exportOMF()

app.project.exportOMF(sequence, outputPath, omfTitle, sampleRate, bitsPerSample, audioEncapsulated, audioFileFormat, trimAudioFiles, handleFrames, includePan)

### Description

Writes an OMF file for sequence using the provided export settings.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequence | Sequence object | Sequence to output. |
| filePath | String | Output path for the .omf file. |
| omfTitle | String | OMF title. |
| sampleRate |  | Output audio sample rate. |
| bitsPerSample |  | Bits per sample for audio output. |
| audioEncapsulated | Integer | When 1, embeds audio; when 0, keeps it external. |
| audioFileFormat | Integer | Use 0 for AIFF; use 1 for WAV. |
| trimAudioFiles | Integer | 1 enables audio trimming. |
| handleFrames | Integer | Number of handle frames (from 0 to 1000). |
| includePan | Integer | Use 1 to include pan info; use 0 to omit it. |

### Returns

Returns 0 on success.
