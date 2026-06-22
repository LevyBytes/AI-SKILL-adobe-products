# Encodermanager, Eventmanager, Exporter, Folderitem ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EncoderManager — Properties; EventManager — Static Methods; Exporter — Static Methods; FolderItem — Static Methods; FootageInterpretation — Properties; FrameRate — Properties; Guid — Static Methods; Objects; IngestSettings — Instance Methods; Keyframe — Properties; Marker — Instance Methods; Markers — Static Methods; Media — Properties.

## EncoderManager — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| isAMEInstalled | _boolean_ | R | 25.0 | Reports whether AME is installed. |

### EncoderManager — Static Methods

### getExportFileExtension

25.0

_string_

Reads the export file extension for an input preset file.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |
| presetFilePath | _string_ | - |

### getManager

25.0

_EncoderManager_

Returns the Encoder Manager object.

### EncoderManager — Instance Methods

### encodeFile

25.0

_boolean_

Sends an input media file to AME for encoding.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| filePath | _string_ | - |
| outputFile | _string_ | - |
| presetFile | _string_ | - |
| inPoint | [_TickTime_](uxp-classes-6.md) | - |
| outPoint | [_TickTime_](uxp-classes-6.md) | - |
| workArea | _number_ | - |
| removeUponCompletion | _boolean_ | - |
| startQueueImmediately | _boolean_ | - |

### encodeProjectItem

25.0

_boolean_

Sends an input clipProjectItem to AME for encoding.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| clipProjectItem | [_ClipProjectItem_](uxp-classes-2.md) | - |
| outputFile | _string_ | - |
| presetFile | _string_ | - |
| workArea | _number_ | - |
| removeUponCompletion | _boolean_ | - |
| startQueueImmediately | _boolean_ | - |

### exportSequence

25.0

_boolean_

Exports a sequence. When both outputFile and presetFile are omitted, export uses the sequence's applied export settings or falls back to standard export rules.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |
| exportType | [_Constants.ExportType_](uxp-ppro-reference.md) | Constants.ExportType.IMMEDIATELY, Constants.ExportType.`QUEUE_TO_AME` etc.. |
| outputFile | _string_ | - |
| presetFile | _string_ | - |
| exportFull | _boolean_ | - |

### EncoderManager — Events

| Name | Version | Description |
| --- | --- | --- |
| `EVENT_RENDER_COMPLETE` | 25.0 | Fires after AME finishes rendering. |
| `EVENT_RENDER_ERROR` | 25.0 | Fires when AME returns an error message. |
| `EVENT_RENDER_CANCEL` | 25.0 | Fires when an AME job is canceled. |
| `EVENT_RENDER_QUEUE` | 25.0 | Fires when an AME job is queued. |
| `EVENT_RENDER_PROGRESS` | 25.0 | Fires while AME renders the job. |

## EventManager — Static Methods

### addGlobalEventListener

25.0

_void_

Adds a global event listener.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| eventName | _string_ or [_Constants.SnapEvent_](uxp-ppro-reference.md) or [_Constants.ProjectEvent_](uxp-ppro-reference.md) or [_Constants.SequenceEvent_](uxp-ppro-reference.md) or [_Constants.OperationCompleteEvent_](uxp-ppro-reference.md) | - |
| eventHandler | _(event?: object) => void_ | - |
| inCapturePhase? | _boolean_ | - |

### removeGlobalEventListener

25.0

_void_

Removes a global event listener.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| eventName | _string_ or [_Constants.SnapEvent_](uxp-ppro-reference.md) or [_Constants.ProjectEvent_](uxp-ppro-reference.md) or [_Constants.SequenceEvent_](uxp-ppro-reference.md) or [_Constants.OperationCompleteEvent_](uxp-ppro-reference.md) | - |
| eventHandler | _(event?: object) => void_ | - |

## Exporter — Static Methods

### exportSequenceFrame

25.0

_boolean_

Exports a frame from a sequence. Output can be bmp, dpx, gif, jpg, exr, png, tga and tif

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |
| time | [_TickTime_](uxp-classes-6.md) | - |
| filename | _string_ | Export target filename, for example 'C:/temp/exportedFrame.png' |
| filepath | _string_ | Export target directory, for example 'C:/temp/' |
| width | _number_ | - |
| height | _number_ | - |

## FolderItem — Static Methods

### cast

25.0

_FolderItem_

Converts a ProjectItem reference into a FolderItem.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |

### FolderItem — Instance Methods

### createBinAction

25.0

_Action_

Provides an action to make a new bin.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |
| makeUnique | _boolean_ | - |

### createMoveItemAction

25.0

_Action_

Builds an action that moves item into the folder item supplied as newParent.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | [_ProjectItem_](uxp-classes-4.md) | - |
| newParent | [_FolderItem_](uxp-classes-3.md) | - |

### createRemoveItemAction

25.0

_Action_

Builds an action to take item out of this folder.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | [_ProjectItem_](uxp-classes-4.md) | - |

### createRenameBinAction

25.0

_Action_

Renames the Bin and returns true on success

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |

### createSetColorLabelAction

25.0

_Action_

Builds an action that applies a color label index to projectItem

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inColorLabelIndex | _number_ | - |

### createSetNameAction

25.0

_Action_

Provides an action for renaming projectItem

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inName | _string_ | - |

### createSmartBinAction

25.0

_Action_

Creates and returns the Folder object for a smart bin named by name

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |
| searchQuery | _string_ | - |

### getColorLabelIndex

25.0

_number_

Retrieves projectItem's color label index

### getItems

25.0

_ProjectItem[]_

Lists this folder's child items.

### getProject

25.0

_Project_

Retrieves this projectItem's parent Project.

## FootageInterpretation — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| `ALPHACHANNEL_NONE` | _number_ | R | 25.0 | no alpha channel |
| `ALPHACHANNEL_STRAIGHT` | _number_ | R | 25.0 | straight alpha channel |
| `ALPHACHANNEL_PREMULTIPLIED` | _number_ | R | 25.0 | premultiplied alpha channel |
| `ALPHACHANNEL_IGNORE` | _number_ | R | 25.0 | ignore alpha channel |
| `FIELD_TYPE_DEFAULT` | _number_ | R | 25.0 | invalid default field type |
| `FIELD_TYPE_PROGRESSIVE` | _number_ | R | 25.0 | progressive field type |
| `FIELD_TYPE_UPPERFIRST` | _number_ | R | 25.0 | upperfirst field type |
| `FIELD_TYPE_LOWERFIRST` | _number_ | R | 25.0 | lowerfirst field type |

### FootageInterpretation — Instance Methods

### getAlphaUsage

25.0

_number_

Retrieves the footage alpha usage type property

### getFieldType

25.0

_number_

Retrieves the footage field type

### getFrameRate

25.0

_number_

Retrieves the footage frame rate

### getIgnoreAlpha

25.0

_boolean_

Retrieves the footage ignore alpha property

### getInputLUTID

25.0

_string_

Retrieves the footage input LUTID

### getInvertAlpha

25.0

_boolean_

Retrieves the footage invert alpha property

### getPixelAspectRatio

25.0

_number_

Retrieves the footage pixel aspect ratio

### getRemovePullDown

25.0

_boolean_

Retrieves the footage removePullDown property

### getVrConform

25.0

_number_

Retrieves the footage vr conform projection type

### getVrHorzView

25.0

_number_

Retrieves the footage vr horizontal view

### getVrLayout

25.0

_number_

Retrieves the footage vr layout type

### getVrVertView

25.0

_number_

Retrieves the footage vr vertical view

### setAlphaUsage

25.0

_boolean_

Assigns the footage alpha usage type property

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| alphaUsage | _number_ | - |

### setFieldType

25.0

_boolean_

Assigns the footage field type

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| fieldType | _number_ | - |

### setFrameRate

25.0

_boolean_

Assigns the footage frame rate

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| frameRate | _number_ | - |

### setIgnoreAlpha

25.0

_boolean_

Assigns the footage ignore alpha property

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| ignoreAlpha | _boolean_ | - |

### setInputLUTID

25.0

_boolean_

Assigns the footage input LUTID

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inputLUTID | _string_ | - |

### setInvertAlpha

25.0

_boolean_

Assigns the footage invert alpha property

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| invertAlpha | _boolean_ | - |

### setPixelAspectRatio

25.0

_boolean_

Assigns the footage pixel aspect ratio

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| pixelAspectRatio | _number_ | - |

### setRemovePullDown

25.0

_boolean_

Assigns the footage removePullDown property

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| removePulldown | _boolean_ | - |

### setVrConform

25.0

_boolean_

Assigns the footage vr conform projection type

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| vrConform | _number_ | - |

### setVrHorzView

25.0

_boolean_

Assigns the footage vr horizontal view

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| vrHorzView | _number_ | - |

### setVrLayout

25.0

_boolean_

Assigns the footage vr layout type

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| vrLayOut | _number_ | - |

### setVrVertView

25.0

_boolean_

Assigns the footage vr horizontal view

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| vrVertView | _number_ | - |

## FrameRate — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| ticksPerFrame | _number_ | W | 25.0 | Can inspect or update ticks per frame. |
| value | _number_ | R | 25.0 | Number of frames per second. |

### FrameRate — Static Methods

### createWithValue

25.0

_FrameRate_

Builds a FrameRate object from value

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | _number_ | - |

### FrameRate — Instance Methods

### equals

25.0

_boolean_

Returns true when frameRate matches this FrameRate object

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| frameRate | [_FrameRate_](uxp-classes-3.md) | - |

## Guid — Static Methods

### fromString

25.0

_Guid_

Builds a Guid from stringValue

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| stringValue | _string_ | - |

### Guid — Instance Methods

### toString

25.0

_string_

Returns the GUID as a string

## Objects

API root, available through `require("premierepro")`

### Properties

### constants

• **constants**: [_Constants_](uxp-ppro-reference.md)

Constants and enumerations used by DOM APIs for specific parameters.

### core

• **core**: _typeof_ [_premiereproCore_](uxp-ppro-reference.md)

Lower-level APIs for direct interaction with the Premiere UI and user.

## IngestSettings — Instance Methods

### getIsIngestEnabled

25.0

_boolean_

Reports the ingest enabled state

### setIngestEnabled

25.0

_boolean_

Updates the ingest enabled state

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| enabled | _boolean_ | - |

## Keyframe — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| value | _object_ | W | 25.0 |  |
| position | _TickTime_ | W | 25.0 | Reads or writes a keyframe position |

### Keyframe — Instance Methods

### getTemporalInterpolationMode

25.0

_number_

Retrieves a keyframe temporal interpolation mode

### setTemporalInterpolationMode

25.0

_boolean_

Assigns a keyframe temporal interpolation mode

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| temporalInterpolationMode | _number_ | - |

## Marker — Instance Methods

### createSetColorByIndexAction

25.0

_Action_

Returns an action that changes marker color using colorIndex

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| colorIndex | _number_ | - |

### createSetCommentsAction

25.0

_Action_

Returns an action that updates the marker comments.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| comments | _string_ | - |

### createSetDurationAction

25.0

_Action_

Returns an action that changes the marker duration.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetNameAction

25.0

_Action_

Returns an action that updates the marker name.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |

### createSetTypeAction

25.0

_Action_

Returns an action that updates the marker type.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| markerType | _string_ | Use "Comment", "Chapter", "Segmentation", or "WebLink"; confirm the exact strings in the TypeScript definition file. |

### getColor

25.0

_Color_

Retrieves the marker color code.

### getColorIndex

25.0

_number_

Retrieves the marker color index.

### getComments

25.0

_string_

Retrieves the marker comments.

### getDuration

25.0

_TickTime_

Retrieves the marker duration time.

### getName

25.0

_string_

Retrieves the marker name.

### getStart

25.0

_TickTime_

Retrieves the marker start time.

### getTarget

25.0

_string_

Retrieves the marker target. For web targets, use it together with url.

### getType

25.0

_string_

Retrieves the marker type, such as Cue / Track / Subclip / Cart

### getUrl

25.0

_string_

Retrieves the marker url.

## Markers — Static Methods

### getMarkers

25.0

_Markers_

Returns the Markers object for ProjectItem or Sequence owners

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| markerOwnerObject | [_Sequence_](uxp-classes-5.md) or [_ClipProjectItem_](uxp-classes-2.md) | - |

### Markers — Instance Methods

### createAddMarkerAction

25.0

_Action_

Creates one marker

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| Name | _string_ | - |
| markerType | _string_ | - |
| startTime | [_TickTime_](uxp-classes-6.md) | - |
| duration | [_TickTime_](uxp-classes-6.md) | - |
| comments | _string_ | - |

### createMoveMarkerAction

25.0

_Action_

Moves marker to the supplied tickTime

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| marker | [_Marker_](uxp-classes-3.md) | - |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createRemoveMarkerAction

25.0

_Action_

Deletes marker

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| marker | [_Marker_](uxp-classes-3.md) | - |

### getMarkers

25.0

_Marker[]_

Retrieves every marker

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| filters | [_string[]_](/ppro-reference/classes/string[]/) | Optional filter for marker types. |

## Media — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| start | _TickTime_ | R | 25.0 | Retrieves the media start time |
| duration | _TickTime_ | R | 25.0 | Retrieves the media duration |

### Media — Instance Methods

### createSetStartAction

25.0

_Action_

Provides an action for setting the media start.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| time | [_TickTime_](uxp-classes-6.md) | - |
