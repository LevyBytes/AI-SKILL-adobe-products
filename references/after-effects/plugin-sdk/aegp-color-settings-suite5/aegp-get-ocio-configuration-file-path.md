# AEGP_GetOCIOConfigurationFilePath

`AEGP_GetOCIOConfigurationFilePath`

Gives back the full file path of the OCIO configuration the project relies on

The returned config_filePH is a handle of A_UTF16Char carrying a null terminated UTF16String that holds the absolute path to OCIO Configuration file. The caller must dispose of the returned string.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetOCIOConfigurationFilePath(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *congif_filePH);
```

`AEGPD_GetOCIOWorkingColorSpace`

Gives back the project's working color space while in OCIO mode.

The returned ocio_working_colorspaceH is a handle of A_UTF16Char carrying a null terminated UTF16String that holds the string specifying the working color space. The caller must dispose of the returned string.

Suite argument declaration (not a standalone call):

```cpp
AEGPD_GetOCIOWorkingColorSpace(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *ocio_working_colorspaceH);
```

`AEGPD_GetOCIODisplayColorSpace`

Gives back the Display and View transforms the project relies on.

Both ocio_displayH and ocio_viewH come back as A_UTF16Char handles, each a null terminated UTF16String that names the project-level Display and View transforms. Disposing of the returned strings is left to the caller.

Suite argument declaration (not a standalone call):

```cpp
AEGPD_GetOCIODisplayColorSpace(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *ocio_displayH,
  AEGP_MemHandle  *ocio_viewH);
```
