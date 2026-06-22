# Render Queue Item Suite, Render Queue Monitor Suite, Output Module Suite, Working With Effects ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Render Queue Item Suite; Render Queue Monitor Suite; Output Module Suite; Working With Effects; Do This Many Times; File Import Manager Suite; Cheating Effect Usage of AEGP Suites; Depending on AEGP Queries; AEGP Details.

## Render Queue Item Suite

### AEGP Suites — Render Queue Item Suite

This suite controls every part of a render queue item.

### `AEGP_RQI`temSuite4

Function

Purpose

`AEGP_G`etNumRQItems

```

Reports how many items are currently present in the render queue.

AEGP_GetNumRQItems(
  A_long  *num_itemsPL);
```

`AEGP_G`etRQItemByIndex

```

Returns an AEGP_RQItemRefH for the item at the requested index.

AEGP_GetRQItemByIndex(
  A_long           rq_item_index,
  AEGP_RQItemRefH  *rq_item_refPH);
```

`AEGP_G`etNextRQItem

```

Gets the following AEGP_RQItemRefH for iteration.

To obtain the first AEGP_RQItemRefH, supply RQ_ITEM_INDEX_NONE as current_rq_itemH.

AEGP_GetNextRQItem(
  AEGP_RQItemRefH  current_rq_itemH,
  AEGP_RQItemRefH  *next_rq_itemPH);
```

`AEGP_G`etNumOutputModulesForRQItem

```

Reports the count of output modules attached to the supplied AEGP_RQItemRefH.

AEGP_GetNumOutputModulesForRQItem(
  AEGP_RQItemRefH  rq_itemH,
  A_long           *num_outmodsPL);
```

`AEGP_G`etRenderState

```

Returns TRUE when the AEGP_RQItemRefH is enabled for rendering after the user clicks the Render button.

AEGP_GetRenderState(
  AEGP_RQItemRefH  rq_itemH,
  A_Boolean        *will_renderPB);
```

`AEGP_S`etRenderState

```

Sets whether the AEGP_RQItemRefH will render the next time the user clicks the Render button.

During rendering, this call returns an error.

This function will return:

- Err_PARAMETER if it is called while AEGP_RenderQueueState is not AEGP_RenderQueueState_STOPPED

- Err_RANGE when the supplied status is never legal, and

- Err_PARAMETER when the supplied status does not fit the item, such as queueing an item with no output path

AEGP_SetRenderState(
  AEGP_RQItemRefH  rq_itemH,
  A_Boolean        renderB);
```

`AEGP_G`etStartedTime

```

Returns the render start time, measured in seconds since 1904.

AEGP_GetStartedTime(
  AEGP_RQItemRefH  rq_itemH,
  A_Time           *started_timePT);
```

`AEGP_G`etElapsedTime

```

Reports how much time has passed since rendering started.

AEGP_GetElapsedTime(
  AEGP_RQItemRefH  rq_itemH,
  A_Time           *render_timePT);
```

`AEGP_G`etLogType

```

Reads the log type assigned to rq_itemH.

AEGP_GetLogType(
  AEGP_RQItemRefH  rq_itemH,
  AEGP_LogType     *logtypeP);
```

`AEGP_L`ogtType will have one of the following values: - `AEGP_L`ogType*NONE - `AEGP_L`ogType*`ERRORS_ONLY` - `AEGP_L`ogType*`PLUS_SETTINGS` - `AEGP_L`ogType*`PER_FRAME_INFO`

`AEGP_S`etLogType

```

Sets the log type used by the referenced AEGP_RQItemRefH.

AEGP_SetLogType(
  AEGP_RQItemRefH  rq_itemH,
  AEGP_LogType     logtype);
```

`AEGP_R`emoveOutputModule

```

Deletes outmodH from the referenced AEGP_RQItemRefH.

AEGP_RemoveOutputModule(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH);
```

`AEGP_G`etComment

```

RQItemSuite4 adds Unicode support for this call; it is available in 14.1.

Retrieves the comment attached to the referenced AEGP_RQItemRefH.

AEGP_GetComment(
  AEGP_RQItemRefH  rq_itemH,
  AEGP_MemHandle   *unicodeH);
```

`AEGP_S`etComment

```

RQItemSuite4 adds Unicode support for this call; it is available in 14.1.

Sets the comment attached to the referenced AEGP_RQItemRefH.

AEGP_SetComment(
  AEGP_RQItemRefH    rq_itemH,
  const A_UTF16Char  *commentZ);
```

`AEGP_G`etCompFromRQItem

```

Gets the AEGP_CompH linked to the supplied AEGP_RQItemRefH.

AEGP_GetCompFromRQItem(
  AEGP_RQItemRefH  rq_itemH,
  AEGP_CompH       *compPH);
```

`AEGP_D`eleteRQItem

```

Removes the render queue item. Undo is supported.

AEGP_DeleteRQItem(
  AEGP_RQItemRefH  rq_itemH);
```

| --- | --- |

## Render Queue Monitor Suite

### AEGP Suites — Render Queue Monitor Suite

Introduced in CS6. Render queue managers use this suite to inspect what is going on during any moment of a render.

### `AEGP_R`enderQueueMonitorSuite1

Function

Purpose

`AEGP_R`egisterListener

```

Registers plug-in-defined callbacks that the render queue can invoke.

Use refcon to carry data for later use when the plug-in-defined functions in AEGP_RQM_FunctionBlock1 are invoked. If no refcon is needed, set it to NULL.

AEGP_RegisterListener(
  AEGP_PluginID                  aegp_plugin_id,
  AEGP_RQM_Refcon                aegp_refconP,
  const AEGP_RQM_FunctionBlock1  *fcn_blockP);
```

```

```

`AEGP_RQM_F`unctionBlock1 uses this definition:

struct \_`AEGP_RQM_F`unctionBlock1 {
`A_E`rr (`AEGP_RQM_R`enderJobStarted)(
`AEGP_RQM_B`asicData \*basic_dataP,
`AEGP_RQM_S`essionId jobid);

`A_E`rr (`AEGP_RQM_R`enderJobEnded)(
`AEGP_RQM_B`asicData \*basic_dataP,
`AEGP_RQM_S`essionId jobid);

`AEGP_RQM_F`inishedStatus will be one of the following:

- `AEGP_RQM_F`inishedStatus_UNKNOWN

- `AEGP_RQM_F`inishedStatus_SUCCEEDED

- `AEGP_RQM_F`inishedStatus_ABORTED

- `AEGP_RQM_F`inishedStatus_ERRED

`AEGP_RQM_B`asicData has the layout shown below.

struct \_`AEGP_RQM_B`asicData {
const struct SPBasicSuite \*pica_basicP;
A_long aegp_plug_id;
`AEGP_RQM_R`efcon aegp_refconPV;
} `AEGP_RQM_B`asicData;

```

A_Err (*AEGP_RQM_RenderJobItemStarted)( AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid, AEGP_RQM_ItemId itemid);

A_Err (*AEGP_RQM_RenderJobItemUpdated)( AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid, AEGP_RQM_ItemId itemid, AEGP_RQM_FrameId frameid);

A_Err (*AEGP_RQM_RenderJobItemEnded)( AEGP_RQM_BasicData *basic_dataP, AEGP_RQM_SessionId jobid, AEGP_RQM_ItemId itemid, AEGP_RQM_FinishedStatus fstatus);

A_Err (*AEGP_RQM_RenderJobItemReportLog)(
    AEGP_RQM_BasicData  *basic_dataP,
    AEGP_RQM_SessionId  jobid,
    AEGP_RQM_ItemId     itemid,
    A_Boolean           isError,
    AEGP_MemHandle      logbuf);
} AEGP_RQM_FunctionBlock1;
```

`AEGP_D`eregisterListener

```

Unregisters from render queue notifications.

AEGP_DeregisterListener(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_RQM_Refcon  aegp_refconP);
```

`AEGP_G`etProjectName

```

Gets the active project name. It returns a handle holding a NULL-terminated A_UTF16Char string; release that handle with AEGP_FreeMemHandle.

AEGP_GetProjectName(
  AEGP_RQM_SessionId  sessid,
  AEGP_MemHandle      *utf_project_namePH0);
```

`AEGP_G`etAppVersion

```

Gets the application version. It returns a handle holding a NULL-terminated A_UTF16Char string; release that handle with AEGP_FreeMemHandle.

AEGP_GetAppVersion(
  AEGP_RQM_SessionId  sessid,
  AEGP_MemHandle      *utf_app_versionPH0);
```

`AEGP_G`etNumJobItems

```

Reports the number of job items.

AEGP_GetNumJobItems(
  AEGP_RQM_SessionId  sessid,
  A_long              *num_jobitemsPL);
```

`AEGP_G`etJobItemID

```

Gets the job at the requested index.

AEGP_GetJobItemID(
  AEGP_RQM_SessionId  sessid,
  A_long              jobItemIndex,
  AEGP_RQM_ItemId     *jobItemID);
```

`AEGP_G`etNumJobItemRenderSettings

```

Reports how many render settings belong to the indexed job.

AEGP_GetNumJobItemRenderSettings(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              *num_settingsPL);
```

`AEGP_G`etJobItemRenderSetting

```

Gets one render setting from one job. The setting name and value are returned as handles to NULL-terminated A_UTF16Char strings, and AEGP_FreeMemHandle must release them.

AEGP_GetJobItemRenderSetting(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              settingIndex,
  AEGP_MemHandle      *utf_setting_namePH0,
  AEGP_MemHandle      *utf_setting_valuePH0);
```

`AEGP_G`etNumJobItemOutputModules

```

Reports how many output modules belong to the indexed job.

AEGP_GetNumJobItemOutputModules(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              *num_outputmodulesPL);
```

`AEGP_G`etNumJobItemOutputModuleSettings

```

Reports how many settings exist for the indexed output module.

AEGP_GetNumJobItemOutputModuleSettings(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              *num_settingsPL);
```

`AEGP_G`etJobItemOutputModuleSetting

```

Gets one setting from an output module on a job item. Both the returned name and returned value are handles containing NULL-terminated A_UTF16Char strings; release them with AEGP_FreeMemHandle.

AEGP_GetJobItemOutputModuleSetting(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              settingIndex,
  AEGP_MemHandle      *utf_setting_namePH0,
  AEGP_MemHandle      *utf_setting_valuePH0);
```

`AEGP_G`etNumJobItemOutputModuleWarnings

```

Reports how many output module warnings a job item has.

AEGP_GetNumJobItemOutputModuleWarnings(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              *num_warningsPL);
```

`AEGP_G`etJobItemOutputModuleWarning

```

Gets one warning from a particular output module on a particular job item. The returned warning text is a handle containing a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

AEGP_GetJobItemOutputModuleWarning(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              warningIndex,
  AEGP_MemHandle      *utf_warning_valuePH0);
```

`AEGP_G`etNumJobItemFrameProperties

```

Reports the property count for the requested frame.

AEGP_GetNumJobItemFrameProperties(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  AEGP_RQM_FrameId    frameid,
  A_long              *num_propertiesPL);
```

`AEGP_G`etJobItemFrameProperty

```

Gets one property from a job item frame. The returned property name and returned values are handles containing NULL-terminated A_UTF16Char strings; release them with AEGP_FreeMemHandle.

AEGP_GetJobItemFrameProperty(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  AEGP_RQM_FrameId    frameid,
  A_long              propertyIndex,
  AEGP_MemHandle      *utf_property_namePH0,
  AEGP_MemHandle      *utf_property_valuePH0);
```

`AEGP_G`etNumJobItemOutputModuleProperties

```

Reports the property count for the requested output module.

AEGP_GetNumJobItemOutputModuleProperties(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              *num_propertiesPL);
```

`AEGP_G`etJobItemOutputModuleProperty

```

Gets one property attached to an output module on a job item. The returned property name and returned values are handles containing NULL-terminated A_UTF16Char strings; release them with AEGP_FreeMemHandle.

AEGP_GetJobItemOutputModuleProperty(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              propertyIndex,
  AEGP_MemHandle      *utf_property_namePH0,
  AEGP_MemHandle      *utf_property_valuePH0);
```

`AEGP_G`etJobItemFrameThumbnail

```

Gets a buffer containing a JPEG-encoded thumbnail for the job item frame.

Supply the maximum width and height; the function returns the actual dimensions.

AEGP_GetJobItemFrameThumbnail(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  AEGP_RQM_FrameId    frameid,
  A_long              *widthPL,
  A_long              *heightPL,
  AEGP_MemHandle      *thumbnailPH0);
```

| --- | --- | --- | --- | --- | --- |

## Output Module Suite

### AEGP Suites — Output Module Suite

Each render queue item includes at least one specified output module.

This suite queries and controls every aspect of output modules attached to a render item.

It also lets you add or remove output modules.

Factoid: The output-module list is walked for every frame rendered for a render item. For frame 0, output module 0 runs first, followed by 1 and then 2.

### `AEGP_O`utputModuleSuite4

Function

Purpose

`AEGP_G`etOutputModuleByIndex

```

Retrieves the output module at the specified index.

NOTE: AEGP_OutputModuleRefH is opaque, so direct manipulation is not supported; modify it through the accessor functions.

AEGP_GetOutputModuleByIndex(
  AEGP_RQItemRefH        rq_itemH,
  A_long                 outmod_indexL,
  AEGP_OutputModuleRefH  *outmodPH);
```

`AEGP_G`etEmbedOptions

```

Reads the embedding setting assigned to outmodH.

AEGP_GetEmbedOptions(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_EmbeddingType     *embed_optionsP);
```

`AEGP_E`mbeddingType will be one of the following: - `AEGP_E`mbedding*NOTHING - `AEGP_E`mbedding_LINK - `AEGP_E`mbedding*`LINK_AND_COPY`

`AEGP_S`etEmbedOptions

```

Sets the embedding setting on outmodH.

AEGP_SetEmbedOptions(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_EmbeddingType     embed_options);
```

`AEGP_G`etPostRenderAction

```

Reads the post-render action setting assigned to outmodH.

AEGP_GetPostRenderAction(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_PostRenderAction  *actionP);
```

`AEGP_P`ostRenderAction will be one of the following: - `AEGP_P`ostRenderOptions*IMPORT - `AEGP_P`ostRenderOptions*`IMPORT_AND_REPLACE_USAGE` - `AEGP_P`ostRenderOptions\_`SET_PROXY`

`AEGP_S`etPostRenderAction

```

Sets the post-render action setting on outmodH.

AEGP_SetPostRenderAction(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_PostRenderAction  action);
```

`AEGP_G`etEnabledOutputs

```

Reads which output types are enabled on outmodH.

AEGP_GetEnabledOutputs(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_OutputTypes       *typesP);
```

`AEGP_O`utputTypes will contain one or both of the following values: - `AEGP_O`utputType_VIDEO - `AEGP_O`utputType_AUDIO NOTE: These are flags, not an enumeration.

`AEGP_S`etEnabledOutputs

```

Sets which output types are enabled on outmodH.

AEGP_SetEnabledOutputs(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_OutputTypes       enabled_types);
```

`AEGP_G`etOutputChannels

```

Reads which video channels are enabled for output on outmodH.

AEGP_GetOutputChannels(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_VideoChannels     *outchannelsP);
```

`AEGP_V`ideoChannels will be one of the following: - `AEGP_V`ideoChannels_RGB - `AEGP_V`ideoChannels_RGBA - `AEGP_V`ideoChannels_ALPHA

`AEGP_S`etOutputChannels

```

Sets which video channels are enabled for output on outmodH.

AEGP_SetOutputChannels(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_VideoChannels     outchannels);
```

`AEGP_G`etStretchInfo

```

Retrieves the stretch configuration for outmodH, including the stretching enable flag, the composition-aspect-ratio lock, and the selected quality setting.

AEGP_GetStretchInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  A_Boolean              *enabledPB,
  AEGP_StretchQuality    *qualP,
  A_Boolean              *lockedPB);
```

`AEGP_S`tretchQuality will be one of the following: - `AEGP_S`tretchQual_LOW - `AEGP_S`tretchQual_HIGH

`AEGP_S`etStretchInfo

```

Sets the stretch configuration on outmodH.

AEGP_SetStretchInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  A_Boolean              is_enabledB,
  AEGP_StretchQuality    quality);
```

`AEGP_G`etCropInfo

```

Reads the crop enable state for outmodH and returns the rectangle in use.

AEGP_GetCropInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  A_Boolean              *is_enabledBP,
  A_Rect                 *crop_rectP);
```

`AEGP_S`etCropInfo

```

Sets the crop enable state for outmodH and supplies the rectangle to use.

AEGP_SetCropInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  A_Boolean              enableB,
  A_Rect                 crop_rect);
```

`AEGP_G`etSoundFormatInfo

```

Reads the audio-output enable state for outmodH, along with the settings to apply.

AEGP_GetSoundFormatInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_SoundDataFormat   *formatP,
  A_Boolean              *enabledPB);
```

`AEGP_S`etSoundFormatInfo

```

Sets the audio-output enable state for outmodH, along with the settings to apply.

AEGP_SetSoundFormatInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_SoundDataFormat   format_info,
  A_Boolean              enabledB);
```

`AEGP_G`etOutputFilePath

```

Gets the destination path for the AEGP_OutputModuleRefH output file. The returned path is a handle containing a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

AEGP_GetOutputFilePath(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_MemHandle         *unicode_pathPH);
```

`AEGP_S`etOutputFilePath

```

Sets where the AEGP_OutputModuleRefH output file is written. Supply a NULL-terminated UTF-16 path string using the platform's separator style.

AEGP_SetOutputFilePath(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  const A_UTF16Char      *pathZ);
```

`AEGP_A`ddDefaultOutputModule

```

Adds the default output module to the specified AEGP_RQItemRefH, then returns the AEGP_OutputModuleRefH for that new module (presumably so you can adjust it).

AEGP_AddDefaultOutputModule(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  *outmodPH);
```

`AEGP_G`etExtraOutputModuleInfo

```

Gets information describing the output module.

format_uniPH and info_uniPH supply the user-facing text description and information for the output module.

format_uniPH and info_uniPH contain NULL-terminated UTF16 strings; the caller is responsible for disposing them.

AEGP_GetExtraOutputModuleInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_MemHandle         *format_uniPH,
  AEGP_MemHandle         *info_uniPH,
  A_Boolean              *is_sequenceBP,
  A_Boolean              *multi_frameBP);
```

| --- | --- |

## Working With Effects

### AEGP Suites — Working With Effects

Effects and AEGPs use these functions to inspect the context around an applied effect.

Note

When code changes or depends on information outside the normal render pipeline, dependency issues can result.

After Effects has no signal that this outside information matters to your render, so changes to it will not trigger notification.

### `AEGP_PFI`nterfaceSuite1

Function

Purpose

`AEGP_G`etEffectLayer

```

Gets the layer handle for the layer where the effect is applied.

AEGP_GetEffectLayer(
  PF_ProgPtr   effect_ref,
  AEGP_LayerH  *layerPH);
```

`AEGP_G`etNewEffectForEffect

```

Gets the AEGP_EffectRefH that corresponds to the effect.

AEGP_GetNewEffectForEffect(
  AEGP_PluginID    aegp_plugin_id,
  PF_ProgPtr       effect_ref,
  AEGP_EffectRefH  *effectPH);
```

`AEGP_C`onvertEffectToCompTime

```

Retrieves composition time corresponding to effect_ref's layer-time value.

AEGP_ConvertEffectToCompTime(
  PF_ProgPtr     effect_ref,
  long           what_timeL,
  unsigned long  time_scaleLu,
  A_Time         *comp_timePT);
```

`AEGP_G`etEffectCamera

```

Gets the camera, when one exists, that After Effects uses for the effect layer view.

AEGP_GetEffectCamera(
  PF_ProgPtr    effect_ref,
  const A_Time  *comp_timePT,
  AEGP_LayerH   camera_layerPH);
```

`AEGP_G`etEffectCameraMatrix

```

Gets the transform between the layer coordinate space and the containing composition coordinate space.

AEGP_GetEffectCameraMatrix(
  PF_ProgPtr    effect_ref,
  const A_Time  *comp_timePT,
  A_Matrix4     *camera_matrixP,
  A_FpLong      *dst_to_planePF,
  A_short       *plane_widthPL,
  A_short       *plane_heightPL);
```

NOTE: If the effect's input layer uses square pixels but the composition uses non-square pixels, premultiply the matrix by (1/parF, 1, 1) to correct pixel aspect ratio.

| --- | --- |

### `AEGP_G`etEffectCameraMatrix Notes

For the camera matrix, the model view is the inverse of the matrix returned by `AEGP_G`etEffectCameraMatrix().

Also note that this matrix is row-based, while OpenGL's is column-based.

## Do This Many Times

### AEGP Suites — Do This Many Times

Uses multiple processors for computations when they are available.

### `AEGP_I`terateSuite1

Function

Purpose

`AEGP_G`etNumThreads

```

Asks After Effects for the number of threads currently available.

AEGP_GetNumThreads(
  A_long  *num_threadsPL);
```

`AEGP_I`terateGeneric

```

Supplies a function that After Effects can manage across multiple processors.

The callback can be any function pointer named by fn_func, with the arguments listed below.

For how refconPV is used, see Private Data.

AEGP_IterateGeneric(
  A_long  iterationsL,
  void    *refconPV,
  A_Err   (*fn_func)
    (void   *refconPV,
    A_long  thread_indexL,
    A_long  i,
    A_long  iterationsL));
```

| --- | --- |

## File Import Manager Suite

### AEGP Suites — File Import Manager Suite

FIMSuite lets file types handled by AEGPs appear in the After Effects import dialog and in drag-and-drop messaging.

These calls are not intended for AEIOs. They support project imports whose natural representation is an After Effects composition.

### `AEGP_FIMS`uite3

Function

Purpose

`AEGP_R`egisterImportFlavor

```

Registers the name of the file type or types supported by the plug-in. On return, imp_refP is either a usable opaque reference or AE_FIM_ImportFlavorRef_NONE.

AEGP_RegisterImportFlavor(
  const char              *nameZ,
  AE_FIM_ImportFlavorRef  *imp_refP);
```

`AEGP_R`egisterImportFlavorFileTypes

```

Registers arrays of file types and file extensions supported by the AEGP; the two arrays do not have to be the same length.

AEGP_RegisterImportFlavorFileTypes(
  AE_FIM_ImportFlavorRef  imp_ref,
  long                    num_filekindsL,
  const AEIO_FileKind     *kindsAP,
  long                    num_fileextsL,
  const AEIO_FileKind     *extsAP);
```

`AEGP_R`egisterImportFlavorImportCallbacks

```

Registers the AEGP callbacks that respond when different file types are imported.

AEGP_RegisterImportFlavorImportCallbacks(
  AE_FIM_ImportFlavorRef        ref,
  AE_FIM_ImportFlags            single_flag,
  const AE_FIM_ImportCallbacks  *imp_cbsP);
```

`AEGP_S`etImportedItem

```

Marks an item as imported, possibly replacing an existing item, and applies the related import options.

AEGP_SetImportedItem(
  AE_FIM_ImportOptions  imp_options,
  AEGP_ItemH            imported_itemH);
```

| --- | --- |

## Cheating Effect Usage of AEGP Suites

When developers first saw AEGP suites, many immediately wanted to "cheat" by calling them from effects. That can be done, but remember that trouble can follow if an effect depends on information outside the effect API, meaning anything obtained from AEGP APIs. For example, if After Effects decides an effect already has enough information to render, parameter updates caused by AEGP function changes may not happen. This dependency problem is under active work for future versions; keep it in mind when writing effects that "masquerade" as AEGPs.

Some AEGP suites are available to effects for camera and lighting information, along with `AEGP_G`etLayerParentComp and `AEGP_G`etCompBGColor from `AEGP_C`ompSuite11. Do not read that as permission for effects to call any AEGP suite. For details about effects adding keyframes, also see Effect UI & Events.

Start with `AEGP_PFI`nterfaceSuite. Its functions retrieve the `AEGP_L`ayerH for the layer receiving the effect and the `AEGP_E`ffectRefH for the effect instance. `AEGP_R`egisterWithAEGP from `AEGP_U`tilitySuite6 provides an `AEGP_P`luginID, which many AEGP calls require.

## Depending on AEGP Queries

### Cheating Effect Usage of AEGP Suites — Depending on AEGP Queries

Short answer: don't. Effects should not let AEGP query results determine rendered output unless those results are stored appropriately, usually in sequence data, the current render is cancelled, and a new render is forced with the queried information.

That path is complicated.

Skipping those steps leads to subtle caching bugs that are unpleasant and hard to diagnose.

## AEGP Details

When After Effects needs state preserved around functions that your AEGP invokes, such as an artisan rendering a frame or a keyframer adding and removing multiple keyframes from one stream, you call matching begin() and end() functions.

The begin call commonly returns an opaque identifier, or 'cookie', which must be passed into the functions being used. The end call disposes of that cookie correctly. For an example, see `AEGP_S`tartAddKeyframes() under `AEGP_K`eyframeSuite3.
