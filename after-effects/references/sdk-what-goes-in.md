# What Goes In, What Goes Out, Export Bit Depth, User Data Vs Options ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: What Goes In; What Goes Out; Export Bit-Depth; User Data vs. Options; Premiere Pro & Other Hosts; Plug-in Installation; Basic Host Differences; Time Values; Rendering Frames; Render Order; Frame Dimensions; Parameter UI; Missing Suites; A Special Suite for AE Effects Running in Premiere Pro; Multithreading; Bigger Differences; Pixel Formats.

## What Goes In

### New Kids On The Function Block — What Goes In

These functions work with an input specification, which is the After Effects internal representation of source-gathered data.

In After Effects, all image or audio data except solids is sourced through `AEIO_I`nSpecH, the input specification handle.

### `AEGP_IOI`nSuite5

Function

Purpose

`AEGP_G`etInSpecOptionsHandle

```

Gets your AEIO-created options data for the supplied AEIO_InSpecH.

AEGP_GetInSpecOptionsHandle(
  AEIO_InSpecH  inH,
  void          *optionsPPV);
```

`AEGP_S`etInSpecOptionsHandle

```

Sets options data for the supplied AEIO_InSpecH.

Allocation must use the Memory Suite.

AEGP_SetInSpecOptionsHandle(
  AEIO_InSpecH  inH,
  void          *optionsPV,
  void          *old_optionsPPV);
```

`AEGP_G`etInSpecFilePath

```

Retrieves the file path for AEIO_InSpecH.

The file path is returned as a handle to a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

AEGP_GetInSpecFilePath(
  AEIO_InSpecH    inH,
  AEGP_MemHandle  *file_nameZ);
```

`AEGP_G`etInSpecNativeFPS

```

Retrieves the frame rate for AEIO_InSpecH.

AEGP_GetInSpecNativeFPS(
  AEIO_InSpecH  inH,
  A_Fixed       *native_fpsP);
```

`AEGP_S`etInSpecNativeFPS

```

Sets the frame rate for AEIO_InSpecH.

AEGP_SetInSpecNativeFPS(
  AEIO_InSpecH  inH,
  A_Fixed       native_fpsP);
```

`AEGP_G`etInSpecDepth

```

Retrieves image-data bit depth from AEIO_InSpecH.

AEGP_GetInSpecDepth(
  AEIO_InSpecH  inH,
  A_short       *depthPS);
```

`AEGP_S`etInSpecDepth

```

Tells After Effects the image-data bit depth for AEIO_InSpecH.

AEGP_SetInSpecDepth(
  AEIO_InSpecH  inH,
  A_short       depthS);
```

`AEGP_G`etInSpecSize

```

Retrieves the byte size of data referenced by AEIO_InSpecH.

AEGP_GetInSpecSize(
  AEIO_InSpecH   inH,
  AEIO_FileSize  *sizePLLu);
```

`AEGP_S`etInSpecSize

```

Tells After Effects the byte size of data referenced by AEIO_InSpecH.

AEGP_SetInSpecSize(
  AEIO_InSpecH   inH,
  AEIO_FileSize  sizeL);
```

`AEGP_G`etInSpecInterlaceLabel

```

Retrieves field information for AEIO_InSpecH.

AEGP_GetInSpecInterlaceLabel(
  AEIO_InSpecH  inH,
  FIEL_Label    *interlaceP);
```

`AEGP_S`etInSpecInterlaceLabel

```

Specifies field information for AEIO_InSpecH.

AEGP_SetInSpecInterlaceLabel(
  AEIO_InSpecH      inH,
  const FIEL_Label  *interlaceP);
```

`AEGP_G`etInSpecAlphaLabel

```

Retrieves alpha-channel interpretation information for AEIO_InSpecH.

AEGP_GetInSpecAlphaLabel(
  AEIO_InSpecH     inH,
  AEIO_AlphaLabel  *alphaP);
```

`AEGP_S`etInSpecAlphaLabel

```

Sets alpha-channel interpretation information for AEIO_InSpecH.

AEGP_SetInSpecAlphaLabel(
  AEIO_InSpecH           inH,
  const AEIO_AlphaLabel* alphaP);
```

`AEGP_G`etInSpecDuration

```

Retrieves the AEIO_InSpecH duration.

AEGP_GetInSpecDuration(
  AEIO_InSpecH  inH,
  A_Time        *durationP);
```

`AEGP_S`etInSpecDuration

Sets the `AEIO_I`nSpecH duration.

Note

As of 5.5, call this even for frame-based file formats.

If `A_T`ime.scale is not set to a nonzero value, the file or files will not import.

A future version will fix this.

```

AEGP_SetInSpecDuration(
  AEIO_InSpecH  inH,
  const A_Time  *durationP);
```

`AEGP_G`etInSpecDimensions

```

Retrieves the width and height of image data in AEIO_InSpecH.

AEGP_GetInSpecDimensions(
  AEIO_InSpecH  inH,
  A_long        *widthPL0,
  A_long        *heightPL0);
```

`AEGP_S`etInSpecDimensions

```

Tells After Effects the width and height of image data in AEIO_InSpecH.

AEGP_SetInSpecDimensions(
  AEIO_InSpecH  inH,
  A_long        widthL,
  A_long        heightL);
```

`AEGP_I`nSpecGetRational Dimensions

```

Retrieves the width, height, bounding rect, and scaling factor applied to AEIO_InSpecH.

AEGP_InSpecGetRationalDimensions(
  AEIO_InSpecH              inH,
  const AEIO_RationalScale  *rs0,
  A_long                    *width0,
  A_long                    *height0,
  A_Rect                    *r0);
```

`AEGP_G`etInSpecHSF

```

Retrieves the horizontal scaling factor applied to AEIO_InSpecH.

AEGP_GetInSpecHSF(
  AEIO_InSpecH  inH,
  A_Ratio       *hsf);
```

`AEGP_S`etInSpecHSF

```

Sets the horizontal scaling factor for AEIO_InSpecH.

AEGP_SetInSpecHSF(
  AEIO_InSpecH   inH,
  const A_Ratio  *hsf);
```

`AEGP_G`etInSpecSoundRate

```

Obtains the audio-data sampling rate, in samples per second, referenced by AEIO_InSpecH.

AEGP_GetInSpecSoundRate(
  AEIO_InSpecH  inH,
  A_FpLong      *ratePF);
```

`AEGP_S`etInSpecSoundRate

```

Sets the audio-data sampling rate, in samples per second, referenced by AEIO_InSpecH.

AEGP_SetInSpecSoundRate(
  AEIO_InSpecH  inH,
  A_FpLong      rateF);
```

`AEGP_G`etInSpecSoundEncoding

```

Obtains the encoding method, signed PCM, unsigned PCM, or floating point, from AEIO_InSpecH.

AEGP_GetInSpecSoundEncoding(
  AEIO_InSpecH      inH,
  AEIO_SndEncoding  *encodingP);
```

`AEGP_S`etInSpecSoundEncoding

```

Sets the encoding method for AEIO_InSpecH.

AEGP_SetInSpecSoundEncoding(
  AEIO_InSpecH      inH,
  AEIO_SndEncoding  encoding);
```

`AEGP_G`etInSpecSoundSampleSize

```

Retrieves bytes-per-sample, 1,2, or 4, from AEIO_InSpecH.

AEGP_GetInSpecSoundSampleSize(
  AEIO_InSpecH        inH,
  AEIO_SndSampleSize  *bytes_per_smpP);
```

`AEGP_S`etInSpecSoundSampleSize

```

Sets bytes per sample for AEIO_InSpecH.

AEGP_SetInSpecSoundSampleSize(
  AEIO_InSpecH        inH,
  AEIO_SndSampleSize  bytes_per_sample);
```

`AEGP_G`etInSpecSoundChannels

```

Determines whether audio in AEIO_SndChannels is mono or stereo.

AEGP_GetInSpecSoundChannels(
  AEIO_InSpecH      inH,
  AEIO_SndChannels  *num_channelsP);
```

`AEGP_S`etInSpecSoundChannels

```

Sets audio in AEIO_SndChannels to mono or stereo.

AEGP_SetInSpecSoundChannels(
  AEIO_InSpecH      inH,
  AEIO_SndChannels  num_channels);
```

`AEGP_A`ddAuxExtMap

```

If auxiliary files for your file format should not be opened directly by users, pass the extension, file type, and creator to this function so the auxiliary format is hidden from input dialogs.

AEGP_AddAuxExtMap(
  const A_char  *extension,
  A_long        file_type,
  A_long        creator);
```

`AEGP_S`etInSpecEmbeddedColorProfile

```

For RGB data with an embedded icc profile, create an AEGP_ColorProfile from that icc profile using AEGP_GetNewColorProfileFromICCProfile from AEGP_ColorSettingsSuite5, and set the profile description to NULL.

For non-RGB data, when there is an embedded non-RGB icc profile or you know the data's color space, set the color profile to NULL and provide the description as a NULL-terminated unicode string. This disables the color management UI that would let the user affect profile selection in the application UI.

When unpacking non-RGB data directly into working space, use AEGP_GetNewWorkingSpaceColorProfile to get the working space; no more work is needed.

When unpacking non-RGB data into a particular RGB color space, pass the profile for that space to AEGP_SetInSpecAssignedColorProfile below. Otherwise, the RGB data is interpreted incorrectly as working-space data.

For this function, either color profile or profile description should be NULL. Do not use both.

AEGP_SetInSpecEmbeddedColorProfile(
  AEIO_InSpecH             inH,
  AEGP_ConstColorProfileP  color_profileP0,
  const A_UTF16Char        *profile_descP0);
```

`AEGP_S`etInSpecAssignedColorProfile

```

Assigns a valid RGB color profile for footage interpretation.

AEGP_SetInSpecAssignedColorProfile(
  AEIO_InSpecH             inH,
  AEGP_ConstColorProfileP  color_profileP);
```

`AEGP_G`etInSpecNativeStartTime

```

New in CC. Retrieves the footage native start time.

AEGP_GetInSpecNativeStartTime(
  AEIO_InSpecH  inH,
  A_Time        *startTimeP);
```

`AEGP_S`etInSpecNativeStartTime

```

New in CC. Assigns the footage native start time.

AEGP_SetInSpecNativeStartTime(
  AEIO_InSpecH  inH,
  const A_Time  *startTimeP);
```

`AEGP_C`learInSpecNativeStartTime

```

New in CC. Clears the footage native start time.

Setting native start time to 0 with AEGP_SetInSpecNativeStartTime does not clear it.

That still indicates that a special native start time is supplied.

AEGP_ClearInSpecNativeStartTime(
  AEIO_InSpecH  inH);
```

`AEGP_G`etInSpecNativeDisplayDropFrame

```

New in CC. Retrieves the footage drop-frame setting.

AEGP_GetInSpecNativeDisplayDropFrame(
  AEIO_InSpecH  inH,
  A_Boolean     *displayDropFrameBP);
```

`AEGP_S`etInSpecNativeDisplayDropFrame

```

New in CC. Assigns the footage drop-frame setting.

AEGP_SetInSpecNativeDisplayDropFrame(
  AEIO_InSpecH  inH,
  A_Boolean     displayDropFrameB);
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

## What Goes Out

### New Kids On The Function Block — What Goes Out

These functions handle every interaction with an output specification in the After Effects render queue.

### AEGPIOOutSuite4

Function

Purpose

`AEGP_G`etOutSpecOptionsHandle

```

Retrieves Options for AEIO_OutSpecH.

AEGP_GetOutSpecOptionsHandle(
  AEIO_OutSpecH  outH,
  void           *optionsPPV);
```

`AEGP_S`etOutSpecOptionsHandle

```

Sets Options for AEIO_OutSpecH.

AEGP_SetOutSpecOptionsHandle(
  AEIO_OutSpecH  outH,
  void           *optionsPV,
  void           *old_optionsPPV);
```

`AEGP_G`etOutSpecFilePath

```

Obtains the AEIO_OutSpecH path.

The file path is returned as a handle to a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

When file_rsrvdPB returns TRUE, the plug-in should not overwrite the file because After Effects has already created an empty one; overwriting it can break network renders.

AEGP_GetOutSpecFilePath(
  AEIO_OutSpecH   outH,
  AEGP_MemHandle  *unicode_pathPH,
  A_Boolean       *file_rsrvdPB);
```

`AEGP_G`etOutSpecFPS

```

Obtains the AEIO_OutSpecH frames-per-second value.

AEGP_GetOutSpecFPS(
  AEIO_OutSpecH  outH,
  A_Fixed        *native_fpsP);
```

`AEGP_S`etOutSpecNativeFPS

```

Sets the AEIO_OutSpecH frames-per-second value.

AEGP_SetOutSpecNativeFPS(
  AEIO_OutSpecH  outH,
  A_Fixed        native_fpsP);
```

`AEGP_G`etOutSpecDepth

```

Obtains AEIO_OutSpecH pixel bit depth.

AEGP_GetOutSpecDepth(
  AEIO_OutSpecH  outH,
  A_short        *depthPS);
```

`AEGP_S`etOutSpecDepth

```

Sets AEIO_OutSpecH pixel bit depth.

AEGP_SetOutSpecDepth(
  AEIO_OutSpecH  outH,
  A_short        depthPS);
```

`AEGP_G`etOutSpecInterlaceLabel

```

Obtains field information for AEIO_OutSpecH.

AEGP_GetOutSpecInterlaceLabel(
  AEIO_OutSpecH  outH,
  FIEL_Label     *interlaceP);
```

`AEGP_S`etOutSpecInterlaceLabel

```

Sets field information for AEIO_OutSpecH.

AEGP_SetOutSpecInterlaceLabel(
  AEIO_OutSpecH     outH,
  const FIEL_Label  *interlaceP);
```

`AEGP_G`etOutSpecAlphaLabel

```

Obtains alpha interpretation information for AEIO_OutSpecH.

AEGP_GetOutSpecAlphaLabel(
  AEIO_OutSpecH    outH,
  AEIO_AlphaLabel  *alphaP);
```

`AEGP_S`etOutSpecAlphaLabel

```

Sets alpha interpretation for AEIO_OutSpecH.

AEGP_SetOutSpecAlphaLabel(
  AEIO_OutSpecH          outH,
  const AEIO_AlphaLabel  *alphaP);
```

`AEGP_G`etOutSpecDuration

```

Obtains AEIO_OutSpecH duration.

AEGP_GetOutSpecDuration(
  AEIO_OutSpecH  outH,
  A_Time         *durationP);
```

`AEGP_S`etOutSpecDuration

```

Sets AEIO_OutSpecH duration.

AEGP_SetOutSpecDuration(
  AEIO_OutSpecH  outH,
  const A_Time   *durationP);
```

`AEGP_G`etOutSpecDimensions

```

Obtains AEIO_OutSpecH dimensions.

AEGP_GetOutSpecDimensions(
  AEIO_OutSpecH  outH,
  A_long         *widthPL0,
  A_long         *heightPL0);
```

`AEGP_G`etOutSpecHSF

```

Obtains AEIO_OutSpecH horizontal scaling factor.

AEGP_GetOutSpecHSF(
  AEIO_OutSpecH  outH,
  A_Ratio        *hsf);
```

`AEGP_S`etOutSpecHSF

```

Sets AEIO_OutSpecH horizontal scaling factor.

AEGP_SetOutSpecHSF(
  AEIO_OutSpecH  outH,
  const A_Ratio  *hsf);
```

`AEGP_G`etOutSpecSoundRate

```

Obtains the AEIO_OutSpecH sampling rate.

AEGP_GetOutSpecSoundRate(
  AEIO_OutSpecH  outH,
  A_FpLong       *ratePF);
```

`AEGP_S`etOutSpecSoundRate

```

Sets the AEIO_OutSpecH sampling rate.

AEGP_SetOutSpecSoundRate(
  AEIO_OutSpecH  outH,
  A_FpLong       rateF);
```

`AEGP_G`etOutSpecSoundEncoding

```

Obtains the AEIO_OutSpecH sound encoding format.

AEGP_GetOutSpecSoundEncoding(
  AEIO_OutSpecH     outH,
  AEIO_SndEncoding  *encodingP);
```

`AEGP_S`etOutSpecSoundEncoding

```

Sets the AEIO_OutSpecH sound encoding format.

AEGP_SetOutSpecSoundEncoding(
  AEIO_OutSpecH     outH,
  AEIO_SndEncoding  encoding);
```

`AEGP_G`etOutSpecSoundSampleSize

```

Obtains AEIO_OutSpecH bytes-per-sample.

AEGP_GetOutSpecSoundSampleSize(
  AEIO_OutSpecH       outH,
  AEIO_SndSampleSize  *bpsP);
```

`AEGP_S`etOutSpecSoundSampleSize

```

Sets AEIO_OutSpecH bytes-per-sample.

AEGP_SetOutSpecSoundSampleSize(
  AEIO_OutSpecH       outH,
  AEIO_SndSampleSize  bpsP);
```

`AEGP_G`etOutSpecSoundChannels

```

Obtains the number of sound channels in AEIO_OutSpecH.

AEGP_GetOutSpecSoundChannels(
  AEIO_OutSpecH     outH,
  AEIO_SndChannels  *channelsP);
```

`AEGP_S`etOutSpecSoundChannels

```

Sets the number of sound channels in AEIO_OutSpecH.

AEGP_SetOutSpecSoundChannels(
  AEIO_OutSpecH     outH,
  AEIO_SndChannels  channels);
```

`AEGP_G`etOutSpecIsStill

```

Determines whether AEIO_OutSpecH is a still.

AEGP_GetOutSpecIsStill(
  AEIO_OutSpecH  outH,
  A_Boolean      *is_stillPB);
```

`AEGP_G`etOutSpecPosterTime

```

Obtains the poster-frame time for AEIO_OutSpecH.

AEGP_GetOutSpecPosterTime(
  AEIO_OutSpecH  outH,
  A_Time         *poster_timeP);
```

`AEGP_G`etOutSpecStartFrame

```

Obtains the first-frame time in AEIO_OutSpecH.

AEGP_GetOutSpecStartFrame(
  AEIO_OutSpecH  outH,
  A_long         *start_frameP);
```

`AEGP_G`etOutSpecPullDown

```

Obtains AEIO_OutSpecH pulldown phase.

AEGP_GetOutSpecPullDown(
  AEIO_OutSpecH  outH,
  AEIO_Pulldown  *pulldownP);
```

`AEGP_G`etOutSpecIsMissing

```

Returns TRUE when no AEIO_OutSpecH exists.

AEGP_GetOutSpecIsMissing(
  AEIO_OutSpecH  outH,
  A_Boolean      *missingPB);
```

`AEGP_G`etOutSpecShouldEmbedICCProfile

```

Returns TRUE when output should include an embedded color profile from the AEIO.

AEGP_GetOutSpecShouldEmbedICCProfile(
  AEIO_OutSpecH  outH,
  A_Boolean      *embedPB);
```

`AEGP_G`etNewOutSpecColorProfile

```

Returns an opaque ICC color profile for embedding in AEIO output.

Use AEGP_DisposeColorProfile to dispose it.

AEGP_GetNewOutSpecColorProfile(
  AEGP_PluginID       aegp_plugin_id,
  AEIO_OutSpecH       outH,
  AEGP_ColorProfileP  *color_profilePP);
```

`AEGP_G`etOutSpecOutputModule

```

Returns the AEGP_RQItemRefH and AEGP_OutputModuleRefH associated with the supplied AEIO_OutSpecH.

Fails when the render queue item cannot be found. It also fails when AEIO_OutSpecH is a copy rather than a confirmed outH, i.e. when the Output Module settings dialog is open and the user has not clicked OK.

AEGP_GetOutSpecOutputModule(
  AEIO_OutSpecH          outH,
  AEGP_RQItemRefH        *rq_itemP,
  AEGP_OutputModuleRefH  *om_refP);
```

## Export Bit-Depth

### Implementation Details — Export Bit-Depth

In Output Module Settings, the user can choose Depth from the options that the AEIO declares as supported through `AEIO_G`etDepths() from `AEIO_F`unctionBlock4.

When a plug-in supports higher bit-depth exports, it should handle those higher bit-depth `PF_E`ffectWorlds passed through `AEIO_A`ddFrame() or `AEIO_O`utputFrame(), even if the export setting is not set to that same depth.

The frame delivered to the AEIO and the final output do not necessarily share a depth.

Frames may arrive in project bit-depth instead of final-output depth when After Effects judges that path to produce higher quality.

## User Data vs. Options

### Implementation Details — User Data vs. Options

Metadata about a file can be stored through either user-data allocations or options handles.

We use user data for information embedded in the file when the file format supports it, such as marker data, field labels, and similar data.

We use option handles for information about the file, including output settings, dimensions, and compression-setting details.

## Premiere Pro & Other Hosts

Both Adobe Premiere Pro and Adobe Premiere Elements support the After Effects effect API described in chapters 2, 3, and 5.

Their host implementation is broad, but key omissions include 3D-related calls for auxiliary-channel data, cameras, and lights; 16-bit and SmartFX support; and other utility functions from the After Effects AEGP API.

`PF_I`nData>appl_id is set to 'PrMr' by both Premiere Pro and Premiere Elements.

This chapter describes AE API support in Premiere Pro; generally, corresponding versions of Premiere Elements provide the same support.

Use the Premiere-specific App Info Suite from the Premiere Pro SDK headers when you need to distinguish Premiere Pro from Premiere Elements.

| Application Versions | `PF_I`nData> version.major | `PF_I`nData> version.minor |
| --- | --- | --- |
| Premiere Pro CC through Premiere Pro CC 2019 | 13 | 4 |
| Premiere Pro CS6 | 13 | 2 |
| Premiere Pro CS5.5 | 13 | 1 |
| Premiere Pro CS5, Premiere Elements 9 | 13 | 0 |
| Premiere Pro CS4, Premiere Elements 8 | 12 | 5 |
| Premiere Pro CS3, Premiere Elements 4 and 7 | 12 | 4 |
| Premiere Pro 2.0, Premiere Elements 3 | 12 | 3 |
| Premiere Pro 1.5, Premiere Elements 2 | 12 | 2 |
| Premiere Pro 1.0, Premiere Elements 1 | 12 | 1 |

The versioning used by Premiere Pro and Premiere Elements does not imply support for the same API features that After Effects had at the same version. It is only intended to distinguish one version from the next.

## Plug-in Installation

Use the shared plug-in folder described in Where Installers Should Put Plug-ins.

Installing an effect plug-in only in the Premiere Pro plug-ins directory can surprise you: the effect will not render during disk export through Adobe Media Encoder, which is a separate application.

You will also lose project interchange and copy / paste between Premiere Pro and After Effects.

## Basic Host Differences

We have tried to provide strong compatibility for After Effects effect plug-ins running in Premiere Pro.

Render-pipeline differences lead to behavioral differences, and the API implementation may not be perfect.

The following overview covers some differences a plug-in encounters while running in Premiere Pro.

## Time Values

### Basic Host Differences — Time Values

Premiere Pro uses slightly different `PF_I`nData time values. For example in CS4:

During NTSC rendering, time_scale is 60000, time_step is 1001, and field gives field order. In After Effects, field rendering uses scale 2997 and step 50, while progressive rendering uses scale 2997 and step 100.

During PAL rendering, time_scale is 50, time_step is 1, and field gives field order. In After Effects, field rendering uses scale 3200 and step 64, while progressive rendering uses scale 3200 and step 128.

The ratio among time-related values produces the time value, not time_scale alone. Premiere Pro may use different time_scales later, so do not hard code. Be aware that it does not necessarily use exactly the same values as After Effects.

## Rendering Frames

### Basic Host Differences — Rendering Frames

Premiere is optimized for responsive editing. When scrubbing the timeline or changing effect parameters, Premiere immediately requests a low-quality render for display, followed by a high-quality render. An effect may therefore receive two requests for the same effective time: first at low resolution and low bit-depth, then at full resolution and full bit-depth. Each requested render resolution accounts for Playback and Paused Resolution in the Source and Program Monitors. The first request uses Playback Resolution, and the second uses Paused Resolution.

Premiere also performs speculative rendering, rendering frames ahead on the timeline so that initial frames are ready if or when playback starts. When the time needle is repositioned or effect parameters change, Premiere asks the effect to render frames ahead of the current time. If those frames were already rendered and cached, the effect does not see those render requests because cached frames are used.

When rendering frames in Premiere-native pixel formats, Premiere sends `PF_C`md_RENDER once per field rather than once per frame. `PF_I`nData->field identifies the field being rendered, `PF_L`ayerDef->height is half the frame height, and `PF_L`ayerDef->rowbytes is twice the normal value.

## Render Order

### Basic Host Differences — Render Order

Premiere Pro was built for real-time playback of footage with effects whenever possible. Its render scheduling is far more aggressive, and multithreaded rendering is a baseline requirement. That differs sharply from After Effects, where users build many effect layers and are more willing to wait for a RAM preview.

Premiere multithreaded rendering applies to AE effects too. For an AE effect render, Premiere sends the request through a critical section used by every command except arbitrary-data commands. That critical section keeps two threads from calling one effect instance at the same time. Premiere still creates multiple effect instances, and separate threads can call those instances concurrently.

An effect therefore should not expect render requests in increasing-time order. Effects also should not rely on static non-constant variables.

## Frame Dimensions

### Basic Host Differences — Frame Dimensions

Differences between source footage and the project or composition are handled differently.

For example, in CS4, importing an NTSC clip into a PAL sequence gives `PF_I`nData>width,height as (598,480) and `PF_I`nData->pixel_aspect_ratio as (768,702).

In AE, width,height are (720,480) and pixel_aspect_ratio is (10,11).

## Parameter UI

### Basic Host Differences — Parameter UI

Premiere Pro does not honor `PF_P`aramFlag\_`START_COLLAPSED`. Parameters always initialize with their twirlies collapsed, and parameter supervision cannot automatically twirl them open.

Premiere Pro supports `PF_ADD_FLOAT_EXPONENTIAL_SLIDER`(), a macro that lets you define an exponent. Although the CC 2015 release 2 SDK newly added this macro, Premiere Pro had already used it for some time in Fast Color Corrector's Input Grey Level parameter. The exponent makes 1.0 land near the middle of the slider even though the range is 0.10 to 10. The exponent we used was 2.5. Typical values range from 0.01 to 100.

Starting in CC 2015, effects are not sent `PF_C`md*`UPDATE_PARAMS_UI` or `PF_E`vent_DRAW when the time needle moves and there are no keyframes, unless the effect sets `PF_O`utFlag*`NON_PARAM_VARY`. Effects that draw histograms in the Effect Controls panel need to know about this optimization.

## Missing Suites

### Basic Host Differences — Missing Suites

Many suites supported by After Effects are absent from the Premiere Pro host. In several cases, even when a suite is missing in Premiere Pro, an equivalent macro function exists. Examples:

| After Effects suite call | Premiere Pro equivalent function |
| --- | --- |
| WorldTransformSuite1()->copy() | `PF_COPY`() |
| WorldTransformSuite1()->convolve() | in_data->utils->convolve() |
| FillMatteSuite2()->fill() | `PF_FILL`() |
| `PF_P`ixelDataSuite1->get_pixel_data8() | `PF_GET_PIXEL_DATA8`() |

The sample projects show alternate approaches to missing suites by checking host application and version. The Portable sample demonstrates both host-application and version checks.

## A Special Suite for AE Effects Running in Premiere Pro

### Basic Host Differences — A Special Suite for AE Effects Running in Premiere Pro

Premiere Pro supports no AEGP calls. However, PrSDKAESupport.h contains some useful parallels. For example, the Utility Suite in that header can get source-footage frame rate or field type, or get the speed applied to the clip.

AE effects cannot use other suites from the Premiere Pro SDK.

## Multithreading

You may have noticed `PF_O`utFlag2\_`PPRO_DO_NOT_CLONE_SEQUENCE_DATA_FOR_RENDER`. We recommend not setting this flag because it has been found to cause parameter UI problems.

## Bigger Differences

When an effect supports only the basic `ARGB_8`u pixel format supported by After Effects, Premiere Pro tries to imitate After Effects host behavior and hide differences caused by its different render pipeline architecture. If the effect supports additional pixel formats, such as 32-bit RGB, expect more divergent behavior.

## Pixel Formats

### Bigger Differences — Pixel Formats

Premiere Pro supplies function suites that let effects declare support for pixel formats beyond After Effects' 8-bit RGB format, `ARGB_8`u. Those formats include Premiere Pro's native 8-bit RGB format, `BGRA_8`u, plus YUV, 32-bit formats, and others. For a fuller discussion of pixel formats, see "Pixel Formats and Colorspaces" in the Premiere Pro SDK Guide.

Register `PF_E`ffectWorld / `PF_L`ayerDef for other pixel formats through the PF Pixel Format Suite defined in PrAESDKSupport.h. Get black and white values for those formats through the Premiere Pixel Format Suite defined in PrSDKPixelFormatSuite.h.

After Effects functions such as `PF_BLEND`() have not been expanded to handle formats beyond 8-bit RGB.

## See also

- [Application](script-application.md)
