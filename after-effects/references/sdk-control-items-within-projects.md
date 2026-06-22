# Control Items Within Projects, Managing Selections, Manipulate Compositions

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Control Items Within Projects; Managing Selections; Manipulate Compositions.

## Control Items Within Projects

### AEGP Suites — Control Items Within Projects

Items held inside a project or composition are reached and changed here.

Every entry sitting in the project bin counts as an `AEGP_I`tem. Keep in mind that a camera, having no source, carries no `AEGP_I`temH.

Stay at the most general level you can get away with, narrowing only when a particular function demands it; the bulk of calls hand `AEGP_C`omps back and forth as `AEGP_I`tems.

### `AEGP_I`temSuite9

Function

Purpose

`AEGP_G`etFirstProjItem

```

Retrieves the first item in a given project.

AEGP_GetFirstProjItem(
  AEGP_ProjectH  projectH,
  AEGP_ItemH     *itemPH);
```

`AEGP_G`etNextProjItem

```

Retrieves the next project item; *next_itemPH will be NULL after the last item.

AEGP_GetNextProjItem(
  AEGP_ProjectH  projectH,
  AEGP_ItemH     itemH,
  AEGP_ItemH     *next_itemPH);
```

`AEGP_G`etActiveItem

```

If the Project window is active, the active item is the selected item (if only one item is selected).

If a Composition, Timeline, or Footage window is active, returns the parent of the layer associated with the front-most tab in the window.

Returns NULL if no item is active.

AEGP_GetActiveItem(
  AEGP_ItemH  *itemPH,
```

`AEGP_I`sItemSelected

```

Returns true if the Project window is active and the item is selected.

AEGP_IsItemSelected(
  AEGP_ItemH  itemH,
  A_Boolean   *selectedPB)
```

`AEGP_S`electItem

```

Toggles the selection state of the item, and (depending on deselect_othersB) can deselect other items. This call selects items in the Project panel.

To make selections in the Composition panel, use AEGP_SetSelection from AEGP_CompSuite11.

AEGP_SelectItem(
  AEGP_ItemH  itemH,
  A_Boolean   selectB,
  A_Boolean   deselect_othersB);
```

`AEGP_G`etItemType

```

Gets type of an item. Note: solids don't appear in the project, but can be the source to a layer.

AEGP_GetItemType(
  AEGP_ItemH     itemH,
  AEGP_ItemType  *item_typeP);
```

Items are one of the following types: - `AEGP_I`temType_NONE - `AEGP_I`temType_FOLDER - `AEGP_I`temType_COMP - `AEGP_I`temType_SOLID - `AEGP_I`temType_FOOTAGE

`AEGP_G`etTypeName

```

Get name of type. (name length up to AEGP_MAX_TYPE_NAME_LEN + 1).

AEGP_GetTypeName(
  AEGP_ItemType  item_type,
  A_char         *nameZ);
```

`AEGP_G`etItemName

```

Get item name. (name length has no limit).

unicode_namePH points to A_UTF16Char (contains null terminated UTF16 string).

It must be disposed with AEGP_FreeMemHandle .

AEGP_GetItemName(
  AEGP_PluginID  pluginID,
  AEGP_ItemH     itemH,
  AEGP_MemHandle *unicode_namePH);
```

`AEGP_S`etItemName

```

Specifies the name of the AEGP_ItemH. (name length has no limit). Undoable.

AEGP_SetItemName(
  AEGP_ItemH         itemH,
  const A_UTF16Char  *nameZ);
```

`AEGP_G`etItemID

```

Returns the item's unique ID, which persists across saves and loads of the project.

AEGP_GetItemID(
  AEGP_ItemH  itemH,
  A_long      *item_idPL);
```

`AEGP_G`etItemFlags

```

Get properties of an item.

AEGP_GetItemFlags(
  AEGP_ItemH      itemH,
  AEGP_ItemFlags  *item_flagsP);
```

Flag values (may be OR'd together): - `AEGP_I`temFlag*MISSING - `AEGP_I`temFlag*`HAS_PROXY` - `AEGP_I`temFlag*`USING_PROXY` - `AEGP_I`temFlag*`MISSING_PROXY` - `AEGP_I`temFlag*`HAS_VIDEO` - `AEGP_I`temFlag*`HAS_AUDIO` - `AEGP_I`temFlag*STILL - `AEGP_I`temFlag*`HAS_ACTIVE_AUDIO` Unlike the `HAS_AUDIO` flag, this bit flag will set only if the comp has at least one layer where audio is actually on.

`AEGP_S`etItemUseProxy

```

Toggle item's proxy usage. Undoable.

AEGP_SetItemUseProxy(
  AEGP_ItemH  itemH,
  A_Boolean   use_proxyB);
```

`AEGP_G`etItemParentFolder

```

Get folder containing item.

AEGP_GetItemParentFolder(
  AEGP_ItemH  itemH,
  AEGP_ItemH  *parent_itemPH);
```

`AEGP_S`etItemParentFolder

```

Sets an item's parent folder. Undoable.

AEGP_SetItemParentFolder(
  AEGP_ItemH  itemH,
  AEGP_ItemH  parent_folderH);
```

`AEGP_G`etItemDuration

```

Get duration of item, in seconds.

AEGP_GetItemDuration(
  AEGP_ItemH  itemH,
  A_Time      *durationPT);
```

`AEGP_G`etItemCurrentTime

```

Get current time within item. Not updated while rendering.

AEGP_GetItemCurrentTime(
  AEGP_ItemH  itemH,
  A_long      *curr_timePT);
```

`AEGP_G`etItemDimensions

```

Get width and height of item.

AEGP_GetItemDimensions(
  AEGP_ItemH  itemH,
  A_long      *widthPL)
  A_long      *heightPL);
```

`AEGP_G`etItemPixelAspectRatio

```

Get the width of a pixel, assuming its height is 1.0, as numerator over denominator.

AEGP_GetItemPixelAspectRatio(
  AEGP_ItemH  itemH,
  A_Ratio     *ratioPRt);
```

`AEGP_D`eleteItem

```

Removes item from all compositions. Undo-able.

Do not use the AEGP_ItemH after calling this function.

AEGP_DeleteItem(
  AEGP_ItemH  itemH);
```

`AEGP_G`etItemSolidColor

```

Removed in AEGP_ItemSuite4. See AEGP_GetSolidFootageColor from AEGP_FootageSuite5

Given a solid item, return its color.

AEGP_GetItemSolidColor(
  AEGP_ItemH  itemH,
  PF_Pixel    *PF_Pixel);
```

`AEGP_S`etSolidColor

```

Removed in AEGP_ItemSuite4. See AEGP_SetSolidFootageColor from AEGP_FootageSuite5.

Sets the color of an existing solid (error if itemH is not a solid).

AEGP_SetSolidColor(
  AEGP_ItemH     itemH,
  AEGP_ColorVal  color);
```

`AEGP_S`etSolidDimensions

```

Removed in AEGP_ItemSuite4. See AEGP_SetSolidFootageDimensions from AEGP_FootageSuite5.

Sets the dimensions of an existing solid (error if itemH is not a solid).

AEGP_SetSolidDimensions(
  AEGP_ItemH  itemH,
  A_short     widthS,
  A_short     heightS);
```

`AEGP_C`reateNewFolder

```

Creates a new folder in the project. The newly created folder is allocated and owned by After Effects.

Passing NULL for parent_folderH0 creates the folder at the project's root.

AEGP_CreateNewFolder(
  const A_UTF16Char  *nameZ,
  AEGP_ProjectH      projH),
  AEGP_ItemH         parentH0),
  AEGP_ItemH         *new_folderPH);
```

`AEGP_S`etItemCurrentTime

```

Sets the current time within a given itemH.

AEGP_SetItemCurrentTime(
  AEGP_ItemH    itemH,
  const A_Time  *new_timePT);
```

`AEGP_G`etItemCommentLength

```

Removed in ItemSuite9. Retrieves the length (in characters) of the itemH's comment.

AEGP_GetItemCommentLength(
  AEGP_ItemH  itemH,
  A_u_long    *buf_sizePLu);
```

`AEGP_G`etItemComment

```

Updated to support Unicode in ItemSuite9, available in 14.1. Retrieves the itemH's comment.

AEGP_GetItemComment(
  AEGP_ItemH      itemH,
  AEGP_MemHandle  *unicode_namePH);
```

`AEGP_S`etItemComment

```

Updated to support Unicode in ItemSuite9, available in 14.1. Sets the itemH's comment.

AEGP_SetItemComment(
  AEGP_ItemH         itemH,
  const A_UTF16Char  *commentZ);
```

`AEGP_G`etItemLabel

```

Retrieves an item's label.

AEGP_GetItemLabel(
  AEGP_ItemH    itemH,
  AEGP_LabelID  *labelP);
```

`AEGP_S`etItemLabel

```

Sets an item's label.

AEGP_SetItemLabel(
  AEGP_ItemH    itemH,
  AEGP_LabelID  label);
```

`AEGP_G`etItemMRUView

```

Gets an item's most recently used view. The view can be used with two calls in the AEGP_ColorSettingsSuite, to perform a color transform on a pixel buffer from working to view color space.

AEGP_GetItemMRUView(
  AEGP_ItemH      itemH,
  AEGP_ItemViewP  *mru_viewP);
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

Note

`AEGP_R`enderNewItemSoundData() used to be here, but is now part of `AEGP_R`enderSuite4.

## Managing Selections

### AEGP Suites — Managing Selections

Selection state is tracked through this suite, which leans on the same behaviour the C++ Standard Template Library's vectors provide.

After Effects lets you select many kinds of items at the same time; an `AEGP_C`ollectionItem is a union across layers, masks, effects, streams, mask vertices, and keyframes.

Grab the present collection first, then walk each of its entries so your AEGP applies its work to every one of them.

To let selected dynamic streams be driven through the `AEGP_C`ollectionSuite, we introduced `AEGP_C`ollection2H along with `AEGP_C`ollectionItemV2.

### `AEGP_C`ollectionSuite2

Function

Purpose

`AEGP_N`ewCollection

```

Creates and returns a new, empty collection.

To obtain the current composition's selection as a collection, use AEGP_GetNewCollectionFromCompSelection.

AEGP_NewCollection(
  AEGP_PluginID      plugin_id,
  AEGP_Collection2H  *collectionPH);
```

`AEGP_D`isposeCollection

```

Disposes of a collection.

AEGP_DisposeCollection(
  AEGP_Collection2H  collectionH);
```

`AEGP_G`etCollectionNumItems

```

Returns the number of items contained in the given collection.

AEGP_GetCollectionNumItems(
  AEGP_Collection2H  collectionH,
  A_u_long           *num_itemsPL);
```

`AEGP_G`etCollectionItemByIndex

```

Retrieves (creates and populates) the index'd collection item.

AEGP_GetCollectionItemByIndex(
  AEGP_Collection2H      collectionH,
  A_u_long               indexL,
  AEGP_CollectionItemV2  *itemP);
```

`AEGP_C`ollectionPushBack

```

Adds an item to the given collection.

AEGP_CollectionPushBack(
  AEGP_Collection2H            collectionH,
  const AEGP_CollectionItemV2  *itemP);
```

`AEGP_C`ollectionErase

```

Removes an index'd item (or items) from a given collection. NOTE: this range is exclusive, like STL iterators. To erase the first item, you would pass 0 and 1, respectively.

AEGP_CollectionErase(
  AEGP_Collection2H  collectionH,
  A_u_long           index_firstL,
  A_u_long           index_lastL);
```

| --- | --- |

### Ownership Of Collection Items

Once an `AEGP_S`treamRefH goes into a collection, the collection takes ownership of it, so leave the freeing to it.

`AEGP_E`ffectRefHs behave differently: the collection won't adopt them, and the calling AEGP remains responsible for freeing them.

## Manipulate Compositions

### AEGP Suites — Manipulate Compositions

Report on the project's compositions, and build cameras, lights, and solids.

### `AEGP_C`ompSuite11

Function

Purpose

`AEGP_G`etCompFromItem

```

Retrieves the handle to the composition, given an item handle.

Returns NULL if itemH is not an AEGP_CompH.

AEGP_GetCompFromItem(
  AEGP_ItemH  itemH,
  AEGP_CompH  *compPH);
```

`AEGP_G`etItemFromComp

```

Used to get the item handle, given a composition handle.

AEGP_GetItemFromComp(
  AEGP_CompH  compH,
  AEGP_ItemH  *itemPH);
```

`AEGP_G`etCompDownsampleFactor

```

Returns current downsample factor. Measured in pixels X by Y.

Users can choose a custom downsample factor with independent X and Y.

AEGP_GetCompDownsampleFactor(
  AEGP_CompH             compH,
  AEGP_DownsampleFactor  *dsfP);
```

`AEGP_S`etCompDownsampleFactor

```

Sets the composition's downsample factor.

AEGP_SetCompDownsampleFactor(
  AEGP_CompH             compH,
  AEGP_DownsampleFactor  *dsfP);
```

`AEGP_G`etCompBGColor

```

Returns the composition background color.

AEGP_GetCompBGColor(
  AEGP_CompH     compH,
  AEGP_ColorVal  *bg_colorP);
```

`AEGP_S`etCompBGColor

```

Sets a composition's background color.

AEGP_SetCompBGColor(
  AEGP_CompH           compH,
  const AEGP_ColorVal  *bg_colorP);
```

`AEGP_G`etCompFlags

```

Returns composition flags, or'd together.

AEGP_GetCompFlags(
  AEGP_CompH      compH,
  AEGP_CompFlags  *AEGP_CompFlags);
```

- `AEGP_C`ompFlag*`SHOW_ALL_SHY` - `AEGP_C`ompFlag*`ENABLE_MOTION_BLUR` - `AEGP_C`ompFlag*`ENABLE_TIME_FILTER` - `AEGP_C`ompFlag*`GRID_TO_FRAME` - `AEGP_C`ompFlag*`GRID_TO_FIELDS` - `AEGP_C`ompFlag*`USE_LOCAL_DSF` - `AEGP_C`ompFlag*`DRAFT_3D` - `AEGP_C`ompFlag*`SHOW_GRAPH`

`AEGP_G`etShowLayerNameOrSourceName

```

New in CC. Passes back true if the Comp's timeline shows layer names, false if source names. This will open the comp as a side effect.

AEGP_GetShowLayerNameOrSourceName(
  AEGP_CompH  compH,
  A_Boolean   *layer_names_shownPB);
```

`AEGP_S`etShowLayerNameOrSourceName

```

New in CC. Pass in true to have the Comp's timeline show layer names, false for source names. This will open the comp as a side effect.

AEGP_SetShowLayerNameOrSourceName(
  AEGP_CompH  compH,
  A_Boolean   *layer_names_shownPB);
```

`AEGP_G`etShowBlendModes

```

New in CC. Passes back true if the Comp's timeline shows blend modes column, false if hidden. This will open the comp as a side effect.

AEGP_GetShowBlendModes(
  AEGP_CompH  compH,
  A_Boolean   *blend_modes_shownPB);
```

`AEGP_S`etShowBlendModes

```

New in CC. Pass in true to have the Comp's timeline show the blend modes column, false to hide it. This will open the comp as a side effect.

AEGP_GetCompFlags(
  AEGP_CompH  compH,
  A_Boolean   show_blend_modesB);
```

`AEGP_G`etCompFramerate

```

Returns the composition's frames per second.

AEGP_GetCompFramerate(
  AEGP_CompH  compH,
  A_FpLong    *fpsPF);
```

`AEGP_S`etCompFramerate

```

Sets the composition's frames per second.

AEGP_SetCompFramerate(
  AEGP_CompH  compH,
  A_FpLong    *fpsPF);
```

`AEGP_G`etCompShutterAnglePhase

```

The composition shutter angle and phase.

AEGP_GetCompShutterAnglePhase(
  AEGP_CompH  compH,
  A_Ratio     *angle,
  A_Ratio     *phase);
```

`AEGP_G`etCompShutterFrameRange

```

The duration of the shutter frame, in seconds.

AEGP_GetCompShutterFrameRange(
  AEGP_CompH    compH,
  const A_Time  *comp_timeP);
```

`AEGP_G`etCompSuggestedMotionBlurSamples

```

Retrieves the number of motion blur samples After Effects will perform in the given composition.

AEGP_GetCompSuggestedMotionBlurSamples(
  AEGP_CompH  compH,
  A_long      *samplesPL)
```

`AEGP_S`etCompSuggestedMotionBlurSamples

```

Specifies the number of motion blur samples After Effects will perform in the given composition. Undoable.

AEGP_SetCompSuggestedMotionBlurSamples(
  AEGP_CompH  compH,
  A_long      samplesL);
```

`AEGP_G`etCompMotionBlurAdaptiveSampleLimit

```

New in CC. Retrieves the motion blur adaptive sample limit for the given composition.

As of CC, a new comp defaults to 128.

AEGP_GetCompMotionBlurAdaptiveSampleLimit(
  AEGP_CompH  compH,
  A_long      *samplesPL)
```

`AEGP_S`etCompMotionBlurAdaptiveSampleLimit

```

New in CC. Specifies the motion blur adaptive sample limit for the given composition.

As of CC, both the limit and the suggested values are clamped to [2,256] range and the limit value will not be allowed less than the suggested value.

Undoable.

AEGP_SetCompMotionBlurAdaptiveSampleLimit(
  AEGP_CompH  compH,
  A_long      samplesL);
```

`AEGP_G`etCompWorkAreaStart

```

Get the time where the current work area starts.

AEGP_GetCompWorkAreaStart(
  AEGP_CompH  compH,
  A_Time      *startPT);
```

`AEGP_G`etCompWorkAreaDuration

```

Get the duration of a composition's current work area, in seconds.

AEGP_GetCompWorkAreaDuration(
  AEGP_CompH  compH,
  A_Time      *durationPT);
```

`AEGP_S`etCompWorkAreaStartAndDuration

```

Set the work area start and duration, in seconds. Undo-able.

One call to this function is sufficient to set the layer's in point and duration; it's not necessary to call it twice, once for each timespace.

AEGP_SetCompWorkAreaStartAndDuration(
  AEGP_CompH    compH,
  const A_Time  *startPT)
  const A_Time  *durationPT);
```

`AEGP_C`reateSolidInComp

```

Creates a new solid with a specified width, height, color, and duration in the composition. Undo-able.

If you pass NULL for the duration, After Effects uses its preference for the duration of a new still. If you pass NULL, or an invalid time scale, duration is set to the length of the composition.

AEGP_CreateSolidInComp(
  const A_UTF16Char  *utf_nameZ,
  A_Long             widthL,
  A_Long             heightL,
  const PF_Pixel     *color,
  AEGP_CompH         parent_compH,
  const A_Time       *durationPT0,
  AEGP_LayerH        *new_solidPH);
```

`AEGP_C`reateCameraInComp

```

Creates and adds a camera to the specified composition. Once created, you can manipulate the camera's parameter streams using the AEGP Stream Suite.

To specify a two-node camera, use AEGP_SetLayerFlag from AEGP_LayerSuite9 to set AEGP_LayerFlag_LOOK_AT_POI.

AEGP_CreateCameraInComp(
  const A_UTF16Char  *utf_nameZ,
  A_FloatPoint       center_point,
  AEGP_CompH         parent_compH,
  AEGP_LayerH        *new_cameraPH);
```

`AEGP_C`reateLightInComp

```

Creates and adds a light to the specified composition. Once created, you can manipulate the light's parameter streams using the AEGP Stream Suite.

AEGP_CreateLightInComp(
  const A_UTF16Char  *utf_nameZ,
  A_FloatPoint       center_point,
  AEGP_CompH         parent_compH,
  AEGP_LayerH        *new_lightPH);
```

`AEGP_C`reateComp

```

Creates a new composition for the project. If you don't provide a parent folder, the composition will be at the root level of the project. Undo-able.

AEGP_CreateComp(
  AEGP_ItemH         parent_folderHO,
  const A_UTF16Char  *utf_nameZ,
  A_Long             widthL,
  A_Long             heightL,
  const A_Ratio      *pixel_aspect_ratioPRt,
  const A_Time       *durationPT,
  const A_Ratio      *frameratePRt,
  AEGP_CompH         *new_compPH);
```

`AEGP_G`etNewCollectionFromCompSelection

```

Creates a new AEGP_Collection2H from the items selected in the given composition.

The plug-in is responsible for disposing of the AEGP_Collection2H.

AEGP_GetNewCollectionFromCompSelection(
  AEGP_PluginID      plugin_id,
  AEGP_CompH         compH,
  AEGP_Collection2H  *collectionPH);
```

`AEGP_S`etSelection

```

Sets the selection within the given composition to the given AEGP_Collection2H.

Will return an error if members of the AEGP_Collection2H are not available. Don't assume that a composition hasn't changed between operations; always use a fresh AEGP_Collection2H.

AEGP_SetSelection(
  AEGP_CompH         compH,
  AEGP_Collection2H  collectionH);
```

`AEGP_G`etCompDisplayStartTime

```

Gets the displayed start time of a composition.

AEGP_GetCompDisplayStartTime(
  AEGP_CompH    compH,
  const A_Time  *start_timePT);
```

`AEGP_S`etCompDisplayStartTime

```

Not undo-able. Sets the displayed start time of a composition (has no effect on the duration of the composition).

AEGP_SetCompDisplayStartTime(
  AEGP_CompH    compH,
  const A_Time  *start_timePT);
```

`AEGP_S`etCompDuration

```

Undoable. Sets the duration of the given composition.

AEGP_SetCompDuration(
  AEGP_CompH    compH,
  const A_Time  *durationPT);
```

`AEGP_C`reateNullInComp

```

Creates a "null object" in the composition (useful for translating projects from 3D applications into After Effects).

If you pass NULL for the duration, After Effects uses its preference for the duration of a new still. If you pass 0, or an invalid time scale, duration is set to the length of the composition.

AEGP_CreateNullInComp(
  const A_UTF16Char  *utf_nameZ,
  AEGP_CompH         parent_compH,
  const A_Time       *durationPT0,
  AEGP_LayerH        *new_null_solidPH);
```

`AEGP_S`etCompPixelAspectRatio

```

Sets the pixel aspect ratio of a composition.

AEGP_SetCompPixelAspectRatio(
  AEGP_CompH     compH,
  const A_Ratio  *parPRt);
```

`AEGP_C`reateTextLayerInComp

```

Updated in CS6. Creates a text layer in the composition, and returns its AEGP_LayerH.

AEGP_CreateTextLayerInComp(
  AEGP_CompH   parent_compH,
  A_Boolean    select_new_layerB,
  AEGP_LayerH  *new_text_lyrPH);
```

`AEGP_C`reateBoxTextLayerInComp

```

Updated in CS6. Creates a new box text layer, and returns its AEGP_LayerH.

AEGP_CreateBoxTextLayerInComp(
  AEGP_CompH    parent_compH,
  A_Boolean     select_new_layerB,
  A_FloatPoint  box_dimensions,
  AEGP_LayerH   *new_text_layerPH);
```

`AEGP_S`etCompDimensions

```

Sets the dimensions of the composition. Undoable.

AEGP_SetCompDimensions(
  AEGP_CompH  compH,
  A_long      widthL,
  A_long      heightL);
```

`AEGP_D`uplicateComp

```

Duplicates the composition. Undoable.

AEGP_DuplicateComp(
  AEGP_CompH  compH,
  AEGP_CompH  *new_compPH);
```

`AEGP_G`etCompFrameDuration

```

Retrieves the duration of a frame in a composition.

AEGP_GetCompFrameDuration(
  AEGP_CompH  compH,
  A_Time      *timeP);
```

`AEGP_G`etMostRecentlyUsedComp

```

Returns the most-recently-used composition.

AEGP_GetMostRecentlyUsedComp(
  AEGP_CompH  *compPH);
```

`AEGP_C`reateVectorLayerInComp

```

Creates and returns a handle to a new vector layer.

AEGP_CreateVectorLayerInComp(
  AEGP_CompH   parent_compH,
  AEGP_LayerH  *new_vec_layerPH);
```

`AEGP_G`etNewCompMarkerStream

```

Returns an AEGP_StreamRefH to the composition's marker stream. Must be disposed by caller.

AEGP_GetNewCompMarkerStream(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_CompH       parent_compH,
  AEGP_StreamRefH  *streamPH);
```

`AEGP_G`etCompDisplayDropFrame

```

Passes back a boolean that indicates whether the specified comp uses drop-frame timecode or not.

AEGP_GetCompDisplayDropFrame(
  AEGP_CompH  compH,
  A_Boolean   *dropFramePB);
```

`AEGP_S`etCompDisplayDropFrame

```

Sets the dropness of the timecode in the specified composition.

AEGP_SetCompDisplayDropFrame(
  AEGP_CompH  compH,
  A_Boolean   dropFrameB);
```

`AEGP_R`eorderCompSelection

```

Move the selection to a certain layer index. Use along with AEGP_SetSelection().

AEGP_SetCompDisplayDropFrame(
  AEGP_CompH  compH,
  A_long      index);
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
