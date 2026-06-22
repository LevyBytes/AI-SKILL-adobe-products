# Methods (part 4)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## ComponentParam object — Methods

### ComponentParam.addKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].addKey(time)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].addKey(time)

### Description

Adds a keyframe to the component parameter stream at the specified time. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time where the keyframe should be added. |

### Returns

0 indicates success; on non-color properties, an "Unknown error" exception can be thrown.

### ComponentParam.areKeyframesSupported()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].areKeyframesSupported()

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].areKeyframesSupported()

### Description

Checks whether this component parameter supports keyframes.

### Parameters

None.

### Returns

true when keyframes are supported; false otherwise.

### ComponentParam.findNearestKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].findNearestKey(timeToCheck, threshold)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].findNearestKey(timeToCheck, threshold)

### Description

Sets whether the component parameter changes over time. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timeToCheck |  | Time where the search begins. |
| threshold | Integer | Temporal distance, in either direction, measured in ticks. |

### Returns

Time value identifying the nearest keyframe time.

### ComponentParam.findNextKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].findNextKey(timeToCheck)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].findNextKey(timeToCheck)

### Description

Returns the keyframe after the provided timeToCheck. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timeToCheck |  | Time where the search begins. |

### Returns

Time value for the closest keyframe, or 0 when no later keyframe is available.

### ComponentParam.findPreviousKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].findPreviousKey(timeToCheck)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].findPreviousKey(timeToCheck)

### Description

Returns the keyframe before the provided timeToCheck. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timeToCheck |  | Time where the search begins. |

### Returns

Time value for the closest keyframe, or 0 when no earlier keyframe is available.

### ComponentParam.getColorValue()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getColorValue()

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getColorValue()

### Description

Obtains the component parameter stream value. This works only on parameters that are not time-variant.

### Parameters

None.

### Returns

Returns a Color populated from component parameter stream values, or 0 on failure.

### ComponentParam.getKeys()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getKeys()

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getKeys()

### Description

Returns all keyframes on the timeToCheck component parameter. This is available only for parameters that support keyframing.

### Parameters

None.

### Returns

Returns Time values for each keyframe, or 0 when the stream has no keyframes.

### ComponentParam.getValue()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getValue()

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getValue()

### Description

Obtains the component parameter stream value. This works only on parameters that are not time-variant.

### Parameters

None.

### Returns

Returns the component parameter stream value; the stream type determines the returned form.

### ComponentParam.getValueAtKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getValueAtKey(time)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getValueAtKey(time)

### Description

Reads the component parameter stream value for the specified keyframe time. Use it only with parameter streams that can have keyframes.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time whose keyframe value should be read. |

### Returns

Returns the stream value at time, or 0 on failure.

### ComponentParam.getValueAtTime()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].getValueAtTime(time)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].getValueAtTime(time)

### Description

Retrieves the component parameter stream value at the specified time. If that time falls between two keyframes, interpolation is applied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time whose keyframe value should be read. |

### Returns

Returns the stream value at time, or 0 on failure.

### ComponentParam.isTimeVarying()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].isTimeVarying()

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].isTimeVarying()

### Description

Checks whether the component parameter changes over time.

### Parameters

None.

### Returns

true when the parameter varies over time; false otherwise.

### ComponentParam.removeKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].removeKey(time)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].removeKey(time)

### Description

Removes a keyframe from the component parameter stream at the specified time. This is available only for parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Time object | Time value at which to remove the keyframe. |

### Returns

Returns 0 on success.

### ComponentParam.removeKeyRange()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].removeKeyRange(startTime, endTime)

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].removeKeyRange(startTime, endTime)

### Description

Deletes every keyframe in the component parameter stream that falls within the requested time range. Note: this applies only to parameters that support keyframing.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| startTime | Time object | Inclusive time at which keyframe removal starts. |
| endTime | Time object | Time at which keyframe removal stops. |

### Returns

Returns 0 on success.

### ComponentParam.setColorValue()

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

### ComponentParam.setInterpolationTypeAtKey()

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].setInterpolationTypeAtKey(time, interpretationType, [updateUI])

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].setInterpolationTypeAtKey(time, interpretationType, [updateUI])

### Description

Assigns the chosen interpolation type to the keyframe at the given time. Note: use it only with parameter streams that can be keyframed.

### Parameters

Parameter

Type

Description

time

Time object

Keyframe time to change.

interpolationType

Interpolation Type Enum

One of: - 0 - `KF_I`nterp_Mode_Linear - 1 - kfInterpMode_EaseIn_Obsolete - 2 - kfInterpMode_EaseOut_Obsolete - 3 - kfInterpMode_EaseInEaseOut_Obsolete - 4 - `KF_I`nterp_Mode_Hold - 5 - `KF_I`nterp_Mode_Bezier - 6 - `KF_I`nterp_Mode_Time - 7 - kfInterpMode_TimeTransitionStart - 8 - kfInterpMode_TimeTransitionEnd

updateUI

Boolean

Whether the UI should refresh afterward.

| --- | --- | --- |

### Returns

Returns 0 on success.

### ComponentParam.setTimeVarying()

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

### ComponentParam.setValue()

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

### ComponentParam.setValueAtKey()

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

## Sequence object — Methods

### Sequence.attachCustomProperty()

app.project.sequences[index].attachCustomProperty(propertyID, propertyValue)

### Description

Adds a custom property and value to the sequence. The property can appear when the sequence is exported as FCP XML.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| propertyID | String | Custom property ID. |
| propertyValue | String | Custom property value. |

### Returns

Returns a boolean; true on success.

### Sequence.autoReframeSequence()

app.project.sequences[index].autoReframeSequence(numerator, denominator, motionPreset, newName, useNestedSequences)

### Description

Creates an auto-reframed sequence.

### Parameters

Parameter

Type

Description

numerator

Integer

Numerator for the target frame aspect ratio.

denominator

Integer

Denominator for the target frame aspect ratio.

motionPreset

String

One of: - slower - default - faster

newName

String

Name assigned to the sequence that is created.

useNestedSequences

Boolean

Whether nested sequences should be honored.

| --- | --- | --- |

### Returns

Returns the Sequence object that was generated.

### Example

```
var sequence = app.project.activeSequence;
if (sequence) {
    var numerator = 1;
    var denominator = 1;
    var motionPreset = 'default'; // 'default', 'faster', 'slower'
    var newName = sequence.name + ', auto-reframed.';
    var useNestedSequences  = false;

    var newSequence = sequence.autoReframeSequence(numerator, denominator, motionPreset, newName, useNestedSequences);

    if (newSequence) {
        alert('Created reframed sequence: ' + newName + '.');
    } else {
        alert('Failed to create re-framed sequence: ' + newName + '.');
    }
} else {
    alert('No active sequence');
}
```

### Sequence.clone()

app.project.sequences[index].clone()

### Description

Duplicates the sequence as a clone.

### Parameters

None.

### Returns

Boolean; true on success.

### Sequence.close()

app.project.sequences[index].close()

### Description

Closes this sequence.

### Parameters

None.

### Returns

Boolean; true on success.

### Sequence.createCaptionTrack()

app.project.sequences[index].createCaptionTrack(projectItem, startAtTime, [captionFormat])

### Description

Builds a caption track in the sequence from caption data stored in a ProjectItem object.

### Parameters

Parameter

Type

Description

projectItem

ProjectItem object

Captions source clip, such as .srt.

startAtTime

Float

Seconds offset from the beginning of the sequence.

captionFormat

Sequence.`CAPTION_FORMAT`\_ enum

Format for the created caption track. If omitted, Premiere Pro uses Sequence.`CAPTION_FORMAT_SUBTITLE`. One of: - Sequence.`CAPTION_FORMAT_SUBTITLE` - Subtitle - Sequence.`CAPTION_FORMAT_608` - CEA-608 - Sequence.`CAPTION_FORMAT_708` - CEA-708 - Sequence.`CAPTION_FORMAT_TELETEXT` - Teletext - Sequence.`CAPTION_FORMAT_OPEN_EBU` - EBU Subtitle - Sequence.`CAPTION_FORMAT_OP42` - OP-42 - Sequence.`CAPTION_FORMAT_OP47` - OP-47

| --- | --- | --- |

### Returns

Returns a boolean; true on success.

### Example

```
app.project.activeSequence.createCaptionTrack(projectItem, 0, Sequence.CAPTION_FORMAT_708);
```

### Sequence.createSubsequence()

app.project.sequences[index].createSubsequence([ignoreTrackTargeting])

### Description

Creates a subsequence from the original sequence, using the range between the in point and the out point.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| ignoreTrackTargeting | Boolean | Lets the new sequence bypass original track targeting. Optional; defaults to false. |

### Returns

Returns the Sequence object that was created.

Note

This differs from nesting: the newly-created sequence is not placed back into the original sequence. The function below shows how to nest.

### Example

```
function nestSelection() {
    var activeSequence = app.project.activeSequence;
    var selection = activeSequence.getSelection();

    if (!selection.length) {
        return;
    }

    var trackId = selection[0].parentTrackIndex;
    var originalInPoint = activeSequence.getInPointAsTime();
    var originalOutPoint = activeSequence.getOutPointAsTime();
    var start = selection[0].start;
    var end = selection[selection.length - 1].end;
    activeSequence.setInPoint(start.seconds);
    activeSequence.setOutPoint(end.seconds);

    var nestedSequence = activeSequence.createSubsequence(true);

    activeSequence.videoTracks[trackId].overwriteClip(nestedSequence.projectItem, start.seconds);
    activeSequence.setInPoint(originalInPoint.seconds);
    activeSequence.setOutPoint(originalOutPoint.seconds);

    return nestedSequence;
}
```

### Sequence.exportAsFinalCutProXML()

app.project.sequences[index].exportAsFinalCutProXML(outputPath)

### Description

Creates an FCP XML representation for the sequence and the media it uses.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| outputPath | String | Output path for the generated FCP XML file. |

### Returns

Returns a boolean; true on success.

### Sequence.exportAsMediaDirect()

app.project.sequences[index].exportAsMediaDirect(outputPath, presetPath, workAreaType)

### Description

Renders the sequence to the requested output path, applies the chosen output preset (.epr file), and follows the selected work area type.

### Parameters

Parameter

Type

Description

outputPath

String

Output path where the media should be rendered.

presetPath

String

Path to the .epr preset file that stores the encoding settings.

workAreaType

Integer

The render scope for the work area type. One of: - 0 - Renders the full sequence. - 1 - Renders the range between the sequence in and out points. - 2 - Renders the sequence work area.

| --- | --- | --- |

### Returns

Returns a boolean; true on success.

### Sequence.exportAsProject()

app.project.sequences[index].exportAsProject(outputPath)

### Description

Creates a Project object that contains only the specified sequence and the media used by it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| outputPath | String | Output path for the generated project. |

### Returns

Returns a boolean; true on success.

### Sequence.getExportFileExtension()

app.project.sequences[index].getExportFileExtension(outputPresetPath)

### Description

Gets the file extension tied to the specified output preset (.epr file).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| outputPresetPath | String | Output preset to inspect. |

### Returns

Returns a string.

### Sequence.getInPoint()

app.project.sequences[index].getInPoint()

### Description

Reads this sequence's in point as seconds.

### Parameters

None.

### Returns

String.

### Sequence.getInPointAsTime()

app.project.sequences[index].getInPointAsTime()

### Description

Reads this sequence's in point.

### Parameters

None.

### Returns

A Time object is returned.

### Sequence.getOutPoint()

app.project.sequences[index].getOutPoint()

### Description

Reads this sequence's out point as seconds.

### Parameters

None.

### Returns

String.

### Sequence.getOutPointAsTime()

app.project.sequences[index].getOutPointAsTime()

### Description

Reads this sequence's out point.

### Parameters

None.

### Returns

A Time object is returned.

### Sequence.getPlayerPosition()

app.project.sequences[index].getPlayerPosition()

### Description

Reads the CTI (Current Time Indicator) position in ticks.

### Parameters

None.

### Returns

A Time object is returned.

### Sequence.getSelection()

app.project.sequences[index].getSelection()

### Description

Returns the selected Track item objects in the sequence as a temporal-order array.

### Parameters

None.

### Returns

TrackItemCollection object.

### Sequence.getSettings()

app.project.sequences[index].getSettings()

### Description

Reads this sequence's settings.

### Parameters

None.

### Returns

Object; sequence settings structure.

Property

Type

Description

audioChannelCount

Integer

Count of sequence audio channels.

audioChannelType

Integer

Audio channel layout. One of: - 0 - Mono - 1 - Stereo - 2 - 5.1 - 3 - Multichannel - 4 - 4 Channel - 5 - 8 Channel

audioDisplayFormat

Integer

Audio timecode presentation. One of: - 200 - Audio Samples - 201 - Milliseconds

audioSampleRate

Time object

Audio sample rate.

autoToneMapEnabled

Boolean

Whether Auto Tone Map Media is checked.

compositeLinearColor

Boolean

Whether the sequence uses linear-color compositing.

editingMode

String

GUID for the editing mode.

maximumBitDepth

Boolean

Whether maximum depth compositing is enabled for the sequence.

maximumRenderQuality

Boolean

Whether the sequence renders at maximum quality.

previewCodec

String

Four character code for the active preview codec.

previewFrameWidth

Integer

Preview frame width.

previewFrameHeight

Integer

Preview frame height.

previewFileFormat

Integer

Preview-file rendering preset path (.epr file).

videoDisplayFormat

Integer

Video time presentation. One of: - 100 - 24 Timecode - 101 - 25 Timecode - 102 - 29.97 Drop Timecode - 103 - 29.97 Non-Drop Timecode - 104 - 30 Timecode - 105 - 50 Timecode - 106 - 59.94 Drop Timecode - 107 - 59.94 Non-Drop Timecode - 108 - 60 Timecode - 109 - Frames - 110 - 23.976 Timecode - 111 - 16mm Feet + Frames - 112 - 35mm Feet + Frames - 113 - 48 Timecode

videoFieldType

Integer

Video field ordering. One of: - -1 - Default - 0 - No Fields (Progressive Scan) - 1 - Upper Field First - 2 - Lower Field First

videoFrameHeight

Integer

Sequence video frame height.

videoFrameWidth

Integer

Sequence video frame width.

videoPixelAspectRatio

String

Pixel aspect ratio.

vrHorzCapturedView

Integer

Horizontal captured view for VR, measured in degrees.

vrVertCapturedView

Integer

Vertical captured view for VR, measured in degrees.

vrLayout

Integer

VR footage layout. One of: - 0 - Monoscopic - 1 - Stereoscopic - Over/Under - 2 - Stereoscopic - Side by Side

vrProjection

Integer

VR footage projection type. One of: - 0 - None - 1 - Equirectangular
