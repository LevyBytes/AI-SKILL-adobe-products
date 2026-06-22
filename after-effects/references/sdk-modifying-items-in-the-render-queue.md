# Modifying Items In The Render Queue, Names And Solids, Reporting Errors And Problems, Transforms What Happens First ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Modifying Items In The Render Queue; Names And Solids; Reporting Errors And Problems; Transforms: What Happens First?; Accessing Pixels From Effect Layer Parameters; Artisans; Interactive Artisans; Artisan Data Types; Data Types Used In The Artisan API; Horz? Vert?; Implementation And Design; 3D Compositing, Not Modeling; Registering An Artisan; The World Is Your Canvas.

## Modifying Items In The Render Queue

### AEGP Details — Modifying Items In The Render Queue

Calling `AEGP_A`ddCompToRenderQueue from `AEGP_R`enderQueueSuite1 invalidates all render-queue-item references; the same invalidation occurs when a user manually adds or removes a composition from the render queue. Adding or removing output modules likewise invalidates those references for each render queue item.

## Names And Solids

### AEGP Details — Names And Solids

In the After Effects UI, solids have names, but those names are not present in their `PF_L`ayerDef `PF_E`ffectWorld / `PF_L`ayerDef. Because of that, `AEGP_G`etItemName in `AEGP_I`temSuite9 and `AEGP_G`etLayerName in `AEGP_L`ayerSuite9 cannot retrieve them.

You can, however, use the associated ItemH to call `AEGP_G`etItemName from `AEGP_I`temSuite9.

## Reporting Errors And Problems

### AEGP Details — Reporting Errors And Problems

Report information to users, and identify the plug-in, with `AEGP_I`temSuite>`AEGP_R`eportInfo(). AEIO plug-ins instead use the msg_func pointer inside the `AEIO_B`asicData passed to every function.

## Transforms: What Happens First?

### AEGP Details — Transforms: What Happens First?

After Effects first computes rotation from auto-orientation, such as towards path or point of interest, then computes Orientation, and finally computes X, Y, and Z rotation.

## Accessing Pixels From Effect Layer Parameters

### AEGP Details — Accessing Pixels From Effect Layer Parameters

Call `AEGP_G`etNewStreamValue in `AEGP_S`treamSuite5 to retrieve the layer's layer_id, then call the newer `AEGP_G`etLayerFromLayerID in `AEGP_L`ayerSuite9 to obtain the `AEGP_L`ayerH.

## Artisans

Note

Before building an Artisan, discuss the plan with us first.

The Artisan API exposes the function hooks a plug-in needs in order to generate rendered output for 3D layers, taking full control away from After Effects for that work while After Effects continues to render all 2D layers. Each composition can use only one Artisan, selected in Composition Settings > Advanced. During rendering, Artisans handle the 3D environment and ask After Effects about each composition element. As expected, that work is broad and painstaking. Use this API only when there is a serious need to replace After Effects' 3D renderer.

Artisans can exchange information with effects that were written for that communication, but effects cannot start the exchange themselves. Many suites used by Artisans need a rendering context, and that context is created only after every effect has been applied to the layer.

## Interactive Artisans

### Artisans — Interactive Artisans

Interactive artisans differ from standard artisans because they process every layer in a composition, not only layers made 3D by the user, and After Effects calls them only for onscreen display. They are not used for final rendered output; those rendering calls fall through to the default artisan.

## Artisan Data Types

The Artisan API most often uses the data types listed below.

## Data Types Used In The Artisan API

### Artisan Data Types — Data Types Used In The Artisan API

Type

Describes

`AEGP_R`enderLayerContextH

State at render-request time, sent by After Effects to an Artisan.

`PR_R`enderContextH

Settings collection that defines what will render and how it will render.

`AEGP_S`oundDataH

Audio settings for a particular layer.

`AEGP_R`enderReceiptH `AEGP_F`rameReceiptH

Artisans use these while rendering.

`AEGP_W`orldH

One frame of pixel data.

`AEGP_R`enderOptionsH

Settings tied to a render queue item.

| --- | --- |

## Horz? Vert?

### Artisan Data Types — Horz? Vert?

After Effects uses a row-based matrix, while OpenGL uses a column-based one. That creates extra work for you. Yay, billable hours!

## Implementation And Design

### Artisan Data Types — Implementation And Design

An Artisan is close to being its own application. Early in the After Effects 5.0 era, we recognized that 3D rendering problems such as intersections and shading can be approached in many different ways.

The API was supplied so our teams and third-party developers (yes, we really do use our own APIs) could build any desired 3D rendering scheme.

## 3D Compositing, Not Modeling

### Artisan Data Types — 3D Compositing, Not Modeling

After Effects is not a 3D modeling application. Users work responsively, moving to higher quality only for proofing or final output. Consider offering a layout-quality mode and a separate final-output mode. Keep low-quality render time in mind.

## Registering An Artisan

### Artisan Data Types — Registering An Artisan

An Artisan is an AEGP with one entry point. Artisans also need to register their own function entry points and use a special callback for that purpose. See `AEGP_R`egisterArtisan() from `AEGP_R`egisterSuite5.

The table shows the functions Artisans may support as `PR_A`rtisanEntryPoints defines them; only render_func is mandatory.

### Artisan Entry Points

`PR_A`rtisanEntryPoints

global_setup_func0

```

Called one time only, immediately after GP_Main. Global data is shared by every instance of the plug-in.

If Global Setup allocates memory, your global_setdown_func must release it.

PR_GlobalSetupFunc(
  const PR_InData    *in_dataP,
  PR_GlobalContextH  global_contextH,
  PR_GlobalDataH     *global_dataPH);
```

global_setdown_func0

```

Dispose any global data that your code allocated.

PR_GlobalSetdownFunc(
  const PR_InData    *in_dataP,
  PR_GlobalContextH  global_contextH,
  PR_GlobalDataH     global_dataH);
```

global_do_about_func0

```

Present information about the plug-in. Use in_dataP>msg_func to show the dialog.

PR_GlobalDoAboutFunc(
  const PR_InData    *in_dataP,
  PR_GlobalContextH  global_contextH,
  PR_GlobalDataH     global_dataH);
```

setup_instance_func0

```

Allocate and initialize data that belongs to this Artisan instance.

PR_InstanceSetupFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceFlags     flags,
  PR_FlatHandle        flat_dataH0,
  PR_InstanceDataH     *instance_dataPH);
```

setdown_instance_func0

```

Free and deallocate data that belongs to this Artisan instance.

PR_InstanceSetdownFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH);
```

flatten_instance_func0

```

Flatten your data before it is written to disk, ensuring OS independence when the Artisan requires it.

PR_FlattenInstanceFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_FlatHandle        *flatH);
```

do_instance_dialog_func0

```

When an Artisan exposes extra parameters through its Options dialog, this function handles reading and writing those values.

PR_DoInstanceDialogFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_DialogResult      *resultP);
```

`PR_D`ialogResultis is either `PR_D`ialogResult*`NO_CHANGE` or `PR_D`ialogResult*`CHANGE_MADE`.

frame_setup_func0

```

Perform whatever preparation a frame render needs; After Effects calls this just before rendering starts.

PR_FrameSetupFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH
  PR_RenderContextH    render_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_RenderDataH       *render_dataPH);
```

frame_setdown_func0

```

Dispose setup data allocated during frame_setup; After Effects sends this just after rendering ends.

PR_FrameSetdownFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH
  PR_RenderContextH    render_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_RenderDataH       render_dataH);
```

render_func

```

Draws the scene.

PR_FrameRenderFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH
  PR_RenderContextH    render_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_RenderDataH       render_dataH);
```

query_func0

```

When needed, Artisans may draw custom projection axes.

After Effects calls this function to obtain the transform from composition world space to those axes, plus several related preview drawing operations for on-screen and off-screen cases. Only interactive artisans use the on-screen path.

PR_QueryFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH
  PR_QueryContextH     query_contextH,
  PR_QueryType         query_type,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH);
```

`PR_Q`ueryType can be one of the following: - `PR_Q`ueryType*NONE = 0 - `PR_Q`ueryType_TRANSFORM - `PR_Q`ueryType*`INTERACTIVE_WINDOW_DISPOSE` - `PR_Q`ueryType*`INTERACTIVE_WINDOW_CLEAR` - `PR_Q`ueryType*`INTERACTIVE_WINDOW_FROZEN_PROXY` - `PR_Q`ueryType*`INTERACTIVE_SWAP_BUFFER` - `PR_Q`ueryType*`INTERACTIVE_DRAW_PROCS` - `PR_Q`ueryType*`PREPARE_FOR_LINE_DRAWING` - `PR_Q`ueryType*`UNPREPARE_FOR_LINE_DRAWING` - `PR_Q`ueryType*`GET_CURRENT_CONTEXT_SAFE_FOR_LINE_DRAWING` - `PR_Q`ueryType*`GET_ARTISAN_QUALITY` (New in CS6.)

| --- | --- |

## The World Is Your Canvas

### Artisan Data Types — The World Is Your Canvas

`AEGP_R`enderTexture() places a layer's raw, untransformed pixels into a buffer of arbitrary size.

`AEGP_R`enderLayer() runs the full After Effects render pipeline, including transforms, masking, and related processing, and provides the layer as it appears inside its composition in a composition-sized buffer.

When the rendered layer is 3D, the default Artisan, Standard 3D, is called to perform the 3D geometric work.

Your Artisan can use this behavior to render track matte layers and apply them to the transformed 3D layer only as strict 2D mattes.

Before rendering, the Artisans shipped with After Effects apply an inverse transform to obtain square pixels, then apply the transform again before display.

For example, when the pixel aspect ratio is 10/11 (DV NTSC), multiplying by 11/10 produces square pixels. After processing and compositing 3D layers, divide again to return to the original pixel aspect ratio.

The suite below provides layers, compositions, texture buffers, and destination buffers. Every artisan relies on this suite.

### `AEGP_C`anvasSuite8

Function

Purpose

`AEGP_G`etCompToRender

```

Using the render context passed to the Artisan at render time, returns the composition handle.

AEGP_GetCompToRender(
  PR_RenderContextH  render_contextH,
  AEGP_CompH         *compPH)
```

`AEGP_G`etNumLayersToRender

```

Using the render context, reports how many layers the Artisan must render.

AEGP_GetNumLayersToRender(
  PR_RenderContextH  render_contextH,
  A_long             *num_to_renderPL)
```

`AEGP_G`etNthLayerContextToRender

```

Builds the list of layers to render after the Artisan has determined the total layer count that needs rendering.

AEGP_GetNthLayerContextToRender(
  PR_RenderContextH         render_contextH,
  A_long                    n,
  AEGP_RenderLayerContextH  *layer_indexPH)
```

`AEGP_G`etLayerFromLayerContext

```

From an AEGP_RenderLayerContextH, gets the AEGP_LayerH that many suite functions require.

AEGP_GetLayerFromLayerContext(
  const PR_RenderContextH   render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  AEGP_LayerH               *layerPH);
```

`AEGP_G`etLayerAndSubLayerFromLayerContext

```

Supports sub-layer rendering, including Photoshop-file sub-layers.

AEGP_GetLayerAndSubLayerFromLayerContext(
  const PR_RenderContextH   render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  AEGP_LayerH               *layerPH,
  AEGP_SubLayerIndex        *sublayerP);
```

`AEGP_G`etTopLayerFromLayerContext

```

When collapsed geometrics are "on", this returns the layer in the root composition that contains the layer context.

When collapsed geometrics are off, this matches AEGP_GetLayerFromLayerContext.

AEGP_GetTopLayerFromLayerContext(
  const PR_RenderContextH   r_contextH,
  AEGP_RenderLayerContextH  l_contextH,
  AEGP_LayerH               *layerPH);
```

`AEGP_G`etCompRenderTime

```

Using the render context, returns the current composition-time position for rendering.

AEGP_GetNthLayerIndexToRender(
  PR_RenderContextH  render_contextH,
  A_long             *time,
  A_long             *time_step)
```

`AEGP_G`etCompDestinationBuffer

```

Using the render context, returns the buffer where final rendered output should be placed.

AEGP_GetCompToRender(
  PR_RenderContextH  render_contextH,
  AEGP_CompH         compH,
  PF_EffectWorld     *dst);
```

`AEGP_G`etROI

```

Using render_contextH, returns the region of interest through roiPR.

AEGP_GetROI(
  PR_RenderContextH  render_contextH,
  A_LegacyRect       *roiPR);
```

`AEGP_R`enderTexture

```

Using the render context plus the layer, returns the layer texture.

Parameters ending in '0' are optional; NULL is allowed for the returned PF_EffectWorld.

AEGP_RenderTexture(
  PR_RenderContextH  render_contextH,
  AEGP_LayerH        layerH,
  AEGP_RenderHints   render_hints,
  A_FloatPoint       *suggested_scaleP0,
  A_FloatRect        *suggsted_src_rectP0,
  A_Matrix3          *src_matrixP0,
  PF_EffectWorld     *render_bufferP);
```

`AEGP_R`enderHints contains one or more of the following: - `AEGP_R`enderHints*NONE - `AEGP_R`enderHints*`IGNORE_EXTENTS` - `AEGP_R`enderHints\_`NO_TRANSFER_MODE` (prevents application of opacity & transfer mode; for use with RenderLayer calls.)

`AEGP_D`isposeTexture

```

Releases an acquired layer texture.

AEGP_DisposeTexture(
  PR_RenderContextH  render_contextH,
  AEGP_LayerH        layerH,
  AEGP_WorldH        *dst0);
```

`AEGP_G`etFieldRender

```

Reads the field settings for the specified PR_RenderContextH.

AEGP_GetFieldRender(
  PR_RenderContextH  render_contextH,
  PF_Field           *field);
```

`AEGP_R`eportArtisanProgress

Using render_contextH, reports progress for the Artisan render.

Note

On macOS, this is NOT thread-safe; use it only from thread ID 0.

```

AEGP_ReportArtisanProgress(
  PR_RenderContextH  render_contextH,
  A_long             countL,
  A_long             totalL);
```

`AEGP_G`etRenderDownsampleFactor

```

Reads the downsample factor from the PR_RenderContextH.

AEGP_GetRenderDownsampleFactor(
  PR_RenderContextH      render_contextH,
  AEGP_DownsampleFactor  *dsfP);
```

`AEGP_I`sBlankCanvas

```

Determines whether PR_RenderContextH is blank, meaning empty.

AEGP_IsBlankCanvas(
  PR_RenderContextH  render_contextH,
  A_Boolean          *is_blankPB);
```

`AEGP_G`etRenderLayerToWorldXform

```

For a layer in a render context at a specific time, retrieves the 4 by 4 coordinate-space transform.

AEGP_GetRenderLayerToWorldXform(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timeP,
  A_Matrix4                 *transform);
```

`AEGP_G`etRenderLayerBounds

```

Retrieves the bounding rectangle for layer_contextH at a given time inside render_contextH.

AEGP_GetRenderLayerBounds(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timeP,
  A_LegacyRect              *boundsP);
```

`AEGP_G`etRenderOpacity

```

Returns opacity for the specified layer context and time inside render_contextH.

AEGP_GetRenderOpacity(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timePT,
  A_FpLong                  *opacityPF);
```

`AEGP_I`sRenderLayerActive

```

Reports whether a layer context is active in the render context at the specified time.

AEGP_IsRenderLayerActive(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timePT,
  A_Boolean                 *activePB);
```

`AEGP_S`etArtisanLayerProgress

```

Sets progress data for a rendering Artisan.

- countL is the completed layer count,

- num_layersL is the total layer count for that render.

AEGP_SetArtisanLayerProgress(
  PR_RenderContextH  render_contextH,
  A_long             countL,
  A_long             num_layersL);
```

`AEGP_R`enderLayerPlus

```

Similar to AEGP_RenderLayer, but it accounts for AEGP_RenderLayerContextH.

AEGP_RenderLayerPlus(
  PR_RenderContextH          r_contextH,
  AEGP_LayerH                layerH,
  AEGP_RenderLayerContextH   l_contextH,
  AEGP_RenderHints           render_hints,
  AEGP_WorldH                *bufferP);
```

`AEGP_G`etTrackMatteContext

```

Gets the AEGP_RenderLayerContextH associated with the supplied render context and fill context.

AEGP_GetTrackMatteContext(
  PR_RenderContextH         rnder_contextH,
  AEGP_RenderLayerContextH  fill_contextH,
  AEGP_RenderLayerContextH  *mattePH);
```

`AEGP_R`enderTextureWithReceipt

```

Renders a texture into an AEGP_WorldH and returns an AEGP_RenderReceiptH for that operation.

receiptPH returned from this call must be disposed with AEGP_DisposeRenderReceipt.

AEGP_RenderTextureWithReceipt(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  AEGP_RenderHints          render_hints,
  A_FloatPoint              *suggested_scaleP0,
  A_FloatRect               *suggest_src_rectP0,
  A_Matrix3                 *src_matrixP0,
  AEGP_RenderReceiptH       *receiptPH,
  AEGP_WorldH               *dstPH);
```

`AEGP_G`etNumberOfSoftwareEffects

```

Reports how many software effects are applied in the supplied AEGP_RenderLayerContextH.

AEGP_GetNumberOfSoftwareEffects(
  PR_RenderContextH         ren_contextH,
  AEGP_RenderLayerContextH  lyr_contextH,
  A_short                   *num_sft_FXPS);
```

`AEGP_R`enderLayerPlusWithReceipt

```

This improves on AEGP_RenderLayerPlus by also returning an AEGP_RenderReceiptH for caching.

AEGP_RenderLayerPlusWithReceipt(
  PR_RenderContextH            render_contextH,
  AEGP_LayerH                  layerH,
  AEGP_RenderLayerContextH     layer_contextH,
  AEGP_RenderHints             render_hints,
  AEGP_NumEffectsToRenderType  num_effectsS,
  AEGP_RenderReceiptH          *receiptPH,
  AEGP_WorldH                  *bufferPH);
```

`AEGP_D`isposeRenderReceipt

```

Releases an AEGP_RenderReceiptH.

AEGP_DisposeRenderReceipt(
  AEGP_RenderReceiptH  receiptH);
```

`AEGP_C`heckRenderReceipt

```

Queries After Effects' internal cache to determine whether the supplied AEGP_RenderReceiptH remains valid.

AEGP_CheckRenderReceipt(
  PR_RenderContextH            current_contextH,
  AEGP_RenderLayerContextH     current_lyr_ctxtH,
  AEGP_RenderReceiptH          old_receiptH,
  A_Boolean                    check_aceB,
  AEGP_NumEffectsToRenderType  num_effectsS,
  AEGP_RenderReceiptStatus     *receipt_statusP);
```

`AEGP_G`enerateRenderReceipt

```

Creates an AEGP_RenderReceiptH for a layer as though the first num_effectsS effects have already rendered.

AEGP_GenerateRenderReceipt(
  PR_RenderContextH            current_contextH,
  AEGP_RenderLayerContextH     current_lyr_contextH,
  AEGP_NumEffectsToRenderType  num_effectsS,
  AEGP_RenderReceiptH          *render_receiptPH);
```

`AEGP_G`etNumBinsToRender

```

Reports how many bins After Effects requests from the artisan.

AEGP_GetNumBinsToRender(
  const PR_RenderContextH  contextH,
  A_long                   *num_binsPL);
```

`AEGP_S`etNthBin

```

Sets the supplied render context as the n-th bin After Effects should render.

AEGP_SetNthBin(
  const PR_RenderContextH  contextH,
  A_long                   n);
```

`AEGP_G`etBinType

```

Gets the type for the supplied bin.

AEGP_GetBinType(
  const PR_RenderContextH  contextH,
  AEGP_BinType             *bin_typeP);
```

`AEGP_B`inType will be one of the following: - `AEGP_B`inType_NONE - `AEGP_B`inType_2D - `AEGP_B`inType_3D

`AEGP_G`etRenderLayerToWorldXform2D3D

```

Retrieves the transform needed to orient the rendered layer correctly against the output world.

Pass TRUE for only_2dB to keep the transform constrained to 2D.

AEGP_GetRenderLayerToWorldXform2D3D(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timeP,
  A_Boolean                 only_2dB,
  A_Matrix4                 *transformP);
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

Note

The functions below apply only to interactive artisans.

Function

Purpose

`AEGP_G`etPlatformWindowRef

```

Gets the platform-specific window context where the given PR_RenderContextH should draw.

AEGP_GetPlatformWindowRef(
  const PR_RenderContextH  contextH,
  AEGP_PlatformWindowRef   *window_refP);
```

`AEGP_G`etViewportScale

```

Gets the source-to-frame downsample factor for the supplied PR_RenderContextH.

AEGP_GetViewportScale(
  const PR_RenderContextH  contextH,
  A_FpLong                 *scale_xPF,
  A_FpLong                 *scale_yPF);
```

`AEGP_G`etViewportOrigin

```

Gets the source origin inside the frame, which is needed to translate between source and frame, for the supplied PR_RenderContextH.

AEGP_GetViewportOrigin(
  const PR_RenderContextH  contextH,
  A_long                   *origin_xPL,
  A_long                   *origin_yPL);
```

`AEGP_G`etViewportRect

```

Gets the bounding rectangle for the area to draw for the supplied PR_RenderContextH.

AEGP_GetViewportRect(
  const PR_RenderContextH  contextH,
  A_LegacyRect             *v_rectPR);
```

`AEGP_G`etFallowColor

```

Gets the color used for fallow regions in the supplied PR_RenderContextH.

AEGP_GetFallowColor(
  const PR_RenderContextH  contextH,
  PF_Pixel8                *fallow_colorP);
```

`AEGP_G`etInteractiveCheckerboard

```

Reports whether the checkerboard is currently active for the supplied PR_RenderContextH.

AEGP_GetInteractiveCheckerboard(
  const PR_RenderContextH  contextH,
  A_Boolean                *cboard_onPB);
```

`AEGP_G`etInteractiveCheckerboardColors

```

Gets the colors used by the checkerboard.

AEGP_GetInteractiveCheckerboardColors(
  const PR_RenderContextH  contextH,
  PF_Pixel                 *color1P,
  PF_Pixel                 *color2P);
```

`AEGP_G`etInteractiveCheckerboardSize

```

Gets the width and height of a single checkerboard square.

AEGP_GetInteractiveCheckerboardSize(
  const PR_RenderContextH  contextH,
  A_u_long                 *cbd_widthPLu,
  A_u_long                 *cbd_heightPLu);
```

`AEGP_G`etInteractiveCachedBuffer

```

Gets the cached AEGP_WorldH most recently associated with the PR_RenderContextH.

AEGP_GetInteractiveCachedBuffer(
  const PR_RenderContextH  contextH,
  AEGP_WorldH              *buffer);
```

`AEGP_A`rtisanMustRenderAsLayer

```

Determines whether the artisan must treat the current AEGP_RenderLayerContextH as layer output.

AEGP_ArtisanMustRenderAsLayer(
  const PR_RenderContextH   contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  A_Boolean                 *use_txturePB);
```

`AEGP_G`etInteractiveDisplayChannel

```

Returns which channels the interactive artisan should display.

AEGP_GetInteractiveDisplayChannel(
  const PR_RenderContextH  contextH,
  AEGP_DisplayChannelType  *channelP);
```

`AEGP_D`isplayChannelType will be one of the following: - `AEGP_D`isplayChannel*NONE - `AEGP_D`isplayChannel_RED - `AEGP_D`isplayChannel_GREEN - `AEGP_D`isplayChannel_BLUE - `AEGP_D`isplayChannel_ALPHA - `AEGP_D`isplayChannel*`RED_ALT` - `AEGP_D`isplayChannel*`GREEN_ALT` - `AEGP_D`isplayChannel*`BLUE_ALT` - `AEGP_D`isplayChannel\_`ALPHA_ALT`

`AEGP_G`etInteractiveExposure

```

Returns exposure for the specified PR_RenderContextH as a floating point value.

AEGP_GetInteractiveExposure(
  const PR_RenderContextH  rcH,
  A_FpLong                 *exposurePF);
```

`AEGP_G`etColorTransform

```

Returns the color transform for the specified PR_RenderContextH.

AEGP_GetColorTransform(
  const PR_RenderContextH  render_contextH,
  A_Boolean                *cms_onB,
  A_u_long                 *xform_keyLu,
  void                      *xformP);
```

`AEGP_G`etCompShutterTime

```

Returns the shutter angle for the specified PR_RenderContextH.

AEGP_GetCompShutterTime(
  PR_RenderContextH  render_contextH,
  A_Time             *shutter_time,
  A_Time             *shutter_dur);
```

`AEGP_M`apCompToLayerTime

```

New in CC. Unlike AEGP_ConvertCompToLayerTime, this function accounts for time remapping when comps are collapsed or nested.

AEGP_MapCompToLayerTime(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timePT,
  A_Time                    *layer_timePT);
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
