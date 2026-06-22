# Ticktime, Timedisplay, Trackitemselection, Transcript ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TickTime — Properties; TimeDisplay — Properties; TrackItemSelection — Static Methods; Transcript — Static Methods; TransitionFactory — Static Methods; UniqueSerializeable — Static Methods; Utils — Static Methods; VideoClipTrackItem — Instance Methods; VideoComponentChain — Instance Methods; VideoFilterFactory — Static Methods; VideoTrack — Instance Methods.

## TickTime — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| seconds | _number_ | R | 25.0 | Returns the TickTime value in seconds |
| ticks | _string_ | R | 25.0 | Returns the TickTime value in ticks as a string |
| ticksNumber | _number_ | R | 25.0 | Returns the TickTime value in ticks as a number |

### TickTime — Static Methods

### createWithFrameAndFrameRate

25.0

_TickTime_

Constructs a TickTime object from a frame and FrameRate.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| frameCount | _number_ | - |
| frameRate | [_FrameRate_](uxp-classes-3.md) | - |

### createWithSeconds

25.0

_TickTime_

Constructs a TickTime object from seconds.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| seconds | _number_ | - |

### createWithTicks

25.0

_TickTime_

Constructs a TickTime object from ticks supplied as a string.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| ticks | _string_ | - |

### TickTime — Instance Methods

### add

25.0

_TickTime_

Returns the result of adding another TickTime to this one. The receiver TickTime remains unchanged.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### alignToFrame

25.0

_TickTime_

alignToFrame returns a TickTime snapped to the nearest frame boundary before the supplied time, using the given frame rate and rounding away any fractional part.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| frameRate | [_FrameRate_](uxp-classes-3.md) | - |

### alignToNearestFrame

25.0

_TickTime_

AlignToNearestFrame returns a TickTime snapped to the nearest frame boundary either before or after the supplied time, using the given frame rate and rounding away any fractional part.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| frameRate | [_FrameRate_](uxp-classes-3.md) | - |

### divide

25.0

_TickTime_

Returns the result of dividing this TickTime by a divisor. A zero divisor returns `TIME_INVALID`. The receiver TickTime remains unchanged.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| divisor | _number_ | - |

### equals

25.0

_boolean_

Returns true when the supplied TickTime matches the receiver.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### multiply

25.0

_TickTime_

Returns the result of multiplying this TickTime by a factor. The receiver TickTime remains unchanged.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| factor | _number_ | - |

### subtract

25.0

_TickTime_

Returns the result of subtracting another TickTime from this one. The receiver TickTime remains unchanged.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

## TimeDisplay — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| type | _number_ | W | 25.0 | Read/write numeric code for the time display type |

## TrackItemSelection — Static Methods

### createEmptySelection

25.0

_boolean_

Creates an empty selection.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| undefined | _(selection: TrackItemSelection) => void_ | - |

### TrackItemSelection — Instance Methods

### addItem

25.0

_boolean_

Adds one track item into the selection.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItem | [_VideoClipTrackItem_](uxp-classes-6.md) or [_AudioClipTrackItem_](uxp-classes.md) | trackItem targeted for insertion into the selection |
| skipDuplicateCheck | _boolean_ | - |

### getTrackItems

25.0

_(VideoClipTrackItem | AudioClipTrackItem)[]_

Returns the list of trackItems contained in trackItemSelection.

### removeItem

25.0

_boolean_

Removes one track item out of the selection.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItem | [_VideoClipTrackItem_](uxp-classes-6.md) or [_AudioClipTrackItem_](uxp-classes.md) | trackItem targeted for removal from the selection |

## Transcript — Static Methods

### createImportTextSegmentsAction

25.0

_Action_

Creates an action that imports external transcripts into ClipProjectItem.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| textSegments | [_TextSegments_](uxp-classes-5.md) | - |
| clipProjectItem | [_ClipProjectItem_](uxp-classes-2.md) | - |

### exportToJSON

25.0

_string_

Serializes any available transcript for clipProjectItem into a JSON string.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| clipProjectItem | [_ClipProjectItem_](uxp-classes-2.md) | - |

### importFromJSON

25.0

_TextSegments_

Returns a TextSegments object initialized from jsonString.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| jsonString | _string_ | - |

## TransitionFactory — Static Methods

### createVideoTransition

25.0

_VideoTransition_

Builds a new video filter component from the supplied matchName

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| matchName | _string_ | - |

### getVideoTransitionMatchNames

25.0

_string[]_

Returns a promise that resolves with an array of video transition matchnames

## UniqueSerializeable — Static Methods

### cast

25.0

_UniqueSerializeable_

Uses the provided serializable input (ex. ProjectItem) as UniqueSerializeable

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | [_ProjectItem_](uxp-classes-4.md) or [_ClipProjectItem_](uxp-classes-2.md) or [_FolderItem_](uxp-classes-3.md) or [_Sequence_](uxp-classes-5.md) | - |

### UniqueSerializeable — Instance Methods

### getUniqueID

25.0

_Guid_

Returns the serializeable object's unique ID

## Utils — Static Methods

### isAEInstalled

25.0

_boolean_

Reports whether AE is installed.

## VideoClipTrackItem — Instance Methods

### createAddVideoTransitionAction

25.0

_Action_

Creates an action that adds a transition to the sequence

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| videoTransition | [_TransitionFactory_](uxp-classes-6.md) | Transition supplied by `TransitionFactory`. |
| addTransitionOptionsProperties | [_AddTransitionOptions_](uxp-classes.md) | - |

### createMoveAction

25.0

_Action_

Produces an action that shifts the track item's inPoint to a new time by a seconds-based offset.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createRemoveVideoTransitionAction

25.0

_Action_

Returns true when trackItem has a transition

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| transitionPosition | [_Constants.TransitionPosition_](uxp-ppro-reference.md) | Start or end transition position |

### createSetDisabledAction

25.0

_Action_

Produces an action for toggling trackItem disabled state

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| disabled | _boolean_ | - |

### createSetEndAction

25.0

_Action_

Creates an action that sets the sequence end time

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetInPointAction

25.0

_Action_

Builds SetInPointAction so the track item's in point is set against the referenced project item's start time

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetNameAction

25.0

_Action_

Produces an action that changes the trackItem name

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inName | _string_ | - |

### createSetOutPointAction

25.0

_Action_

Builds SetOutPointAction so the track item's out point is set against the referenced project item's start time

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetStartAction

25.0

_Action_

Creates an action that sets the sequence start time

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### getComponentChain

25.0

_VideoComponentChain_

Returns the VideoComponentChain

### getDuration

25.0

_TickTime_

Returns this track item's duration timecode, measured from the sequence start.

### getEndTime

25.0

_TickTime_

Returns a TickTime object for this track item's ending sequence time against the sequence start.

### getInPoint

25.0

_TickTime_

Returns a TickTime object for the track item's in point, using the referenced project item's start as the baseline.

### getIsSelected

25.0

_boolean_

Returns whether trackItem is selected

### getMatchName

25.0

_string_

Returns this trackItem's internal matchname value

### getMediaType

25.0

_Guid_

Returns the UUID for this track item's underlying media type

### getName

25.0

_string_

Returns trackItem's display name

### getOutPoint

25.0

_TickTime_

Returns a TickTime object for the track item's out point, using the referenced project item's start as the baseline.

### getProjectItem

25.0

_ProjectItem_

Returns this track item's project item.

### getSpeed

25.0

_number_

Returns the trackItem speed value

### getStartTime

25.0

_TickTime_

Returns a TickTime object for this track item's starting sequence time from the sequence origin.

### getTrackIndex

25.0

_number_

Gives the index of the track that contains this track item

### getType

25.0

_number_

Provides the index for this track item's type.

### isAdjustmentLayer

25.0

_boolean_

Returns true for adjustment-layer trackitem instances

### isDisabled

25.0

_boolean_

Returns true for muted/disabled trackitem instances

### isSpeedReversed

25.0

_number_

Returns true for reversed trackitem instances

## VideoComponentChain — Instance Methods

### createAppendComponentAction

25.0

_Action_

Creates and returns an action for appending a component

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| component | [_Component_](uxp-classes-2.md) or [_VideoFilterComponent_](https://raw.githubusercontent.com/ppro-reference/classes/videofiltercomponent/index.md) | Component for the video filter |

### createInsertComponentAction

25.0

_Action_

Creates and returns an action for inserting a component

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| component | [_Component_](uxp-classes-2.md) or [_VideoFilterComponent_](https://raw.githubusercontent.com/ppro-reference/classes/videofiltercomponent/index.md) | Component for the video filter |
| componentInsertionIndex | _number_ | Insertion index for the component |

### createRemoveComponentAction

25.0

_Action_

Creates and returns an action for removing a component

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| component | [_Component_](uxp-classes-2.md) or [_VideoFilterComponent_](https://raw.githubusercontent.com/ppro-reference/classes/videofiltercomponent/index.md) | Component for the video filter |

### getComponentAtIndex

25.0

_Component_

Returns the component at the requested index

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| componentIndex | _number_ | - |

### getComponentCount

25.0

_number_

Returns how many components are in the component chain

## VideoFilterFactory — Static Methods

### createComponent

25.0

_VideoFilterComponent_

Builds a new video filter component from the supplied matchName

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| matchName | _string_ | Match name for the component to create; examples include 'PR.ADBE Solarize', 'AE.ADBE Mosaic' etc.. |

### getDisplayNames

25.0

_string[]_

Returns video filter display names as an array

### getMatchNames

25.0

_string[]_

Returns video filter matchNames as an array

## VideoTrack — Instance Methods

### getIndex

25.0

_number_

Index of this track inside its group.

### getMediaType

25.0

_Guid_

UUID for this track's underlying media type

### getTrackItems

25.0

_VideoClipTrackItem[]_

Returns VideoClipTrackItem entries for the requested track item type

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItemType | [_Constants.TrackItemType_](uxp-ppro-reference.md) | Allowed values: Empty (0), Clip (1), Transition (2), Preview (3), or Feedback (4) |
| includeEmptyTrackItems | _boolean_ | - |

### isMuted

25.0

_boolean_

Returns the track mute state

### setMute

25.0

_boolean_

Sets whether the track is muted or unmuted

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| mute | _boolean_ | - |
