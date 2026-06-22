# Diving Into Streams, Okay What Did I Just Get, Layers, Masks ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Diving Into Streams!; Okay, What Did I Just Get?; Layers; Masks; Effects; Stream Suite; Dynamic Streams.

## Diving Into Streams!

### AEGP Suites — Diving Into Streams!

Practically everything within After Effects is a stream. Under the hood, effect parameters, layers, masks, and shapes all take the form of streams. Nearly every facet of every stream is reachable through the AEGP API.

Many kinds of objects can sit in the After Effects timeline, and each one carries a collection of parameters known as streams. No matter which object type they hang off, all streams are conceptually alike (and After Effects treats them alike, too. What changes is how you reach each kind of stream, owing to where it lives.

Once you've acquired a stream, it stands for a value that can shift across time. Some streams _cannot_ vary over time, and even a given stream might not be time-variant at the moment you access it.

The value of a stream can be reached in two ways. When a stream carries keyframes, you can turn to the Working With Keyframes. The values handed back won't take expressions into account. Note: within any expression, you can always reach the present keyframed value through the variable named value.

The other route is `AEGP_G`etNewStreamValue from `AEGP_S`treamSuite5, which samples the stream's value at whatever time you pick. When a stream has no expressions or keyframes, the time parameter doesn't matter, and what the function returns is effectively the stream's constant value. To assign such streams, use `AEGP_S`etStreamValue (which takes no time parameter).

Plenty of StreamSuite functions fill in a StreamH that your AEGP is obliged to dispose of when finished. After Effects hands you a copy of the values it has allocated, rather than a direct handle onto the original value. `AEGP_G`etNewLayerStream() is limited to streams whose values can be read without allocating any memory.

## Okay, What Did I Just Get?

### AEGP Suites — Okay, What Did I Just Get?

What a stream value amounts to is a big union, of which just one structure - the one matching the stream type - holds data. Notice how closely it resembles the `PF_P`aramDef.

```
typedef union {
    AEGP_FourDVal         four_d;
    AEGP_ThreeDVal        three_d;
    AEGP_TwoDVal          two_d;
    AEGP_OneDVal          one_d;
    AEGP_ColorVal         color;
    AEGP_ArbBlockVal      arbH;
    AEGP_MarkerValP       markerP;
    AEGP_LayerIDVal       layer_id;
    AEGP_MaskIDVal        mask_id;
    AEGP_MaskOutlineValH  mask;
    AEGP_TextDocumentH    text_documentH;
} AEGP_StreamVal2;
```

## Layers

### AEGP Suites — Layers

Parameters such as anchor point and position, the ones common to nearly every layer in AE, are read through `AEGP_G`etLayerStreamValue.

Rely on IsStreamLegal to work out whether a given layer actually offers that stream type.

## Masks

### AEGP Suites — Masks

A layer can carry more than one mask, so you reach each mask with `AEGP_G`etLayerMaskByIndex from `AEGP_M`askSuite6.

Unlike layers, masks have no streams of their own; they come with a dedicated enumeration instead. Get at their streams through `AEGP_G`etNewMaskStream from `AEGP_S`treamSuite5.

## Effects

### AEGP Suites — Effects

The count of streams/parameters they carry varies, and neither the ordering nor the definition of those is known at the time the AEGP gets written.

For that reason we can't hand you an enum to pick among them; you instead reach them by index, which is why GetNewEffectStreamByIndex from `AEGP_S`treamSuite5 exists.

## Stream Suite

### AEGP Suites — Stream Suite

Read and change the values held in a layer's streams here. When it comes to paint and text streams, turn to Dynamic Streams instead.

### `AEGP_S`treamSuite5

Function

Purpose

`AEGP_I`sStreamLegal

```

Works out whether the given stream suits the given layer.

AEGP_IsStreamLegal(
  AEGP_LayerH       layerH,
  AEGP_LayerStream  which_stream,
  A_Boolean*        is_legalP);
```

`AEGP_C`anVaryOverTime

```

For a given stream, reports whether that stream is time-variant (and therefore keyframe-able).

AEGP_CanVaryOverTime(
  AEGP_StreamRefH  streamH,
  A_Boolean        *can_varyPB);
```

`AEGP_G`etValidInterpolations

```

Hands back an AEGP_KeyInterpolationMask showing which interpolation types the AEGP_StreamRefH accepts.

AEGP_GetValidInterpolations(
  AEGP_StreamRefH            streamH,
  AEGP_KeyInterpolationMask  *valid_interpP);
```

What comes back in `AEGP_K`eyInterpolationMask is some mix of these: - `AEGP_K`eyInterpMask_NONE - `AEGP_K`eyInterpMask_LINEAR - `AEGP_K`eyInterpMask_BEZIER - `AEGP_K`eyInterpMask_HOLD - `AEGP_K`eyInterpMask_CUSTOM - `AEGP_K`eyInterpMask_ANY

`AEGP_G`etNewLayerStream

`AEGP_G`etEffectNumParamStreams

```

Get number of parameter streams associated with an effect.

AEGP_GetEffectNumParamStreams(
  AEGP_EffectRefH  effect_refH,
  A_long           *num_parmsPL);
```

`AEGP_G`etNewEffectStreamByIndex

```

Fetch a parameter stream belonging to an effect. The plug-in is responsible for disposing of streamPH.

AEGP_GetNewEffectStreamByIndex(
  AEGP_PluginID    id,
  AEGP_EffectRefH  effect_refH,
  PF_ParamIndex    param_index,
  AEGP_StreamRefH  *streamPH);
```

`AEGP_G`etNewMaskStream

```

Fetch a mask's stream. The stream has to be disposed of.

For further Mask functions, look as well at the AEGP_MaskSuite and AEGP_MaskOutlineSuite.

- AEGP_MaskStream_OUTLINE

- AEGP_MaskStream_OPACITY

- AEGP_MaskStream_FEATHER

- AEGP_MaskStream_EXPANSION

Useful for iteration:

- AEGP_MaskStream_BEGIN = AEGP_MaskStream_OUTLINE

- AEGP_MaskStream_END = AEGP_MaskStream_EXPANSION + 1

AEGP_GetNewMaskStream(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_MaskRefH    mask_refH,
  AEGP_MaskStream  which_stream,
  AEGP_StreamRefH  *mask_strmPH);
```

`AEGP_D`isposeStream

```

Release a stream (do so for every stream these functions hand to the plug-in).

AEGP_DisposeStream(
  AEGP_StreamRefH  streamH);
```

`AEGP_G`etNewMaskOpacity

```

Fetch the mask's opacity stream. The stream has to be disposed of.

AEGP_GetNewMaskOpacity(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_MaskH       maskH,
  PF_ParamIndex    param_index,
  AEGP_StreamRefH  *mask_opacity_streamPH);
```

`AEGP_G`etStreamName

```

Fetch the stream's name (either localized or forced to English). The handle of A_UTF16Char holds a null terminated UTF16 string and must be disposed of with AEGP_FreeMemHandle.

AEGP_GetStreamName(
  AEGP_PluginID    pluginID,
  AEGP_StreamRefH  streamH,
  A_Boolean        force_englishB,
  AEGP_MemHandle   *utf_stream_namePH);
```

NOTE: set force_englishB to TRUE and the default name wins out over any renaming the stream has undergone, whether that was done in code or by the user.

`AEGP_G`etStreamUnitsText

```

Fetch the stream's units rendered as text (localized or forced to English); unitsZ can run up to AEGP_MAX_STREAM_NAME_LEN + 1 long.

AEGP_GetStreamUnitsText(
  AEGP_StreamRefH  streamH,
  A_Boolean        force_englishB,
  A_char           *unitsZ);
```

`AEGP_G`etStreamProperties

```

Fetch the stream's flags, plus its minimum and maximum values (as floats) when the stream has mins and maxes.

StreamFlags values:

- AEGP_StreamFlag_NONE

- AEGP_StreamFlag_HAS_MIN

- AEGP_StreamFlag_HAS_MAX

AEGP_GetStreamProperties(
  AEGP_StreamRefH   streamH,
  AEGP_StreamFlags  *flagsP,
  A_FpLong          *minP0,
  A_FpLong          *maxP0);
```

`AEGP_I`sStreamTimevarying

```

Reports whether the stream is under the influence of expressions.

AEGP_IsStreamTimevarying(
  AEGP_StreamRefH  streamH,
  A_Boolean        *is_timevaryPB);
```

`AEGP_G`etStreamType

```

Reports a stream's type, that is, its dimension.

AEGP_GetStreamType(
  AEGP_StreamRefH  streamH,
  AEGP_StreamType  *stream_typeP);
```

- `AEGP_S`treamType*`NO_DATA` - `AEGP_S`treamType_Two`D_SPATIAL` - `AEGP_S`treamType_TwoD - `AEGP_S`treamType_ThreeD - `AEGP_S`treamType_Three`D_SPATIAL` - `AEGP_S`treamType_OneD - `AEGP_S`treamType_COLOR - `AEGP_S`treamType_ARB - `AEGP_S`treamType_MARKER - `AEGP_S`treamType*`LAYER_ID` - `AEGP_S`treamType*`MASK_ID` - `AEGP_S`treamType_MASK - `AEGP_S`treamType*`TEXT_DOCUMENT` NOTE: for position it always reports Three`D_S`patial, and that holds true no matter whether the layer is 3D.

`AEGP_G`etNewStreamValue

```

Fetch the stream's value at a time of your choosing. valueP has to be disposed of by the plug-in.

The AEGP_LTimeMode indicates whether the time is in compositions or layer time.

AEGP_GetNewStreamValue(
  AEGP_PluginID      aegp_plugin_id,
  AEGP_StreamRefH    streamH,
  AEGP_LTimeMode     time_mode,
  const A_Time       *timePT,
  A_Boolean          pre_exprB,
  AEGP_StreamValue2  *valueP);
```

`AEGP_D`isposeStreamValue

```

Release a stream value. The values handed to the plug-in must always be deallocated.

AEGP_DisposeStreamValue(
  AEGP_StreamValue2  *valueP);
```

`AEGP_S`etStreamValue

```

Permitted only while the stream is not time-variant.

AEGP_SetStreamValue(
  AEGP_PluginID      aegp_plugin_id,
  AEGP_StreamRefH    streamH,
  AEGP_StreamValue2  *valueP);
```

`AEGP_G`etLayerStreamValue

```

NOTE: As a convenience this works solely on streams whose data types are primitive; it won't serve AEGP_ArbBlockVal, AEGP_MarkerValH, or AEGP_MaskOutlineValH. Reach instead for AEGP_GetNewStreamValue, covered above, when handling those and the other complex types.

AEGP_GetLayerStreamValue(
  AEGP_LayerH       layerH,
  AEGP_LayerStream  which_stream,
  AEGP_LTimeMode    time_mode,
  const A_Time      *timePT,
  A_Boolean         pre_expB,
  AEGP_StreamVal    *stream_valP,
  AEGP_StreamType   *strm_typeP0);
```

`AEGP_G`etExpressionState

```

Works out whether expressions are turned on for the given AEGP_StreamRefH.

AEGP_GetExpressionState(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  streamH,
  A_Boolean        *enabledPB);
```

`AEGP_S`etExpressionState

```

Turns expressions on and off for the given AEGP_StreamRefH.

AEGP_SetExpressionState(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  streamH,
  A_Boolean        enabledB);
```

`AEGP_G`etExpression

```

Fetches the text of the expression. From suite version 5 onward (shipped in 15.0 and later), Unicode is now supported.

AEGP_GetExpression(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  streamH,
  AEGP_MemHandle   *unicodeHZ);
```

`AEGP_S`etExpression

```

Assigns the text of the expression. From suite version 5 onward (shipped in 15.0 and later), Unicode is now supported.

AEGP_SetExpression(
  AEGP_PluginID      aegp_plugin_id,
  AEGP_StreamRefH    streamH,
  const A_UTF16Char*  expressionP);
```

`AEGP_D`uplicateStreamRef

```

Makes a copy of a given AEGP_StreamRefH. Dispose of the duplicate.

AEGP_DuplicateStreamRef(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  streamH,
  AEGP_StreamRefH  *dup_streamPH);
```

| --- | --- |

## Dynamic Streams

### AEGP Suites — Dynamic Streams

Reaching into and editing paint and text streams is the job of `AEGP_D`ynamicStreamSuite.

Before calling functions that only operate on certain stream types, use `AEGP_G`etStreamGroupingType and `AEGP_G`etDynamicStreamFlags to pin down what the stream is.

Bear in mind as well that Stream Suite calls will frequently handle dynamic streams just fine. By contrast, this suite holds only the functions that are particular to dynamic streams.

### `AEGP_D`ynamicStreamSuite4

Function

Purpose

`AEGP_G`etNewStreamRefForLayer

```

Hands back the AEGP_StreamRefH that goes with the layer. You use this to kick off a recursive walk through the layer's streams.

AEGP_GetNewStreamRefForLayer(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_LayerH      layerH,
  AEGP_StreamRefH  *streamPH);
```

`AEGP_G`etNewStreamRefForMask

```

Hands back the AEGP_StreamRefH that goes with the mask.

AEGP_GetNewStreamRefForMask(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_MaskRefH    maskH,
  AEGP_StreamRefH  *streamPH);
```

`AEGP_G`etStreamDepth

```

Hands back how many sub-streams hang off the given AEGP_StreamRefH. A depth of 0 belongs to the starting layer.

AEGP_GetStreamDepth(
  AEGP_StreamRefH  streamH,
  A_long           *depthPL);
```

`AEGP_G`etStreamGroupingType

```

Hands back the grouping type for the given AEGP_StreamRefH.

AEGP_GetStreamGroupingType(
  AEGP_StreamRefH          streamH,
  AEGP_StreamGroupingType  *group_typeP);
```

The `AEGP_S`treamGroupingType you get back is one among these: - `AEGP_S`treamGroupingType*NONE - `AEGP_S`treamGroupingType_LEAF - `AEGP_S`treamGroupingType*`NAMED_GROUP` - `AEGP_S`treamGroupingType\_`INDEXED_GROUP`

`AEGP_G`etNumStreamsInGroup

```

Hands back how many streams belong to the given AEGP_StreamRefH.

Calling this on an AEGP_StreamRefH whose type is AEGP_StreamGroupingType_LEAF produces an error.

AEGP_GetNumStreamsInGroup(
  AEGP_StreamRefH  streamH,
  A_long           *num_streamsPL);
```

`AEGP_G`etDynamicStreamFlags

```

Hands back the flags for a given AEGP_StreamRefH.

AEGP_GetDynamicStreamFlags(
  AEGP_StreamRefH      streamH,
  AEGP_DynStreamFlags  *flagsP);
```

What the `AEGP_D`ynStreamFlags hands back is one among these: - `AEGP_D`ynStreamFlag*`ACTIVE_EYEBALL` signals that you can both read and write the stream. - `AEGP_D`ynStreamFlag_HIDDEN signals that the stream stays readable and writable yet might not show in the UI right now. - `AEGP_D`ynStreamFlag_DISABLED A read-only flag. Tells you whether the `AEGP_S`treamRefH appears grayed out in the UI. - Be aware that from CS5 onward this flag won't come back for a disabled parameter. - Look at `PF_PUI_DISABLED` in Parameter UI Flags instead. - `AEGP_D`ynStreamFlag_ELIDED A read-only flag. Marks the `AEGP_S`treamRefH as read-only and never shown to the user. Even so, its children remain visible and sit un-indented in the Timeline panel. - `AEGP_D`ynStreamFlag*`SHOWN_WHEN_EMPTY` New in CS6. A read-only flag. Says this stream group ought to appear even when it holds nothing. - `AEGP_D`ynStreamFlag\_`SKIP_REVEAL_WHEN_UNHIDDEN` New in CS6. A read-only flag. Says this stream property won't be revealed on its own once it is un-hidden.

`AEGP_S`etDynamicStreamFlag

```

Turns on the named flag for the AEGP_StreamRefH.

Note: flags must be set individually. Undoable if undoableB is TRUE.

AEGP_SetDynamicStreamFlag(
  AEGP_StreamRefH      streamH,
  AEGP_DynStreamFlags  one_flag,
  A_Boolean            undoableB,
  A_Boolean            setB);
```

You can lean on this call to show or hide parameters on the fly, by setting and clearing `AEGP_D`ynStreamFlag_HIDDEN. `AEGP_D`ynStreamFlag_DISABLED, however, can't be set.

`AEGP_G`etNewStreamRefByIndex

```

Hands back a sub-stream by index out of a given AEGP_StreamRefH. It won't work on streams of type AEGP_StreamGroupingType_LEAF.

AEGP_GetNewStreamRefByIndex(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  parent_groupH,
  A_long           indexL,
  AEGP_StreamRefH  *streamPH);
```

`AEGP_G`etNewStreamRefByMatchname

```

Hands back a sub-stream by match name out of a given AEGP_StreamRefH. Permitted only for AEGP_StreamGroupingType_NAMED_GROUP.

AEGP_GetNewStreamRefByMatchname(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  parent_groupH,
  const A_char     *match_nameZ,
  AEGP_StreamRefH  *streamPH);
```

A few useful stream names whose references you can retrieve: - `AEGP_S`treamGroupName*`MASK_PARADE` - `AEGP_S`treamGroupName*`MASK_ATOM` - `AEGP_S`treamName*`MASK_FEATHER` - `AEGP_S`treamName*`MASK_OPACITY` - `AEGP_S`treamName*`MASK_OFFSET` - `AEGP_S`treamGroupName*`EFFECT_PARADE` - `AEGP_S`treamGroupName*LAYER - `AEGP_S`treamGroupName*`AV_LAYER` - `AEGP_S`treamGroupName*`TEXT_LAYER` - `AEGP_S`treamGroupName*`CAMERA_LAYER` - `AEGP_S`treamGroupName*`LIGHT_LAYER` - `AEGP_S`treamGroupName_AUDIO - `AEGP_S`treamGroupName*`MATERIAL_OPTIONS` - `AEGP_S`treamGroupName*TRANSFORM - `AEGP_S`treamGroupName*`LIGHT_OPTIONS` - `AEGP_S`treamGroupName\_`CAMERA_OPTIONS`

`AEGP_D`eleteStream

```

Removes the named stream out of a stream grouping.

Keep in mind that the caller still has to dispose of any AEGP_StreamRefH it already acquired (allocated) through the API. Undoable.

Permitted only for children of type AEGP_StreamGroupingType_INDEXED_GROUP.

AEGP_DeleteStream(
  AEGP_StreamRefH  streamH);
```

Note: starting with 6.5, deleting a stream while it, or any of its child streams, is selected drives the current composition selection to NULL.

`AEGP_R`eorderStream

```

Gives the named AEGP_StreamRefH a new index. Undoable.

Permitted only for children of AEGP_StreamGroupingType_INDEXED_GROUP.

Once done, the AEGP_StreamRefH now points at the freshly reordered stream.

AEGP_ReorderStream(
  AEGP_StreamRefH  streamH
  A_long           new_indexL);
```

`AEGP_D`uplicateStream

```

Copies the named stream and tacks the copy onto the end of the stream group.

Undoable.

Permitted only for children of AEGP_StreamGroupingType_INDEXED_GROUP.

AEGP_DuplicateStream(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  streamH,
  A_long           *new_indexPL0);
```

`AEGP_S`etStreamName

```

Assigns a name to the given AEGP_StreamRefH. Undoable. nameZ points to a null terminated UTF-16 string.

Permitted only for children of AEGP_StreamGroupingType_INDEXED_GROUP.

NOTE: Pull the name back with force_englishB set to TRUE and what you receive is the stream's canonical, UNchanged name.

AEGP_SetStreamName(
  AEGP_StreamRefH    streamH,
  const A_UTF16Char  *nameZ);
```

Note: Apply this to the group of an effect stream when you want to rename an effect's display name.

`AEGP_C`anAddStream

```

Reports whether, right now, the API will let you add a stream.

AEGP_CanAddStream(
  AEGP_StreamRefH  group_streamH,
  const A_char     *match_nameZ,
  A_Boolean        *can_addPB);
```

`AEGP_A`ddStream

```

Puts a stream into the named stream group. Undoable. Permitted only for AEGP_StreamGroupingType_INDEXED_GROUP.

AEGP_AddStream(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  indxd_grp_streamH,
  const A_char     *match_nameZ,
  AEGP_StreamRefH  *streamPH0);
```

`AEGP_G`etMatchName

```

Hands back the match name for the named AEGP_StreamRefH.

Be aware this can be unlike the display name, which AEGP_GetStreamName, in AEGP_StreamSuite5, will retrieve.

nameZ can be up to AEGP_MAX_STREAM_MATCH_NAME_SIZE in length.

AEGP_GetMatchName(
  AEGP_StreamRefH  streamH,
  A_char           *nameZ);
```

`AEGP_G`etNewParentStreamRef

```

Hands back an AEGP_StreamRefH for the parent of the named AEGP_StreamRefH.

AEGP_GetNewParentStreamRef(
  AEGP_PluginID    plugin_id,
  AEGP_StreamRefH  streamH,
  AEGP_StreamRefH  *parentPH);
```

`AEGP_G`etStreamIsModified

```

Reports whether the named AEGP_StreamRefH has been modified.

Note: you can get the identical result straight from the After Effect user interface, by selecting the composition and pressing "UU".

AEGP_GetStreamIsModified(
  AEGP_StreamRefH  streamH,
  A_Boolean        *modifiedPB);
```

`AEGP_G`etStreamIndexInParent

```

Hands back the index of a given stream measured against its parent stream.

Permitted only for children of AEGP_StreamGroupingType_INDEXED_GROUP

AEGP_GetStreamIndexInParent(
  AEGP_StreamRefH  streamH,
  A_long           *indexPL);
```

Note

As noted in other places, `AEGP_S`treamRefHs do not survive from one function call to the next.

Reordering, adding, or removing streams may render invalid every `AEGP_S`treamRefH you grabbed earlier.

`AEGP_I`sSeparationLeader

```

Applies to leaf streams alone. Returns true when this stream is multidimensional and its dimensions are capable of being separated, even if they happen not to be separated at the moment.

Terminology: the stream eligible for separation is called a Leader, while a Follower is any one of the N automatic streams that map onto the Leader's N dimensions.

A Leader is not necessarily separated at all times; call AEGP_AreDimensionsSeparated to learn whether it is. As things stand in CS4, the layer's Position property is the sole stream that ever gets separated.

Don't bake that assumption into your code, since we expect to permit separation on additional streams down the road.

AEGP_IsSeparationLeader(
  AEGP_StreamRefH  streamH,
  A_Boolean        *leaderPB);
```

`AEGP_A`reDimensionsSeparated

```

Functions like AEGP_GetNewKeyframeValue that operate on keyframe indices will certainly not function on the Leader property; you'll have to fetch and act on the Followers yourself.

AEGP_AreDimensionsSeparated(
  AEGP_StreamRefH  streamH,
  A_Boolean        *separatedPB);
```

`AEGP_S`etDimensionsSeparated

```

Permitted only when AEGP_IsSeparationLeader() returns true.

AEGP_AreDimensionsSeparated(
  AEGP_StreamRefH  streamH,
  A_Boolean        *separatedPB);
```

`AEGP_G`etSeparationFollower

```

Fetch whichever Follower stream lines up with a given one of the Leader stream's dimensions.

dimS can range from 0 to AEGP_GetStreamValueDimensionality(lea der_streamH) - 1.

AEGP_GetSeparationFollower(
  AEGP_StreamRefH  leader_streamH
  A_short          dimS,
  AEGP_StreamRefH  *follower_streamPH);
```

`AEGP_I`sSeparationFollower

```

Applies to leaf streams alone.

Returns true when this stream is a one-dimensional property standing in for one of a Leader's dimensions.

The stream can be fetched from the Leader by way of AEGP_GetSeparationFollower().

AEGP_IsSeparationFollower(
  AEGP_StreamRefH  streamH
  A_Boolean        *followerPB);
```

`AEGP_G`etSeparationLeader

```

Applies to separation Followers alone; returns the Leader to which it belongs.

AEGP_GetSeparationLeader(
  AEGP_StreamRefH  follower_streamH,
  AEGP_StreamRefH  *leader_streamPH);
```

`AEGP_G`etSeparationDimension

```

Applies to separation Followers alone; returns which of the Leader's dimensions it lines up with.

AEGP_GetSeparationDimension(
  AEGP_StreamRefH  follower_streamH,
  A_short          *dimPS);
```

| --- | --- |
