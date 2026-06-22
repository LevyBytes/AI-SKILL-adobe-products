# Work With Footage

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## AEGP Suites — Work with Footage

Footage, along with items living in a project or composition, is described here. Bear in mind that when you read or write a footage item's interpretation, you can land on combinations of options that conflict with one another.

Should warnings or errors crop up as you develop, apply every connected change as a single atomic operation and rethink whether the operation's logic holds together.

As an illustration, altering footage's pull-down interpretation has no effect unless its native and conformed frame rates actually differ.

Sometimes the right move, depending on your goal, is to back out of the whole sequence of operations at that stage and let the user know what went wrong.

### `AEGP_F`ootageSuite5

Function

Purpose

`AEGP_G`etMainFootageFromItem

```

Returns an error if item isn't a footage item. Used to convert an item handle to a footage handle.

AEGP_GetMainFootageFromItem(
  AEGP_ItemH     itemH,
  AEGP_FootageH  *footagePH);
```

`AEGP_G`etProxyFootageFromItem

```

Returns an error if item has no proxy. Returns the proxy footage handle.

Note: a composition can have a proxy.

AEGP_GetProxyFootageFromItem(
  AEGP_ItemH     itemH,
  AEGP_FootageH  *proxy_ftgPH);
```

`AEGP_G`etFootageNumFiles

```

Returns the number of data (RGBA or audio) files, and the number of files per frame (may be greater than one if the footage has auxiliary channels).

AEGP_GetFootageNumFiles(
  AEGP_FootageH  footageH,
  A_long         *num_filesPL0,
  A_long         *files_per_frmPL0);
```

`AEGP_G`etFootagePath

```

Get fully realized path to footage source file. Retrieves the footage path for a piece of footage (or for the specified frame of a footage sequence).

frame_numL ranges from 0 to num_main_files, as obtained using AEGP_GetFootageNumFiles from AEGP_FootageSuite5.

AEGP_FOOTAGE_MAIN_FILE_INDEX is the main file.

The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with AEGP_FreeMemHandle.

AEGP_GetFootagePath(
  AEGP_FootageH   footageH,
  A_long          frame_numL,
  A_long          file_indexL,
  AEGP_MemHandle  *unicode_pathPH);
```

`AEGP_G`etFootageSignature

```

Retrieves the footage signature of specified footage.

AEGP_GetFootageSignature(
  AEGP_FootageH          footageH,
  AEGP_FootageSignature  *sigP);
```

The signature will be one of the following: - `AEGP_F`ootageSignature_NONE - `AEGP_F`ootageSignature_MISSING - `AEGP_F`ootageSignature_SOLID

`AEGP_N`ewFootage

```

Creates a new footage item. The file path is a NULL-terminated UTF-16 string with platform separators.

Note that footage filenames with colons are not allowed, since colons are used as path separators in the HFS+ file system.

AEGP_NewFootage(
  AEGP_PluginID                         aegp_plugin_id,
  const A_UTF16Char                     *pathZ,
  const AEGP_FootageLayerKey            *layer_infoP0,
  const AEGP_FileSequenceImportOptions  *sequence_optionsP0,
  AEGP_InterpretationStyle              interp_style,
  void                                  *reserved,
  AEGP_FootageH                         *footagePH);
```

```

Note the optional params. If allow_interpretation_dialogB is FALSE, After Effects will guess the alpha interpretation.

typedef struct {
  A_long               layer_idL;
  A_long               layer_indexL
  char                 *nameAC;
  AEGP_LayerDrawStyle  draw_style;
} AEGP_FootageLayerKey;
```

`AEGP_L`ayerDrawStyle can be: - `AEGP_L`ayerDrawStyle*`LAYER_BOUNDS` - `AEGP_L`ayerDrawStyle*`DOCUMENT_BOUNDS` `AEGP_I`nterpretationStyle can be: - `AEGP_I`nterpretationStyle*`NO_DIALOG_GUESS` Will guess alpha interpretation even if file contains unknown alpha interpretation and user pref says to ask user. - `AEGP_I`nterpretationStyle*`DIALOG_OK` Optionally can show a dialog. - `AEGP_I`nterpretationStyle\_`NO_DIALOG_NO_GUESS` Used for replace footage implementation.

`AEGP_A`ddFootageToProject

```

Adds a footage item to a project. Footage will be adopted by the project, and may be added only once.

This is Undo-able; do not dispose of the returned added item if it's undone.

AEGP_AddFootageToProject(
  AEGP_FootageH  footageH,
  AEGP_ItemH     folderH,
  AEGP_ItemH     *add_itemPH0);
```

`AEGP_S`etItemProxyFootage

```

Sets footage as the proxy for an item. Will be adopted by the project.

This is Undo-able; do not dispose of the returned added item if it's undone.

AEGP_SetItemProxyFootage(
  AEGP_FootageH  footageH,
  AEGP_ItemH     itemH);
```

`AEGP_R`eplaceItemMainFootage

```

Replaces footage for an item. The item will replace the main footage for this item.

This is Undo-able; do not dispose of the returned added item if it's undone.

AEGP_ReplaceItemMainFootage(
  AEGP_FootageH  footageH,
  AEGP_ItemH     itemH);
```

`AEGP_D`isposeFootage

```

Deletes a footage item. Do not dispose of footage you did not create, or that has been added to the project.

AEGP_DisposeFootage(
  AEGP_FootageH  footageH);
```

`AEGP_G`etFootageInterpretation

```

Populates an AEGP_FootageInterp describing the settings of the AEGP_FootageH.

There is no way to create a valid AEGP_FootageInterp other than by using this function.

AEGP_GetFootageInterpretation(
  const AEGP_ItemH    itemH,
  A_Boolean           proxyB,
  AEGP_FootageInterp  *interpP);
```

If proxyB is TRUE, the proxy footage's settings are retrieved.

`AEGP_S`etFootageInterpretation

```

Apply the settings in the AEGP_FootageInterp to the AEGP_FootageH. Undo-able.

AEGP_SetFootageInterpreta tion(
  const AEGP_ItemH          itemH,
  A_Boolean                 proxyB,
  const AEGP_FootageInterp  *interpP);
```

If proxyB is TRUE, the proxy footage's settings are modified.

`AEGP_G`etFootageLayerKey

```

Populates an AEGP_FootageLayerKey describing the footage.

AEGP_GetFootageLayerKey(
  AEGP_FootageH          footageH,
  AEGP_FootageLayerKey*  layerKeyP);
```

`AEGP_N`ewPlaceholderFootage

```

Deprecated. Adds a new placeholder footage item to the project.

If footage has gone missing, running this function forces the user to hunt down each absent file one by one, even when every one of them sits in the same folder.

Undo-able.

AEGP_NewPlaceholderFootage(
  AEGP_PluginID  plugin_id,
  const A_char   *nameZ,
  A_long         width,
  A_long         height,
  const A_Time   *durationPT,
  AEGP_FootageH  *footagePH);
```

`AEGP_N`ewPlaceholderFootageWithPath

```

This is the hip new way to add references to footage that can't be found right this moment.

The file path is a NULL-terminated UTF-16 string with platform separators.

In CS6 and earlier, file_type was ignored and we previously recommendedsetting it to AEIO_FileType_NONE.

Starting in CC, AEIO_FileType_NONE is now a warning condition.

If you pass AEIO_FileType_ANY, then path MUST exist.

If the path may not exist, pass AEIO_FileType_DIR for folder, or AEIO_FileType_GENERIC for a file.

AEGP_NewPlaceholderFootageWithPath(
  AEGP_PluginID      plugin_id,
  const A_UTF16Char  *pathZ,
  AEGP_Platform      path_platform,
  AEIO_FileType      file_type,
  A_long             widthL,
  A_long             heightL,
  const A_Time       *durationPT,
  AEGP_FootageH      *footagePH);
```

`AEGP_N`ewSolidFootage

```

This is the way to add a solid.

Until the footage is added to the project, the caller owns the AEGP_FootageH (and must dispose of it if, and only if, it isn't added to the project).

AEGP_NewSolidFootage(
  const A_char         *nameZ,
  A_long               width,
  A_long               height,
  const AEGP_ColorVal  *colorP,
  AEGP_FootageH        *footagePH);
```

`AEGP_G`etSolidFootageColor

```

Returns the color of a given solid. Returns an error if the AEGP_ItemH is not a solid.

AEGP_GetSolidFootageColor(
  AEGP_ItemH     itemH,
  A_Boolean      proxyB,
  AEGP_ColorVal  *colorP);
```

If proxyB is TRUE, the proxy solid's color is retrieved.

`AEGP_S`etSolidFootageColor

```

Sets the color of a solid. Undo-able.

AEGP_SetSolidFootageColor(
  AEGP_ItemH     itemH,
  A_Boolean      proxyB,
  AEGP_ColorVal  *colorP);
```

If proxyB is TRUE, the proxy solid's color is set.

`AEGP_S`etSolidFootageDimensions

```

Sets the dimensions of a solid. Undo-able.

AEGP_SetSolidFootageDimensions(
  AEGP_ItemH  itemH,
  A_Boolean   proxyB,
  A_long      widthL,
  A_long      heightL);
```

If proxyB is TRUE, the proxy solid's dimensions are modified. Returns an error if the item isn't a solid.

`AEGP_G`etFootageSoundDataFormat

```

Retrieves information about the audio data in the footage item (by populating the AEGP_SoundDataFormat you passed in).

AEGP_GetFootageSoundDataFormat(
  AEGP_FootageH         footageH,
  AEGP_SoundDataFormat  *formatP);
```

`AEGP_G`etFootageSequenceImportOptions

```

Populates and returns a AEGP_FileSequenceImportOptions describing the given AEGP_FootageH.

AEGP_GetFootageSequenceImportOptions(
  AEGP_FootageH                   footageH,
  AEGP_FileSequenceImportOptions  *optionsP);
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

### `AEGP_F`ootageInterp Structure

Member

Purpose

`AEGP_I`nterlaceLabel il;

```

The interlace settings for the footage item.

A_u_long signature; // 'FIEL'
A_short version;
FIEL_Type type;
FIEL_Order order;
A_u_long reserved;
```

`FIEL_T`ype is one of the following: - `FIEL_T`ype*`FRAME_RENDERED` - `FIEL_T`ype_INTERLACED - `FIEL_T`ype*`HALF_HEIGHT` - `FIEL_T`ype*`FIELD_DOUBLED` (60 full-sized field doubled frames per second.) `FIEL_O`rder is either: - `FIEL_O`rder*`UPPER_FIRST` - `FIEL_O`rder\_`LOWER_FIRST`

`AEGP_A`lphaLabel al;

```

AEGP_AlphaFlag flags;
A_u_char redCu;
A_u_char greenCu;
A_u_char blueCu;
```

`AEGP_A`lphaFlags is one or more of the following, OR'd together: - `AEGP_A`lphaPremul - `AEGP_A`lphaInverted (indicates that higher values are transparent, instead of lower) - `AEGP_A`lphaIgnore If `AEGP_A`lphaPremul is not set, straight alpha is assumed.

`AEGP_P`ulldownPhase pd;

Indicates the phase for use in 3:2 pulldown. One of the following: - `AEGP_P`ulldownPhase\_`NO_PULLDOWN` - `AEGP_P`ulldownPhase_WSSWW - `AEGP_P`ulldownPhase_SSWWW - `AEGP_P`ulldownPhase_SWWWS - `AEGP_P`ulldownPhase_WWWSS - `AEGP_P`ulldownPhase_WWSSW - `AEGP_P`ulldownPhase_WWWSW - `AEGP_P`ulldownPhase_WWSWW - `AEGP_P`ulldownPhase_WSWWW - `AEGP_P`ulldownPhase_SWWWW - `AEGP_P`ulldownPhase_WWWWS

`AEGP_L`oopBehavior loop;

```

Indicates the number of times the footage should loop.

A_long loops;
A_long reserved;
```

`A_R`atio pix_aspect_ratio;

Expresses the pixel aspect ratio of the footage (x over y).

`A_F`pLong native_fpsF;

The original framerate (in frames per second) of the footage item.

`A_F`pLong conform_fpsF;

The framerate being used for the footage item.

A_long depthL;

The pixel depth of the footage. One of the following: - `AEGP_F`ootage*Depth_1 - `AEGP_F`ootage_Depth_2 - `AEGP_F`ootage_Depth_4 - `AEGP_F`ootage_Depth_8 - `AEGP_F`ootage_Depth_16 - `AEGP_F`ootage_Depth_24 - `AEGP_F`ootage_Depth_30 - `AEGP_F`ootage_Depth_32 - `AEGP_F`ootage_Depth*`GRAY_2` - `AEGP_F`ootage*Depth*`GRAY_4` - `AEGP_F`ootage*Depth*`GRAY_8` - `AEGP_F`ootage*Depth_48 - `AEGP_F`ootage_Depth_64 - `AEGP_F`ootage_Depth*`GRAY_16`

`A_B`oolean motion_dB;

Indicates whether motion de-interlacing is being applied to the footage item.

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
