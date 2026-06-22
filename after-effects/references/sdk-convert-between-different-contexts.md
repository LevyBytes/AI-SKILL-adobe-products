# Convert Between Different Contexts, Smile Cameras, Notes Regarding Camera Behavior, Orthographic Camera Matrix ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Convert Between Different Contexts; Smile! Cameras; Notes Regarding Camera Behavior; Orthographic Camera Matrix; Focus On Focal; Film Size; Hit The Lights!; How Should I Draw That?; Query Transform Functions; Interactive Drawing Functions; Notes On Query Time Functions; AEIOs; AEIO, or AEGP?; AEIO For Import, Or MediaCore Importer?; How It Works; What Would After Effects Do?; Registering Your AEIO; InSpec, OutSpec.

## Convert Between Different Contexts

### Artisan Data Types — Convert Between Different Contexts

This suite converts between render and instance contexts and manages artisan-specific global data.

### `AEGP_A`rtisanUtilSuite1

Function

Purpose

`AEGP_G`etGlobalContextFromInstanceContext

```

Given an instance context, returns a global-context handle.

AEGP_GetGlobalContextFromInstanceContext(
  const PR_InstanceContextH  instance_contextH,
  PR_GlobalContextH          *global_contextPH);
```

`AEGP_G`etInstanceContextFromRenderContext

```

Given the render context, returns an instance-context handle.

AEGP_GetInstanceContextFromRenderContext(
  const PR_RenderContextH  render_contextH,
  PR_InstanceContextH      *instnc_ctextPH);
```

`AEGP_G`etInstanceContextFromQueryContext

```

Given a query context, returns an instance-context handle.

AEGP_GetInstanceContextFromQueryContext(
  const PR_QueryContextH  query_contextH,
  PR_InstanceContextH     *instnce_contextPH);
```

`AEGP_G`etGlobalData

```

Given the global context, returns a handle for global data.

AEGP_GetGlobalData(
  const PR_GlobalContextH  global_contextH,
  PR_GlobalDataH           *global_dataPH);
```

`AEGP_G`etInstanceData

```

Given an instance context, returns its associated instance data.

AEGP_GetInstanceData(
  const PR_InstanceContextH  instance_contextH,
  PR_InstanceDataH           *instance_dataPH);
```

`AEGP_G`etRenderData

```

Given a render context, returns the associated render data.

AEGP_GetRenderData(
  const PR_RenderContextH  render_contextH,
  PR_RenderDataH           *render_dataPH);
```

| --- | --- |

## Smile! Cameras

### Artisan Data Types — Smile! Cameras

Gets camera geometry, including properties such as type, lens, depth of field, focal distance, aperture, and related values.

### `AEGP_C`ameraSuite2

Function

Purpose

`AEGP_G`etCamera

```

Given a layer handle and time, returns the active camera layer.

AEGP_GetCamera(
  PR_RenderContextH  render_contextH,
  const A_Time       *comp_timeP,
  AEGP_LayerH        *camera_layerPH);
```

`AEGP_G`etCameraType

```

Given a layer, returns that layer's camera type.

AEGP_GetCameraType(
  AEGP_LayerH      aegp_layerH,
  AEGP_CameraType  *camera_typeP;
```

The camera type can be the following: - `AEGP_C`ameraType_NONE = -1 - `AEGP_C`ameraType_PERSPECTIVE - `AEGP_C`ameraType_ORTHOGRAPHIC

`AEGP_G`etDefaultCameraDistanceToImagePlane

```

Given a composition handle, returns the camera distance to the image plane.

AEGP_GetDefaultCamera DistanceToImagePlane(
  AEGP_CompH  compH,
  A_FpLong    *dist_to_planePF)
```

`AEGP_G`etCameraFilmSize

```

Retrieves film size and unit information from camera_layerH.

AEGP_GetCameraFilmSize(
  AEGP_LayerH         camera_layerH,
  AEGP_FilmSizeUnits  *film_size_unitsP,
  A_FpLong            *film_sizePF0);
```

`AEGP_S`etCameraFilmSize

```

Sets film size and unit information on camera_layerH.

AEGP_SetCameraFilmSize)(
  AEGP_LayerH         camera_layerH,
  AEGP_FilmSizeUnits  film_size_units,
  A_FpLong            *film_sizePF0);
```

| --- | --- |

## Notes Regarding Camera Behavior

### Artisan Data Types — Notes Regarding Camera Behavior

Camera orientation uses composition coordinates, while rotations use the camera layer's coordinates.

When the camera layer has a parent, its position is expressed in a coordinate space relative to that parent.

## Orthographic Camera Matrix

### Artisan Data Types — Orthographic Camera Matrix

Internally, composition width and height define the matrix that OpenGL writes this way:

```
glOrtho(-width/2, width/2, -height/2, height/2, -1, 100);
```

The orthographic matrix defines the projection. A separate scaled matrix describes camera position. Inverting the camera-position matrix gives the "eye" coordinates.

## Focus On Focal

### Artisan Data Types — Focus On Focal

Remember that focal length changes field of view, while focal distance changes only depth of field.

## Film Size

### Artisan Data Types — Film Size

Real-world film size is measured in millimeters. After Effects measures it in pixels. To convert millimeters to pixels, multiply by 72 and divide by 25.4.

Field of view is more complex;

Ï´ = 1/2 field of view

tan(Ï´) = 1/2 composition height / focal length

focal length = 2 tan(Ï´) / composition height

## Hit The Lights!

### Artisan Data Types — Hit The Lights!

Get and set light types in a composition.

### `AEGP_L`ightSuite2

Function

Purpose

`AEGP_G`etLightType

```

Retrieves AEGP_LightType for light_layerH.

AEGP_GetLightType(
  AEGP_LayerH     light_layerH,
  AEGP_LightType  *light_typeP);
```

`AEGP_L`ightType will be one of the following: - `AEGP_L`ightType_PARALLEL - `AEGP_L`ightType_SPOT - `AEGP_L`ightType_POINT - `AEGP_L`ightType_AMBIENT

`AEGP_S`etLightType

```

Assigns AEGP_LightType to light_layerH.

AEGP_SetLightType(
  AEGP_LayerH     light_layerH,
  AEGP_LightType  light_type);
```

| --- | --- |

### Notes On Light Behavior

For the formulas covering parallel lights and point lights, consult Foley and Van Dam's "Introduction to Computer Graphics" (ISBN 0-201-60921-5).

Instead, the half-angle variant proposed by Jim Blinn is what we use.

Suppose a layer has a point that should be shaded with the light.

Let V denote the normalized direction from the layer point toward the eye point. Let L denote the normalized direction toward the light; in the parallel-light case, L is constant. Let H be (V+L)/2 (normalized). Let N denote the layer's unit normal vector.

The specular reflected-light amount is S \* power(H Dot N, shine), with S as the specular coefficient.

## How Should I Draw That?

### Artisan Data Types — How Should I Draw That?

After Effects depends on Artisans to draw 3D layer handles. When your Artisan does not respond to this call, the default Artisan draws the 3D layer handles instead. Querying transforms matters because it helps optimize After Effects' caching.

The coordinate system has positive x to the right, positive y downward, and positive z into the screen. The upper-left corner is the origin. Rotations happen in x, then y, then z order. In matrices, translation lives in the bottom row. Orientations are quaternions, applied first, followed by any x-y-z rotation. As a general rule, use either orientation or rotation, but not both. Use rotations when angular velocity control is required.

## Query Transform Functions

### Artisan Data Types — Query Transform Functions

These functions tell artisans which transforms are needed to place layers correctly in a composition and to answer the different queries After Effects sends to the `PR_Q`ueryFunc entry point.

Because that entry point is optional, an artisan may also choose not to answer the queries. If it skips them, users may be unhappy during interactive preview drawing because camera and light indicators disappear until movement stops. Artisans are complicated; contact us with questions.

### `AEGP_Q`ueryXFormSuite2

Function

Purpose

`AEGP_Q`ueryXformGetSrcType

```

Given query_contextH, returns the transform source currently under modification.

AEGP_QueryXformGetSrcType(
  PR_QueryContextH     query_contextH,
  AEGP_QueryXformType  *src_type);
```

The query context will be one of the following: - `AEGP_Q`uery_Xform_LAYER - `AEGP_Q`uery_Xform_WORLD - `AEGP_Q`uery_Xform_VIEW - `AEGP_Q`uery_Xform_SCREEN

`AEGP_Q`ueryXformGetDstType

```

Given a query context, returns the transform destination currently requested.

AEGP_QueryXformGetDstType(
  PR_QueryContextH     query_contextH,
  AEGP_QueryXformType  *dst_type);
```

`AEGP_Q`ueryXformGetLayer

```

Use this when either endpoint type is a layer. It returns layerPH for query_contextH.

AEGP_QueryXformGetLayer(
  PR_QueryContextH  query_contextH,
  AEGP_LayerH       *layerPH);
```

`AEGP_Q`ueryXformGetComp

```

Given query_contextH, returns the active composition.

AEGP_QueryXformGetComp(
  PR_QueryContextH  query_contextH,
  AEGP_CompH        *compPH);
```

`AEGP_Q`ueryXformGetTransformTime

```

Given a query context, returns the transformation time.

AEGP_QueryXformGetTransformTime(
  PR_QueryContextH  query_contextH,
  A_Time            *time);
```

`AEGP_Q`ueryXformGetViewTime

```

Given a query context, returns the associated view time.

AEGP_QueryXformGetViewTime(
  PR_QueryContextH  query_contextH,
  A_Time            *time);
```

`AEGP_Q`ueryXformGetCamera

```

Given query_contextH, returns the active camera layer.

AEGP_QueryXformGetCamera(
  PR_QueryContextH  query_contextH,
  AEGP_LayerH       *camera_layerPH);
```

`AEGP_Q`ueryXformGetXform

```

Given a query context, returns the current matrix transform.

AEGP_QueryXformGetXform(
  PR_QueryContextH  query_contextH,
  A_Matrix4         *xform);
```

`AEGP_Q`ueryXformSetXform

```

Given a query context, returns the matrix transform that your code computed in xform.

AEGP_QueryXformSetXform(
  PR_QueryContextH  query_contextH,
  A_Matrix4         *xform);
```

`AEGP_Q`ueryWindowRef

```

Sets the window reference After Effects should use for the supplied PR_QueryContextH.

AEGP_QueryWindowRef(
  PR_QueryContextH        q_contextH,
  AEGP_PlatformWindowRef  *window_refP);
```

`AEGP_Q`ueryWindowClear

```

Returns the AEGP_PlatformWindowRef and A_Rect that should be cleared for the supplied PR_QueryContextH.

AEGP_QueryWindowClear(
  PR_QueryContextH        q_contextH,
  AEGP_PlatformWindowRef  *window_refP,
  A_LegacyRect            *boundsPR);
```

`AEGP_Q`ueryFrozenProxy

```

Reports whether textures for q_contextH should stay frozen.

AEGP_QueryFrozenProxy(
  PR_QueryContextH  q_contextH,
  A_Boolean         *onPB);
```

`AEGP_Q`uerySwapBuffer

```

Sent after rendering and camera or light handle drawing are finished; After Effects returns the destination buffer for the artisan's output drawing.

AEGP_QuerySwapBuffer(
  PR_QueryContextH        q_contextH,
  AEGP_PlatformWindowRef  *window_refP,
  AEGP_WorldH             *dest_bufferp);
```

`AEGP_Q`ueryDrawProcs

```

Sets the interactive drawing functions that After Effects calls while drawing camera and lighting handles into the context supplied by the artisan.

AEGP_QueryDrawProcs(
  PR_QueryContextH         query_contextH,
  PR_InteractiveDrawProcs  *window_refP);
```

`AEGP_Q`ueryPrepareForLineDrawing

```

Tells After Effects about the context it will draw into.

AEGP_QueryPrepareForLineDrawing(
  PR_QueryContextH        query_contextH,
  AEGP_PlatformWindowRef  *window_refP,
  A_LegacyRect            *viewportP,
  A_LPoint                *originP,
  A_FloatPoint            *scaleP);
```

`AEGP_Q`ueryUnprepareForLineDrawing

```

From After Effects' perspective, the artisan has finished line drawing.

AEGP_QueryUnprepareForLineDrawing(
  PR_QueryContextH        query_contextH,
  AEGP_PlatformWindowRef  *window_refP);
```

| --- | --- |

## Interactive Drawing Functions

### Artisan Data Types — Interactive Drawing Functions

Artisans can now supply functions for After Effects to use when doing basic preview drawing in the comp window, including preview modeling for camera, light, and wireframe elements.

### `PR_I`nteractiveDrawProcs

```
PR_Draw_MoveToFunc(
  short  x,
  short  y);
```

```
PR_Draw_LineToFunc(
  short  x,
  short  y);
```

```
PR_Draw_ForeColorFunc(
  const A_Color  *fore_colo
```

```
PR_Draw_FrameRectFunc(
  const A_Rect  *rectPR );
```

```
PR_Draw_PaintRectFunc(
  const A_Rect  *rectPR );
```

| Function | Purpose |
| --- | --- |
| `PR_D`raw_MoveToFunc |  |
| `PR_D`raw_LineToFunc |  |
| `PR_D`raw_ForeColorFunc |  |
| `PR_D`raw_FrameRectFunc |  |
| `PR_D`raw_PaintRectFunc |  |

## Notes On Query Time Functions

### Artisan Data Types — Notes On Query Time Functions

`AEGP_Q`ueryXformGetTransformTime() and `AEGP_Q`ueryXformGetViewTime() are both required when an artisan builds the scene representation it will render.

`AEGP_Q`ueryXformGetTransformTime() retrieves the transform time, which is then supplied to `AEGP_G`etCompShutterFrameRange() from `AEGP_C`ompSuite11.

`AEGP_Q`ueryXformGetViewTime() retrieves the view time, which is used when calling `AEGP_G`etLayerToWorldXformFromView() from `AEGP_L`ayerSuite9.

## AEIOs

AEIOs are AEGPs that import and/or export media files. For a file of a specific type, an AEIO performs the work After Effects, or the plug-ins that ship with After Effects, would otherwise handle. On import, AEIOs can open existing files, maintain file-specific interpretation settings, and supply audio plus frames to After Effects in `AEGP_S`oundWorld and `PF_E`ffectWorld form. AEIOs can also create files interactively by asking users for their desired settings instead of reading those settings from a file. On export, AEIOs can create and manage output settings for render queue items, create output files, and write frames supplied by After Effects as `PF_E`ffectWorlds into those files.

AEIOs operate on uncompressed video whose pixels are in ARGB order from low-byte to high-byte. Pixels may be 8-bit, 16-bit, or 32-bit float per channel. Any supported codec compression or decompression is the AEIO's responsibility.

## AEIO, or AEGP?

### AEIOs — AEIO, or AEGP?

AEIOs supply pixels and audio data to After Effects.

When an importer/exporter targets a timeline or project file format that references formats handled by After Effects or installed AEIOs, implement it as an AEGP and place its command on the Import/Export submenu.

## AEIO For Import, Or MediaCore Importer?

### AEIOs — AEIO For Import, Or MediaCore Importer?

After Effects supports MediaCore importer plug-ins. MediaCore is a shared-library set that originated in Premiere Pro, so the Premiere Pro SDK documents the MediaCore APIs.

Only MediaCore importer plug-ins participate in the importer priority system. The highest-priority importer gets the first chance to import a file; if that file is not supported, the next-highest priority importer gets a chance, continuing in order. MediaCore importers cannot hand file import off to an AEIO. Therefore, if you need to take over handling for a file type where After Effects already supplies a plug-in, build a MediaCore importer plug-in.

If those constraints do not already answer the AEIO versus MediaCore importer question, a MediaCore importer is usually the better choice because it works across video and audio applications such as Premiere Pro, Media Encoder, Prelude, SpeedGrade, and Audition.

## How It Works

### AEIOs — How It Works

Inside its entry point function, an AEIO fills a function-pointer structure with the functions it wants After Effects to call for specific events. Many of those hooks are optional.

## What Would After Effects Do?

### AEIOs — What Would After Effects Do?

For many AEIO hook functions, After Effects can be asked to perform the default processing; each hook description notes when this is available.

If you do not have a strong reason to handle the work yourself, return `AEIO_E`rr\_`USE_DFLT_CALLBACK` from the function and let After Effects do it.

This also helps you learn the calling sequence before starting the implementation.

## Registering Your AEIO

### AEIOs — Registering Your AEIO

During the plug-in entry point, fill an `AEIO_M`oduleInfo that describes the file type or types supported by the AEIO, and fill an `AEIO_F`unctionBlock structure pointing to the file-handling functions. Some functions can rely on After Effects default behavior by returning `AEIO_E`rr\_`USE_DFLT_CALLBACK`. You still must provide a function with the required signature that returns that value. After both structures are filled, call `AEGP_R`egisterIO() from `AEGP_R`egisterSuite5.

The `AEIO_M`oduleInfo passed to the registration call supplies the file type and description data After Effects shows in the Import dialog, in the "Files of type" drop-down on Windows, or in the Enable drop-down on MacOS. As of CS6, file extensions cannot exceed three characters, even though a few built-in importers have longer extensions.

## InSpec, OutSpec

### AEIOs — InSpec, OutSpec

Most import-related functions receive an `AEIO_I`nSpecH. Most output-related functions receive an `AEIO_O`utSpecH.

What are these mysterious handles? They are opaque data handles used with `AEGP_IOI`nSuite5 and AEGPIOOutSuite4 to set or query information about import or output.

For example, during import you use `AEIO_I`nSpecH when calling `AEGP_S`etInSpecDimensions in `AEGP_IOI`nSuite.

During export, you use `AEIO_O`utSpecH when calling `AEGP_G`etOutSpecDimensions in `AEGP_IOO`utSuite. Use these handles to exchange input or output details with After Effects.

## Import

### Calling Sequence — Import

When users choose a file in the import dialog and the file type is handled by your AEIO, After Effects calls `AEIO_V`erifyFileImportable(); it calls the same function again for each imported file of that kind. `AEIO_I`nitInSpecFromFile() follows for each file. Parse that file, describe it to After Effects with the relevant set functions, build any file-related options data, and store that data with `AEGP_S`etInSpecOptionsHandle().

After Effects then calls the plug-in's `AEIO_G`etInSpecInfo() function to obtain descriptive text for the file in the project window. As that function's description notes, folders can trigger it too. If no valid options data exists for the file, we recommend doing nothing and returning no error; that is what our AEIOs do.

`AEIO_C`ountUserData() is sent next. If the AEIO reports that user data exists, `AEIO_G`etUserData() follows. After Effects then asks the plug-in to draw a video frame for the project window thumbnail by sending `AEIO_D`rawSparseFrame().

After the supported file has been added to a composition, user interaction generates calls to `AEIO_D`rawSparseFrame() and `AEIO_G`etSound().

When the project is saved, and options data is associated with the `AEIO_I`nSpec, After Effects sends `AEIO_F`lattenOptions(). During that call, the AEIO parses the options data and creates a representation with no references to external memory. Likewise, when `AEIO_O`utSpec options data exists, `AEIO_G`etFlatOutputOptions() is sent.

## Export

### Calling Sequence — Export

If the user adds an item to the render queue and selects the output format supported by the AEIO, After Effects sends `AEIO_I`nitOutputSpec(). Use the various get functions to read output-setting information, then store relevant information with `AEGP_S`etOutSpecOptionsHandle(), followed by `AEIO_G`etFlatOutputOptions(). `AEIO_G`etDepths() is sent so After Effects can learn which output pixel bit depths the AEIO supports. `AEIO_G`etOutputInfo() is sent so file name, type, and subtype information can appear in the output module details.

Clicking the Format Options button in the render queue calls `AEIO_U`serOptionsDialog().

When the user clicks the "Render" button, `AEIO_S`etOutputFile() is called, followed by `AEIO_G`etSizes(); your AEIO determines whether the destination has enough free disk space.

Before video frames are sent, `AEIO_S`tartAdding() is sent so the AEIO can open the file handle and write the header. For AEIOs that support video or audio formats, each audio chunk triggers `AEIO_A`ddSoundChunk(), and each video frame triggers `AEIO_A`ddFrame().

For still-image sequences supported by the AEIO, After Effects repeatedly calls `AEIO_O`utputFrame() and sends the frame for output as a `PF_E`ffectWorld representation.

For each frame, `AEIO_W`riteLabels() gives the plug-in a chance to write field and alpha interpretation information. `AEIO_E`ndAdding() arrives after the last video frame or audio chunk. Close the output file then.

## `AEIO_M`oduleInfo

Your AEIO defines its basic properties in this structure.

In addition to describing supported file types and extensions, the `AEIO_M`oduleFlags describe the AEIO signature and behavior. We love flags.

## `AEIO_M`oduleInfo Members

### `AEIO_M`oduleInfo — `AEIO_M`oduleInfo Members

Member

Purpose

sig

A long value that uniquely identifies the plug-in. Many developers choose a distinctly Mac-style four-character code here. Please tell us which sig you use.

name

Descriptive name for the AEIO plug-in.

flags

`AEIO_M`oduleFlags set.

flags2

`AEIO_M`oduleFlags2 set.

max_width, max_height

Largest dimensions your format supports.

num_filetypes

Count of file types supported by the AEIO.

num_extensions

Count of file extensions supported by the AEIO.

num_clips

Count of clipboard formats supported by the AEIO.

create_kind

macOS four-character code for files created by the AEIO.

create_ext

File extension for files created by the AEIO.

read_kinds

This 16-element `AEIO_F`ileKinds array does not have to be completely filled, but the first [num_filetypes + num_extensions + num_clips] entries must be populated in that order.

num_aux_extensions

Count of auxiliary extensions supported by the AEIO. For example, suppose an AEIO imports information from a 3D program that stores scene information in a .123 file and camera information in a .xyz file. The .xyz file is an auxiliary extension: it is associated with .123 files, though it is not required to get the rest of the scene information.

aux_ext

File extension for auxiliary file type or types supported by the AEIO.

| --- | --- |
