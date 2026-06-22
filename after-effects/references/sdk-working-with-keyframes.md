# Working With Keyframes, Adding Multiple Keyframes, Marker Streams, Mask Management ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Working With Keyframes; Adding Multiple Keyframes; Marker Streams; Mask Management; Mask Outlines; Mask Feathering; Working With Text Layers; Working With Text Outlines.

## Working With Keyframes

### AEGP Suites — Working With Keyframes

After Effects is built on keyframes. AEGPs (and...ssshh, don't tell anyone...effects) lean on this suite to insert, tweak, and delete keyframes from any stream that supports them.

### `AEGP_K`eyframeSuite3

Function

Purpose

`AEGP_G`etStreamNumKFs

```

Hands back how many keyframes sit on the given stream.

Returns AEGP_NumKF_NO_DATA when the stream can't take keyframes.

Bear in mind, too, that a stream lacking keyframes isn't automatically constant; expressions can still change it.

AEGP_GetStreamNumKFs(
  AEGP_StreamRefH  streamH,
  A_long           *num_kfsPL);
```

`AEGP_G`etKeyframeTime

```

Hands back the time of the named keyframe.

AEGP_GetKeyframeTime(
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  index,
  AEGP_LTimeMode      time_mode,
  A_Time              *timePT);
```

`AEGP_I`nsertKeyframe

```

Drops a keyframe onto the named stream (at the composition or layer time you specify).

The index of the new keyframe comes back.

Every index above the new one is now invalid (but you knew that). Should a keyframe already sit at that time, its values get updated.

AEGP_InsertKeyframe(
  AEGP_StreamRefH     streamH,
  AEGP_LTimeMode      time_mode,
  const A_Time        *timePT,
  AEGP_KeyframeIndex  *key_indexP);
```

`AEGP_D`eleteKeyframe

```

Removes the keyframe you name.

AEGP_DeleteKeyframe(
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index);
```

`AEGP_G`etNewKeyframeValue

```

Builds and fills an AEGP_StreamValue2 holding the stream's value at the keyframe's time.

The AEGP_StreamValue2 that comes back has to be disposed of with AEGP_DisposeStreamValue.

AEGP_GetNewKeyframeValue(
  AEGP_PluginID       plugin_id,
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  AEGP_StreamValue2   *valueP);
```

`AEGP_S`etKeyframeValue

```

Assigns the stream's value at the keyframe's time.

AEGP_SetKeyframeValue(
  AEGP_StreamRefH          streamH,
  AEGP_KeyframeIndex       index,
  const AEGP_StreamValue2  *valP);
```

`AEGP_G`etStreamValueDimensionality

```

Hands back how many dimensions the stream's value has.

AEGP_GetStreamValueDimensionality(
  AEGP_StreamRefH  streamH,
  A_short          *value_dimPS);
```

`AEGP_G`etStreamTemporalDimensionality

```

Hands back the stream's temporal dimensionality.

AEGP_GetStreamTemporalDimensionality(
  AEGP_StreamRefH  streamH,
  A_short          *t_dimPS);
```

`AEGP_G`etNewKeyframeSpatialTangents

```

Hands back the AEGP_StreamValue2s that capture the stream's tangential values at the keyframe's time.

The AEGP_StreamValue2s that come back have to be disposed of with AEGP_DisposeStreamValue.

AEGP_GetNewKeyframeSpatialTangents(
  AEGP_PluginID       plugin_id,
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  AEGP_StreamValue2   *in_tanP0,
  AEGP_StreamValue2   *out_tanP0);
```

`AEGP_S`etKeyframeSpatialTangents

```

Names the tangential AEGP_StreamValue2s to apply to the stream's value at the keyframe's time.

After Effects does not take ownership of the in and out tangent AEGP_StreamValue2s you pass, so you must dispose of them with AEGP_DisposeStreamValue.

AEGP_SetKeyframeSpatialTangents(
  AEGP_StreamRefH          streamH,
  AEGP_KeyframeIndex       key_index,
  const AEGP_StreamValue2  *in_tP0,
  const AEGP_StreamValue2  *out_tP0);
```

NOTE: Through `AEGP_K`eyframeSuite2 and earlier, this function gave back incorrect values for an effect point control stream or an anchor point, because it skipped multiplying them by the layer size. That multiplication now happens.

`AEGP_G`etKeyframeTemporalEase

```

Hands back the AEGP_KeyframeEases tied to the named dimension of the stream's value at the keyframe's time.

dimensionL ranges from 0 to (temporal_dimensionality -1).

AEGP_GetKeyframeTemporalEase(
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  A_long              dimensionL,
  AEGP_KeyframeEase   *in_easeP0,
  AEGP_KeyframeEase   *out_easeP0);
```

NOTE: to line the returned ease values up with what the After Effects UI shows, multiply them by the layer height.

`AEGP_S`etKeyframeTemporalEase

```

Names the AEGP_KeyframeEases to apply to the stream's value at the keyframe's time.

dimensionL ranges from 0 to (temporal_dimensionality -1).

Whatever AEGP_KeyframeEases you hand over, After Effects does not take ownership of them.

AEGP_SetKeyframeTemporalEase(
  AEGP_StreamRefH           streamH,
  AEGP_KeyframeIndex        key_index,
  A_long                    dimL,
  const AEGP_KeyframeEase   *in_P0,
  const AEGP_KeyframeEase   *outP0);
```

`AEGP_G`etKeyframeFlags

```

Hands back the flags presently set on the keyframe.

AEGP_GetKeyframeFlags(
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  AEGP_KeyframeFlags  *flagsP);
```

\*flagsP will be a combination of the following: - `AEGP_K`eyframeFlag*NONE - `AEGP_K`eyframeFlag*`TEMPORAL_CONTINUOUS` - `AEGP_K`eyframeFlag*`TEMPORAL_AUTOBEZIER` - `AEGP_K`eyframeFlag*`SPATIAL_CONTINUOUS` - `AEGP_K`eyframeFlag\_`SPATIAL_AUTOBEZIER` - `AEGP_K`eyframeFlag_ROVING

`AEGP_S`etKeyframeFlag

```

Turns on the named flag for the keyframe. Flags must be set individually.

AEGP_SetKeyframeFlag(
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  AEGP_KeyframeFlags  flag,
  A_Boolean           valueB);
```

`AEGP_G`etKeyframeInterpolation

```

Hands back the in and out AEGP_KeyframeInterpolationTypes for the named keyframe.

AEGP_GetKeyframeInterpolation(
  AEGP_StreamRefH                 streamH,
  AEGP_KeyframeIndex              key_index,
  AEGP_KeyframeInterpolationType  *inP0,
  AEGP_KeyframeInterpolationType  *outP0);
```

`AEGP_K`eyframeInterpolationType is one of the following: - `AEGP_K`eyInterp_NONE - `AEGP_K`eyInterp_LINEAR - `AEGP_K`eyInterp_BEZIER - `AEGP_K`eyInterp_HOLD

`AEGP_S`etKeyframeInterpolation

```

Names the in and out AEGP_KeyframeInterpolationTypes to apply to the given keyframe.

AEGP_SetKeyframeInterpolation(
  AEGP_StreamRefH                 streamH,
  AEGP_KeyframeIndex              key_index,
  AEGP_KeyframeInterpolationType  in_interp,
  AEGP_KeyframeInterpolationType  out_interp);
```

`AEGP_S`tartAddKeyframes

```

Lets After Effects know you're about to drop several keyframes onto the named stream. In return After Effects gives you an allocated, opaque AEGP_AddKeyframesInfoH for the calls below.

AEGP_StartAddKeyframes(
  AEGP_StreamRefH         streamH,
  AEGP_AddKeyframesInfoH  *akPH);
```

`AEGP_A`ddKeyframes

```

Drops a keyframe onto the named stream at the layer or composition time you specify.

Note: the stream's value itself is left untouched by this.

AEGP_AddKeyframes(
  AEGP_AddKeyframesInfoH  akH,
  AEGP_LTimeMode          time_mode,
  const A_Time            *timePT,
  A_long                  *indexPL);
```

`AEGP_S`etAddKeyframe

```

Assigns the value of the named keyframe.

AEGP_SetAddKeyframe(
  AEGP_AddKeyframesInfoH   akH,
  A_long                   indexL,
  const AEGP_StreamValue2  *valueP);
```

`AEGP_E`ndAddKeyframes

```

Signals to After Effects that you've finished adding keyframes.

AEGP_EndAddKeyframes(
  A_Boolean               addB,
  AEGP_AddKeyframesInfoH  akH);
```

|  |  |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

## Adding Multiple Keyframes

### AEGP Suites — Adding Multiple Keyframes

Every single call to `AEGP_I`nsertKeyframe() pushes the whole stream onto the undo stack.

For just one or two keyframes that's no concern. But if a keyframer is what you're building, you'll want to handle it the _right_ way.

Ahead of adding any keyframes, call the (very-appropriately-named) `AEGP_S`tartAddKeyframes and pass it an opaque `AEGP_A`ddKeyframesInfoH.

For every keyframe you want to add, first call `AEGP_A`ddKeyframes to fix the time it uses (and obtain the index of the freshly added keyframe), then call `AEGP_S`etAddKeyframe to name the value it uses.

When you're done, a call to `AEGP_E`ndAddKeyframes tells After Effects the moment has come to push the altered parameter stream onto the undo stack.

## Marker Streams

### AEGP Suites — Marker Streams

Direct editing of marker data is handled through `AEGP_M`arkerSuite.

### `AEGP_M`arkerSuite2

Function

Purpose

`AEGP_N`ewMarker

```

Allocates a fresh marker.

AEGP_NewMarker(
  AEGP_MarkerValP  *markerPP);
```

`AEGP_D`isposeMarker

```

Frees a marker.

AEGP_DisposeMarker(
  AEGP_MarkerValP  markerP);
```

`AEGP_D`uplicateMarker

```

Produces a duplicate of a marker (bet *that* caught you off guard, right?).

AEGP_DuplicateMarker(
  AEGP_MarkerValP  markerP,
  AEGP_MarkerValP  *new_markerP);
```

`AEGP_S`etMarkerFlag

```

Assigns a value to one of a marker's flags.

AEGP_SetMarkerFlag(
  AEGP_MarkerValP      markerP,
  AEGP_MarkerFlagType  flagType,
  A_Boolean            valueB);
```

At present, `AEGP_M`arkerFlagType takes one of these: - `AEGP_M`arkerFlag_NONE - `AEGP_M`arkerFlag_NAVIGATION

`AEGP_G`etMarkerFlag

```

Reads back the value (see above) for a particular AEGP_MarkerFlagType.

AEGP_GetMarkerFlag(
  AEGP_ConstMarkerValP  markerP,
  AEGP_MarkerFlagType   flagType
  A_Boolean             *valueBP);
```

`AEGP_G`etMarkerString

```

Fetches the UTF-16, NULL-terminated string held in the named marker field. The caller is responsible for freeing it with AEGP_FreeMemHandle.

AEGP_GetMarkerString(
  AEGP_PluginID          id,
  AEGP_ConstMarkerValP   markerP,
  AEGP_MarkerStringType  strType,
  AEGP_MemHandle         *unicodePH);
```

`AEGP_S`etMarkerString

```

Writes the given text into the chosen field of a marker.

AEGP_SetMarkerString(
  AEGP_MarkerValP        markerP,
  AEGP_MarkerStringType  strType,
  const A_u_short        *unicodeP,
  A_long                 lengthL);
```

`AEGP_C`ountCuePointParams

```

Reports how many cue point parameters are present.

AEGP_CountCuePointParams(
  AEGP_ConstMarkerValP  markerP,
  A_long                *paramsLP);
```

`AEGP_G`etIndCuePointParam

```

Hands back the cue point parameter at the given index (which must fall between 0 and (cue point params -1).

The handles returned are UTF-16, NULL-terminated strings, and the caller must free them with AEGP_FreeMemHandle.

AEGP_GetIndCuePointParam(
  AEGP_PluginID         id,
  AEGP_ConstMarkerValP  markerP,
  A_long                param_indexL,
  AEGP_MemHandle        *unicodeKeyPH,
  AEGP_MemHandle        *uni_ValuePH);
```

`AEGP_S`etIndCuePointParam

```

Assigns the supplied value to an indexed cue point parameter.

Here key_lengthL counts the unicode characters, while value_lenL gives the length of the value you supply.

The pointers unicode_KeyP and unicode_ValueP reference UTF-16 data.

AEGP_SetIndCuePointParam(
  AEGP_MarkerValP  markerP,
  A_long           param_idxL,
  const A_u_short  *unicode_KeyP,
  A_long           key_lengthL,
  const A_u_short  *unicode_ValueP,
  A_long           value_lengthL);
```

`AEGP_I`nsertCuePointParam

```

Adds a cue point parameter.

Follow this with AEGP_SetIndCuePointParam to populate its data.

AEGP_InsertCuePointParam(
  AEGP_MarkerValP  markerP,
  A_long           param_idxL);
```

`AEGP_D`eleteIndCuePointParam

```

Removes the cue point parameter found at the named index.

AEGP_DeleteIndCuePointParam(
  AEGP_MarkerValP  markerP,
  A_long           param_idxL);
```

`AEGP_S`etMarkerDuration

```

AEGP_SetMarkerDuration(
  AEGP_MarkerValP  markerP,
  const A_Time     *durationPT);
```

`AEGP_G`etMarkerDuration

```

AEGP_GetMarkerDuration(
  AEGP_ConstMarkerValP  markerP,
  A_Time                *durationPT);
```

| --- | --- |

## Mask Management

### AEGP Suites — Mask Management

Reach, edit, and remove the masks belonging to a layer.

### `AEGP_M`askSuite6

Function

Purpose

`AEGP_G`etLayerNumMasks

```

Tallies how many masks a layer carries,

AEGP_GetLayerNumMasks(
  AEGP_LayerH  aegp_layerH,
  A_long       *num_masksPL);
```

`AEGP_G`etLayerMaskByIndex

```

Pass a layer handle plus a mask index and you get back a pointer to the mask handle. Release that handle through AEGP_DisposeMask().

AEGP_GetLayerMaskByIndex(
  AEGP_LayerH    aegp_layerH,
  A_long         mask_indexL,
  AEGP_MaskRefH  *maskPH);
```

`AEGP_D`isposeMask

```

Release a mask handle.

AEGP_DisposeMask(
  AEGP_MaskRefH  maskH);
```

`AEGP_G`etMaskInvert

```

From a mask handle, reports whether that mask is inverted.

AEGP_GetMaskInvert(
  AEGP_MaskRefH  maskH,
  A_Boolean      *invertPB);
```

`AEGP_S`etMaskInvert

```

Toggles a mask's inverted state.

AEGP_SetMaskInvert(
  AEGP_MaskRefH  mask_refH,
  A_Boolean      invertB);
```

`AEGP_G`etMaskMode

```

From a mask handle, gives back the mask's present mode.

PF_MaskMode_NONE has no effect, while PF_MaskMode_ADD is what you get by default.

- PF_MaskMode_NONE

- PF_MaskMode_ADD

- PF_MaskMode_SUBTRACT

- PF_MaskMode_INTERSECT

- PF_MaskMode_LIGHTEN

- PF_MaskMode_DARKEN

- PF_MaskMode_DIFFERENCE

AEGP_GetMaskMode(
  AEGP_MaskRefH  maskH,
  PF_MaskMode    *modeP);
```

`AEGP_S`etMaskMode

```

Assigns the mode for the supplied mask.

AEGP_SetMaskMode(
  AEGP_MaskRefH  maskH,
  PF_MaskMode    mode);
```

`AEGP_G`etMaskMotionBlurState

```

Reads the motion blur option for the named mask.

AEGP_GetMaskMotionBlurState(
  AEGP_MaskRefH   mask_refH,
  AEGP_MaskMBlur  *blur_stateP);
```

The value of `AEGP_M`askMBlur is one of these: - `AEGP_M`askMBlur\_`SAME_AS_LAYER` - `AEGP_M`askMBlur_OFF - `AEGP_M`askMBlur_ON

`AEGP_S`etMaskMotionBlurState

```

New in CS6. Assigns the motion blur option for the named mask.

AEGP_SetMaskMotionBlurState(
  AEGP_MaskRefH   mask_refH,
  AEGP_MaskMBlur  blur_state);
```

`AEGP_G`etMaskFeatherFalloff

```

New in CS6. Reports the feather falloff kind for the named mask, being either AEGP_MaskFeatherFalloff_SMOOTH or AEGP_MaskFeatherFalloff_LINEAR.

AEGP_SetMaskMotionBlurState(
  AEGP_MaskRefH            mask_refH,
  AEGP_MaskFeatherFalloff  *feather_falloffP);
```

`AEGP_S`etMaskFeatherFalloff

```

Assigns the feather falloff kind for the named mask.

AEGP_SetMaskMotionBlurState(
  AEGP_MaskRefH            mask_refH,
  AEGP_MaskFeatherFalloff  feather_falloff);
```

`AEGP_G`etMaskName

Removed in CS4. As a replacement, reach for `AEGP_G`etNewStreamRefForMask together with the Dynamic Stream Suite's name functions.

`AEGP_S`etMaskName

`AEGP_G`etMaskID

```

Looks up the AEGP_MaskIDVal tied to the given AEGP_MaskRefH, so the mask can be identified uniquely.

AEGP_GetMaskID(
  AEGP_MaskRefH   mask_refH,
  AEGP_MaskIDVal  *id_valP);
```

`AEGP_C`reateNewMask

```

Adds a fresh mask, having no nodes, to the referenced AEGP_LayerH. You get back the new mask's index.

AEGP_CreateNewMask(
  AEGP_LayerH    layerH,
  AEGP_MaskRefH  *mask_refPH,
  A_long         *mask_indexPL0);
```

`AEGP_D`eleteMaskFromLayer

```

AEGP_DeleteMaskFromLayer(
  AEGP_MaskRefH  mask_refH);
```

NOTE: As of 6.5, deleting a mask whose stream (or a child stream) is selected will set the composition's current selection to NULL.

`AEGP_G`etMaskColor

```

Reads back the color assigned to the named mask.

AEGP_GetMaskColor(
  AEGP_MaskRefH  mask_refH,
  AEGP_ColorVal  *colorP);
```

`AEGP_S`etMaskColor

```

Assigns a color to the named mask.

AEGP_SetMaskColor(
  AEGP_MaskRefH        mask_refH,
  const AEGP_ColorVal  *colorP);
```

`AEGP_G`etMaskLockState

```

Reads back the lock state of the named mask.

AEGP_GetMaskLockState(
  AEGP_MaskRefH  mask_refH,
  A_Boolean      *is_lockedPB);
```

`AEGP_S`etMaskLockState

```

Assigns the lock state of the named mask.

AEGP_SetMaskLockState(
  AEGP_MaskRefH  mask_refH,
  A_Boolean      lockB);
```

`AEGP_G`etMaskIsRotoBezier

```

Tells you whether the given mask serves as a rotobezier.

AEGP_GetMaskIsRotoBezier(
  AEGP_MaskRefH  mask_refH,
  A_Boolean      *is_roto_bezierPB);
```

`AEGP_S`etMaskIsRotoBezier

```

Chooses whether a given mask should act as a rotobezier.

AEGP_SetMaskIsRotoBezier(
  AEGP_MaskRefH  mask_refH,
  A_Boolean      *is_roto_bezierPB);
```

`AEGP_D`uplicateMask

```

Copies a given AEGP_MaskRefH. The caller has to dispose of the copy.

AEGP_DuplicateMask(
  AEGP_MaskRefH  orig_mask_refH,
  AEGP_MaskRefH  *dupe_mask_refPH);
```

| --- | --- |

## Mask Outlines

### AEGP Suites — Mask Outlines

While the Mask Suite above reports which masks sit on a layer, it stops short of describing each mask's internals.

That gap exists because After Effects has to do work to surface those details; they are not simply sitting in memory.

To reach that data, plug-ins turn to this Mask Outline Suite.

### `AEGP_M`askOutlineSuite3

Function

Purpose

`AEGP_I`sMaskOutlineOpen

```

Given a mask outline pointer (which you can get from the Stream Suite), tells whether the mask path is open or closed.

AEGP_IsMaskOutlineOpen(
  AEGP_MaskOutlineVal  *mask_outlineP,
  A_Boolean            *openPB);
```

`AEGP_S`etMaskOutlineOpen

```

Assigns the open state for the given mask outline.

AEGP_SetMaskOutlineOpen(
  AEGP_MaskOutlineValH  mask_outlineH,
  A_Boolean             openB);
```

`AEGP_G`etMaskOutlineNumSegments

```

From a mask outline pointer, reports how many segments the path contains.

num_segmentsPL is the total number of segments [0...N-1].

AEGP_GetMaskOutlineNumSegments(
  AEGP_MaskOutlineVal  *mask_outlineP,
  A_long               *num_segmentsPL);
```

`AEGP_G`etMaskOutlineVertexInfo

```

Takes a mask outline pointer plus a point between 0 and the segment total.

On closed mask paths, vertex[0] matches vertex[num_segments].

AEGP_GetMaskOutlineVertexInfo(
  AEGP_MaskOutlineVal  *mask_outlineP,
  A_long               which_pointL,
  AEGP_MaskVertex      *vertexP);
```

`AEGP_S`etMaskOutlineVertexInfo

```

Writes the vertex data for a given index.

Vertex 0 behaves specially: its in tangent actually sets the out tangent of the outline's final vertex.

Naturally, which_pointL has to be valid for the mask outline, otherwise the function returns an error.

AEGP_SetMaskOutlineVertexInfo(
  AEGP_MaskOutlineValH  mask_outlineH,
  AEGP_VertexIndex      which_pointL,
  AEGP_MaskVertex       *vertexP);
```

`AEGP_C`reateVertex

```

Inserts a vertex at the index position.

Every vertex that previously held an AEGP_VertexIndex at position or higher has its index bumped up by one.

AEGP_CreateVertex(
  AEGP_MaskOutlineValH  mask_outlineH,
  AEGP_VertexIndex      position);.
```

NOTE: Each mask is required to have a minimum of one vertex.

`AEGP_D`eleteVertex

```

Takes a vertex away from a mask.

AEGP_DeleteVertex(
  AEGP_MaskOutlineValH  mask_outlineH,
  AEGP_VertexIndex      index);
```

`AEGP_G`etMaskOutlineNumFeathers

```

New in CS6.

AEGP_DeleteVertex(
  AEGP_MaskOutlineValH  mask_outlineH,
  A_long                *num_feathersPL);
```

`AEGP_G`etMaskOutlineFeatherInfo

```

New in CS6.

AEGP_GetMaskOutlineFeatherInfo(
  AEGP_MaskOutlineValH  mask_outlineH,
  AEGP_FeatherIndex     which_featherL,
  AEGP_MaskFeather      *featherP);
```

`AEGP_S`etMaskOutlineFeatherInfo

```

New in CS6. The feather has to exist already; if needed, call AEGP_CreateMaskOutlineFeather first.

AEGP_SetMaskOutlineFeatherInfo(
  AEGP_MaskOutlineValH    mask_outlineH,
  AEGP_VertexIndex        which_featherL,
  const AEGP_MaskFeather  *featherP);
```

`AEGP_C`reateMaskOutlineFeather

```

New in CS6. The new feather's index comes back in insert_positionP.

AEGP_CreateMaskOutlineFeather(
  AEGP_MaskOutlineValH    mask_outlineH,
  const AEGP_MaskFeather  *featherP0,
  AEGP_FeatherIndex       *insert_positionP);
```

`AEGP_D`eleteMaskOutlineFeather

```

New in CS6.

AEGP_DeleteMaskOutlineFeather(
  AEGP_MaskOutlineValH  mask_outlineH,
  AEGP_FeatherIndex     index);
```

| --- | --- |

## Mask Feathering

### AEGP Suites — Mask Feathering

New for CS6, feathering can be applied to masks.

`AEGP_M`askFeather is defined as follows:

```
typedef struct {
    A_long                  segment;          // mask segment where feather is
    PF_FpLong               segment_sF;       // 0-1: feather location on segment
    PF_FpLong               radiusF;          // negative value allowed if type == AEGP_MaskFeatherType_INNER
    PF_FpShort              ui_corner_angleF; // 0-1: angle of UI handle on corners
    PF_FpShort              tensionF;         // 0-1: tension of boundary at feather pt
    AEGP_MaskFeatherInterp  interp;
    AEGP_MaskFeatherType    type;
} AEGP_MaskFeather;
```

`AEGP_M`askFeatherInterp resolves to either `AEGP_M`askFeatherInterp*NORMAL or `AEGP_M`askFeatherInterp*`HOLD_CW`.

`AEGP_M`askFeatherType resolves to either `AEGP_M`askFeatherType_OUTER or `AEGP_M`askFeatherType_INNER.

Through this suite, AEGPs can read and write the text carried by text layers.

Note: as a starting point, obtain an `AEGP_T`extDocumentH by calling `AEGP_G`etLayerStreamValue, above, passing `AEGP_S`treamType\_`TEXT_DOCUMENT` for the `AEGP_S`treamType.

## Working With Text Layers

### AEGP Suites — Working With Text Layers

Through this suite, AEGPs can read and write the text carried by text layers.

### `AEGP_T`extDocumentSuite1

Function

Purpose

`AEGP_G`etNewText

```

Fetches the UTF-16, NULL-terminated string in use by the AEGP_TextDocumentH.

Note: After Effects allocates the AEGP_MemHandle, so your plug-in is responsible for releasing it with AEGP_FreeMemHandle when finished.

AEGP_GetNewText(
  AEGP_PluginID       id,
  AEGP_TextDocumentH  text_docH,
  AEGP_MemHandle      *unicodePH);
```

`AEGP_S`etText

```

Sets which text the AEGP_TextDocumentH should use.

AEGP_SetText(
  AEGP_TextDocumentH  text_docH,
  const A_u_short     *unicodePS,
  long                lengthL);
```

| --- | --- |

## Working With Text Outlines

### AEGP Suites — Working With Text Outlines

Through the `AEGP_T`extLayerSuite you can reach the real outlines of the text that text layers display.

After you hold a path, `PF_P`athQuerySuite1 and `PF_P`athDataSuite let you work with it.

### `AEGP_T`extLayerSuite1

Function

Purpose

`AEGP_G`etNewTextOutlines

```

Allocates a handle to the AEGP_TextOutlinesHs that go with the named layer and returns it.

When layerH has no associated AEGP_TextOutlinesHs (that is, it isn't a text layer), outlinesPH comes back NULL.

AEGP_GetNewTextOutlines(
  AEGP_LayerH         layerH,
  const A_Time        *layer_timePT,
  AEGP_TextOutlinesH  *outlinesPH);
```

`AEGP_D`isposeTextOutlines

```

Free those outlines we allocated for you!

AEGP_DisposeTextOutlines(
  AEGP_TextOutlinesH  outlinesH);
```

`AEGP_G`etNumTextOutlines

```

Reports the count of text outlines on the layer.

AEGP_GetNumTextOutlines(
  AEGP_TextOutlinesH  outlinesH,
  A_long              *num_otlnsPL);
```

`AEGP_G`etIndexedTextOutline

```

Gives back a PF_PathOutlinePtr for the named text outline.

AEGP_GetIndexedTextOutline(
  AEGP_TextOutlinesH  outlinesH,
  A_long              path_indexL,
  PF_PathOutlinePtr   *pathPP);
```

| --- | --- |
