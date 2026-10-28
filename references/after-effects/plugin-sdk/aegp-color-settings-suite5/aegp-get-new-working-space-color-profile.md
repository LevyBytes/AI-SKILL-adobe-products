# AEGP_GetNewWorkingSpaceColorProfile

`AEGP_GetNewWorkingSpaceColorProfile`

Reads back the opaque ICC profile of the current working space. It has to be disposed.

The word "New" here doesn't mean you're inventing a profile; it follows our naming standard, where anything carrying "New" allocates something the caller then disposes.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewWorkingSpaceColorProfile(
  AEGP_PluginID   aegp_plugin_id,
  AEGP_MemHandle  *icc_profPH);
```
