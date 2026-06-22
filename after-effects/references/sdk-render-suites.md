# Render Suites, The Aegp World As We Know It, Track Mattes And Transform Functions, Work With Audio ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Render Suites; The `AEGP_W`orld As We Know It; Track Mattes and Transform Functions; Work With Audio; Audio Settings; Render Queue Suite.

## Render Suites

### AEGP Suites — Render Suites

Ever since the AEGP API arrived, people have requested ways to pull back rendered frames.

That is precisely what these function suites let you accomplish.

Begin by stating what should be rendered through `AEGP_R`enderOptionsSuite4 or `AEGP_L`ayerRenderOptionsSuite1.

After that, carry out the render with `AEGP_R`enderSuite4.

### `AEGP_R`enderOptionsSuite4

Function

Purpose

`AEGP_N`ewFromItem

```

Gives back the AEGP_RenderOptionsH that goes with a given AEGP_ItemH.

When no options have been set yet, After Effects returns an AEGP_RenderOptionsH whose render time is 0, whose time step equals the current frame duration, whose field render is PF_Field_FRAME, and whose depth is the highest resolution the item specifies.

AEGP_NewFromItem(
  AEGP_PluginID        plugin_id,
  AEGP_ItemH           itemH,
  AEGP_RenderOptionsH  *optionsPH);
```

`AEGP_D`uplicate

```

Copies an AEGP_RenderOptionsH into copyPH.

AEGP_Duplicate(
  AEGP_PluginID        plugin_id,
  AEGP_RenderOptionsH  optionsH,
  AEGP_RenderOptionsH  *copyPH);
```

`AEGP_D`ispose

```

Removes an AEGP_RenderOptionsH.

AEGP_Dispose(
  AEGP_RenderOptionsH  optionsH);
```

`AEGP_S`etTime

```

Assigns the render time on an AEGP_RenderOptionsH.

AEGP_SetTime(
  AEGP_RenderOptionsH  optionsH,
  A_Time               time);
```

`AEGP_G`etTime

```

Reads back the render time from the given AEGP_RenderOptionsH.

AEGP_GetTime(
  AEGP_RenderOptionsH  optionsH,
  A_Time               *timeP);
```

`AEGP_S`etTimeStep

```

States the time step (how long a frame lasts) on the referenced AEGP_RenderOptionsH.

AEGP_SetTimeStep(
  AEGP_RenderOptionsH  optionsH,
  A_Time               time_step);
```

`AEGP_G`etTimeStep

```

Reads back the time step (how long a frame lasts) from the given AEGP_RenderOptionsH.

AEGP_GetTimeStep(
  AEGP_RenderOptionsH  optionsH,
  A_Time               *timePT);
```

`AEGP_S`etFieldRender

```

States the field settings on the given AEGP_RenderOptionsH.

AEGP_SetFieldRender(
  AEGP_RenderOptionsH  optionsH,
  PF_Field             field_render);
```

`AEGP_G`etFieldRender

```

Reads back the field settings from the given AEGP_RenderOptionsH.

AEGP_GetFieldRender(
  AEGP_RenderOptionsH  optionsH,
  PF_Field             *field_renderP);
```

`AEGP_S`etWorldType

```

States the AEGP_WorldType for the output of a given AEGP_RenderOptionsH.

AEGP_SetWorldType(
  AEGP_RenderOptionsH  optionsH,
  AEGP_WorldType       type);
```

`AEGP_W`orldType will be either `AEGP_W`orldType_8 or `AEGP_W`orldType_16

`AEGP_G`etWorldType

```

Reads back the AEGP_WorldType of the given AEGP_RenderOptionsH.

AEGP_GetWorldType(
  AEGP_RenderOptionsH  optionsH,
  AEGP_WorldType       *typeP);
```

`AEGP_S`etDownsampleFactor

```

States the downsample factor (horizontal and vertical set on their own) for the given AEGP_RenderOptionsH.

AEGP_SetDownsampleFactor(
  AEGP_RenderOptionsH  optionsH,
  A_short              x,
  A_short              y);
```

`AEGP_G`etDownsampleFactor

```

Reads back the downsample factor for the given AEGP_RenderOptionsH.

AEGP_GetDownsampleFactor(
  AEGP_RenderOptionsH  optionsH,
  A_short              *xP,
  A_short              *yP);
```

`AEGP_S`etRegionOfInterest

```

On the given AEGP_RenderOptionsH, sets which sub-rectangle is the region of interest.

AEGP_SetRegionOfInterest(
  AEGP_RenderOptionsH  optionsH,
  const A_LRect        *roiP)
```

`AEGP_G`etRegionOfInterest

```

From the given AEGP_RenderOptionsH, reads back which sub-rectangle serves as the region of interest.

AEGP_GetRegionOfInterest(
  AEGP_RenderOptionsH  optionsH,
  A_LRect              *roiP);
```

`AEGP_S`etMatteMode

```

States the AEGP_MatteMode for the given AEGP_RenderOptionsH.

AEGP_SetMatteMode(
  AEGP_RenderOptionsH  optionsH,
  AEGP_MatteMode       mode);
```

`AEGP_M`atteMode will be one of the following: - `AEGP_M`atteMode*STRAIGHT - `AEGP_M`atteMode*`PREMUL_BLACK` - `AEGP_M`atteMode\_`PREMUL_BG_COLOR`

`AEGP_G`etMatteMode

```

Reads back the AEGP_MatteMode for the given AEGP_RenderOptionsH.

AEGP_GetMatteMode(
  AEGP_RenderOptionsH  optionsH,
  AEGP_MatteMode       *modeP);
```

`AEGP_G`etChannelOrder

```

Fetches the AEGP_ChannelOrder for the given AEGP_RenderOptionsH.

AEGP_ChannelOrder will be either AEGP_ChannelOrder_ARGB or AEGP_ChannelOrder_BGRA.

AEGP_GetChannelOrder(
  AEGP_RenderOptionsH  optionsH,
  AEGP_ChannelOrder    *orderP);
```

Trivia: live linking with Premiere Pro is what prompted this addition.

`AEGP_S`etChannelOrder

```

Writes the AEGP_ChannelOrder onto the AEGP_RenderOptionsH.

AEGP_SetChannelOrder(
  AEGP_RenderOptionsH  optionsH,
  AEGP_ChannelOrder    order);
```

`AEGP_G`etRenderGuideLayers

```

Hands back a boolean that is true when the render-guide-layers setting is enabled.

AEGP_GetRenderGuideLayers)(
  AEGP_RenderOptionsH  optionsH,
  A_Boolean            *will_renderPB);
```

`AEGP_S`etRenderGuideLayers

```

Choose whether guide layers get rendered.

AEGP_SetRenderGuideLayers)(
  AEGP_RenderOptionsH  optionsH,
  A_Boolean            render_themB);
```

`AEGP_G`etRenderQuality

```

Read what render quality is set on the item in the render queue.

Quality is either AEGP_ItemQuality_DRAFT or AEGP_ItemQuality_BEST.

AEGP_GetRenderQuality(
  AEGP_RenderOptionsH  optionsH,
  AEGP_ItemQuality     *qualityP);
```

`AEGP_S`etRenderQuality

```

Assign the render quality on the item sitting in the render queue.

AEGP_GetRenderQuality(
  AEGP_RenderOptionsH  optionsH,
  AEGP_ItemQuality     quality);
```

| --- | --- |

### `AEGP_L`ayerRenderOptionsSuite1

Note

New in 13.0

Function

Purpose

`AEGP_N`ewFromLayer

```

Gives back the AEGP_LayerRenderOptionsH that goes with a given AEGP_LayerH.

Render time gets the layer's current time, time step gets the layer's frame duration, ROI gets the layer's nominal bounds, and EffectsToRender is set to "all".

The calling code has to dispose of optionsPH.

AEGP_NewFromLayer(
  AEGP_PluginID             plugin_id,
  AEGP_LayerH               layerH,
  AEGP_LayerRenderOptionsH  *optionsPH);
```

`AEGP_N`ewFromUpstreamOfEffect

```

Gives back the AEGP_LayerRenderOptionsH from the layer that goes with a given AEGP_EffectRefH.

Render time gets the layer's current time, time step gets the layer's frame duration, ROI gets the layer's nominal bounds, and EffectsToRender is set to the index of effectH.

The calling code has to dispose of optionsPH.

AEGP_NewFromUpstreamOfEffect(
  AEGP_PluginID             plugin_id,
  AEGP_EffectRefH           effectH,
  AEGP_LayerRenderOptionsH  *optionsPH);
```

`AEGP_D`uplicate

```

Copies an AEGP_LayerRenderOptionsH into copyPH.

AEGP_Duplicate(
  AEGP_PluginID             plugin_id,
  AEGP_LayerRenderOptionsH  optionsH,
  AEGP_LayerRenderOptionsH  *copyPH);
```

`AEGP_D`ispose

```

Removes an AEGP_LayerRenderOptionsH.

AEGP_Dispose(
  AEGP_LayerRenderOptionsH  optionsH);
```

`AEGP_S`etTime

```

Assigns the render time on an AEGP_LayerRenderOptionsH.

AEGP_SetTime(
  AEGP_LayerRenderOptionsH  optionsH,
  A_Time                    time);
```

`AEGP_G`etTime

```

Reads back the render time from the given AEGP_LayerRenderOptionsH.

AEGP_GetTime(
  AEGP_LayerRenderOptionsH  optionsH,
  A_Time                    *timeP);
```

`AEGP_S`etTimeStep

```

States the time step (how long a frame lasts) on the referenced AEGP_LayerRenderOptionsH.

AEGP_SetTimeStep(
  AEGP_LayerRenderOptionsH  optionsH,
  A_Time                    time_step);
```

`AEGP_G`etTimeStep

```

Reads back the time step (how long a frame lasts) from the given AEGP_LayerRenderOptionsH.

AEGP_GetTimeStep(
  AEGP_LayerRenderOptionsH  optionsH,
  A_Time                    *timePT);
```

`AEGP_S`etWorldType

```

States the AEGP_WorldType for the output of a given AEGP_LayerRenderOptionsH.

AEGP_SetWorldType(
  AEGP_LayerRenderOptionsH  optionsH,
  AEGP_WorldType            type);
```

`AEGP_W`orldType will be either `AEGP_W`orldType_8 or `AEGP_W`orldType_16

`AEGP_G`etWorldType

```

Reads back the AEGP_WorldType of the given AEGP_LayerRenderOptionsH.

AEGP_GetWorldType(
  AEGP_LayerRenderOptionsH  optionsH,
  AEGP_WorldType            *typeP);
```

`AEGP_S`etDownsampleFactor

```

States the downsample factor (horizontal and vertical set on their own) for the given AEGP_LayerRenderOptionsH.

AEGP_SetDownsampleFactor(
  AEGP_LayerRenderOptionsH  optionsH,
  A_short                   x,
  A_short                   y);
```

`AEGP_G`etDownsampleFactor

```

Reads back the downsample factor for the given AEGP_LayerRenderOptionsH.

AEGP_GetDownsampleFactor(
  AEGP_LayerRenderOptionsH  optionsH,
  A_short                   *xP,
  A_short                   *yP);
```

`AEGP_S`etMatteMode

```

States the AEGP_MatteMode for the given AEGP_LayerRenderOptionsH.

AEGP_SetMatteMode(
  AEGP_LayerRenderOptionsH  optionsH,
  AEGP_MatteMode            mode);
```

`AEGP_M`atteMode will be one of the following: - `AEGP_M`atteMode*STRAIGHT - `AEGP_M`atteMode*`PREMUL_BLACK` - `AEGP_M`atteMode\_`PREMUL_BG_COLOR`

`AEGP_G`etMatteMode

```

Reads back the AEGP_MatteMode for the given AEGP_LayerRenderOptionsH.

AEGP_GetMatteMode(
  AEGP_LayerRenderOptionsH  optionsH,
  AEGP_MatteMode            *modeP);
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

### `AEGP_R`enderSuite4

Function

Purpose

`AEGP_R`enderAndCheckoutFrame

```

Fetches an AEGP_FrameReceiptH (the pixels themselves don't come back) for the frame you asked for. Hand this receipt to AEGP_CheckinFrame to free its memory.

Build the AEGP_RenderOptionsH with the AEGP_RenderOptionsSuite4.

If it wants, the AEGP may supply a function for After Effects to invoke should the user cancel the running render, plus a refcon (a constant reference to opaque data) that function can use.

AEGP_RenderAndCheckoutFrame(
  AEGP_RenderOptionsH             optionsH,
  AEGP_RenderSuiteCheckForCancel  cancel_functionP0,
  AEGP_CancelRefcon               cancel_function_refconP0,
  AEGP_FrameReceiptH              *receiptPH);
```

`AEGP_R`enderAndCheckoutLayerFrame

```

New in CC 2014. This permits checking out a layer's frame, effects applied, outside render time.

It comes in handy when an operation needs the frame, for instance after a button press where a brief wait while it renders is acceptable.

Note: because it isn't asynchronous, it won't address the broader case where custom UI has to draw from the frame.

Fetches an AEGP_FrameReceiptH (not the actual pixels) for the layer frame you asked for. Hand this receipt to AEGP_CheckinFrame to free its memory.

Build the AEGP_LayerRenderOptionsH using AEGP_NewFromUpstreamOfEffect(), found in AEGP_LayerRenderOptionsSuite1.

You can in fact use AEGP_NewFromLayer() to obtain other layer params' layers with their effects applied. Tread carefully, though. Do it inside your effect A while an effect B on the other layer does the very same thing during rendering, and you'll spin up an infinite loop. When it isn't for render purposes, it might be fine.

If it wants, the AEGP may supply a function for After Effects to invoke should the user cancel the running render, plus a refcon (a constant reference to opaque data) that function can use.

AEGP_RenderAndCheckoutLayerFrame(
  AEGP_LayerRenderOptionsH        optionsH,
  A_Boolean                       render_plain_layer_frameB,
  AEGP_RenderSuiteCheckForCancel  cancel_functionP0,
  AEGP_CancelRefcon               cancel_function_refconP0,
  AEGP_FrameReceiptH              *receiptPH);
```

`AEGP_C`heckinFrame

```

Make this call the moment your AEGP finishes with the frame.

Since which frames stay checked out drives After Effects' caching decisions, release them promptly rather than holding on!

AEGP_CheckinFrame(
  AEGP_FrameReceiptH  receiptH);
```

`AEGP_G`etReceiptWorld

```

Fetches the pixels (AEGP_WorldH) that go with the referenced AEGP_FrameReceiptH.

AEGP_GetReceiptWorld(
  AEGP_FrameReceiptH  receiptH,
  AEGP_WorldH         *worldPH);
```

`AEGP_G`etRenderedRegion

```

Fetches an A_LRect holding the area of the AEGP_FrameReceiptH's AEGP_WorldH that has been rendered already.

Bear in mind that only the changed portions of an image may end up rendered, so being able to verify whether that covers the portion you require matters.

AEGP_GetRenderedRegion(
  AEGP_FrameReceiptH  receiptH,
  A_LRect             *regionP);
```

`AEGP_I`sRenderedFrameSufficient

```

Hand After Effects two sets of AEGP_RenderOptionsH and it returns TRUE when the pixels already rendered remain valid for the proposed AEGP_RenderOptionsH.

AEGP_IsRenderedFrameSufficient(
  AEGP_RenderOptionsH  rendered_optionsH,
  AEGP_RenderOptionsH  proposed_optionsH,
  A_Boolean            *is_sufficientPB);
```

`AEGP_R`enderNewItemSoundData

```

Pulls an AEGP_ItemH's audio at the stated time, for the stated duration, in the stated format.

The plug-in has to dispose of the AEGP_SoundDataH that comes back (it may be NULL when no audio exists).

AEGP_RenderNewItemSoundData(
  AEGP_ItemH                  itemH,
  const A_Time                *start_timePT,
  const A_Time                *durationPT,
  const AEGP_SoundDataFormat  *formatP,
  AEGP_SoundDataH             *new_dataPH);
```

NOTE: When invoked as part of `AEGP_I`temSuite2, this function gives a render you can interrupt with mouse clicks, unlike the `AEGP_R`enderSuite version documented here.

`AEGP_G`etCurrentTimestamp

```

Reads back the project's current AEGP_TimeStamp.

The AEGP_TimeStamp gets refreshed any time an item is touched in a way that bears on rendering.

AEGP_GetCurrentTimestamp(
  AEGP_TimeStamp  *time_stampP);
```

`AEGP_H`asItemChangedSinceTimestamp

```

Tells you whether an AEGP_ItemH's video has changed since the supplied AEGP_TimeStamp.

Note: audio changes are not tracked by this.

AEGP_HasItemChangedSinceTimestamp(
  AEGP_ItemH            itemH,
  const A_Time          *start_timeP,
  const A_Time          *durationP,
  const AEGP_TimeStamp  *time_stampP,
  A_Boolean             *changedPB);
```

`AEGP_I`sItemWorthwhileToRender

```

Tells you whether this frame would be worth rendering externally and checking back into the cache.

A speculative renderer ought to test this twice: ahead of sending the frame out to render, and once it finishes, just before it calls AEGP_NewPlatformWorld() and checks in.

This function is meant to work alongside AEGP_HasItemChangedSinceTimestamp(), never on its own.

AEGP_IsItemWorthwhileToRender(
  AEGP_RenderOptionsH   roH,
  const AEGP_TimeStamp  *time_stampP,
  A_Boolean             *worthwhilePB);
```

`AEGP_C`heckinRenderedFrame

```

Supply a rendered frame (AEGP_PlatformWorldH) to After Effects, which takes ownership of it.

ticksL is roughly how long the frame took to render.

AEGP_CheckinRenderedFrame(
  AEGP_RenderOptionsH    roH,
  const AEGP_TimeStamp*  time_stampP,
  A_u_long               ticksL,
  AEGP_PlatformWorldH    imageH);
```

`AEGP_G`etReceiptGuid

```

New in CS6. Fetch a GUID for a rendered frame. Dispose of the memory handle that comes back.

AEGP_GetReceiptGuid(
  AEGP_FrameReceiptH  receiptH,
  AEGP_MemHandle      *guidMH)
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

## The `AEGP_W`orld As We Know It

### AEGP Suites — The `AEGP_W`orld As We Know It

AEGP APIs use `AEGP_W`orlds as the shared representation for pixel-frame data.

### `AEGP_W`orldSuite3

Function

Purpose

`AEGP_N`ew

```

Allocates and initializes an AEGP_WorldH, then returns it.

AEGP_New(
  AEGP_PluginID   plugin_id,
  AEGP_WorldType  type,
  A_long          widthL,
  A_long          heightL,
  AEGP_WorldH     *worldPH);
```

`AEGP_D`ispose

```

Releases an AEGP_WorldH. Call this for each world that your code allocates.

AEGP_Dispose(
  AEGP_WorldH  worldH);
```

`AEGP_G`etType

```

Reads the AEGP_WorldType associated with the supplied AEGP_WorldH.

AEGP_GetType(
  AEGP_WorldH worldH,
  AEGP_WorldType *typeP);
```

`AEGP_W`orldType will be one of the following: - `AEGP_W`orldType_8 - `AEGP_W`orldType_16 - `AEGP_W`orldType_32

`AEGP_G`etSize

```

Reads the width and height stored on the supplied AEGP_WorldH.

AEGP_GetSize(
  AEGP_WorldH  worldH,
  A_long       *widthPL,
  A_long       *heightPL);
```

`AEGP_G`etRowBytes

```

Gets the rowbytes value for the supplied AEGP_WorldH.

AEGP_GetRowBytes(
  AEGP_WorldH  worldH,
  A_u_long     *row_bytesPL);
```

`AEGP_G`etBaseAddr8

```

Provides the AEGP_WorldH base address needed by pixel-iteration routines.

If the world is not 8bpc, this call reports an error.

AEGP_GetBaseAddr8(
  AEGP_WorldH  worldH,
  PF_Pixel8    *base_addrP);
```

`AEGP_G`etBaseAddr16

```

Provides the AEGP_WorldH base address needed by pixel-iteration routines.

If the world is not 16bpc, this call reports an error.

AEGP_GetBaseAddr16(
  AEGP_WorldH  worldH,
  PF_Pixel16   *base_addrP);
```

`AEGP_G`etBaseAddr32

```

Provides the AEGP_WorldH base address needed by pixel-iteration routines.

If the world is not 32bpc, this call reports an error.

AEGP_GetBaseAddr32(
  AEGP_WorldH    worldH,
  PF_PixelFloat  *base_addrP);
```

`AEGP_F`illOutPFEffectWorld

```

Builds a PF_EffectWorld for the supplied AEGP_WorldH so many pixel-processing callbacks can use it.

NOTE: The referenced world is not transferred to your plug-in; destroy the source AEGP_WorldH only when your plug-in allocated it. The provided PF_EffectWorld is merely filled so it targets the same pixel buffer.

AEGP_FillOutPFEffectWorld(
  AEGP_WorldH     worldH,
  PF_EffectWorld  *pf_worldP);
```

`AEGP_F`astBlur

```

Applies a fast blur operation to the specified AEGP_WorldH.

AEGP_FastBlur(
  A_FpLong      radiusF,
  PF_ModeFlags  mode,
  PF_Quality    quality,
  AEGP_WorldH   worldH);
```

`AEGP_N`ewPlatformWorld

```

Creates an AEGP_PlatformWorldH, which is a pixel world in the platform's native form.

AEGP_NewPlatformWorld(
  AEGP_PluginID        plugin_id,
  AEGP_WorldType       type,
  A_long               widthL,
  A_long               heightL,
  AEGP_PlatformWorldH  *worldPH);
```

`AEGP_D`isposePlatformWorld

```

Releases an AEGP_PlatformWorldH.

AEGP_DisposePlatformWorld(
  AEGP_PlatformWorldH  worldH);
```

`AEGP_N`ewReferenceFromPlatformWorld

```

Gets an AEGP_WorldH that refers to the supplied AEGP_PlatformWorldH.

NOTE: No additional world is allocated here; the function only returns a reference to the existing one.

AEGP_NewReferenceFromPlatformWorld(
  AEGP_PluginID        plugin_id,
  AEGP_PlatformWorldH  plat_worldH,
  AEGP_WorldH          *worldPH);
```

| --- | --- |

## Track Mattes and Transform Functions

### AEGP Suites — Track Mattes and Transform Functions

`AEGP_C`ompositeSuite is used for copying pixel worlds, working with track mattes, and running transfer functions.

### `AEGP_C`ompositeSuite2

Function

Purpose

`AEGP_C`learAlphaExceptRect

```

Sets alpha to fully transparent across the PF_EffectWorld except inside the specified rectangle.

AEGP_ClearAlphaExceptRect(
  A_Rect          *clipped_dst_rectPR,
  PF_EffectWorld  *dstP);
```

`AEGP_P`repTrackMatte

```

Uses the PF_Pixel data described by src_masks to matte pixels in a PF_EffectWorld, writing the result into the dst_mask pixel array.

NOTE: This routine differs from most pixel-mangling calls supplied by After Effects because it does not receive PF_EffectWorld arguments. Instead, pass the data pointer held inside the PF_EffectWorld. That detail can be easy to miss, but the benefit is that the function pads its output so num_pix pixels are always produced.

AEGP_PrepTrackMatte(
  A_long          num_pix,
  A_Boolean       deepB,
  const PF_Pixel  *src_mask,
  PF_MaskFlags    mask_flags,
  PF_Pixel        *dst_mask);
```

`AEGP_T`ransferRect

```

Uses a transfer mode, and optionally a mask, to blend two PF_EffectWorlds. To blend in the current working color space, pass NULL for blend_tablesP0.

AEGP_TransferRect(
  PF_Quality               quality,
  PF_ModeFlags             m_flags,
  PF_Field                 field,
  const A_Rect             *src_rec,
  const PF_EffectWorld     *src_world,
  const PF_CompositeMode   *comp_mode,
  PF_EffectBlendingTables  blend_tablesP0,
  const PF_MaskWorld       *mask_world0,
  A_long                   dest_x,
  A_long                   dest_y,
  PF_EffectWorld           *dst_world);
```

`AEGP_C`opyBits_LQ

```

At low quality, copies a pixel rectangle from one PF_EffectWorld into another; pass a NULL rectangle to include every pixel.

AEGP_CopyBits_LQ(
  PF_EffectWorld  *src_worldP,
  A_Rect          *src_r,
  A_Rect          *dst_r,
  PF_EffectWorld  *dst_worldP);
```

`AEGP_C`opyBits\_`HQ_S`traight

```

At high quality with straight alpha, copies a pixel rectangle from one PF_EffectWorld into another; pass a NULL rectangle to include every pixel.

AEGP_CopyBits_HQ_Straight(
  PF_EffectWorld  *src,
  A_Rect          *src_r,
  A_Rect          *dst_r,
  PF_EffectWorld  *dst);
```

`AEGP_C`opyBits\_`HQ_P`remul

```

At high quality, copies a pixel rectangle from one PF_EffectWorld into another while premultiplying alpha; pass a NULL rectangle to include every pixel.

AEGP_CopyBits_HQ_Premul(
  PF_EffectWorld  *src,
  A_Rect          *src_r,
  A_Rect          *dst_r,
  PF_EffectWorld  *dst);
```

| --- | --- |

## Work With Audio

### AEGP Suites — Work With Audio

Through `AEGP_S`oundDataSuite, AEGPs can get and modify audio tied to compositions and footage items.

`AEGP_R`enderNewItemSoundData() can place audio-only items into the render queue.

### `AEGP_S`oundDateSuite1

Function

Purpose

`AEGP_N`ewSoundData

```

Creates an AEGP_SoundDataH that the plug-in later has to dispose.

AEGP_NewSoundData(
  const AEGP_SoundDataFormat  *formatP,
  AEGP_SoundDataH             *new_dataPH);
```

`AEGP_D`isposeSoundData

```

Releases an AEGP_SoundDataH.

AEGP_DisposeSoundData(
  AEGP_SoundDataH  sound_dataH);
```

`AEGP_G`etSoundDataFormat

```

Reads format details from the supplied AEGP_SoundDataH.

AEGP_GetSoundDataFormat(
  AEGP_SoundDataH       soundH,
  AEGP_SoundDataFormat  *formatP);
```

`AEGP_L`ockSoundDataSamples

```

Locks the AEGP_SoundDataH samples into memory.

AEGP_LockSoundDataSamples(
  AEGP_SoundDataH  soundH,
  void             *samples);
```

`AEGP_U`nlockSoundDataSamples

```

Releases the memory lock on an AEGP_SoundDataH.

AEGP_UnlockSoundDataSamples(
  AEGP_SoundDataH  soundH);
```

`AEGP_G`etNumSamples

```

Gets the sample count stored in the supplied AEGP_SoundDataH.

AEGP_GetNumSamples(
  AEGP_SoundDataH  soundH,
  A_long           *numsamplesPL);
```

| --- | --- |

## Audio Settings

### AEGP Suites — Audio Settings

`AEGP_S`oundDataFormat represents audio render settings.

```
struct AEGP_SoundDataFormat {
    A_FpLong            sample_rateF;
    AEGP_SoundEncoding  encoding;
    A_long              bytes_per_sampleL;
    A_long              num_channelsL; // 1 for mono, 2 for stereo
} AEGP_SoundDataFormat;
```

bytes_per_sampleL is always either 1, 2, or 4. When float encoding is in use, that field is ignored.

`AEGP_S`oundEncoding is one of the following:

- `AEGP_S`oundEncoding\_`UNSIGNED_PCM`
- `AEGP_S`oundEncoding\_`SIGNED_PCM`
- `AEGP_S`oundEncoding_FLOAT

## Render Queue Suite

### AEGP Suites — Render Queue Suite

This suite lets AEGPs place items into the render queue with default options and manage the queue's basic state.

### `AEGP_R`enderQueueSuite1

Function

Purpose

`AEGP_A`ddCompToRenderQueue

```

Places a composition in the render queue with default options.

AEGP_AddCompToRenderQueue(
  AEGP_CompH     compH,
  const A_char*  pathZ);
```

`AEGP_S`etRenderQueueState

```

Changes the render queue to one of three allowed states. A stopped queue cannot be changed directly to paused.

AEGP_SetRenderQueueState(
  AEGP_RenderQueueState  state);
```

- `AEGP_R`enderQueueState_STOPPED - `AEGP_R`enderQueueState_PAUSED - `AEGP_R`enderQueueState_RENDERING

`AEGP_G`etRenderQueueState

```

Reads the active render queue state.

AEGP_GetRenderQueueState(
  AEGP_RenderQueueState  *stateP);
```

| --- | --- |
