# Pf Appsuite, Advanced Appsuite You Can Do That, Pf Advappsuite2, Formatting Time ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: `PF_A`ppSuite; Advanced Appsuite: You Can Do That?!; `PF_A`dvAppSuite2; Formatting Time; Affecting The Timeline; Accessing Auxiliary Channel Data; Motion Blur; Accessing Path Data; Manipulating Path Data; Vertices; `PF_P`athVertex; `PF_P`athDataSuite; `PF_P`athQuerySuite1; Accessing Camera & Light Information; Color Space Conversion; Pixel Types For Different Color Spaces; Color Space Conversion Callbacks; Changing Parameter Orders, the Nice Way.

## `PF_A`ppSuite

### Useful Utility Functions — `PF_A`ppSuite

Some 437 years back, alongside the After Effects 5.0 release, we shipped a handful of handy utility callbacks in `PF_A`ppSuite — and they remain every bit as handy now. UI brightness in After Effects is something the user gets to control.

Besides `PF_E`ffectCustomUIOverlayThemeSuite for drawing custom UI inside effects, reach for these calls to blend cleanly into the After Effects interface.

Is there a finer way to guilt someone into buying your plug-in than stamping their personal details into a watermark? Or flipping the cursor to the add-mask-vertices one purely to baffle them? Heh heh heh. But of course that would be wrong.

Function

Purpose

`PF_A`ppGetBgColor

```

Retrieves the current background color.

PF_AppGetBgColor(
  PF_App_Color  bg_colorP);
```

`PF_A`ppGetColor

```

Retrieves the color for the specified UI element.

See AE_EffectSuites.h for a complete enumeration of available PF_App_Color values; basically any color in After Effects' UI can be retrieved.

CC adds several new PF_App_ColorType enum values for new elements that can be queried.

Note that in CS6, the color definitions are off from FILL_LIGHT downward.

Use following psuedocode for CS6 only:

GetColor(enum e)
{
  if host_is_CS6 and e >= FILL_LIGHT
  e += 3
    call real GetColor
}

PF_AppGetColor(
  PF_App_ColorType  color_type,
  PF_App_Color      *app_colorP);
```

`PF_A`ppGetLanguage

```

New in CC. Retrieves the active displayed language of AE UI so plug-in can match. Here are the possible language codes as of CC:

- Chinese - zh_CN

- English - en_US

- French - fr_FR

- German - de_DE

- Italian - it_IT

- Japanese - ja_JP

- Korean - ko_KR

- Spanish - es_ES

PF_AppGetLanguage(
  A_char  lang_tagZ);
```

`PF_G`etPersonalInfo

```

Retrieves the user's registration information.

PF_GetPersonalInfo(
  PF_AppPersonalTextInfo  *ptiP);

typedef struct PF_AppPersonalTextInfo {
  A_char  name[PF_APP_MAX_PERS_LEN + 1];
  A_char  org[PF_APP_MAX_PERS_LEN + 1];
  A_char  serial_str[PF_APP_MAX_PERS_LEN+1];
} PF_AppPersonalTextInfo;
```

`PF_G`etFontStyleSheet

```

Retrieves font style sheet information for the fonts used in After Effects' UI.

Trivia: The font used in After Effects' UI starting in 15.0 is Adobe Clean.

Before that, it was Tahoma on Windows and Lucida Grande on macOS X.

PF_GetFontStyleSheet(
  PF_FontStyleSheet  sheet,
  PF_FontName        *font_nameP0,
  A_short            *font_numPS0,
  A_short            *sizePS0,
  A_short            *stylePS0);
```

`PF_S`etCursor

```

Sets the cursor to any of After Effects' cursors. See AE_EffectUI.h for a complete enumeration.

Set to:

- PF_Cursor_NONE to allow After Effects to set the cursor.

- PF_Cursor_CUSTOM if you've used OS-specific calls to change the cursor (After Effects will honor your changes).

PF_SetCursor(
  PF_CursorType  cursor);
```

`PF_I`sRenderEngine

```

Returns TRUE if After Effects is running in watched folder mode, or is a render engine installation.

PF_IsRenderEngine(
  PF_Boolean  *render_enginePB);
```

As of AE6.5, this function returns TRUE if the installation is the render engine, or if the After Effects is being run with no UI, or if After Effects is in watched folder mode.

`PF_A`ppColorPickerDialog

```

Displays the After Effects color picker dialog (which may be the system color picker, depending on the user's preferences).

Will return PF_Interrupt_CANCEL if user cancels dialog. Returned color is in the project's working color space.

PF_AppColorPickerDialog(
  const A_char         *dialog_titleZ0,
  const PF_PixelFloat  *sample_colorP,
  PF_PixelFloat        *result_colorP);
```

`PF_G`etMouse

```

Returns the position of the mouse in the custom UI coordinate space.

PF_GetMouse(
  PF_Point  *pointP);
```

`PF_I`nvalidateRect

```

Queue up a redraw of a specific area of the custom UI for an effect.

Only valid while handling a non-drawing event in the effect.

Specify rectP0 as NULL to invalidate the entire window. The redraw will happen at the next available idle moment after returning from the event.

Set the PF_EO_UPDATE_NOW event outflag to update the window immediately after the event returns.

PF_InvalidateRect(
  const PF_ContextH  contextH,
  const PF_Rect*     rectP0);
```

`PF_C`onvertLocalToGlobal

```

Converts from the custom UI coordinate system to global screen coordinates. Use only during custom UI event handling.

PF_ConvertLocalToGlobal(
  const PF_Point  *localP,
  PF_Point        *globalP);
```

| --- | --- |

## Advanced Appsuite: You Can Do That?!

### Useful Utility Functions — Advanced Appsuite: You Can Do That?!

`PF_A`dvAppSuite started life for some fairly shady reasons: an outside application was masquerading as an After Effects plug-in and needed channels to tell After Effects about the project edits it had performed. The impurity in our API is what works to your advantage.

## `PF_A`dvAppSuite2

### Useful Utility Functions — `PF_A`dvAppSuite2

Function

Purpose

`PF_S`etProjectDirty

```

Tells After Effects that the project has been changed since it was last saved.

PF_SetProjectDirty(void);
```

`PF_S`aveProject

```

Saves the project to the current path. To save the project elsewhere, use AEGP_SaveProjectToPath().

PF_SaveProject(void);
```

`PF_S`aveBackgroundState

```

Stores the background state (After Effects' position in the stacking order of open applications and windows).

PF_SaveBackgroundState(void);
```

`PF_F`orceForeground

```

Brings After Effects to the front of all currently open applications and windows.

PF_ForceForeground(void);
```

`PF_R`estoreBackgroundState

```

Puts After Effects back where it was, in relation to other applications and windows.

PF_RestoreBackgroundState(void);
```

`PF_R`efreshAllWindows

```

Forces all After Effects windows to update.

Note that although the Composition panel will be refreshed, this does not guarantee a new frame will be sent to External Monitor Preview plug-ins.

PF_RefreshAllWindows(void);
```

`PF_I`nfoDrawText

```

Writes text into the After Effects info palette.

PF_InfoDrawText(
  const A_char  *line1Z0,
  const A_char  *line2Z0);
```

`PF_I`nfoDrawColor

```

Draws the specified color in the After Effects info palette (alpha is ignored).

PF_InfoDrawColor(
  PF_Pixel  color);
```

`PF_I`nfoDrawText3

```

Writes three lines of text into the After Effects info palette.

PF_InfoDrawText3(
  const A_char  *line1Z0,
  const A_char  *line2Z0,
  const A_char  *line3Z0);
```

`PF_I`nfoDrawText3Plus

```

Writes three lines of text into the After Effects info palette, with portions of the second and third lines left and right justified.

PF_InfoDrawText3Plus(
  const A_char  *line1Z0,
  const A_char  *line2_jrZ0,
  const A_char  *line2_jlZ0,
  const A_char  *line3_jrZ0,
  const A_char  *line3_jlZ0);
```

`PF_A`ppendInfoText

```

Appends characters to the currently-displayed info text.

PF_AppendInfoText(
  const A_char  *appendZ0);
```

| --- | --- |

## Formatting Time

### Useful Utility Functions — Formatting Time

To mirror the way After Effects shows time, `PF_A`dvTimeSuite offers a handful of functions — the very same ones we run internally, in fact.

### `PF_A`dvTimeSuite4

Function

Purpose

`PF_F`ormatTimeActiveItem

```

Given a time value and scale, returns a formatted string representing that time.

If durationB is TRUE, appropriate units will be appended.

PF_FormatTimeActiveItem(
  A_long      time_valueUL,
  A_u_long    time_scaleL,
  PF_Boolean  durationB,
  A_char      *time_buf);
```

`PF_F`ormatTime

```

Contextualizes the formatted time string for the given PF_InData and PF_EffectWorld (i.e., layer time).

PF_FormatTime(
  PF_InData       *in_data,
  PF_EffectWorld  *world,
  A_long          time_valueUL,
  A_u_long        time_scaleL,
  PF_Boolean      durationB,
  A_char          *time_buf);
```

`PF_F`ormatTimePlus

```

Allows you to select composition or layer time.

PF_FormatTimePlus(
  PF_InData       *in_data,
  PF_EffectWorld  *world,
  A_long          time_valueUL,
  A_u_long        time_scaleL,
  PF_Boolean      comp_timeB,
  PF_Boolean      durationB,
  A_char          *time_buf);
```

`PF_G`etTimeDisplayPref

```

Returns the starting frame number (specified by the user in composition settings), and the composition's time display preferences.

Updated in 14.2 to support higher frame rates.

PF_GetTimeDisplayPref(
  PF_TimeDisplayPref2  *tdp,
  A_long               *starting_num);
  typedef              struct {
  A_char               display_mode;
  A_long               framemax;
  A_long               frames_per_foot;
  A_char               frames_start;
  A_Boolean            nondrop30B;
  A_Boolean            honor_source_timecodeB;
  A_Boolean            use_feet_framesB;
  } PF_TimeDisplayPrefVersion3;
```

`PF_T`imeCountFrames

```

New in 15.0. Returns the index of the frame in the current comp.

PF_TimeCountFrames(
  const A_Time  *start_timeTP,
  const A_Time  *time_stepTP,
  A_Boolean     include_partial_frameB,
  A_long        *frame_countL);
```

| --- | --- |

## Affecting The Timeline

### Useful Utility Functions — Affecting The Timeline

Way back, we wired a developer's standalone tracker into After Effects by handing them a set of functions — a route for them to alert us to timeline changes and to hear about them in return.

These days, with so many AEGP API calls on offer, they see little use, though they haven't gone away.

Don't confuse this suite with `AEGP_I`temSuite.

### `PF_A`dvItemSuite1

Function

Purpose

`PF_M`oveTimeStep

```

Moves current time num_stepsL in the specified direction.

PF_MoveTimeStep(
  PF_InData       *in_data,
  PF_EffectWorld  *world,
  PF_Step         time_dir,
  A_long          num_stepsL);
```

`PF_M`oveTimeStepActiveItem

```

Moves num_stepsL in the specified direction, for the active item.

PF_MoveTimeStepActiveItem(
  PF_Step  time_dir,
  A_long   num_stepsL);
```

`PF_T`ouchActiveItem

```

Tells After Effects that the active item must be updated.

PF_TouchActiveItem (void);
```

`PF_F`orceRerender

```

Forces After Effects to rerender the current frame.

PF_ForceRerender(
  PF_InData       *in_data,
  PF_EffectWorld  *world);
```

`PF_E`ffectIsActiveOrEnabled

```

Returns whether the effect which owns the PF_ContextH is currently active or enabled (if it isn't, After Effects won't be listening for function calls from it).

PF_EffectIsActiveOrEnabled(
  PF_ContextH  contextH,
  PF_Boolean   *enabledPB);
```

| --- | --- |

## Accessing Auxiliary Channel Data

### Useful Utility Functions — Accessing Auxiliary Channel Data

Pixel data isn't all that lives in certain file formats; lean on `PF_C`hannelSuite to find out whether extra information is there, and on the macros in `AE_C`hannelSuites.h to pull it back in whatever format suits you.

### `PF_C`hannelSuite1

Function

Purpose

`PF_G`etLayerChannelCount

```

Retrieves the number of auxiliary channels associated with the indexed layer.

PF_GetLayerChannelCount(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  A_long         *num_channelsPL);
```

`PF_G`etLayerChannelIndexedRefAndDesc

```

Retrieves (by index) a reference to, and description of, the specified channel.

PF_GetLayerChannelIndexedRefAndDesc(
  PF_ProgPtr       effect_ref,
  PF_ParamIndex    param_index,
  PF_ChannelIndex  channel_index,
  PF_Boolean       *foundPB,
  PF_ChannelRef    *channel_refP,
  PF_ChannelDesc   *channel_descP);
```

`PF_G`etLayerChannelTypedRefAndDesc

```

Retrieves an auxiliary channel by type.

Returned information is valid only if foundPB returns TRUE.

PF_GetLayerChannelTypedRefAndDesc(
  PF_ProgPtr      effect_ref,
  PF_ParamIndex   param_index,
  PF_ChannelType  channel_type,
  PF_Boolean      *foundPB,
  PF_ChannelRef   *channel_refP,
  PF_ChannelDesc  *channel_descP);
```

`PF_D`ataType will be one of the following: - `PF_D`ataType*FLOAT - 34 bytes - `PF_D`ataType_DOUBLE - 38 bytes - `PF_D`ataType_LONG - 34 bytes - `PF_D`ataType_SHORT - 32 bytes - `PF_D`ataType*`FIXED_16_16` - 34 bytes - `PF_D`ataType*CHAR - 31 byte - `PF_D`ataType*`U_BYTE` - 31 byte - `PF_D`ataType*`U_SHORT` - 32 bytes - `PF_D`ataType*`U_FIXED_16_16` - 34 bytes - `PF_D`ataType*RGB - 3 bytes `PF_C`hannelType will be one of the following: - `PF_C`hannelType_DEPTH - `PF_C`hannelType_NORMALS - `PF_C`hannelType_OBJECTID - `PF_C`hannelType_MOTIONVECTOR - `PF_C`hannelType*`BK_COLOR` - `PF_C`hannelType_TEXTURE - `PF_C`hannelType_COVERAGE - `PF_C`hannelType_NODE - `PF_C`hannelType_MATERIAL - `PF_C`hannelType_UNCLAMPED - `PF_C`hannelType_UNKNOWN

`PF_C`heckoutLayerChannel

```

Retrieves the PF_ChannelChunk containing the data associated with the given PF_ChannelRefPtr.

PF_CheckoutLayerChannel(
  PF_ProgPtr        effect_ref,
  PF_ChannelRefPtr  channel_refP,
  long              what_time,
  long              duration,
  unsigned long     time_scale,
  PF_DataType       data_type,
  PF_ChannelChunk   *channel_chunkP);
```

`PF_C`heckinLayerChannel

```

Checks in the PF_ChannelChunk. Always, always, always check the data back in.

PF_CheckinLayerChannel(
  PF_ProgPtr        effect_ref,
  PF_ChannelRefPtr  channel_refP,
  PF_ChannelChunk   *channel_chunkP);
```

| --- | --- |

## Motion Blur

Motion blur is left to each effect, which works it out from `PF_I`nData>shutter_angle together with `PF_I`nData>shutter_phase.

For After Effects to know this data is wanted, the plug-in has to raise `PF_O`utFlag\_`I_USE_SHUTTER_ANGLE`.

At other moments the effect needs to check out its own parameters so it can see how they shift across the shutter interval.

Whenever those checkouts reach beyond that interval, raise `PF_O`utFlag\_`WIDE_TIME_INPUT`.

That flag lets After Effects weigh the parameters inside the sampling interval and work out whether any have changed.

## Accessing Path Data

### Working With Paths — Accessing Path Data

What sets paths apart from the other parameter types is that you can't read their values straight away. On top of the usual checkout and checkin (as with layer parameters), you have to call our path data function suites to learn the path's particulars at a specific time. Refer to `PF_P`athQuerySuite1 and `PF_P`athDataSuite. When a path parameter is handed to you, never trust the values it carries until you've checked it out; deleted paths simply won't show up, but other updates happen "lazily" (later), and your effect stays blind to them until it checks the path out.

## Manipulating Path Data

### Working With Paths — Manipulating Path Data

For manipulating paths you can also turn to `AEGP_M`askOutlineSuite3. Refer to Cheating Effect Usage of AEGP Suites. Think of path parameters as opaque blobs of data: reaching into them or changing them happens only through get and set functions. As with layer parameters, any effect that touches them has to check them out — and check them in!

## Vertices

### Working With Paths — Vertices

A path's vertices carry more than plain points would. Every member variable is a `PF_F`pLong (a double), expressed in the coordinate space of the layer.

## `PF_P`athVertex

### Working With Paths — `PF_P`athVertex

| Member | Description |
| --- | --- |
| x | The location of the vertex. |
| y |  |
| tan_in_x | The incoming tangent point. |
| tan_in_y |  |
| tan_out_x | The outgoing tangent point. |
| tan_out_y |  |

## `PF_P`athDataSuite

### Working With Paths — `PF_P`athDataSuite

Details about paths — that is, runs of vertices — come from this suite.

Function

Description

`PF_P`athIsOpen

```

Returns TRUE if the path is not closed (if the beginning and end vertex are not identical).

PF_PathIsOpen(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  PF_Boolean         *openPB);
```

`PF_P`athNumSegments

```

Retrieves the number of segments in the path.

N segments means there are segments [0.N-1]; segment J is defined by vertex J and J+1.

PF_PathNumSegments(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             *num_segmentsPL);
```

`PF_P`athVertexInfo

```

Retrieves the PF_PathVertex for the specified path.

The range of points is [0.num_segments]; for closed paths, vertex[0] == vertex[num_segments].

PF_PathVertexInfo(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             which_pointL,
  PF_PathVertex      *vertexP);
```

`PF_P`athPrepareSegLength

```

This fairly counter-intuitive function informs After Effects that you're going to ask for the length of a segment (using PF_PathGetSegLength below), and it'd better get ready.

frequencyL indicates how many times you'd like us to sample the length; our internal effects use 100.

PF_PathPrepareSegLength(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             which_segL,
  A_long             frequencyL,
  PF_PathSegPrepPtr  *lengthPrepPP);
```

`PF_P`athGetSegLength

```

Retrieves the length of the given segment.

PF_PathGetSegLength(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             which_segL,
  PF_PathSegPrepPtr  *lengthPrepP0,
  PF_FpLong          *lengthPF);
```

`PF_P`athEvalSegLength

```

Retrieves the location of a point lengthF along the given path segment.

PF_PathEvalSegLength(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  PF_PathSegPrepPtr  *lengthPrepPP0,
  A_long             which_segL,
  PF_FpLong          lengthF,
  PF_FpLong          *x,
  PF_FpLong          *y);
```

`PF_P`athEvalSegLengthDeriv1

```

Retrieves the location, and the first derivative, of a point lengthF along the given path segment.

If you're not sure why you'd ever need this, don't use it. Math is hard.

PF_PathEvalSegLengthDeriv1(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  PF_PathSegPrepPtr  *lengthPrepPP0,
  A_long             which_segL,
  PF_FpLong          lengthF,
  PF_FpLong          *x,
  PF_FpLong          *y,
  PF_FpLong          *deriv1x,
  PF_FpLong          *deriv1y);
```

`PF_P`athCleanupSegLength

```

Call this when you're finished evaluating that segment length, so After Effects can properly clean up the PF_PathSegPrepPtr.

PF_PathCleanupSegLength(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             which_segL,
  PF_PathSegPrepPtr  *lengthPrepPP);
```

`PF_P`athIsInverted

```

Returns TRUE if the path is inverted.

PF_PathIsInverted(
  PF_ProgPtr  effect_ref,
  PF_PathID   unique_id,
  PF_Boolean  *invertedB);
```

`PF_P`athGetMaskMode

```

Retrieves the mode for the given path.

PF_PathGetMaskMode(
  PF_ProgPtr   effect_ref,
  PF_PathID    unique_id,
  PF_MaskMode  *modeP);
```

Mask mode is one of the following: - `PF_M`askMode_NONE - `PF_M`askMode_ADD - `PF_M`askMode_SUBTRACT - `PF_M`askMode_INTERSECT - `PF_M`askMode_LIGHTEN - `PF_M`askMode_DARKEN - `PF_M`askMode_DIFFERENCE - `PF_M`askMode_ACCUM

`PF_P`athGetName

```

Retrieves the name of the path (up to PF_MAX_PATH_NAME_LEN long).

PF_PathGetName(
  PF_ProgPtr  effect_ref,
  PF_PathID   unique_id,
  A_char      *nameZ);
```

| --- | --- |

## `PF_P`athQuerySuite1

### Working With Paths — `PF_P`athQuerySuite1

Identifying and reaching the paths tied to the effect's source layer is what this suite handles.

Function

Purpose

`PF_N`umPaths

```

Retrieves the number of paths associated with the effect's source layer.

PF_NumPaths(
  PF_ProgPtr  effect_ref,
  A_long      *num_pathsPL);
```

`PF_P`athInfo

```

Retrieves the PF_PathID for the specified path.

PF_PathInfo(
  PF_ProgPtr  effect_ref,
  A_long      indexL,
  PF_PathID   *unique_idP);
```

`PF_C`heckoutPath

```

Acquires the PF_PathOutlinePtr for the path at the specified time.

PF_CheckoutPath(
  PF_ProgPtr         effect_ref,
  PF_PathID          unique_id,
  A_long             what_time,
  A_long             time_step,
  A_u_long           time_scale,
  PF_PathOutlinePtr  *pathPP);
```

`PF_C`heckinPath

```

Releases the path back to After Effects. Always do this, regardless of any error conditions encountered.

Every checkout must be balanced by a checkin, or pain will ensue.

PF_CheckinPath(
  PF_ProgPtr         effect_ref,
  PF_PathID          unique_id,
  PF_Boolean         changedB,
  PF_PathOutlinePtr  pathP);
```

| --- | --- |

## Accessing Camera & Light Information

The `AEGP_PFI`nterfaceSuite exposes functions that let an effect query the camera and lighting data tied to whatever layer it sits on; the Resizer sample demonstrates this.

Plenty of the remaining functions in `AE_G`eneralPlug.h are fair game too, so the range of things you can do is enormous.

## Color Space Conversion

Which pixel format suits you depends on the operation at hand. After Effects surfaces its built-in conversion routines through `PF_C`olorCallbacksSuite. The formats it handles are listed below.

## Pixel Types For Different Color Spaces

### Color Space Conversion — Pixel Types For Different Color Spaces

```
typedef struct {
  A_u_char alpha, red, green, blue;
} PF_Pixel8;
```

```
typedef struct {
  A_u_short alpha, red, green, blue;
} PF_Pixel16;
```

```
typedef struct {
  PF_FpShort alpha, red, green, blue;
} PF_PixelFloat, PF_Pixel32;
```

```
typedef PF_Fixed PF_HLS_PIXEL[3]
```

```
typedef PF_Fixed PF_YIQ_PIXEL[3]
```

| Pixel Type | Data Structure |
| --- | --- |
| 8 bpc ARGB |  |
| 16 bpc ARGB |  |
| 32 bpc ARGB |  |
| HLS (Hue, Lightness, Saturation) |  |
| YIQ (luminance, in-phase chrominance, quadrature chrominance) |  |

Because the callbacks below convert between color spaces, you can reuse image-processing algorithms originally authored for almost any space within your plug-in.

## Color Space Conversion Callbacks

### Color Space Conversion — Color Space Conversion Callbacks

| Function | Purpose | Replaces |
| --- | --- | --- |
| RGBtoHLS | Given an RGB pixel, returns an HLS (hue, lightness, saturation) pixel. HLS values are scaled from 0 to 1 in fixed point. | `PF_RGB_TO_HLS` |
| HLStoRGB | Given an HLS pixel, returns an RGB pixel. | `PF_HLS_TO_RGB` |
| RGBtoYIQ | Given an RGB pixel, returns a YIQ (luminance, inphase chrominance, quadrature chrominance) pixel. Y is 0 to 1 in fixed point, I is -0.5959 to 0.5959 in fixed point, and Q is -0.5227 to 0.5227 in fixed point. | `PF_RGB_TO_YIQ` |
| YIQtoRGB | Given a YIQ pixel, returns an RGB pixel. | `PF_YIQ_TO_RGB` |
| Luminance | Given an RGB pixel, returns 100 times its luminance value (0 to 25500). | `PF_LUMINANCE` |
| Hue | Given an RGB pixel, eturns its hue angle mapped from 0 to 255, where 0 is 0 degrees and 255 is 360 degrees. | `PF_HUE` |
| Lightness | Given an RGB pixel, returns its lightness value (0 to 255). | `PF_LIGHTNESS` |
| Saturation | Given an RGB pixel, returns its saturation value (0 to 255). | `PF_SATURATION` |

## Changing Parameter Orders, the Nice Way

You can grow or shrink a plug-in's parameter set across versions without making users re-apply every existing instance to pick up the change. Pulling this off does take some forethought on your end, but both your users and your support team will thank you for putting in that work.

Start by building a parameter array index. While handling `PF_C`md*`PARAM_SETUP`, hand each parameter an index value through a plain enumeration as you add it. Whatever order you enumerate in matches the order the parameters get registered during `PF_C`md*`PARAM_SETUP`, and that registration order is exactly the order they show up in the Effect Control and Timeline panels.

Next, set up a separate enumeration for disk IDs. You're free to tack new entries onto the tail of this enumeration, but you must never shuffle the existing order. This list also doesn't have to line up with the parameter array index in any way. Keep disk IDs somewhere between 1 and 9999. Wondering why zero is off-limits? There's a story behind that...

Back in the early, untamed era of writing After Effects plug-ins, a lot of developers simply skipped assigning IDs. After Effects caught on and started inspecting the ID of the first parameter an effect added; a zero there was taken as a sign the programmer had skipped IDs altogether, so After Effects stepped in and handed each parameter an ID itself. The logic holds up fine as long as you never assign param IDs yourself, but it falls apart the moment you start your own numbering at NULL. That's the reason.

Set the disk ID in the `PF_P`aramDef.uu.id field prior to your `PF_ADD_PARAM`() call. Leave it blank and After Effects just numbers the parameters in sequence from 1. That ID rides along with the parameter's data whenever the project is saved. Thanks to this, even after your "Foobarocity" slider moves from second to fourth in the passing order, After Effects still recognizes it as the very same parameter.

Removing a parameter without triggering re-application means deleting both the code that builds it and its slot in the parameter array index list — but leave its disk ID list entry alone. Adding one means inserting an entry at the right spot in the parameter array indices list, writing the parameter creation code, and appending its disk ID to the end of the disk ID enumeration. Reordering means rearranging the parameter array index list and shuffling the parameter creation code to match.
