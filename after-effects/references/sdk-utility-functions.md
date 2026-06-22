# Utility Functions, Persistent Data Suite, Color Management

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Utility Functions; Persistent Data Suite; Color Management.

## Utility Functions

### AEGP Suites — Utility Functions

Error message handling, AEGP version checks, and reach into the undo stack all come from the Utility suite.

It has what you need to keep both After Effects and your plug-in in good order.

### `AEGP_U`tilitySuite6

Function

Purpose

`AEGP_R`eportInfo

```

Pops up a dialog showing the AEGP's name followed by whatever string you pass.

AEGP_ReportInfo(
  AEGP_PluginID  aegp_plugin_id,
  const A_char   *info_stringZ);
```

`AEGP_R`eportInfoUnicode

```

New in CC. Pops up a dialog showing the AEGP's name followed by the unicode string you pass.

AEGP_ReportInfoUnicode(
  AEGP_PluginID      aegp_plugin_id,
  const A_UTF16Char  *info_stringP);
```

`AEGP_G`etDriverSpecVersion

```

Gives back the AEGPDriver plug-in's version (use it to learn which features are supported).

AEGP_GetDriverSpecVersion(
  A_short  *major_versionPS,
  A_short  *minor_versionPS);
```

`AEGP_S`tartQuietErrors

```

Suppresses errors. Pair it with AEGP_EndQuietErrors.

AEGP_ErrReportState is an opaque structure that After Effects keeps private.

AEGP_StartQuietErrors(
  AEGP_ErrReportState  *err_stateP);
```

`AEGP_E`ndQuietErrors

```

Turns errors back on.

AEGP_EndQuietErrors(
  AEGP_ErrReportState  *err_stateP)
```

`AEGP_S`tartUndoGroup

```

Queues action(s) for undo. Anything between this call and AEGP_EndUndoGroup() can be undone by the user.

undo_nameZ shows up in the edit menu.

AEGP_StartUndoGroup(
  const A_char  *undo_nameZ);
```

`AEGP_E`ndUndoGroup

```

Closes off the undo list.

AEGP_EndUndoGroup();
```

`AEGP_R`egisterWithAEGP

```

Hands back an AEGP_PluginID that effect plug-ins can then pass to many functions across the AEGP API.

An effect should make this call just once, during PF_Cmd_GLOBAL_SETUP, and keep the AEGP_PluginID for use later on.

The first parameter accepts any value, while the plug-in's match name belongs in the second.

AEGP_RegisterWithAEGP(
  AEGP_GlobalRefcon  global_refcon,
  const A_char       *plugin_nameZ,
  AEGP_PluginID      *plugin_id);
```

`AEGP_G`etMainHWND

```

Hands back After Effects' HWND; handy when you show your own dialog on Windows.

Skip After Effects' HWND and your modal dialog won't block the windows behind it, and pain will ensue.

AEGP_GetMainHWND(
  void  *main_hwnd);
```

`AEGP_S`howHideAllFloaters

```

Flips floating palettes between shown and hidden.

Handle this gently; users get twitchy when the UI shifts on them out of nowhere.

AEGP_ShowHideAllFloaters(
  A_Boolean  include_tool_palB);
```

`AEGP_P`aintPalGetForeColor

```

Reads the foreground color out of the paint palette.

AEGP_PaintPalGetForeColor(
  AEGP_ColorVal  *fore_colorP);
```

`AEGP_P`aintPalGetBackColor

```

Reads the background color out of the paint palette.

AEGP_PaintPalGetBackColor(
  AEGP_ColorVal  *back_colorP);
```

`AEGP_P`aintPalSetForeColor

```

Writes the foreground color into the paint palette.

AEGP_PaintPalSetForeColor(
  const AEGP_ColorVal  *fore_colorP);
```

`AEGP_P`aintPalSetBackColor

```

Writes the background color into the paint palette.

AEGP_PaintPalSetBackColor(
  const AEGP_ColorVal  *back_colorP);
```

`AEGP_C`harPalGetFillColor

```

Reads the fill color out of the character palette.

AEGP_CharPalGetFillColor(
  A_Boolean     *is_fcolor_definedPB,
  AEGP_ColorVal *fill_colorP);
```

`AEGP_C`harPalGetStrokeColor

```

Reads the stroke color out of the character palette.

AEGP_CharPalGetStrokeColor(
  A_Boolean      *is_scolor_definedPB,
  AEGP_ColorVal  *stroke_colorP);
```

`AEGP_C`harPalSetFillColor

```

Writes the fill color into the character palette.

AEGP_CharPalSetFillColor(
  const AEGP_ColorVal  *fill_colorP);
```

`AEGP_C`harPalSetStrokeColor

```

Writes the stroke color into the character palette.

AEGP_CharPalSetStrokeColor(
  const AEGP_ColorVal  *stroke_colorP);
```

`AEGP_C`harPalIsFillColorUIFrontmost

```

Tells you whether the fill color sits frontmost. If not, the stroke color is the frontmost one.

AEGP_CharPalIsFillColorUIFrontmost(
  A_Boolean  *is_fcolor_selectedPB);
```

`AEGP_C`onvertFpLongToHSFRatio

```

Gives back an A_Ratio reading of the supplied A_FpLong. Handy for interpreting a horizontal scale factor.

AEGP_ConvertFpLongToHSFRatio(
  A_FpLong  numberF,
  A_Ratio   *ratioPR);
```

`AEGP_C`onvertHSFRatioToFpLong

```

Gives back an A_FpLong reading of the supplied A_Ratio. Handy for interpreting a horizontal scale factor.

AEGP_ConvertHSFRatioToFpLong(
  A_Ratio    ratioR,
  A_FpLong  *numberPF);
```

`AEGP_C`auseIdleRoutinesToBeCalled

```

You can safely invoke this routine from threads other than the main one. Being asynchronous, it returns before the idle handler runs.

The suite functions that retrieve this function pointer aren't thread safe; grab it on the main thread so the child thread can use it.

AEGP_CauseIdleRoutinesToBeCalled(void);
```

`AEGP_G`etSuppressInteractiveUI

```

Tells you whether After Effects is operating with no user interface.

AEGP_GetSuppressInteractiveUI(
  A_Boolean  *ui_is_suppressedPB);
```

`AEGP_W`riteToOSConsole

```

Pushes a string to the OS console.

AEGP_WriteToOSConsole(
  const A_char  *textZ);
```

`AEGP_W`riteToDebugLog

```

Records a message in the debug log, or on the OS command line when After Effects was started with the "-debug" option.

AEGP_WriteToDebugLog(
  const A_char  *subsystemZ,
  const A_char  *event_typeZ,
  const A_char  *infoZ);
```

`AEGP_G`etLastErrorMessage

```

Reads back the most recent error message shown to the user along with its error number. Supply the size of the character buffer you want returned.

AEGP_GetLastErrorMessage(
  A_long  buffer_size,
  A_char  *error_string,
  A_Err   *error_num);
```

`AEGP_I`sScriptingAvailable

```

Comes back TRUE when scripting is open to the plug-in.

AEGP_IsScriptingAvailable(
  A_Boolean  *outAvailablePB);
```

`AEGP_E`xecuteScript

```

Asks After Effects to run a script. What you pass in can be UTF-8 or the application's current encoding (when platform_encodingB is supplied as TRUE).

Both out arguments may be omitted. Whatever the script's last line evaluates to is what comes back in outResultPH0.

AEGP_ExecuteScript(
  AEGP_PluginID inPlugin_id,
  const A_char *inScriptZ,
  const A_Boolean platform_encodingB,
  AEGP_MemHandle *outResultPH0,
  AEGP_MemHandle *outErrStringPH0);
```

`AEGP_H`ostIsActivated

```

Comes back TRUE once the user has activated After Effects successfully.

AEGP_HostIsActivated(
  A_Boolean  *is_activatedPB);
```

`AEGP_G`etPluginPlatformRef

```

On macOS, gives back a CFBundleRef to your Mach-O plug-in, or NULL when it's a CFM plug-in.

On Windows it is always NULL (an OS-specific entry point can capture your DLLInstance instead).

AEGP_GetPluginPlatformRef(
  AEGP_PluginID  plug_id,
  void           *plat_refPPV);
```

`AEGP_U`pdateFontList

```

Re-scans the system's font list.

AEGP_UpdateFontList();
```

`AEGP_G`etPluginPaths

```

New in CC. Gives back one of the paths tied to the plug-in:

- AEGP_GetPathTypes_PLUGIN - (Not Implemented) Where the plug-in itself resides.

- AEGP_GetPathTypes_USER_PLUGIN - The per-suite spot for plug-ins belonging to a single user.

- AEGP_GetPathTypes_ALLUSER_PLUGIN - The per-suite spot for plug-ins every user shares.

- AEGP_GetPathTypes_APP - Where After Effects' .exe or .app sits. Not tied to any plug-in.

AEGP_GetPluginPaths(
  AEGP_PluginID      aegp_plugin_id,
  AEGP_GetPathTypes  path_type
  AEGP_MemHandle     *unicode_pathPH);
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

## Persistent Data Suite

### AEGP Suites — Persistent Data Suite

Plug-ins are granted read and write access to data persisted in After Effects' preferences. With the suite below, AEGPs can register and look after persistent data of their own. Entries are keyed by (section key, value key) pairs. As a convention, a plug-in should adopt its matchname as the section key, or prefix its section keys with it when several are used.

You can store A_long, `A_F`pLong, strings, and void* values. `A_F`pLongs keep 6 decimal places of precision, and there is no option to request another precision. String data covers the entire 8-bit range, with only 0x00 set aside to terminate a string. That makes such strings well suited to UTF-8, ISO 8859-1, and plain ASCII. Section keys and value keys share this type. When a value falls outside the simple types on offer, wrap your custom data in data handles. The void* unstructured form lets you keep data of any sort; just pass along its size in bytes together with the data.

For every value-retrieval function: when the requested key is absent, the default is written into the blob and also returned; with no default supplied, an empty value gets written and returned.

Keep in mind that this lives in the application's preferences rather than in the project. As of 6.5, there is no mechanism for stashing opaque AEGP-generated data inside an After Effects project.

After Effects copes with plug-ins that alter preferences while running; before it acts on a pref-able setting it consults the in-RAM copy of the prefs instead of trusting the saved file. It's like we _planned_ this, or something!

### `AEGP_P`ersistentDateSuite4

Function

Purpose

`AEGP_G`etApplicationBlob

```

Gets the handle covering all persistent application data. Changing it changes the application.

The AEGP_PersistentType parameter, new in CC, should be one of these:

- AEGP_PersistentType_MACHINE_SPECIFIC

- AEGP_PersistentType_MACHINE_INDEPENDENT

- AEGP_PersistentType_MACHINE_INDEPENDENT_RENDER

- AEGP_PersistentType_MACHINE_INDEPENDENT_OUTPUT

- AEGP_PersistentType_MACHINE_INDEPENDENT_COMPOSITION

- AEGP_PersistentType_MACHINE_SPECIFIC_TEXT

- AEGP_PersistentType_MACHINE_SPECIFIC_PAINT

AEGP_GetApplicationBlob(
  AEGP_PersistentType   blob_type,
  AEGP_PersistentBlobH  *blobPH);
```

`AEGP_G`etNumSections

```

Gets how many sections the application blob holds.

AEGP_GetNumSections(
  AEGP_PersistentBlobH  blobH,
  A_long                *num_sectionPL);
```

`AEGP_G`etSectionKeyByIndex

```

Gets the key at the supplied index.

AEGP_GetSectionKeyByIndex(
  AEGP_PersistentBlobH  blobH,
  A_long                section_index,
  A_long                max_section_size,
  A_char                *section_keyZ);
```

`AEGP_D`oesKeyExist

```

Tells you whether a particular key/value pair is present in the blob.

AEGP_DoesKeyExist(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_Boolean             *existsPB);
```

`AEGP_G`etNumKeys

```

Reads back how many value keys the section holds.

AEGP_GetNumKeys(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  A_long                *num_keysPL);
```

`AEGP_G`etValueKeyByIndex

```

Reads back the value of the key at the given index.

AEGP_GetValueKeyByIndex(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  A_long                key_index,
  A_long                max_key_size,
  A_char                *value_keyZ);
```

| --- | --- |

Note

In the functions below, an absent key causes the default to be written into the blob and returned; if you give no default, a blank value is written and returned.

Function

Purpose

`AEGP_G`etDataHandle

```

Gets the value tied to the given section's key. If you rely on in-memory data structures, mind the endian issues.

AEGP_GetDataHandle(
  AEGP_PluginID         plugin_id,
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  AEGP_MemHandle        defaultH0,
  AEGP_MemHandle        *valuePH);
```

`AEGP_G`etData

```

Gets the data sitting at a given section's value.

AEGP_GetData(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_u_long              data_sizeLu,
  const void            *defaultPV0,
  void                  *bufPV);
```

`AEGP_G`etString

```

Gets the string for a given section key's value (and reports its length in actual_szLu0).

AEGP_GetString(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const A_char          *defaultZ0,
  A_u_long              buf_sizeLu,
  char                  *bufZ,
  A_u_long              *actual_szLu0);
```

`AEGP_G`etLong

```

Gets the A_long tied to a given section key's value.

AEGP_GetLong(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_long                defaultL,
  A_long                *valuePL);
```

`AEGP_G`etFpLong

```

Gets the A_FpLong tied to a given section key's value.

AEGP_GetFpLong(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_FpLong              defaultF,
  A_FpLong              *valuePF);
```

`AEGP_G`etTime

```

New in CC. Gets the A_Time tied to a given section key's value.

AEGP_GetTime(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const A_Time          *defaultPT0,
  A_Time                *valuePT);
```

`AEGP_G`etARGB

```

New in CC. Gets the PF_PixelFloat tied to a given section key's value.

AEGP_GetARGB(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const PF_PixelFloat   *defaultP0,
  PF_PixelFloat         *valueP);
```

`AEGP_S`etDataHandle

```

Writes the given section key's value from the handle you pass in.

AEGP_SetDataHandle(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const AEGP_MemHandle  valueH);
```

`AEGP_S`etData

```

Writes the given section key's value from the data held in dataPV.

AEGP_SetData(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_u_long              data_sizeLu,
  const void            *dataPV);
```

`AEGP_S`etString

```

Writes strZ into the given section key's string.

AEGP_SetString(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const A_char          *strZ);
```

`AEGP_S`etLong

```

Writes valueL into the given section key's value.

AEGP_SetLong(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_long                valueL);
```

`AEGP_S`etFpLong

```

Writes valueF into the given section key's value.

AEGP_SetFpLong(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_FpLong              valueF);
```

`AEGP_S`etTime

```

New in CC. Writes valuePT into the given section key's value.

AEGP_SetTime(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_Time                *valuePT);
```

`AEGP_S`etARGB

```

New in CC. Writes valueP into the given section key's value.

AEGP_SetARGB(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  PF_PixelFloat         *valueP);
```

`AEGP_D`eleteEntry

```

Takes the named section's value out of the blob entirely.

AEGP_DeleteEntry(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ);
```

`AEGP_G`etPrefsDirectory

```

Retrieve the path of the folder that holds After Effects' preference file.

That path arrives as a handle to a NULL-terminated A_UTF16Char string and has to be freed with AEGP_FreeMemHandle.

AEGP_GetPrefsDirectory(
  AEGP_MemHandle  *unicode_pathPH);
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

## Color Management

### AEGP Suites — Color Management

A function is included so AEGPs can query how After Effects currently has its color management configured.

### `AEGP_C`olorSettingsSuite5

Function

Purpose

`AEGP_G`etBlendingTables

```

Reads back the present opaque PF_EffectBlendingTables, intended for use with AEGP_TransferRect.

AEGP_GetBlendingTables(
  PR_RenderContextH        render_contextH,
  PF_EffectBlendingTables  *blending_tables);
```

`AEGP_D`oesViewHaveColorSpaceXform

```

Tells you whether a colorspace transform is in effect on the current item view.

AEGP_DoesViewHaveColorSpaceXform(
  AEGP_ItemViewP  viewP,
  A_Boolean       *has_xformPB);
```

`AEGP_X`formWorkingToViewColorSpace

```

Converts the source's view colorspace into the destination's working colorspace. The two may be one and the same.

AEGP_XformWorkingToViewColorSpace(
  AEGP_ItemViewP  viewP,
  AEGP_WorldH     srcH,
  AEGP_WorldH     dstH);
```

`AEGP_G`etNewWorkingSpaceColorProfile

```

Reads back the opaque ICC profile of the current working space. It has to be disposed.

The word "New" here doesn't mean you're inventing a profile; it follows our naming standard, where anything carrying "New" allocates something the caller then disposes.

AEGP_GetNewWorkingSpaceColorProfile(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *icc_profPH);
```

`AEGP_G`etNewColorProfileFromICCProfile

```

Gets a new AEGP_ColorProfileP from After Effects standing for the named ICC profile. Dispose of the returned AEGP_ColorProfileP via AEGP_DisposeColorProfile().

AEGP_GetNewColorProfile FromICCProfile(
  AEGP_PluginID       aegp_plugin_id,
  A_long              icc_sizeL,
  const void          *icc_dataPV,
  AEGP_ColorProfileP  *profilePP);
```

`AEGP_G`etNewICCProfileFromColorProfile

```

Gets a new ICC profile (kept in an AEGP_MemHandle) that stands for the named color profile.

The caller must dispose of the AEGP_MemHandle that comes back.

AEGP_GetNewICCProfile FromColorProfile(
  AEGP_PluginID            plugin_id,
  AEGP_ConstColorProfileP  profileP,
  AEGP_MemHandle           *profilePH);
```

`AEGP_G`etNewColorProfileDescription

```

Gives back a text description for the named color profile. That text is a null-terminated UTF16 string, which the caller must dispose.

AEGP_GetNewColorProfileDescription(
  AEGP_PluginID            aegp_plugin_id,
  AEGP_ConstColorProfileP  profileP,
  AEGP_MemHandle           *unicode_descPH);
```

`AEGP_D`isposeColorProfile

```

Disposes a color profile that other functions in this suite produced.

AEGP_DisposeColorProfile(
  AEGP_ColorProfileP  profileP);
```

`AEGP_G`etColorProfileApproximateGamma

```

Gives back a floating point figure that approximates the gamma the named color profile uses.

AEGP_GetColorProfileApproximateGamma(
  AEGP_ConstColorProfileP  profileP,
  A_FpShort                *approx_gammaP);
```

`AEGP_I`sRGBColorProfile

```

Tells you whether the named color profile is RGB.

AEGP_IsRGBColorProfile(
  AEGP_ConstColorProfileP  profileP,
  A_Boolean                *is_rgbPB);
```

`AEGP_S`etWorkingColorSpace

```

Points the working space at the color profile you pass.

AEGP_SetWorkingColorSpace(
  AEGP_PluginID            aegp_plugin_id,
  AEGP_CompH               compH,
  AEGP_ConstColorProfileP  color_profileP);
```

`AEGP_I`sOCIOColorManagementUsed

```

Find out whether the current project runs the OCIO color engine.

Comes back true when the current project is in OCIO color managed mode.

AEGP_IsOCIOColorManagementUsed(
  AEGP_PluginID  aegp_plugin_id,
  A_Boolean      *is_OCIOColorManagementUsedPB);
```

`AEGP_G`etOCIOConfigurationFile

```

Gives back the OCIO configuration file the project relies on.

The config_filePH returned is a handle of A_UTF16Char carrying a null terminated UTF16String that holds the OCIO Configuration file. The caller must dispose of the returned string.

AEGP_GetOCIOConfigurationFile(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *congif_filePH);
```

`AEGP_G`etOCIOConfigurationFilePath

```

Gives back the full file path of the OCIO configuration the project relies on

The returned config_filePH is a handle of A_UTF16Char carrying a null terminated UTF16String that holds the absolute path to OCIO Configuration file. The caller must dispose of the returned string.

AEGP_GetOCIOConfigurationFilePath(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *congif_filePH);
```

`AEGPD_G`etOCIOWorkingColorSpace

```

Gives back the project's working color space while in OCIO mode.

The returned ocio_working_colorspaceH is a handle of A_UTF16Char carrying a null terminated UTF16String that holds the string specifying the working color space. The caller must dispose of the returned string.

AEGPD_GetOCIOWorkingColorSpace(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *ocio_working_colorspaceH);
```

`AEGPD_G`etOCIODisplayColorSpace

```

Gives back the Display and View transforms the project relies on.

Both ocio_displayH and ocio_viewH come back as A_UTF16Char handles, each a null terminated UTF16String that names the project-level Display and View transforms. Disposing of the returned strings is left to the caller.

AEGPD_GetOCIODisplayColorSpace(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *ocio_displayH,
  AEGP_MemHandle  *ocio_viewH);
```

| --- | --- |
