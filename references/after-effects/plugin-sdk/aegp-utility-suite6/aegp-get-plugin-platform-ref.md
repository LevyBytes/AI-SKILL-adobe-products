# AEGP_GetPluginPlatformRef

`AEGP_GetPluginPlatformRef`

On macOS, gives back a CFBundleRef to your Mach-O plug-in, or NULL when it's a CFM plug-in.

On Windows it is always NULL (an OS-specific entry point can capture your DLLInstance instead).

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetPluginPlatformRef(
  AEGP_PluginID plug_id,
  void** plat_refPPV);
```
