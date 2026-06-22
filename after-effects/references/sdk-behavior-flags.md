# Behavior Flags, New Kids On The Function Block, Aeio Functionblock4

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Behavior Flags; New Kids On The Function Block; `AEIO_F`unctionBlock4.

## Behavior Flags

### `AEIO_M`oduleInfo — Behavior Flags

AEIOs use `AEIO_M`oduleInfo.flags to report behavior to After Effects, much like effect plug-ins use global outflags. Some flags apply only to input, while others apply only to output.

### `AEIO_M`oduleFlags

Flag

Purpose

I or O?

`AEIO_MF`lag_INPUT

AEIO works as an input module.

Input!

`AEIO_MF`lag_OUTPUT

AEIO works as an output module; one plug-in can do both jobs.

Output!

`AEIO_MF`lag_FILE

Each directly imported clip maps to a file somewhere.

Both

`AEIO_MF`lag_STILL

Still images are supported, but video is not.

Output

`AEIO_MF`lag_VIDEO

Video images are supported, but stills are not.

Output

`AEIO_MF`lag_AUDIO

Audio is supported.

Output

`AEIO_MF`lag\_`NO_TIME`

The file format does not include time information. Numbered stills are one example, where individual frames are imported according to the composition's time settings.

Input

`AEIO_MF`lag\_`INTERACTIVE_GET`

User interaction is required for a new input sequence. A non-file-based input module is an example.

Input

`AEIO_MF`lag\_`INTERACTIVE_PUT`

User interaction is required for a new output sequence. A non-file-based output module is an example.

Output

`AEIO_MF`lag\_`CANT_CLIP`

The AEIO drawing functions cannot accept dimensions below the requested dimensions.

Input

`AEIO_MF`lag\_`MUST_INTERACT_PUT`

The AEIO must show a dialog box even when a valid options data handle already exists.

Output

`AEIO_MF`lag\_`CANT_SOUND_INTERLEAVE`

The AEIO needs all video data processed first and sound data afterward, rather than interleaving video and audio processing.

Output

`AEIO_MF`lag\_`CAN_ADD_FRAMES_NON_LINEAR`

The AEIO can add frames out of sequence.

Output

`AEIO_MF`lag\_`HOST_DEPTH_DIALOG`

The AEIO asks After Effects to show a bit-depth selection dialog.

Input

`AEIO_MF`lag\_`HOST_FRAME_START_DIALOG`

The AEIO asks After Effects to show a dialog where the user specifies the starting frame.

Input

`AEIO_MF`lag\_`NO_OPTIONS`

Output options are not accepted by the AEIO.

Output

`AEIO_MF`lag\_`NO_PIXELS`

The AEIO file format does not actually store pixels. As of CS6, this is currently unused.

(unused)

`AEIO_MF`lag\_`SEQUENCE_OPTIONS_OK`

If a folder is selected, the AEIO adopts the sequence options of the parent.

Input

`AEIO_MF`lag\_`INPUT_OPTIONS`

Each input sequence has user options associated with it.

Note

Options information must be flat, meaning it cannot refer to data stored in external pointers or handles.

Input

`AEIO_MF`lag\_`HSF_AWARE`

For each new sequence, the AEIO provides horizontal scaling factor, meaning pixel aspect ratio, information. This keeps After Effects from guessing.

Input

`AEIO_MF`lag\_`HAS_LAYERS`

The AEIO supports multiple layers inside one document.

Input

`AEIO_MF`lag_SCRAP

The AEIO includes a clipboard parsing component.

Input

`AEIO_MF`lag\_`NO_UI`

After Effects should not show UI for this module. Avoid combining this flag with `AEIO_MF`lag*`HOST_DEPTH_DIALOG` or `AEIO_MF`lag*`HOST_FRAME_START_DIALOG`.

Input

`AEIO_MF`lag\_`SEQ_OPTIONS_DLG`

The More Options button in the Interpret Footage dialog exposes sequence options for the AEIO.

Input

`AEIO_MF`lag\_`HAS_AUX_DATA`

The file format handled by the AEIO includes depth information, normals, or another kind of per-pixel non-color information.

Input

`AEIO_MF`lag\_`HAS_META_DATA`

The file format handled by the AEIO supports user-definable metadata. Setting this flag enables the embed pop-up in the output module dialog.

Output

`AEIO_MF`lag\_`CAN_DO_MARKERS`

The file format handled by the AEIO may include markers, url flips, and/or chapters.

Output

`AEIO_MF`lag\_`CAN_DRAW_DEEP`

The AEIO can draw into 16bpc ("deep") `PF_E`ffectWorlds.

Input

`AEIO_MF`lag_RESERVED4

Special super-secret flag. It does nothing...or maybe it does? No, it does not.

???

| --- | --- | --- |

### `AEIO_M`oduleFlags2

Need those flags too...

| Flag | Purpose | I or O? |
| --- | --- | --- |
| `AEIO_MF`lag2\_`AUDIO_OPTIONS` | The AEIO has an audio options dialog. | Output |
| `AEIO_MF`lag2\_`SEND_ADDMARKER_BEFORE_ADDFRAME` | The AEIO wants to receive marker data before outputting video or audio (useful for MPEG streams). | Output |
| `AEIO_MF`lag2\_`CAN_DO_MARKERS_2` | The AEIO supports combined markers; URL flips, chapters, and comments. | Output |
| `AEIO_MF`lag2\_`CAN_DRAW_FLOAT` | The AEIO can draw into float (32-bpc) worlds. | Input |
| `AEIO_MF`lag2\_`CAN_DO_AUDIO_32` | Supports 32-bit audio output. | Output |
| `AEIO_MF`lag2\_`SUPPORTS_ICC_PROFILES` | Supports ICC profiles. | Both |
| `AEIO_MF`lag2\_`CAN_DO_MARKERS_3` | The AEIO supports combined markers; URL flips, chapters, comments, and cue points. | Output |
| `AEIO_MF`lag2\_`SEND_ADDMARKER_BEFORE_STARTADDING` | The AEIO wants to process markers before video during export. | Output |
| `AEIO_MF`lag2\_`USES_QUICKTIME` | On MacOS, prior to the host calling `AEIO_A`ddFrame or `AEIO_O`utputFrame from `AEIO_F`unctionBlock4, it will lock the global QuickTime mutex. | Output |

## New Kids On The Function Block

During its main entry point, each AEIO plug-in must fill an `AEIO_F`unctionBlock with pointers to the functions After Effects calls for different file-related tasks.

The table below identifies which functions are needed for input and which are needed for output. For a minimal implementation, begin with the functions marked "Required" in the right column. Often, you can get best-case behavior by returning `AEIO_E`rr\_`USE_DFLT_CALLBACK` so After Effects handles the call.

For a barebones AEIO that handles only video input, implement `AEIO_I`nitInSpecFromFile or `AEIO_I`nitInSpecInteractive, choosing based on whether the source is a file or generated interactively; also implement `AEIO_D`isposeInSpec, `AEIO_G`etInSpecInfo, `AEIO_D`rawSparseFrame, `AEIO_C`loseSourceFiles, and `AEIO_I`nqNextFrameTime, where `AEIO_E`rr\_`USE_DFLT_CALLBACK` is acceptable.

When starting from the IO sample, it is best to keep the other functions defined as well and fill them in later as needed.

## `AEIO_F`unctionBlock4

### New Kids On The Function Block — `AEIO_F`unctionBlock4

Function

Response

I or O?

Required?

`AEIO_I`nitInSpecFromFile

```

Given a file path, describe the file contents to After Effects through the supplied AEIO_InSpecH.

Use the appropriate "set" calls from AEGP_IOInSuite for this; when image data exists, set depth, dimensions, and alpha interpretation.

When audio exists, describe the channels and sample rate.

file_pathZ is a NULL-terminated UTF-16 string using platform separators.

AEIO_InitInSpecFromFile(
  AEIO_BasicData     *basic_dataP,
  const A_UTF16Char  *file_pathZ,
  AEIO_InSpecH       inH);
```

Input

Yes, for file-based media

`AEIO_I`nitInSpecInteractive

```

Using user interaction rather than a file path supplied by After Effects, describe the audio and video contained in your generated AEIO_InSpecH.

AEIO_InitInSpecInteractive(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH);
```

Input

Yes, for interactiv ely generated media

`AEIO_D`isposeInSpec

```

Frees an AEIO_InSpecH.

AEIO_DisposeInSpec(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH);
```

Input

Yes

`AEIO_F`lattenOptions

```

For the supplied AEIO_InSpecH, return a flattened copy of the data stored in its options handle.

Use AEGP_GetInSpecOptionsHandle to obtain the unflattened options handle.

AEIO_FlattenOptions(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  AEIO_Handle     *flat_optionsPH);
```

Input

No

`AEIO_I`nflateOptions

```

For the supplied AEIO_InSpecH, create an unflattened version of its flattened option data by using AEGP_SetInSpecOptionsHandle.

AEIO_InflateOptions(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  AEIO_Handle     flat_optionsH);
```

Input

No

`AEIO_S`ynchInSpec

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Inspect the AEIO_InSpecH, update options when necessary, and report whether changes were made.

AEIO_SynchInSpec(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  A_Boolean       *changed0);
```

Input

No

`AEIO_G`etActiveExtent

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Fill the supplied A_LRect with the active extent of the file pixels at the specified time.

AEIO_GetActiveExtent(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  const A_Time    *tr,
  A_LRect         *extent);
```

Input

Yes

`AEIO_G`etInSpecInfo

```

Provide a few AEIO_Verbiage strings describing the file for display in the Project panel. This includes strings for the file type and subtype, meaning the codec.

AEIO_GetInSpecInfo(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  AEIO_Verbiage   *verbiageP);
```

This function is called OFTEN, every time the project panel refreshes. Minimize allocations. In the AEIOs shipped with After Effects, we check for a valid optionsH with `AEGP_G`etInSpecOptionsHandle; when one exists, we use the data inside it. Otherwise, we do nothing. This matters because if your AEIO handles still images, the folder that contains those stills can trigger this function. Ideally, no optionsH is associated with that folder unless your AEIO is truly unusual.

Input

Yes

`AEIO_D`rawSparseFrame

```

Draws a frame from AEIO_InSpecH.

PF_EffectWorld* supplies the width and height to use, but account for required_region0 when it is not NULL.

AEIO_DrawSparseFrame(
  AEIO_BasicData            *basic_dataP,
  AEIO_InSpecH              inH,
  AEIO_Quality              qual,
  const AEIO_RationalScale  *rs0,
  const A_Time              *tr,
  const A_Time              *duration0,
  const A_Rect               *required_region0,
  PF_EffectWorld            *wP,
  A_long                   originx,
  A_long                   originy,
  AEIO_DrawingFlags         *draw_flagsP);
```

NOTE: Return linear-light data (1.0); After Effects handles any transforms needed to move the footage into the working colorspace.

Input

Yes

`AEIO_G`etDimensions

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Provide video dimensions, and the scaling factor if needed, for the AEIO_InSpecH.

AEIO_GetDimensions(
  AEIO_BasicData            *basic_dataP,
  AEIO_InSpecH              inH,
  const AEIO_RationalScale  *rs0,
  A_long                    *width0,
  A_long                    *height0);
```

Input

No

`AEIO_G`etDuration

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Provide the AEIO_InSpecH duration in seconds.

AEIO_GetDuration(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  A_Time          *trP);
```

Input

No

`AEIO_G`etTime

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Provide the AEIO_InSpecH timebase.

AEIO_GetTime(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  A_Time          *tr);
```

Here are the values we use internally for common timebases: - 29.97 fps: scale = 100; value= 2997; - 59.94 fps: scale = 50; value = 2997; - 23.976 fps: scale = 125; value = 2997; - 30 fps: scale = 1; value = 30; - 25 fps: scale = 1; value = 25;

Input

No

`AEIO_G`etSound

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Provide sound from AEIO_InSpecH at the described quality.

AEIO_GetSound(
  AEIO_BasicData             *basic_dataP,
  AEIO_InSpecH               inH,
  AEIO_SndQuality            quality,
  const AEIO_InterruptFuncs  *interrupt_funcsP0,
  const A_Time               *startPT,
  const A_Time               *durPT,
  A_u_long                   start_sampLu,
  A_u_long                   num_samplesLu,
  void                       *dataPV);
```

`AEIO_S`ndQuality may be: - `AEIO_S`ndQuality_APPROX, (this quality is used to draw the audio waveform) - `AEIO_S`ndQuality_LO, - `AEIO_S`ndQuality_HI

Input

No

`AEIO_I`nqNextFrameTime

```

AEIO_Err_USE_DFLT_CALLBACK allowed.

Provide the next-frame time, in the source footage timebase, inside the AEIO_InSpecH.

AEIO_InqNextFrameTime(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  const A_Time    *base_time_tr,
  AEIO_TimeDir    time_dir,
  A_Boolean       *found0,
  A_Time          *key_time_tr0);
```

Input

Yes

`AEIO_I`nitOutputSpec

```

AEIO_Err_USE_DFLT_CALLBACK allowed.

Perform initialization needed for a new AEIO_OutSpecH, then indicate whether changes were made.

AEIO_InitOutputSpec(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_Boolean       *user_interacted);
```

Note

On first use of your AEIO, After Effects stores the last-known-good optionsH in preferences.

When testing this function, delete your preferences frequently.

Output

Yes

`AEIO_G`etFlatOutputOptions

```

Describe the output options for an AEIO_OutSpecH in an AEIO_Handle, using a disk-safe flat data structure that does not reference external memory.

Because output options must work across platforms, pay attention to byte ordering.

AEIO_GetFlatOutputOptions(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  AEIO_Handle     *optionsH);
```

Output

Yes

`AEIO_D`isposeOutputOptions

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Free memory for the supplied output options.

AEIO_DisposeOutputOptions(
  AEIO_BasicData  *basic_dataP,
  void            *optionsPV);
```

Output

No

`AEIO_U`serOptionsDialog

```

Displays an output settings dialog; select TIFF output in After Effects to see when this dialog appears.

Store the resulting information in an options handle by calling AEGP_SetInSpecOptionsHandle.

AEIO_UserOptionsDialog(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  PF_EffectWorld  *sample0,
  A_Boolean       *interacted0);
```

Output

No

`AEIO_G`etOutputInfo

```

Describes the output options in an AEIO_OutSpecH as text.

AEIO_GetOutputInfo(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  AEIO_Verbiage   *verbiage);
```

`AEIO_O`utputInfoChanged

```

Updates AEIO_OutSpecH from the current settings, using the various Get functions to retrieve those settings.

AEIO_OutputInfoChanged(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH);
```

Output

No

`AEIO_S`etOutputFile

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Sets the output file path for an AEIO_OutSpecH.

Return AEIO_Err_USE_DEFAULT_CALLBACK unless your code changed the path.

file_pathZ is a NULL-terminated UTF-16 string using platform separators.

AEIO_SetOutputFile(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_UTF16Char     *file_pathZ);
```

Output

Yes

`AEIO_S`tartAdding

```

Prepares to add frames to the output file.

This is a useful point to create output file or files on disk and write header information into them. It is also the first chance to allocate pixel buffers from valid output spec values.

AEIO_StartAdding(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_long          flags);
```

Output

Yes, for writing formats that support multiple frames

`AEIO_A`ddFrame

```

Adds one or more frames to the output file. You may provide a function pointer that is called if rendering is interrupted by the user.

AEIO_AddFrame(
  AEIO_BasicData       *basic_dataP,
  AEIO_OutSpecH        outH,
  A_long               frame_index,
  A_long               frames,
  PF_EffectWorld       *wP,
  const A_LPoint       *origin0,
  A_Boolean            was_compressedB,
  AEIO_InterruptFuncs  *inter0);
```

Output

Yes, for writing formats that support multiple frames

`AEIO_E`ndAdding

```

Performs cleanup for the frame-adding process.

AEIO_EndAdding(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_long          flags);
```

Output

Yes, for writing formats that support multiple frames

`AEIO_O`utputFrame

```

Writes one frame.

AEIO_OutputFrame(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  PF_EffectWorld  *wP);
```

Output

Yes, for writing formats that support a single frame

`AEIO_W`riteLabels

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Sets alpha interpretation and field usage information for AEIO_OutSpecH.

Use AEIO_LabelFlags to indicate which flags were written.

AEIO_WriteLabels(
  AEIO_BasicData   *basic_dataP,
  AEIO_OutSpecH    outH,
  AEIO_LabelFlags  *written);
```

Output

Yes

`AEIO_G`etSizes

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Provides output-volume free-space information and file size.

AEIO_GetSizes(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_u_longlong    *free_space,
  A_u_longlong    *file_size);
```

Output

Yes

`AEIO_F`lush

```

Destroys options or user data associated with OutSpecH.

AEIO_Flush(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH);
```

`AEIO_A`ddSoundChunk

```

Adds the supplied sound data to the output file.

AEIO_AddSoundChunk(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  const A_Time    *start,
  AEIO_SndWorldH  swH);
```

Output

Yes, for writing formats with audio

`AEIO_I`dle

```

Optional. Perform work during idle time. AEIO_Err_USE_DFLT_CALLBACK is not supported.

AEIO_Idle(
  AEIO_BasicData        *basic_dataP,
  AEIO_ModuleSignature  sig,
  AEIO_IdleFlags        *idle_flags0);
```

Output

No

`AEIO_G`etDepths

```

Sets AEIO_OptionsFlags to identify the pixel and color depths valid for the output format.

See the discussion on Export Bit-Depth.

AEIO_GetDepths(
  AEIO_BasicData     *basic_dataP,
  AEIO_OutSpecH      outH,
  AEIO_OptionsFlags  *which);
```

Output

Yes

`AEIO_G`etOutputSuffix

```

AEIO_Err_USE_DFLT_CALLBACK allowed. Describes the output file's three-character extension.

AEIO_GetOutputSuffix(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_char          *suffix);
```

Output

Yes

`AEIO_S`eqOptionsDlg

```

Displays a footage options dialog and reports whether the user changed anything.

AEIO_SeqOptionsDlg(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  A_Boolean       *interactedPB);
```

Input

No

`AEIO_G`etNumAuxChannels

```

Enumerates auxiliary data channels, beyond red, green, blue, and alpha, contained in an AEIO_InSpecH.

AEIO_GetNumAuxChannels(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  A_long          *num_channelsPL);
```

Input

No

`AEIO_G`etAuxChannelDesc

```

Describes an auxiliary data channel's type, name, channel, and dimensionality.

AEIO_GetAuxChannelDesc(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  long            chan_indexL,
  PF_ChannelDesc  *descP);
```

Input

No

`AEIO_D`rawAuxChannel

```

Draws auxiliary channel data supplied by AEIO_InSpecH.

AEIO_DrawAuxChannel(
  AEIO_BasicData          *basic_dataP,
  AEIO_InSpecH            inH,
  A_long                  chan_indexL,
  const AEIO_DrawFramePB  *pbP,
  PF_ChannelChunk         *chunkP);
```

`AEIO_F`reeAuxChannel

```

Frees data tied to an auxiliary channel.

AEIO_FreeAuxChannel(
  AEIO_BasicData   *basic_dataP,
  AEIO_InSpecH     inH,
  PF_ChannelChunk  *chunkP);
```

Input

No

`AEIO_N`um AuxFiles

```

Enumerates the files required to render the supplied AEIO_InSpecH.

When the user chooses File > Dependencies > Collect Files..., this function and AEIO_GetNthAuxFileSpec are called. Here the AEIO reports the associated files to AE.

AEIO_NumAuxFiles(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    seqH,
  A_long          *files_per_framePL);
```

Input

No

`AEIO_G`etNthAuxFileSpec

```

For the specified frame, retrieves data from auxiliary file number n.

The path is returned as a handle to a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

AEIO_GetNthAuxFileSpec(
  AEIO_BasicData *basic_dataP,
  AEIO_InSpecH   seqH,
  A_long         frame_numL,
  A_long         n,
  AEGP_MemHandle *pathPH);
```

Input

No, if no aux files

`AEIO_C`loseSourceFiles

```

Closes or opens, depending on closeB, the source files for an AEIO_InSpecH.

During Collect Files, the AEIO is first asked to close its source files and then to open them again.

AEIO_CloseSourceFiles(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    seqH,
  A_Boolean       closeB);
```

- TRUE for close - FALSE for open.

Input

Yes

`AEIO_C`ountUserData

```

Counts user-data units associated with the AEIO_InSpecH.

AEIO_CountUserData(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  A_u_long        typeLu,
  A_u_long        max_sizeLu,
  A_u_long        *num_of_typePLu);
```

`AEIO_S`etUserData

```

Sets user data, using the supplied index and type, for the supplied AEIO_OutSpecH.

AEIO_SetUserData(
  AEIO_BasicData     *basic_dataP,
  AEIO_OutSpecH      outH,
  A_u_long           typeLu,
  A_u_long           indexLu,
  const AEIO_Handle  dataH);
```

Output

No

`AEIO_G`etUserData

```

Describes user data, at the supplied index and type, associated with the AEIO_InSpecH.

AEIO_GetUserData(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  A_u_long        typeLu,
  A_u_long        indexLu,
  A_u_long        max_sizeLu,
  AEIO_Handle     *dataPH);
```

Input

No

`AEIO_A`ddMarker

```

Associates a marker of the specified type and frame with the AEIO_OutSpecH.

An interrupt function may be supplied to handle user cancellation for this action.

AEIO_AddMarker(
  AEIO_BasicData       *basic_dataP,
  AEIO_OutSpecH        outH,
  A_long               frame_index,
  AEIO_MarkerType      marker_type,
  void                 *marker_dataPV,
  AEIO_InterruptFuncs  *inter0);
```

Output

No

`AEIO_V`erifyFileImportable

```

Sets importablePB to indicate whether the plug-in can import the file.

After Effects has already performed basic extension checking; you may still want to open the file and validate it.

That validation can take time. Most AEIOs shipped with After Effects simply return TRUE and handle invalid files during AEIO_InitInSpecFromFile.

file_pathZ is a NULL-terminated UTF-16 string using platform separators.

AEIO_VerifyFileImportable(
  AEIO_BasicData        *basic_dataP,
  AEIO_ModuleSignature  sig,
  const A_UTF16Char     *file_pathZ,
  A_Boolean             *importablePB);
```

Input

No

`AEIO_U`serAudioOptionsDialog

```

Displays an audio options dialog.

AEIO_UserAudioOptionsDialog(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_Boolean       *interacted0);
```

Output

No

`AEIO_A`ddMarker3

```

Adds a marker with a flag that states whether this is a composition marker.

AEIO_AddMarker3(
  AEIO_BasicData         *basic_dataP,
  AEIO_OutSpecH          outH,
  A_long                 frame_index,
  AEGP_ConstMarkerValP   marker_valP,
  AEIO_RenderMarkerFlag  marker_flag,
  AEIO_InterruptFuncs    *inter0);
```

Output

No

`AEIO_G`etMimeType

```

Describes the output mime type. XMP support uses this value.

AEIO_GetMimeType(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_long          mime_type_sizeL,
  char            *mime_typeZ);
```

Output

No

| --- | --- | --- | --- |
