# Manage Layers, Layer Creation Notes, Communication With A Layer S Effects, Exploiting Effect Ui Behavior To Look Cool ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Manage Layers; Layer Creation Notes; Communication With A Layer's Effects; Exploiting Effect UI Behavior To Look Cool; StreamRefs And EffectRefs.

## Manage Layers

### AEGP Suites — Manage Layers

Details about the layers held inside a composition, plus how source times and layer times relate to one another, are exposed through `AEGP_L`ayerSuite.

Because manipulating layers is what nearly all After Effects work comes down to, this ranks among the biggest function suites the API offers.

### `AEGP_L`ayerSuite9

Function

Purpose

`AEGP_G`etCompNumLayers

```

Obtains the number of layers in a composition.

AEGP_GetCompNumLayers(
  AEGP_CompH  compH,
  A_long      *num_layersPL);
```

`AEGP_G`etCompLayerByIndex

```

Get a AEGP_LayerH from a composition. Zero is the foremost layer.

AEGP_GetCompLayerByIndex(
  AEGP_CompH   compH,
  A_long       layer_indexL,
  AEGP_LayerH  *layerPH);
```

`AEGP_G`etActiveLayer

```

Fetch the active layer. When a Layer or effect-controls palette holds focus, the active layer is the one belonging to that window's front-most tab.

When focus sits on a composition or timeline window instead, the active layer is whichever layer is selected, provided exactly one is; pick none or several and NULL comes back.

AEGP_GetActiveLayer(
  AEGP_LayerH  *layerPH);
```

`AEGP_G`etLayerIndex

```

Hands back the layer's index, where the composition's topmost layer sits at 0.

AEGP_GetLayerIndex(
  AEGP_LayerH  layerH,
  A_long       *layer_indexPL);
```

`AEGP_G`etLayerSourceItem

```

Get the AEGP_ItemH of the layer's source item.

AEGP_GetLayerSourceItem(
  AEGP_LayerH  layerH,
  AEGP_ItemH   *source_itemPH);
```

`AEGP_G`etLayerSourceItemID

```

Pulls back the ID belonging to the supplied AEGP_LayerH. It comes in handy when you're tracking down a particular layer's ID inside an AEGP_StreamVal.

AEGP_GetLayerSourceItemID(
  AEGP_LayerH  layerH,
  A_long       *source_idPL);
```

`AEGP_G`etLayerParentComp

```

Get the AEGP_CompH of the composition containing the layer.

AEGP_GetLayerParentComp(
  AEGP_LayerH  layerH,
  AEGP_CompH   *compPH);
```

`AEGP_G`etLayerName

```

Get the name of a layer.

Both utf_layer_namePH0 and utf_source_namePH0 point to null terminated UTF-16 strings. They must be disposed with AEGP_FreeMemHandle.

AEGP_GetLayerName(
  AEGP_PluginID   pluginID,
  AEGP_LayerH     layerH,
  AEGP_MemHandle  *utf_layer_namePH0,
  AEGP_MemHandle  *utf_source_namePH0);
```

`AEGP_G`etLayerQuality

```

Reads back a layer's quality setting.

AEGP_GetLayerQuality(
  AEGP_LayerH        layerH,
  AEGP_LayerQuality  *qualityP);
```

The quality value reported back is one among these flags: - `AEGP_L`ayerQual_NONE - `AEGP_L`ayerQual_WIREFRAME - `AEGP_L`ayerQual_DRAFT - `AEGP_L`ayerQual_BEST

`AEGP_S`etLayerQuality

```

Sets the quality of a layer (see flag values above). Undoable.

AEGP_SetLayerQuality(
  AEGP_LayerH        layerH,
  AEGP_LayerQuality  quality);
```

`AEGP_G`etLayerFlags

```

Reads back a layer's flags.

AEGP_GetLayerFlags(
  AEGP_LayerH      layerH,
  AEGP_LayerFlags  *layer_flagsP);
```

- `AEGP_L`ayerFlag*NONE - `AEGP_L`ayerFlag*`VIDEO_ACTIVE` - `AEGP_L`ayerFlag*`AUDIO_ACTIVE` - `AEGP_L`ayerFlag*`EFFECTS_ACTIVE` - `AEGP_L`ayerFlag*`MOTION_BLUR` - `AEGP_L`ayerFlag*`FRAME_BLENDING` - `AEGP_L`ayerFlag*LOCKED - `AEGP_L`ayerFlag_SHY - `AEGP_L`ayerFlag_COLLAPSE - `AEGP_L`ayerFlag*`AUTO_ORIENT_ROTATION` - `AEGP_L`ayerFlag*`ADJUSTMENT_LAYER` - `AEGP_L`ayerFlag*`TIME_REMAPPING` - `AEGP_L`ayerFlag*`LAYER_IS_3D` - `AEGP_L`ayerFlag*`LOOK_AT_CAMERA` - `AEGP_L`ayerFlag*`LOOK_AT_POI` - `AEGP_L`ayerFlag_SOLO - `AEGP_L`ayerFlag*`MARKERS_LOCKED` - `AEGP_L`ayerFlag*`NULL_LAYER` - `AEGP_L`ayerFlag*`HIDE_LOCKED_MASKS` - `AEGP_L`ayerFlag*`GUIDE_LAYER` - `AEGP_L`ayerFlag*`ENVIRONMENT_LAYER` - `AEGP_L`ayerFlag*`ADVANCED_FRAME_BLENDING`, True only if pixel motion frame blending is on for the layer. - `AEGP_L`ayerFlag*`SUBLAYERS_RENDER_SEPARATELY`, Reads or writes whether per-character 3D is turned on for a text layer. - `AEGP_L`ayerFlag\_`ENVIRONMENT_LAYER`, New in CS6.

`AEGP_S`etLayerFlag

```

Sets one layer flag at a time. Undoable.

AEGP_SetLayerFlag(
  AEGP_LayerH      layerH,
  AEGP_LayerFlags  single_flag,
  A_Boolean        valueB);
```

`AEGP_I`sLayerVideoReallyOn

```

Reports back whether the layer's video actually shows. The check is required because the 'solo' state of other layers in the comp matters; layers that aren't soloed still count as on.

AEGP_IsLayerVideoReallyOn(
  AEGP_LayerH  layerH,
  A_Boolean    *onPB);
```

`AEGP_I`sLayerAudioReallyOn

```

Takes into consideration the solo state of the comp's other layers.

AEGP_IsLayerAudioReallyOn(
  AEGP_LayerH  layerH,
  A_Boolean    *onPB);
```

`AEGP_G`etLayerCurrentTime

```

Fetches the current time, expressed in either layer or composition timespace. Rendering does not refresh this value.

NOTE: Layer time and composition time diverge whenever a layer begins at some point other than time 0, or carries a time-stretch away from 100%.

AEGP_GetLayerCurrentTime(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  A_Time          *curr_timePT);
```

`AEGP_G`etLayerInPoint

```

Fetches the moment of the first frame that is visible, given in either composition or layer time. When measured in layer time, in_pointPT comes back as 0.

AEGP_GetLayerInPoint(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  A_Time          *in_pointPT);
```

`AEGP_G`etLayerDuration

```

Fetches how long the layer runs, given in seconds, in either composition or layer time.

AEGP_GetLayerDuration(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  A_Time          *durationPT);
```

`AEGP_S`etLayerInPointAndDuration

```

Assigns both the in point and the duration of a layer, in either composition or layer time. Undo-able.

AEGP_SetLayerInPointAndDuration(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  const A_Time    *in_pointPT,
  const A_Time    *durationPT);
```

`AEGP_G`etLayerOffset

```

Fetches, in composition time, the gap between where the comp begins and layer time 0.

AEGP_GetLayerOffset(
  AEGP_LayerH  layerH,
  A_Time       *offsetPT);
```

`AEGP_S`etLayerOffset

```

Assigns, in composition time, the gap between the comp's start and the layer's first frame. Undoable.

AEGP_SetLayerOffset(
  AEGP_LayerH  layerH,
  A_Time       *offsetPT);
```

`AEGP_G`etLayerStretch

```

Reads back a layer's stretch factor.

AEGP_GetLayerStretch(
  AEGP_LayerH  layerH,
  A_Ratio      *stretchPRt);
```

`AEGP_S`etLayerStretch

```

Assigns a layer's stretch factor.

AEGP_SetLayerStretch(
  AEGP_LayerH  layerH,
  A_Ratio      *stretchPRt);
```

`AEGP_G`etLayerTransferMode

```

Reads back a layer's transfer mode.

AEGP_GetLayerTransferMode(
  AEGP_LayerH             layerH,
  AEGP_LayerTransferMode  *modeP);
```

`AEGP_S`etLayerTransferMode

```

Assigns a layer's transfer mode. Undoable.

AEGPSetLayerTransferMode(
  AEGP_LayerH             layerH,
  AEGP_LayerTransferMode  *modeP);
```

Beginning with 23.0, turning a layer into a track matte switches off the layer that is being matted, mirroring what happens when you perform the same action in the interface.

`AEGP_I`sAddLayerValid

```

Checks whether, at this moment, a particular item may legally be dropped into a composition.

No composition may be placed inside itself, nor inside any composition nested within it, and further situations can also block a successful add.

Skip this function before adding a layer and the outcome is undefined.

AEGP_IsAddLayerValid(
  AEGP_ItemH  item_to_addH,
  AEGP_CompH  into_compH,
  A_Boolean   *validPB);
```

`AEGP_A`ddLayer

```

Place an item into the composition, sitting on top of every other layer. Undo-able.

Use AEGP_IsAddLayerValid() first, to confirm that it's possible.

AEGP_AddLayer(
  AEGP_ItemH  item_to_addH,
  AEGP_CompH  into_compH,
  A_Boolean   *added_layerPH0);
```

`AEGP_R`eorderLayer

```

Rearranges how the layers are ordered. Undoable.

AEGP_ReorderLayer(
  AEGP_LayerH  layerH,
  A_long       layer_indexL);
```

To drop a layer at the bottom of the composition, supply layer_indexL = `AEGP_REORDER_LAYER_TO_END`

`AEGP_G`etLayerMaskedBounds

```

Supply a layer handle together with a time, and it hands back the boundary of the region left visible once masks are applied.

AEGP_GetLayerMaskedBounds(
  AEGP_LayerH   layerH,
  const A_Time  *comp_timePT,
  A_FloatRect   *boundsPR);
```

`AEGP_G`etLayerObjectType

```

Hands back what object type a layer is.

AEGP_GetLayerObjectType(
  AEGP_LayerH      layerH,
  AEGP_ObjectType  *object_type);
```

- `AEGP_O`bjectType_AV - `AEGP_O`bjectType_LIGHT - `AEGP_O`bjectType_CAMERA - `AEGP_O`bjectType_TEXT - `AEGP_O`bjectType_3`D_MODEL`, New in 24.4.

`AEGP_I`sLayer3D

```

Checks whether the footage item is a 3D layer. Every AV layer is one or the other, 2D or 3D.

AEGP_IsLayer3D(
  AEGP_LayerH  layerH,
  A_Boolean    *is_3DPB);
```

`AEGP_I`sLayer2D

```

Checks whether the footage item is a 2D layer. Every AV layer is one or the other, 2D or 3D.

AEGP_IsLayer2D(
  AEGP_LayerH  layerH,
  A_Boolean    *is_2DPB);
```

`AEGP_I`sVideoActive

```

Supply a layer and a composition time to learn whether that layer will render.

Time mode is either AEGP_LTimeMode_LayerTime or AEGP_LTimeMode_CompTime.

AEGP_IsVideoActive(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  A_Time          *comp_timePT,
  A_Boolean       *is_activePB);
```

`AEGP_I`sLayerUsedAsTrackMatte

```

Is the layer used as a track matte?

AEGP_IsLayerUsedAsTrackMatte(
  AEGP_LayerH  layerH,
  A_Boolean    fill_must_be_activeB,
  A_Boolean    *is_track_mattePB);
```

`AEGP_D`oesLayerHaveTrackMatte

```

Does this layer have a Track Matte?

AEGP_DoesLayerHaveTrackMatte(
  AEGP_LayerH  layerH,
  A_Boolean    *has_track_mattePB);
```

`AEGP_C`onvertCompToLayerTime

```

Take a time stated in composition space and get back the equivalent time measured against the layer's source footage.

AEGP_ConvertCompToLayerTime(
  AEGP_LayerH   layerH,
  const A_Time  *comp_timeP,
  A_Time        *layer_timeP);
```

`AEGP_C`onvertLayerToCompTime

```

Take a time stated in layer space and locate the matching time in composition space.

AEGP_ConvertLayerToCompTime(
  AEGP_LayerH   layerH,
  const A_Time  *layer_timePT,
  A_Time        *comp_timePT);
```

`AEGP_G`etLayerDancingRandValue

```

Relied upon by the dancing dissolve transfer function.

AEGP_GetLayerDancingRandValue(
  AEGP_LayerH   layerH,
  const A_Time  *comp_timePT,
  A_long        *rand_valuePL);
```

`AEGP_G`etLayerID

```

Hands back the layer's unique ID. For as long as the project exists, this ID stays the same.

AEGP_GetLayerID(
  AEGP_LayerH      layerH,
  AEGP_LayerIDVal  *id_valP);
```

`AEGP_G`etLayerToWorldXform

```

Pass a layer handle plus a time, and it returns the layer-to-world transformation matrix.

AEGP_GetLayerToWorldXform(
  AEGP_LayerH   aegp_layerH,
  const A_Time  *comp_timeP,
  A_Matrix4     *transform);
```

`AEGP_G`etLayerToWorldXformFromView

```

Pass a layer handle along with the current (composition) time and the view time you want, and it returns how the user's view and the layer translate between one another, adjusted for the composition's present aspect ratio.

AEGP_GetLayerToWorldXformFromView(
  AEGP_LayerH   aegp_layerH,
  const A_Time  *view_timeP,
  const A_Time  *comp_timeP,
  A_Matrix4     *transform);
```

`AEGP_S`etLayerName

```

Assigns a layer's name. Undo-able. new_nameZ points to a null terminated UTF-16 string.

AEGP_SetLayerName(
  AEGP_LayerH        aegp_layerH,
  const A_UTF16Char  *new_nameZ);
```

`AEGP_G`etLayerParent

```

Hands back the handle of a layer's parent (none when the layer has no parent).

AEGP_GetLayerParent(
  AEGP_LayerH  layerH,
  AEGP_LayerH  *parent_layerPH);
```

`AEGP_S`etLayerParent

```

Assigns the parent layer for a layer.

AEGP_SetLayerParent(
  AEGP_LayerH        layerH,
  const AEGP_LayerH  parent_layerH);
```

`AEGP_D`eleteLayer

```

Removes a layer. Three whole suite versions went by before a delete function showed up here, if you can believe that. We can hardly believe it either.

AEGP_DeleteLayer(
  AEGP_LayerH  layerH);
```

`AEGP_D`uplicateLayer

```

Duplicates the layer. Undoable.

AEGP_DuplicateLayer(
  AEGP_LayerH  orig_layerH,
  AEGP_LayerH  *dupe_layerPH);
```

`AEGP_G`etLayerFromLayerID

```

Hands back the AEGP_LayerH that goes with a particular AEGP_LayerIDVal (the value you obtain when reading an effect's layer parameter stream).

AEGP_GetLayerFromLayerID(
  AEGP_CompH       parent_compH,
  AEGP_LayerIDVal  id,
  AEGP_LayerH      *layerPH);
```

`AEGP_G`etLayerLabel

```

Reads back a layer's AEGP_LabelID.

AEGP_GetLayerLabel(
  AEGP_LayerH   layerH,
  AEGP_LabelID  *labelP);
```

`AEGP_S`etLayerLabel

```

Assigns a layer's AEGP_LabelID. Undoable.

AEGP_SetLayerLabel(
  AEGP_LayerH   layerH,
  AEGP_LabelID  label);
```

`AEGP_G`etLayerSamplingQuality

```

New in CC. Reads back a layer's sampling quality.

AEGP_GetLayerSamplingQuality(
  AEGP_LayerH                layerH,
  AEGP_LayerSamplingQuality  *label);
```

The sampling quality reported is one among these flags: - `AEGP_L`ayerSamplingQual_BILINEAR - `AEGP_L`ayerSamplingQual_BICUBIC

`AEGP_S`etLayerSamplingQuality

```

New in CC. Sets the sampling quality of a layer (see flag values above). The option is applied to the layer on its own, separate from layer quality.

To force it on, the layer quality must additionally be set to AEGP_LayerQual_BEST through AEGP_SetLayerQuality; without that, the chosen layer sampling quality takes effect only while layer quality sits at AEGP_LayerQual_BEST.

Undoable.

AEGP_SetLayerSamplingQuality(
  AEGP_LayerH                layerH,
  AEGP_LayerSamplingQuality  label);
```

`AEGP_G`etTrackMatteLayer

```

New in 23.0. Returns the track matte layer of layerH. Returns NULL if there is no track matte layer.

AEGP_GetTrackMatteLayer(
  const AEGP_LayerH          layerH,
  AEGP_LayerH                *track_matte_layerPH);
```

`AEGP_S`etTrackMatte

```

New in 23.0. Assigns both the track matte layer and the track matte type for layerH.

Track Matte Types:

- AEGP_TrackMatte_NO_TRACK_MATTE

- AEGP_TrackMatte_ALPHA

- AEGP_TrackMatte_NOT_ALPHA

- AEGP_TrackMatte_LUMA

- AEGP_TrackMatte_NOT_LUMA

Passing AEGP_TrackMatte_NO_TRACK_MATTE as the track matte type strips the track matte away.

AEGP_SetTrackMatte(
  AEGP_LayerH                layerH,
  const AEGP_LayerH          track_matte_layerH0,
  const AEGP_TrackMatte      track_matte_type);
```

`AEGP_R`emoveTrackMatte

```

New in 23.0. Removes the track matte layer of layerH.

AEGP_RemoveTrackMatte(
  AEGP_LayerH                layerH);
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
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

## Layer Creation Notes

### AEGP Suites — Layer Creation Notes

Every layer made with AEGP calls begins at composition time 0 and lasts as long as the composition does.

Use `AEGP_S`etLayerOffset() and `AEGP_S`etLayerInPointAndDuration() from `AEGP_L`ayerSuite9 to properly set the layer's time information.

If the layer's stretch factor (which you read with `AEGP_G`etLayerStretch in `AEGP_L`ayerSuite9, of course) differs from 100%, you'll have to run the calculation below to arrive at the right layer offset:

```
offset = compIn - stretch * layerIn;
```

## Communication With A Layer's Effects

### AEGP Suites — Communication With A Layer's Effects

Reach the effects that have been applied to a layer here. The suite opens up every parameter data stream as well.

Use the Stream Suite to work with those streams.

A reference to an effect that's been applied is an `AEGP_E`ffect_RefH; a reference to an installed effect, applied somewhere or not, is an `AEGP_I`nstalledEffectKey.

Apply Foobarocity to a layer twice and you'll end up with two separate `AEGP_E`ffect_RefHs, yet each of them yields the identical `AEGP_I`nstalledEffectKey.

### `AEGP_E`ffectSuite4

Function

Purpose

`AEGP_G`etLayerNumEffects

```

Reports how many effects sit on a layer.

AEGP_GetLayerNumEffects(
  AEGP_LayerH  layerH,
  A_long       *num_effectsPL);
```

`AEGP_G`etLayerEffectByIndex

```

Hands back, by index, a reference to one of the effects applied to the layer.

AEGP_GetLayerEffectByIndex(
  AEGP_PluginID     aegp_plugin_id,
  AEGP_LayerH       layerH,
  AEGP_EffectIndex  effect_indexL,
  AEGP_EffectRefH   *effectPH);
```

`AEGP_G`etInstalledKeyFromLayerEffect

```

Given an AEGP_EffectRefH, retrieves its associated AEGP_InstalledEffectKey.

AEGP_GetInstalledKeyFromLayerEffect(
  AEGP_EffectRefH          effect_refH,
  AEGP_InstalledEffectKey  *installed_keyP);
```

`AEGP_G`etEffectParamUnionByIndex

```

Returns description of effect parameter.

Don't rely on the value(s) inside the ParamDef this function returns (reach for AEGP_GetNewStreamValue() instead); the point of it is to let AEGPs read parameter defaults, checkbox names, and pop-up strings.

To learn the stream count, which tells you the highest allowable param_index, call AEGP_GetEffectNumParamStreams() from AEGP_StreamSuite5. That final parameter need not be supplied.

AEGP_GetEffectParamUnionByIndex(
  AEGP_PluginID     aegp_plugin_id,
  AEGP_EffectRefH   effectH,
  PF_ParamIndex     param_index,
  PF_ParamType      *param_typeP
  PF_ParamDefUnion  *uP0);
```

`AEGP_G`etEffectFlags

```

Pulls back the flags belonging to the given AEGP_EffectRefH.

AEGP_GetEffectFlags(
  AEGP_EffectRefH   effect_refH,
  AEGP_EffectFlags  *effect_flagsP);
```

What comes back is some mix of these: - `AEGP_E`ffectFlags*NONE - `AEGP_E`ffectFlags_ACTIVE - `AEGP_E`ffectFlags*`AUDIO_ONLY` - `AEGP_E`ffectFlags\_`AUDIO_TOO` - `AEGP_E`ffectFlags_MISSING

`AEGP_S`etEffectFlags

```

Applies the flags (listed above) to the given AEGP_EffectRefH, limited by a separate mask of effect flags.

AEGP_SetEffectFlags(
  AEGP_EffectRefH   effect_refH,
  AEGP_EffectFlags  mask,
  AEGP_EffectFlags  effect_flags);
```

`AEGP_R`eorderEffect

```

Rearranges how the applied effects are ordered (hand in the index you want).

AEGP_ReorderEffect(
  AEGP_EffectRefH  effect_refH,
  A_long           effect_indexL);
```

`AEGP_E`ffectCallGeneric

```

Invoke an effect plug-in and feed it a pointer to whatever data you choose; the effect is free to alter it. That's the channel AEGPs use to talk to effects.

Pass PF_Cmd_COMPLETELY_GENERAL for effect_cmd.

AEGP_EffectCallGeneric(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_EffectRefH  effectH,
  const A_Time     *timePT,
  PF_Cmd           effect_cmd,
  void             *extraPV);
```

`AEGP_D`isposeEffect

```

Releases an AEGP_EffectRefH. Apply it to any AEGP_EffectRefH that After Effects handed you.

AEGP_DisposeEffect(
  AEGP_EffectRefH  effectH);
```

`AEGP_A`pplyEffect

```

Puts an effect onto a particular layer. The freshly made AEGP_EffectRefH comes back.

AEGP_ApplyEffect(
  AEGP_PluginID            aegp_plugin_id,
  AEGP_LayerH              layerH,
  AEGP_InstalledEffectKey  installed_key,
  AEGP_EffectRefH          *effect_refPH);
```

`AEGP_D`eleteLayerEffect

```

Strips off an effect that's been applied.

AEGP_DeleteLayerEffect(
  AEGP_EffectRefH  effect_refH);
```

`AEGP_G`etNumInstalledEffects

```

Hands back how many effects are installed within After Effects.

AEGP_GetNumInstalledEffects(
  A_long  *num_installed_effectsPL);
```

`AEGP_G`etNextInstalledEffect

```

Hands back the AEGP_InstalledEffectKey belonging to the following installed effect.

To get hold of the first AEGP_InstalledEffectKey, supply AEGP_InstalledEffectKey_NONE as the opening parameter.

AEGP_GetNextInstalledEffect(
  AEGP_InstalledEffectKey  key,
  AEGP_InstalledEffectKey  *next_keyPH);
```

`AEGP_G`etEffectName

```

Fetches the effect's name. nameZ can be up to AEGP_MAX_EFFECT_NAME_SIZE + 1 long.

AEGP_GetEffectName(
  AEGP_InstalledEffectKey  installed_key,
  A_char                   *nameZ);
```

Note: to alter the display name of an effect, reach for `AEGP_S`etStreamName.

`AEGP_G`etEffectMatchName

```

Fetches an effect's match name (the one set in PiPL). match_nameZ up to AEGP_MAX_EFFECT_MATCH_NAME_SIZE + 1 long.

AEGP_GetEffectMatchName(
  AEGP_InstalledEffectKey  installed_key,
  A_char                   *match_nameZ);
```

Match names use 7-bit ASCII. UI names follow the application's current runtime encoding; on Windows, for instance, that's ISO 8859-1 for the majority of languages.

`AEGP_G`etEffectCategory

```

The effect's menu category. categoryZ can be up to AEGP_MAX_EFFECT_CATEGORY_NAME_SIZE + 1 long.

AEGP_GetEffectCategory(
  AEGP_InstalledEffectKey  installed_key,
  A_char                   *categoryZ);
```

`AEGP_D`uplicateEffect

```

Makes a copy of a given AEGP_EffectRefH. Once finished, the caller has to dispose of the copy.

AEGP_DuplicateEffect(
  AEGP_EffectRefH  orig_effect_refH,
  AEGP_EffectRefH  *dupe_refPH);
```

`AEGP_N`umEffectMask

```

New in CC 2014. How many masks are on this effect?

AEGP_NumEffectMask(
  AEGP_EffectRefH  effect_refH,
  A_u_long         *num_masksPL);
```

`AEGP_G`etEffectMaskID

```

New in CC 2014. For a particular mask_indexL, hands back the matching AEGP_MaskIDVal, which uniquely pins down the mask.

AEGP_GetEffectMaskID(
  AEGP_EffectRefH  effect_refH,
  A_u_long         mask_indexL,
  AEGP_MaskIDVal   *id_valP);
```

`AEGP_A`ddEffectMask

```

New in CC 2014. Attach an effect mask, one you can build with the Mask Management.

The effect ref's local stream comes back, which is handy when you intend to add keyframes.

Caller must dispose of AEGP_StreamRefH when finished.

Undoable.

AEGP_AddEffectMask(
  AEGP_EffectRefH  effect_refH,
  AEGP_MaskIDVal   id_val,
  AEGP_StreamRefH  streamPH0);
```

`AEGP_R`emoveEffectMask

```

New in CC 2014. Strips an effect mask away.

Undoable.

AEGP_RemoveEffectMask(
  AEGP_EffectRefH  effect_refH,
  AEGP_MaskIDVal   id_val);
```

`AEGP_S`etEffectMask

```

New in CC 2014. Place an effect mask onto an index that already exists.

The effect ref's local stream comes back, which is handy when you intend to add keyframes.

Caller must dispose of AEGP_StreamRefH when finished.

Undoable.

AEGP_SetEffectMask(
  AEGP_EffectRefH  effect_refH,
  A_u_long         mask_indexL,
  AEGP_MaskIDVal   id_val,
  AEGP_StreamRefH  *streamPH0);
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
|  |  |
|  |  |

## Exploiting Effect UI Behavior To Look Cool

### AEGP Suites — Exploiting Effect UI Behavior To Look Cool

Working over a layer's effects won't, on its own, guarantee its effect controls show up.

That said, applying an effect and then taking it straight back off will bring the layer's effect controls into view.

Tricky, eh?

## StreamRefs And EffectRefs

### AEGP Suites — StreamRefs And EffectRefs

Wondering how to obtain an `AEGP_S`treamRef for an effect? Begin by fetching the effect's `AEGP_E`ffectRef via `AEGP_G`etNewEffectForEffect().

Next call `AEGP_G`etNewEffectStreamByIndex() - using param index 1, for example - and it returns a parameter stream.

After that, a call to `AEGP_G`etNewParentStreamRef() delivers your `AEGP_S`treamRef, sir!

Should you grab references to an effect's streams, hold onto the `AEGP_E`ffectRefH until you've finished with the streams, otherwise you'll throw After Effects' checkout mechanism out of balance. Keep in mind, too, that `AEGP_S`treamRefHs are opaque whereas `AEGP_S`treamValue2s are not (well, not completely).

For an effect's instance name (the one the user renamed it to), obtain the `AEGP_S`treamRef for the effect itself and call `AEGP_G`etStreamName.
