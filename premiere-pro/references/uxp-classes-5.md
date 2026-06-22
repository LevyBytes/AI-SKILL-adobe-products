# Scratchdisksettings, Sequence, Sequenceeditor, Sequencesettings ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ScratchDiskSettings — Instance Methods; Sequence — Properties; SequenceEditor — Static Methods; SequenceSettings — Instance Methods; SequenceUtils — Static Methods; SourceMonitor — Static Methods; TextSegments — Static Methods.

## ScratchDiskSettings — Instance Methods

### getScratchDiskPath

25.0

_string_

Returns the scratchDisk path for a chosen disktype; reserved values such as 'MyDocuments' may resolve as symbolic paths.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| ScratchDiskType | [_Constants.ScratchDiskFolderType_](uxp-ppro-reference.md) | - |

### setScratchDiskPath

25.0

_boolean_

Assigns the project's ScratchDisk Path value.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| ScratchDiskType | [_Constants.ScratchDiskFolderType_](uxp-ppro-reference.md) | - |
| ScratchDiskValue | [_Constants.ScratchDiskFolder_](uxp-ppro-reference.md) | - |

## Sequence — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| guid | _Guid_ | R | 25.0 | Unique sequence identifier. |
| name | _string_ | R | 25.0 | Name assigned to the sequence. |

### Sequence — Instance Methods

### clearSelection

25.0

_boolean_

Removes the current TrackItem Selection.

### createCloneAction

25.0

_Action_

Builds an action that clones the supplied sequence.

### createSetInPointAction

25.0

_Action_

Builds a SetInPointAction for the sequence.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetOutPointAction

25.0

_Action_

Builds a SetOutPointAction for the sequence.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetSettingsAction

25.0

_Action_

Provides an action for applying sequence settings.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequenceSettings | [_SequenceSettings_](uxp-classes-5.md) | - |

### createSetZeroPointAction

25.0

_Action_

Builds an action that assigns the sequence InPoint.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSubsequence

25.0

_Sequence_

Creates a new Sequence derived from the existing one as a sub-sequence.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| ignoreTrackTargeting | _boolean_ | - |

### getAudioTrack

25.0

_AudioTrack_

Retrieves the AudioTrack at trackIndex.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackIndex | _number_ | - |

### getAudioTrackCount

25.0

_number_

Reports how many audio tracks this sequence contains.

### getCaptionTrack

25.0

_CaptionTrack_

Retrieves the CaptionTrack at trackIndex.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackIndex | _number_ | - |

### getCaptionTrackCount

25.0

_number_

Reports how many caption tracks this sequence contains.

### getEndTime

25.0

_TickTime_

Represents the sequence endpoint as time.

### getFrameSize

25.0

_RectF_

Returns the frame dimensions.

### getInPoint

25.0

_TickTime_

Returns the time for the sequence inPoint.

### getOutPoint

25.0

_TickTime_

Returns the time for the sequence outPoint.

### getPlayerPosition

25.0

_TickTime_

Returns the current playhead location.

### getProjectItem

25.0

_ProjectItem_

Returns the associated ProjectItem.

### getSelection

25.0

_TrackItemSelection_

Returns the sequence's current selection group.

### getSequenceAudioTimeDisplayFormat

25.0

_TimeDisplay_

Returns this sequence's audio time display format.

### getSequenceVideoTimeDisplayFormat

25.0

_TimeDisplay_

Returns this sequence's video time display format.

### getSettings

25.0

_SequenceSettings_

Returns the SequenceSettings object.

### getTimebase

25.0

_string_

Returns the sequence time base.

### getVideoTrack

25.0

_VideoTrack_

Retrieves the VideoTrack at trackIndex.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackIndex | _number_ | - |

### getVideoTrackCount

25.0

_number_

Reports how many video tracks this sequence contains.

### getZeroPoint

25.0

_TickTime_

Represents the sequence zero point as time.

### isDoneAnalyzingForVideoEffects

25.0

_boolean_

Returns whether video-effects analysis has finished for the sequence.

### setPlayerPosition

25.0

_boolean_

Sets the current playhead location.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| positionTime | [_TickTime_](uxp-classes-6.md) | - |

### setSelection

25.0

_boolean_

Applies the provided track item selection to the sequence.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItemSelection | [_TrackItemSelection_](uxp-classes-6.md) | - |

## SequenceEditor — Static Methods

### getEditor

25.0

_SequenceEditor_

Returns the Sequence Editor reference for timeline edits on the sequence.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequenceObject | [_Sequence_](uxp-classes-5.md) | - |

### getInstalledMogrtPath

25.0

_String_

Returns the local directory path for Adobe mogrt files.

### SequenceEditor — Instance Methods

### createCloneTrackItemAction

25.0

_Action_

Creates an insert or overwrite edit action that duplicates a trackItem onto a destination track. An offset from the original trackItem position determines both the target track and the copied item's start time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItem | [_VideoClipTrackItem_](uxp-classes-6.md) or [_AudioClipTrackItem_](uxp-classes.md) | - |
| timeOffset | [_TickTime_](uxp-classes-6.md) | - |
| videoTrackVerticalOffset | _number_ | - |
| audioTrackVerticalOffset | _number_ | - |
| alignToVideo | _boolean_ | - |
| isInsert | _boolean_ | - |

### createInsertProjectItemAction

25.0

_Action_

Creates an action that inserts a ProjectItem into a Sequence. Note: Passing a track index beyond the current track count creates a new track.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |
| time | [_TickTime_](uxp-classes-6.md) | - |
| videoTrackIndex | [_Number_](https://raw.githubusercontent.com/ppro-reference/classes/number/index.md) | - |
| audioTrackIndex | [_Number_](https://raw.githubusercontent.com/ppro-reference/classes/number/index.md) | - |
| limitShift | [_Boolean_](https://raw.githubusercontent.com/ppro-reference/classes/boolean/index.md) | - |

### createOverwriteItemAction

25.0

_Action_

Creates an overwrite action for placing a ProjectItem in a Sequence.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |
| time | [_TickTime_](uxp-classes-6.md) | - |
| videoTrackIndex | [_Number_](https://raw.githubusercontent.com/ppro-reference/classes/number/index.md) | - |
| audioTrackIndex | [_Number_](https://raw.githubusercontent.com/ppro-reference/classes/number/index.md) | - |

### createRemoveItemsAction

25.0

_Action_

Creates an action that removes items from a sequence.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItemSelection | [_TrackItemSelection_](uxp-classes-6.md) | - |
| ripple | _boolean_ | - |
| mediaType | [_Constants.MediaType_](uxp-ppro-reference.md) | - |
| shiftOverLapping | _boolean_ | - |

### insertMogrtFromLibrary

25.0

_(VideoClipTrackItem | AudioClipTrackItem)[]_

Places the input MGT in the sequence using the supplied time and track indexes.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inLibraryName | _string_ | - |
| inElementName | _string_ | - |
| inTime | [_TickTime_](uxp-classes-6.md) | - |
| inVideoTrackIndex | [_Number_](https://raw.githubusercontent.com/ppro-reference/classes/number/index.md) | - |
| inAudioTrackIndex | [_Number_](https://raw.githubusercontent.com/ppro-reference/classes/number/index.md) | - |

### insertMogrtFromPath

25.0

_(VideoClipTrackItem | AudioClipTrackItem)[]_

Places the input MGT in the sequence using the supplied time and track indexes.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inMGTPath | _string_ | - |
| inTime | [_TickTime_](uxp-classes-6.md) | - |
| inVideoTrackIndex | [_Number_](https://raw.githubusercontent.com/ppro-reference/classes/number/index.md) | - |
| inAudioTrackIndex | [_Number_](https://raw.githubusercontent.com/ppro-reference/classes/number/index.md) | - |

## SequenceSettings — Instance Methods

### getAudioChannelCount

25.0

_number_

Returns the sequence channel count.

### getAudioChannelType

25.0

_number_

Returns the sequence audio channel type: 0 (Mono), 1 (Stereo), 2 (5.1), or 3 (multichannel).

### getAudioDisplayFormat

25.0

_TimeDisplay_

Provides the audio display-format setting.

### getAudioSampleRate

25.0

_FrameRate_

Provides the audio sample-rate setting.

### getCompositeInLinearColor

25.0

_boolean_

Reports the enabled state for composite in linear color.

### getEditingMode

25.0

_string_

Returns the sequence editing mode.

### getMaximumBitDepth

25.0

_boolean_

Reports whether maximum bit depth is enabled.

### getMaxRenderQuality

25.0

_boolean_

Reports whether maximum render quality is enabled.

### getPreviewCodec

25.0

_string_

Returns the sequence preview codec.

### getPreviewFileFormat

25.0

_string_

Returns the sequence preview file format.

### getPreviewFrameRect

25.0

_RectF_

Returns the sequence preview-video RectF.

### getVideoDisplayFormat

25.0

_TimeDisplay_

Provides the video display-format setting.

### getVideoFieldType

25.0

_number_

Provides the sequence video-field type.

### getVideoFrameRate

25.0

_FrameRate_

Provides the sequence video frame rate.

### getVideoFrameRect

25.0

_RectF_

Returns the sequence video-frame RectF.

### getVideoPixelAspectRatio

25.0

_string_

Provides the video display-format setting.

### setAudioDisplayFormat

25.0

_boolean_

Sets the sequence audio display format.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| audioDisplay | [_TimeDisplay_](uxp-classes-6.md) | - |

### setAudioSampleRate

25.0

_boolean_

Updates the audio sample-rate setting.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inRate | [_FrameRate_](uxp-classes-3.md) | - |

### setCompositeInLinearColor

25.0

_boolean_

Sets the enabled state for composite in linear color.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| useCompositeInLinearColor | _boolean_ | - |

### setEditingMode

25.0

_boolean_

Sets the sequence editing mode.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inEditingModeName | _string_ | - |

### setMaximumBitDepth

25.0

_boolean_

Updates the maximum bit depth flag with a true/false value.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| useMaxBitDepth | _boolean_ | - |

### setMaxRenderQuality

25.0

_boolean_

Updates the maximum render quality flag with a true/false value.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| useMaxRenderQuality | _boolean_ | - |

### setPreviewCodec

25.0

_boolean_

Sets the sequence preview codec.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inPreviewCodec | _string_ | - |

### setPreviewFileFormat

25.0

_boolean_

Sets the sequence preview file format.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inPreviewCodec | _string_ | - |

### setPreviewFrameRect

25.0

_boolean_

Sets the sequence preview-video RectF.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inPreviewVideoRect | [_RectF_](uxp-classes-4.md) | - |

### setVideoDisplayFormat

25.0

_boolean_

Sets the sequence video display format.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| audioDisplay | [_TimeDisplay_](uxp-classes-6.md) | - |

### setVideoFieldType

25.0

_boolean_

Updates the sequence video-field type.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| videoFiledType | _number_ | - |

### setVideoFrameRate

25.0

_boolean_

Sets the sequence video frame rate.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inVideoFrameRate | [_FrameRate_](uxp-classes-3.md) | - |

### setVideoFrameRect

25.0

_boolean_

Sets the sequence video-frame RectF.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inVideoFrameRect | [_RectF_](uxp-classes-4.md) | - |

### setVideoPixelAspectRatio

25.0

_boolean_

Sets the sequence video display format.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inPixelAspectRatio | _string_ | - |

## SequenceUtils — Static Methods

### performSceneEditDetectionOnSelection

25.0

_boolean_

Detects cuts across the selected sequence items.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| clipOperation | _string_ | - |
| trackItemSelection | [_TrackItemSelection_](uxp-classes-6.md) | - |

## SourceMonitor — Static Methods

### closeAllClips

25.0

_boolean_

Closes all Source Monitor clips.

### closeClip

25.0

_boolean_

Closes the Source Monitor clip.

### getPosition

25.0

_TickTime_

Returns the source monitor position as time.

### getProjectItem

25.0

_ProjectItem_

Returns the Source Monitor's projectItem.

### openFilePath

25.0

_boolean_

Opens the item at the specified path and loads it for preview in Source Monitor.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| filePath | _string_ | - |

### openProjectItem

25.0

_boolean_

Opens the input projectItem in Source Monitor.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |

### play

25.0

_boolean_

Plays the source monitor clip using the input speed.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| speed | _number_ | - |

## TextSegments — Static Methods

### importFromJSON

25.0

_boolean_

Imports JSON-formatted text segments so a callback can handle them.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| json | _string_ | - |
| undefined | _( importedTranscription: TextSegments ) => void_ | - |
