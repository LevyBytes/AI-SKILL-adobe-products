# Methods (part 3)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## ProjectItem object — Methods

- 0 = Violet
- 1 = Iris
- 2 = Caribbean
- 3 = Lavender
- 4 = Cerulean
- 5 = Forest
- 6 = Rose
- 7 = Mango
- 8 = Purple
- 9 = Blue
- 10 = Teal
- 11 = Magenta
- 12 = Tan
- 13 = Green
- 14 = Brown
- 15 = Yellow

### ProjectItem.getColorSpace()

app.project.rootItem.children[index].getColorSpace()

### Description

Reads colorspace properties for the project item.

### Parameters

None.

### Returns

Returns an item colorspace-properties object containing:

- name
- transferCharacteristic
- primaries
- matrixEquation

### Example

This example writes those details to the Events panel.

```
var colorSpace = app.project.rootItem.children[0].getColorSpace()
app.setSDKEventMessage("Color Space " + " = " + colorSpace.name, 'info');
app.setSDKEventMessage("Transfer Characteristic " + " = " + colorSpace.transferCharacteristic, 'info');
app.setSDKEventMessage("Color Primaries " + " = " + colorSpace.primaries, 'info');
app.setSDKEventMessage("Matrix Equation " + " = " + colorSpace.matrixEquation, 'info');
```

### ProjectItem.getOriginalColorSpace()

app.project.rootItem.children[index].getOriginalColorSpace()

### Description

Reads the original colorspace properties for the project item.

### Parameters

None.

### Returns

Returns an item colorspace-properties object containing:

- name
- transferCharacteristic
- primaries
- matrixEquation

### Example

See ProjectItem.getColorSpace()

### ProjectItem.getEmbeddedLUTID()

app.project.rootItem.children[index].getEmbeddedLUTID()

### Description

Reads the project item's LUTID.

### Parameters

None.

### Returns

Returns the item's LUTID.

### Example

Writes LUTID to the Events panel.

```
var lutID = app.project.rootItem.children[0].getEmbeddedLUTID()
app.setSDKEventMessage("LutID " + " = " + lutID, 'info');
```

### ProjectItem.getInputLUTID()

app.project.rootItem.children[index].getInputLUTID()

### Description

Reads the project item's Input LUTID.

### Parameters

None.

### Returns

Returns the item's Input LUTID.

### Example

Writes Input LUTID to the Events panel.

```
var lutID = app.project.rootItem.children[0].getInputLUTID()
app.setSDKEventMessage("Input LutID " + " = " + inputLutID, 'info');
```

### ProjectItem.getFootageInterpretation()

app.project.rootItem.children[index].getFootageInterpretation()

### Description

Provides a structure containing current interpretation settings for the projectItem.

### Parameters

None.

### Returns

A footage interpretation structure, or 0 when the call fails.

Property

Type

Description

alphaUsage

Integer

Alpha handling; one of: - 0 - `ALPHACHANNEL_NONE` - 1 - `ALPHACHANNEL_STRAIGHT` - 2 - `ALPHACHANNEL_PREMULTIPLIED` - 3 - `ALPHACHANNEL_IGNORE`

fieldType

Integer

Field type; one of: - -1 - `FIELDTYPE_DEFAULT` - 0 - `FIELDTYPE_PROGRESSIVE` - 1 - `FIELDTYPE_UPPERFIRST` - 2 - `FIELDTYPE_LOWERFIRST`

ignoreAlpha

Boolean

true or false.

invertAlpha

Boolean

true or false.

frameRate

Float

Frame rate as floating point value.

pixelAspectRatio

Float

Pixel aspect ratio as floating point value.

removePulldown

Boolean

true or false.

vrConformProjectionType

Integer

Projection type used for VR footage. One of - 0 - `VR_CONFORM_PROJECTION_NONE` - 1 - `VR_CONFORM_PROJECTION_EQUIRECTANGULAR`

vrLayoutType

Integer

Layout used for VR footage. One of - 0 - `VR_LAYOUT_MONOSCOPIC` - 1 - `VR_LAYOUT_STEREO_OVER_UNDER` - 2 - `VR_LAYOUT_STEREO_SIDE_BY_SIDE`

vrHorizontalView

String

Horizontal view used for VR footage.

vrVerticalView

String

Vertical view used for VR footage.

| --- | --- | --- |

### ProjectItem.getInPoint()

app.project.rootItem.children[index].getInPoint()

### Description

Gets the current in point for the project item.

### Parameters

None.

### Returns

A Time object that contains the in point.

### ProjectItem.getMarkers()

app.project.rootItem.children[index].getMarkers()

### Description

Gets the MarkerCollection object for this item.

### Parameters

None.

### Returns

MarkerCollection object, read-only;

### ProjectItem.getMediaPath()

app.project.rootItem.children[index].getMediaPath()

### Description

Returns the project item's media path as a String.

Note

This works only with atomic media. It cannot return useful paths for media with no actual path, including media produced by synthetic importers such as Premiere Pro's own Universal Counting Leader.

For image sequences, the returned value is only the path to the first image in the sequence.

### Parameters

None.

### Returns

A String containing the item's media path.

### ProjectItem.getOutPoint()

app.project.rootItem.children[index].getOutPoint(mediaType)

### Description

Reads the current out point for the requested media type.

### Parameters

Parameter

Type

Description

mediaType

Integer

Use 1 for video only or 2 for audio only. If omitted, all media are queried.

| --- | --- | --- |

### Returns

A Time object.

### ProjectItem.getProjectMetadata()

app.project.rootItem.children[index].getProjectMetadata()

### Description

Gets metadata for the project item; this is separate from media XMP.

### Parameters

None.

### Returns

Serialized String for all private Premiere Pro project metadata.

### ProjectItem.getProjectColumnsMetadata()

app.project.rootItem.children[index].getProjectColumnsMetadata()

### Description

Provides project view layout metadata as JSON text.

### Parameters

None.

### Returns

JSON text parseable by JSON.parse() in the Javascript layer.

This produces objects in a list, one object per column. Each object contains 4 key/value pairs: ColumnName, ColumnValue, ColumnID, ColumnPath.

- ColumnName and ColumnValue are informational key/value fields.
- ColumnID and ColumnPath identify the column for updates through setProjectMetadata() or setXMPMetadata().

For example:

| Key | Value | Description |
| --- | --- | --- |
| ColumnName | "Name" | Column display name |
| ColumnValue | "`A014C003_180620_R205`.mov" | Example column value |
| ColumnID | "Column.Intrinsic.Name" | Column ID |
| ColumnPath | "http://ns.adobe.com/premierePrivateProjectMetaData/1.0/" | Column path |

### ProjectItem.getProxyPath()

app.project.rootItem.children[index].getProxyPath()

### Description

Gets the path to proxy media linked with this project item.

### Parameters

None.

### Returns

Proxy media path as String, or 0 when none is found.

### ProjectItem.getXMPMetadata()

app.project.rootItem.children[index].getXMPMetadata()

### Description

Reads project-item XMP metadata and returns it as a String.

### Parameters

None.

### Returns

Serialized String containing all XMP metadata.

### ProjectItem.hasProxy()

app.project.rootItem.children[index].hasProxy()

### Description

Indicates whether the project item already has a proxy attached.

### Parameters

None.

### Returns

true when a proxy is attached to the project item; false otherwise.

### ProjectItem.isMergedClip()

app.project.rootItem.children[index].isMergedClip()

### Description

Reports whether this item points to a merged clip.

### Parameters

None.

### Returns

true for a merged clip; otherwise false.

### ProjectItem.isMulticamClip()

app.project.rootItem.children[index].isMulticamClip()

### Description

Reports whether this item points to a multicam clip.

### Parameters

None.

### Returns

true for a multicam clip; otherwise false.

### ProjectItem.isOffline()

app.project.rootItem.children[index].isOffline()

### Description

Returns a Boolean for the item's offline state.

### Parameters

None.

### Returns

Boolean; true indicates offline.

### ProjectItem.isSequence()

app.project.rootItem.children[index].isSequence()

### Description

Indicates whether the project item refers to a Sequence object.

### Parameters

None.

### Returns

true for a Sequence object, multicam clip, or merged clip; otherwise false.

### ProjectItem.moveBin()

app.project.rootItem.children[index].moveBin(newParentBinProjectItem)

### Description

Places the projectItem under a different parent bin.

### Parameters

None.

### Returns

0 means the move succeeded.

### ProjectItem.refreshMedia()

app.project.rootItem.children[index].refreshMedia()

### Description

Asks Premiere Pro to re-evaluate media linked to the project item. Offline media may come back online if the previously missing file is now available.

### Parameters

None.

### Returns

An array of markers tied to the project item, or 0 when no markers exist.

### ProjectItem.renameBin()

app.project.rootItem.children[index].renameBin(newName)

### Description

Renames a bin; only bin project items support this operation.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newName | String | Replacement bin name. |

### Returns

0 means the bin rename succeeded.

### ProjectItem.select()

app.project.rootItem.children[index].select()

### Description

Sets this project item, which must be a bin, as the destination for later project imports.

### Parameters

None.

### Returns

0 means the item became the future import destination.

### ProjectItem.setColorLabel()

app.project.rootItem.children[index].setColorLabel(labelColor)

### Description

Sets the color label on the project item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| labelColor | Integer | Color label value; see ProjectItem.getColorLabel(). |

### Returns

0 on success.

### ProjectItem.setFootageInterpretation()

app.project.rootItem.children[index].setFootageInterpretation(interpretation)

### Description

Uses a structure describing current projectItem interpretation.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| interpretation |  | Footage interpretation structure. |

### Returns

true on success.

### ProjectItem.setInPoint()

app.project.rootItem.children[index].setInPoint(seconds, mediaType)

### Description

Sets the in point to seconds for the selected media types.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| seconds | Integer | Time value in ticks. |
| mediaType | Integer | Chooses affected media: use 1 (video only), 2 (audio only), or 4 (all media types). |

### Returns

0 indicates success.

### ProjectItem.setOffline()

app.project.rootItem.children[index].setOffline()

### Description

Places the project item offline.

### Parameters

None.

### Returns

true on success.

### ProjectItem.setOutPoint()

app.project.rootItem.children[index].setOutPoint(seconds, mediaType)

### Description

Sets the out point to seconds for the selected media types.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| seconds | Integer | Time value in seconds. |
| mediaType | Integer | Chooses affected media: use 1 (video only), 2 (audio only), or 4 (all media types). |

### Returns

0 indicates success.

### ProjectItem.setOverrideFrameRate()

app.project.rootItem.children[index].setOverrideFrameRate(newFrameRate)

### Description

Sets the project item's frame rate.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newFrameRate | Float | Replacement frame rate. |

### Returns

0 means the frame rate change succeeded.

### ProjectItem.setOverridePixelAspectRatio()

app.project.rootItem.children[index].setOverridePixelAspectRatio(numerator, denominator)

### Description

Sets the item's pixel aspect ratio.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| numerator | Integer | Replacement numerator. |
| denominator | Integer | Replacement denominator. |

### Returns

0 means the aspect ratio change succeeded.

### ProjectItem.setProjectMetadata()

app.project.rootItem.children[index].setProjectMetadata(newMetadata, updatedFields)

### Description

Sets private project metadata on the project item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newMetadata | String | Replacement serialized private project metadata. |
| updatedFields | Array of strings | Array naming the fields that should be updated. |

### Returns

0 means the update succeeded.

### ProjectItem.setScaleToFrameSize()

app.project.rootItem.children[index].setScaleToFrameSize()

### Description

Turns on scale-to-frame-size behavior for this item's media during sequence insertion.

### Parameters

None.

### Returns

Undefined return value.

### ProjectItem.setStartTime()

app.project.rootItem.children[index].setStartTime(time)

### Description

Assigns a replacement start time to the project item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | String | Replacement starting time, represented in ticks. |

### Returns

0 indicates success.

### ProjectItem.setXMPMetadata()

app.project.rootItem.children[index].setXMPMetadata(newXMP)

### Description

Sets XMP metadata on the project item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newXMP | String | Replacement serialized XMP metadata. |

### Returns

0 means the update succeeded.

### ProjectItem.startTime()

app.project.rootItem.children[index].startTime()

### Description

Time object for start time.

### Parameters

None.

### Returns

Time object.

### ProjectItem.videoComponents()

app.project.rootItem.children[index].videoComponents()

### Description

Video components belonging to the 'Master Clip' for this project item.

### Type

ComponentCollection object, read-only.

## TrackItem object — Methods

### TrackItem.getMGTComponent()

app.project.sequences[index].videotracks[index].getMGTComponent

app.project.sequences[index].audiotracks[index].getMGTComponent

### Description

Adds an After Effects Motion Graphics Template, a Mogrt, to the selected track at the specified time.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| mogrtPath | String | Full path to a valid .mogrt created in After Effects. |
| targetTime | String | Tick time where the .mogrt should be inserted. |
| vidTrackOffset | Integer | Offset from 0, the first available track, for .mogrt video insertion. |
| audTrackOffset | Integer | Offset from 0, the first available track, for .mogrt audio insertion. |

### Returns

Component object for the .mogrt parameters exposed by the creator.

### TrackItem.getSpeed()

app.project.sequences[index].audioTracks[index].clips[index].getSpeed()

app.project.sequences[index].videoTracks[index].clips[index].getSpeed()

### Description

Returns the speed multiplier on the TrackItem.

### Parameters

None.

### Returns

Float multiplier for TrackItem speed; 1 means no speed adjustment.

### TrackItem.isAdjustmentLayer()

app.project.sequences[index].audioTracks[index].clips[index].isAdjustmentLayer()

app.project.sequences[index].videoTracks[index].clips[index].isAdjustmentLayer()

### Description

Returns whether the TrackItem is an adjustment layer.

### Parameters

None.

### Returns

true when the trackitem is an adjustment layer; false otherwise.

### TrackItem.isSpeedReversed()mm

app.project.sequences[index].audioTracks[index].clips[index].isSpeedReversed()

app.project.sequences[index].videoTracks[index].clips[index].isSpeedReversed()

### Description

Returns whether the trackItem plays in reverse.

### Parameters

None.

### Returns

1 means TrackItem is reversed; 0 means it is not.

### TrackItem.isSelected()

app.project.sequences[index].audioTracks[index].clips[index].isSelected()

app.project.sequences[index].videoTracks[index].clips[index].isSelected()

### Description

Reads the current selection state for the trackItem.

### Parameters

None.

### Returns

true when trackItem is selected; false otherwise.

### TrackItem.setSelected()

app.project.sequences[index].audioTracks[index].clips[index].setSelected(state, updateUI)

app.project.sequences[index].videoTracks[index].clips[index].setSelected(state, updateUI)

### Description

Sets the trackItem selection state.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| state | Integer | 1 selects the track item; 0 deselects it. |
| updateUI | Integer | 1 updates the Premiere Pro UI after this function call. |

### Returns

0 indicates success.

### TrackItem.getMatchName()

app.project.sequences[index].audioTracks[index].clips[index].getMatchName()

app.project.sequences[index].videoTracks[index].clips[index].getMatchName()

### Description

Gets the match name for the trackItem.

### Parameters

None.

### Returns

Match name as a String when successful.

### TrackItem.remove()

app.project.sequences[index].audioTracks[index].clips[index].remove(inRipple, inAlignToVideo)

app.project.sequences[index].videoTracks[index].clips[index].remove(inRipple, inAlignToVideo)

### Description

Sets the selection state of the trackItem.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| inRipple | Boolean | 1 shifts later track items earlier to close the gap; 0 leaves later items in place. |
| inAlignToVideo | Boolean | 1 makes Premiere Pro align moved track items to the nearest video-frame start. |

### Returns

0 indicates success.

### TrackItem.disabled

app.project.sequences[index].audioTracks[index].clips[index].disabled

app.project.sequences[index].videoTracks[index].clips[index].disabled

### Description

Read/Write switch for whether the TrackItem is disabled.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newDisableState | Boolean | true disables this TrackItem; false enables it. |

### Returns

0 indicates success.

### TrackItem.move()

app.project.sequences[index].audioTracks[index].clips[index].move(newInPoint)

app.project.sequences[index].videoTracks[index].clips[index].move(newInPoint)

### Description

Moves the track item's inPoint by shifting it to a new time by a number of seconds.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newInPoint | Time object | Time amount, in seconds, used to shift the track item's start. |

### Returns

0 indicates success.
