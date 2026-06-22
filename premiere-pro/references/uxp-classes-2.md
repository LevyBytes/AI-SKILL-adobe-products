# Clipprojectitem, Closeprojectoptions, Color, Component ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ClipProjectItem — Properties; CloseProjectOptions — Properties; Color — Properties; Component — Instance Methods; ComponentParam — Properties; CompoundAction — Properties.

## ClipProjectItem — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| type | _number_ | R | 25.0 | Numeric type value for the Project Item. |
| name | _string_ | R | 25.0 | This project item's name. |

### ClipProjectItem — Static Methods

### cast

25.0

_ClipProjectItem_

Casts the supplied ProjectItem as a ClipProjectItem.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |

### ClipProjectItem — Instance Methods

### attachProxy

25.0

_boolean_

Links proxy or high resolution footage to projectItem; returns true when the operation succeeds. Not undoable.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| mediaPath | _string_ | - |
| isHiRes | _boolean_ | - |
| inMakeAlternateLinkInTeamProjects | _boolean_ | - |

### canChangeMediaPath

25.0

_boolean_

Reports true when Premiere Pro can replace the media path for this project item; otherwise reports false.

### canProxy

25.0

_boolean_

Reports whether this project item can have a proxy attached.

### changeMediaFilePath

25.0

_boolean_

Updates the media file path on projectItem; returns true when successful. Not undoable.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| newPath | _string_ | - |
| overrideCompatibilityCheck | _boolean_ | - |

### createClearInOutPointsAction

25.0

_Action_

Builds the action that clears the Project item in point or out point.

### createSetColorLabelAction

25.0

_Action_

Builds an action that assigns a color label to projectItem by index.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inColorLabelIndex | _number_ | - |

### createSetFootageInterpretationAction

25.0

_Action_

Builds an action that applies the footage interpretation object to the project item.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| footageInterpretation | [_FootageInterpretation_](uxp-classes-3.md) | - |

### createSetInOutPointsAction

25.0

_Action_

Builds an action that sets both the Project item in point and out point.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inPoint | [_TickTime_](uxp-classes-6.md) | - |
| outPoint | [_TickTime_](uxp-classes-6.md) | - |

### createSetInPointAction

25.0

_Action_

Provides an action that sets the Project item in point.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetInputLUTIDAction

25.0

_Action_

Builds an action that assigns the Input LUT Guid on media. Video Clips only.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| stringLUTID | _string_ | - |

### createSetNameAction

25.0

_Action_

Provides an action that renames projectItem.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inName | _string_ | - |

### createSetOfflineAction

25.0

_Action_

Provides an action that takes the media offline.

### createSetOutPointAction

25.0

_Action_

Provides an action that sets the Project item out point.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| tickTime | [_TickTime_](uxp-classes-6.md) | - |

### createSetOverrideFrameRateAction

25.0

_Action_

Provides an action that applies the override frame rate.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inOverriddenFrameRateValue | _number_ | - |

### createSetOverridePixelAspectRatioAction

25.0

_Action_

Provides an action that sets Override pixel aspect ratio.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inNumerator | _number_ | - |
| inDenominator | _number_ | - |

### createSetScaleToFrameSizeAction

25.0

_Action_

Provides an action that enables scale to frame.

### findItemsMatchingMediaPath

25.0

_ProjectItem[]_

Returns an array of project items whose media paths include matchString.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| matchString | _string_ | - |
| ignoreSubclips | _boolean_ | - |

### getColorLabelIndex

25.0

_number_

Reads projectItem's color label index.

### getComponentChain

25.0

_string_

Reads the component chain linked to this project item.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| mediaType | [_Constants.MediaType_](uxp-ppro-reference.md) | Use audio, video or data/caption for the media type. |

### getContentType

25.0

_Constants.ContentType_

Reads the Project item content type.

### getEmbeddedLUTID

25.0

_string_

Reads the GUID for the LUT embedded in the media.

### getFootageInterpretation

25.0

_FootageInterpretation_

Reads the project item's footage interpretation object.

### getInPoint

25.0

_TickTime_

Reads the Project item in point.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| mediaType | [_Constants.MediaType_](uxp-ppro-reference.md) | Use audio, video or data/caption for the media type. |

### getInputLUTID

25.0

_string_

Reads the Guid for the Input LUT override on media.

### getMedia

25.0

_Media_

Returns the media linked to clipProjectItem.

### getMediaFilePath

25.0

_string_

Reads the Project item media file path.

### getOriginatingProjectPath

25.0

_string_

Returns the originating project path linked to clipProjectItem.

### getOutPoint

25.0

_TickTime_

Reads the Project item out point.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| mediaType | [_Constants.MediaType_](uxp-ppro-reference.md) | Use audio, video or data/caption for the media type. |

### getProject

25.0

_Project_

Returns this projectItem's parent Project.

### getProxyPath

25.0

_string_

Returns the proxy path when this project item has an attached proxy.

### getSequence

25.0

_Sequence_

Reads the Project item sequence.

### hasProxy

25.0

_boolean_

Reports whether the project item already has an attached proxy.

### isMergedClip

25.0

_boolean_

Returns true when the clip Project item is a merged clip.

### isMulticamClip

25.0

_boolean_

Returns true when the clip Project item is a multicam clip.

### isOffline

25.0

_boolean_

Returns true when the media is offline.

### isSequence

25.0

_boolean_

Returns true when the project item is a sequence.

### refreshMedia

25.0

_boolean_

Refreshes the representation for media linked to the project item.

## CloseProjectOptions — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| promptIfDirty | _boolean_ | R | 25.0 | Reads whether project open/close shows a prompt when the project is dirty. |
| showCancelButton | _boolean_ | R | 25.0 | Reads whether project open/close displays the cancel button. |
| isAppBeingPreparedToQuit | _boolean_ | R | 25.0 | Reads whether the app is being prepared to quit during project open/close. |
| saveWorkspace | _boolean_ | R | 25.0 | Reads whether workspaces are saved during project open/close. |

### CloseProjectOptions — Instance Methods

### setIsAppBeingPreparedToQuit

25.0

_CloseProjectOptions_

Configures whether the app should prepare to quit during project open/close.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| isAppBeingPreparedToQuit | _boolean_ | - |

### setPromptIfDirty

25.0

_CloseProjectOptions_

Configures whether a dirty project triggers a prompt during project open/close.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| promptIfDirty | _boolean_ | - |

### setSaveWorkspace

25.0

_CloseProjectOptions_

Configures whether workspaces are saved during project open/close.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| isAppBeingPreparedToQuit | _boolean_ | - |

### setShowCancelButton

25.0

_CloseProjectOptions_

Configures whether project open/close displays the cancel button.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| showCancelButton | _boolean_ | - |

## Color — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| red | _number_ | W | 25.0 | Reads or sets the color object's red value. |
| green | _number_ | W | 25.0 | Reads or sets the color object's green value. |
| blue | _number_ | W | 25.0 | Reads or sets the color object's blue value. |
| alpha | _number_ | W | 25.0 | Reads or sets the color object's alpha value. |

### Color — Instance Methods

### equals

25.0

_boolean_

Returns true when colorObject matches this ColorObject.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| colorObject | [_Color_](uxp-classes-2.md) | - |

## Component — Instance Methods

### getDisplayName

25.0

_string_

The returned Promise resolves to this component's display name.

### getMatchName

25.0

_string_

The returned Promise resolves to this component's internal matchname.

### getParam

25.0

_ComponentParam_

Retrieves the parameter at the provided component index. Parameter indexes are zero-based, and each component alone defines the actual mapping.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| paramIndex | _number_ | - |

### getParamCount

25.0

_number_

Reports how many params the component contains.

## ComponentParam — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| displayName | _string_ | R | 25.0 | Returns this component param's display name. |

### ComponentParam — Instance Methods

### areKeyframesSupported

25.0

_boolean_

Returns a bool indicating whether this component parameter supports keyframes.

### createAddKeyframeAction

25.0

_Action_

Creates and returns an action object for adding a keyframe component.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inKeyFrame | [_Keyframe_](uxp-classes-3.md) | - |

### createKeyframe

25.0

_Keyframe_

Creates and returns a keyframe initialized from the ComponentParam's type plus the supplied value. Throws when the supplied value is incompatible with the component param type.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inValue | _number_ or _string_ or _boolean_ or [_PointF_](uxp-classes-4.md) or [_Color_](uxp-classes-2.md) | Input may be number, string, boolean, PointF, or Color depending on effect param type. |

### createRemoveKeyframeAction

25.0

_Action_

Provides an action that removes the keyframe at a specific time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inTime | [_TickTime_](uxp-classes-6.md) | - |
| UpdateUI | _boolean_ | - |

### createRemoveKeyframeRangeAction

25.0

_Action_

Provides an action that removes keyframes across a specific time range.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inTime | [_TickTime_](uxp-classes-6.md) | - |
| outTime | [_TickTime_](uxp-classes-6.md) | - |
| UpdateUI | _boolean_ | - |

### createSetInterpolationAtKeyframeAction

25.0

_Action_

Provides an action that changes a keyframe's interpolation mode at the given time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inTime | [_TickTime_](uxp-classes-6.md) | - |
| InterpolationMode | _number_ | - |
| UpdateUI | _boolean_ | - |

### createSetTimeVaryingAction

25.0

_Action_

Creates and returns an action object that makes the component time varying.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inTimeVarying | _boolean_ | - |

### createSetValueAction

25.0

_Action_

Creates and returns an action object for setting the value on a non-time varying component.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inKeyFrame | [_Keyframe_](uxp-classes-3.md) | - |
| inSafeForPlayback | _boolean_ | - |

### findNearestKeyframe

25.0

_Keyframe_

Finds the key nearest to the given time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inTime | [_TickTime_](uxp-classes-6.md) | - |
| outTime | [_TickTime_](uxp-classes-6.md) | - |

### findNextKeyframe

25.0

_Keyframe_

Finds the next keyframe after the given time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inTime | [_TickTime_](uxp-classes-6.md) | - |

### findPreviousKeyframe

25.0

_Keyframe_

Finds the previous keyframe before the given time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inTime | [_TickTime_](uxp-classes-6.md) | - |

### getKeyframeListAsTickTimes

25.0

_TickTime[]_

Returns this component param's keyframes as a list of TickTime values.

### getKeyframePtr

25.0

_Keyframe_

Returns the Keyframe at the supplied tickTime position.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| time | [_TickTime_](uxp-classes-6.md) | - |

### getStartValue

25.0

_Keyframe_

The returned promise resolves with the component param's start value (keyframe).

### getValueAtTime

25.0

_number | string | boolean | PointF | Color_

Reads component Param's value at the given time.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| time | [_TickTime_](uxp-classes-6.md) | Time used to read the component param value. |

### isTimeVarying

25.0

_boolean_

Returns true when the parameter value changes over time (for the duration of the item).

## CompoundAction — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| empty | _boolean_ | R | 25.0 | Indicates whether the compound action is empty. |

### CompoundAction — Instance Methods

### addAction

25.0

_boolean_

Adds an action into the compound action.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| action | [_Action_](https://raw.githubusercontent.com/ppro-reference/classes/action/index.md) | - |
