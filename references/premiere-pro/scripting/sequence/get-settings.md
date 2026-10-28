# Sequence.getSettings()

app.project.sequences[index].getSettings()

### Description

Reads this sequence's settings.

### Parameters

None.

### Returns

Object; sequence settings structure.

| Property | Type | Description |
| --- | --- | --- |
| `audioChannelCount` | Integer | Count of sequence audio channels. |
| `audioChannelType` | Integer | Audio channel layout. One of: - 0 - Mono - 1 - Stereo - 2 - 5.1 - 3 - Multichannel - 4 - 4 Channel - 5 - 8 Channel |
| `audioDisplayFormat` | Integer | Audio timecode presentation. One of: - 200 - Audio Samples - 201 - Milliseconds |
| `audioSampleRate` | Time object | Audio sample rate. |
| `autoToneMapEnabled` | Boolean | Whether Auto Tone Map Media is checked. |
| `compositeLinearColor` | Boolean | Whether the sequence uses linear-color compositing. |
| `editingMode` | String | GUID for the editing mode. |
| `maximumBitDepth` | Boolean | Whether maximum depth compositing is enabled for the sequence. |
| `maximumRenderQuality` | Boolean | Whether the sequence renders at maximum quality. |
| `previewCodec` | String | Four character code for the active preview codec. |
| `previewFrameWidth` | Integer | Preview frame width. |
| `previewFrameHeight` | Integer | Preview frame height. |
| `previewFileFormat` | String | Preview-file rendering preset path (.epr file). |
| `videoDisplayFormat` | Integer | Video time presentation. One of: - 100 - 24 Timecode - 101 - 25 Timecode - 102 - 29.97 Drop Timecode - 103 - 29.97 Non-Drop Timecode - 104 - 30 Timecode - 105 - 50 Timecode - 106 - 59.94 Drop Timecode - 107 - 59.94 Non-Drop Timecode - 108 - 60 Timecode - 109 - Frames - 110 - 23.976 Timecode - 111 - 16mm Feet + Frames - 112 - 35mm Feet + Frames - 113 - 48 Timecode |
| `videoFieldType` | Integer | Video field ordering. One of: - -1 - Default - 0 - No Fields (Progressive Scan) - 1 - Upper Field First - 2 - Lower Field First |
| `videoFrameHeight` | Integer | Sequence video frame height. |
| `videoFrameWidth` | Integer | Sequence video frame width. |
| `videoPixelAspectRatio` | String | Pixel aspect ratio. |
| `vrHorzCapturedView` | Integer | Horizontal captured view for VR, measured in degrees. |
| `vrVertCapturedView` | Integer | Vertical captured view for VR, measured in degrees. |
| `vrLayout` | Integer | VR footage layout. One of: - 0 - Monoscopic - 1 - Stereoscopic - Over/Under - 2 - Stereoscopic - Side by Side |
| `vrProjection` | Integer | VR footage projection type. One of: - 0 - None - 1 - Equirectangular |
