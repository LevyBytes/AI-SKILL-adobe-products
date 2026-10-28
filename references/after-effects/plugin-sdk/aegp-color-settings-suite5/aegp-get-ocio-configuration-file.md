# AEGP_GetOCIOConfigurationFile

`AEGP_GetOCIOConfigurationFile`

Gives back the OCIO configuration file the project relies on.

The config_filePH returned is a handle of A_UTF16Char carrying a null terminated UTF16String that holds the OCIO Configuration file. The caller must dispose of the returned string.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetOCIOConfigurationFile(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *congif_filePH);
```
