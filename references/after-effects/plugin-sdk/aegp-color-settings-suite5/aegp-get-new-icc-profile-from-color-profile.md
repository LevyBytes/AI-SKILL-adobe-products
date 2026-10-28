# AEGP_GetNewICCProfileFromColorProfile

`AEGP_GetNewICCProfileFromColorProfile`

Gets a new ICC profile (kept in an AEGP_MemHandle) that stands for the named color profile.

The caller must dispose of the AEGP_MemHandle that comes back.

```cpp
AEGP_GetNewICCProfile FromColorProfile(
  AEGP_PluginID            plugin_id,
  AEGP_ConstColorProfileP  profileP,
  AEGP_MemHandle           *profilePH);
```
