# Addtransitionoptions, Application, Apppreference, Audiocliptrackitem ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: AddTransitionOptions — Properties; Application — Properties; AppPreference — Static Methods; AudioClipTrackItem — Instance Methods; AudioComponentChain — Instance Methods; AudioFilterFactory — Static Methods; AudioTrack — Properties; CaptionTrack — Instance Methods.

## AddTransitionOptions — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| applyToStart | _boolean_ | R | 25.0 | Reports whether the transition targets the start or end of trackitem |
| forceSingleSided | _boolean_ | R | 25.0 | Reports whether the transition uses one side or both sides |
| transitionAlignment | _number_ | R | 25.0 | Returns transitionAlignment for the transition |
| duration | _TickTime_ | R | 25.0 | Returns transition duration |

### AddTransitionOptions — Instance Methods

### setApplyToStart

25.0

_AddTransitionOptions_

Configures whether the transition targets trackitem start or trackitem end

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| applyToStart | _boolean_ | - |

### setDuration

25.0

_AddTransitionOptions_

Configures transition duration

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | Duration value expressed in TickTime |

### setForceSingleSided

25.0

_AddTransitionOptions_

Configures whether the transition targets a single side or both sides

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| forceSingleSided | _boolean_ | - |

### setTransitionAlignment

25.0

_AddTransitionOptions_

Assigns transitionAlignment for the transition

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| transitionAlignment | _number_ | - |

## Application — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| version | _string_ | R | 25.0 | Running Premiere Pro application version string. |

## AppPreference — Static Methods

### getValue

25.0

_string_

Retrieves the preference value as native string data

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| preferenceKey | [_Constants.PreferenceKey_](uxp-ppro-reference.md) | App preference key to read |

### setValue

25.0

_boolean_

Writes a backend preference from the supplied property-key list. Parameters use the form <key, value (number, boolean or string), persistence flag>

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| key | [_Constants.PreferenceKey_](uxp-ppro-reference.md) | App preference key to update |
| value | _boolean_ or _string_ or _number_ | Preference-key value to write |
| persistenceFlag | [_Constants.PropertyType_](uxp-ppro-reference.md) | Whether the preference is persisted |

## AudioClipTrackItem — Instance Methods

### createMoveAction

25.0

_Action_

Produces an action that shifts the track item inPoint to a new time by a specified second count.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetDisabledAction

25.0

_Action_

Produces an action that toggles the trackItem enabled/disabled state

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| disabled | _boolean_ | - |

### createSetEndAction

25.0

_Action_

Creates an action for setting sequence end time

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetInPointAction

25.0

_Action_

Builds SetInPointAction; the in point is placed against the referenced project item's start time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | In-Point value in TickTime |

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

Builds SetOutPointAction; the out point is measured from the referenced project item's start time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | Out-Point value in TickTime |

### createSetStartAction

25.0

_Action_

Creates an action for setting sequence start time

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### getComponentChain

25.0

_AudioComponentChain_

Provides AudioComponentChain

### getDuration

25.0

_TickTime_

Provides timecode for this track item's duration from the sequence origin.

### getEndTime

25.0

_TickTime_

Provides a TickTime object for the track item's ending sequence time, measured from the sequence origin.

### getInPoint

25.0

_TickTime_

Provides a TickTime object for the track item in point measured from the referenced project item's start time.

### getIsSelected

25.0

_boolean_

Reports whether trackItem is selected.

### getMatchName

25.0

_string_

Provides this trackItem's internal matchname value

### getMediaType

25.0

_Guid_

Provides UUID for this track item's media type

### getName

25.0

_string_

Provides the trackItem display name

### getOutPoint

25.0

_TickTime_

Provides a TickTime object for the track item out point measured from the referenced project item's start time.

### getProjectItem

25.0

_ProjectItem_

Provides this track item's project item.

### getSpeed

25.0

_number_

Provides trackItem speed value

### getStartTime

25.0

_TickTime_

Provides a TickTime object for the track item's starting sequence time, measured from the sequence origin.

### getTrackIndex

25.0

_number_

Track index for the track that contains this track item

### getType

25.0

_number_

Numeric index for this track item's type.

### isAdjustmentLayer

25.0

_boolean_

Reports true for adjustment-layer trackitem

### isDisabled

25.0

_boolean_

Reports true for muted/disabled trackitem

### isSpeedReversed

25.0

_number_

Reports true for reversed trackitem

## AudioComponentChain — Instance Methods

### createAppendComponentAction

25.0

_Action_

Builds an action for appending a component

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| component | [_Component_](uxp-classes-2.md) or [_AudioFilterComponent_](https://raw.githubusercontent.com/ppro-reference/classes/audiofiltercomponent/index.md) | Component to append as an audio filter |

### createInsertComponentAction

25.0

_Action_

Builds an action for inserting a component

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| component | [_Component_](uxp-classes-2.md) or [_AudioFilterComponent_](https://raw.githubusercontent.com/ppro-reference/classes/audiofiltercomponent/index.md) | Component to insert as an audio filter |
| componentInsertionIndex | _number_ | Insertion position for the component |

### createRemoveComponentAction

25.0

_Action_

Builds an action for removing a component

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| component | [_Component_](uxp-classes-2.md) or [_AudioFilterComponent_](https://raw.githubusercontent.com/ppro-reference/classes/audiofiltercomponent/index.md) | Component to remove as an audio filter |

### getComponentAtIndex

25.0

_Component_

Returns the component located at the supplied index

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| componentIndex | _number_ | - |

### getComponentCount

25.0

_number_

Returns the count of components in the component chain

## AudioFilterFactory — Static Methods

### createComponentByDisplayName

25.0

_AudioFilterComponent_

Builds a new AudioFilterComponent from the supplied display name and trackItem so the audio filter can be applied

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| displayName | _string_ | - |
| inAudioClipTrackItem | [_AudioClipTrackItem_](uxp-classes.md) | - |

### getDisplayNames

25.0

_string[]_

Returns an array of audio filter displayNames

## AudioTrack — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| name | _string_ | R | 25.0 | Returns track name |
| id | _number_ | R | 25.0 | ID assigned to the track within TrackGroup |

### AudioTrack — Instance Methods

### getIndex

25.0

_number_

Track index inside this track's group.

### getMediaType

25.0

_Guid_

UUID for this track's underlying media type

### getTrackItems

25.0

_AudioClipTrackItem[]_

Provides AudioClipTrackItem[] entries selected by the requested TrackItemType

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItemType | [_Constants.TrackItemType_](uxp-ppro-reference.md) | Requested type, for example Constants.TrackItemType.CLIP, Constants.TrackItemType.TRANSITION etc.. |
| includeEmptyTrackItems | _boolean_ | - |

### isMuted

25.0

_boolean_

Returns track mute state

### setMute

25.0

_boolean_

Sets track mute state to muted/unmuted

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| mute | _boolean_ | - |

### AudioTrack — Events

| Name | Version | Description |
| --- | --- | --- |
| `EVENT_TRACK_CHANGED` | 25.0 | Track changed event object |
| `EVENT_TRACK_INFO_CHANGED` | 25.0 | Track info changed event object |
| `EVENT_TRACK_LOCK_CHANGED` | 25.0 | Track lock changed event object |

## CaptionTrack — Instance Methods

### getIndex

25.0

_number_

Track-group position for this track, expressed as its numeric index.

### getMediaType

25.0

_Guid_

UUID for the media type backing this track.

### getTrackItems

25.0

_[]_

Provides the track items on the given track for the requested media type.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| trackItemType | _number_ | - |
| includeEmptyTrackItems | _boolean_ | - |

### isMuted

25.0

_boolean_

Reports whether the track is currently muted.

### setMute

25.0

_boolean_

Applies the requested muted/unmuted state to the track.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| mute | _boolean_ | - |
