# Project.exportAAF()

app.project.exportAAF(sequenceToExport, outputPath, mixdownVideo, explodeToMono, sampleRate, bitsPerSample, embedAudio, audioFileFormat, trimSources, handleFrames, presetPath, renderAudioEffects, includeClipCopies, preserveParentFolder)

### Description

Exports an AAF file for the specified Sequence object with the specified settings.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequenceToExport | Sequence object | Sequence to export. |
| outputPath | String | Output path for the .aaf file. |
| mixdownVideo | Integer | When 1, renders video before export. |
| explodeToMono | Integer | When 1, splits stereo tracks into mono. |
| sampleRate | Integer | Output audio sample rate. |
| bitsPerSample | Integer | Bits per sample for audio output. |
| embedAudio | Integer | When 1, embeds audio; when 0, keeps it external. |
| audioFileFormat | Integer | Use 0 for AIFF; use 1 for WAV. |
| trimSources | Integer | When 1, trims and re-encodes media before export; 0 exports the whole file. |
| handleFrames | Integer | Handle frame count (from 0 to 1000). |
| presetPath | String | Path to export preset (.epr) file. |
| renderAudioEffects | Integer | When 1, renders audio effects before export. |
| includeClipCopies | Integer | When 1, includes each copy of a clip. |
| preserveParentFolder | Integer | When 1, keeps the parent folder in the output. |

### Returns

Returns 0 on success.
