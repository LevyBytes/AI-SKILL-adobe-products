# AEGP_GetNewColorProfileFromICCProfile

`AEGP_GetNewColorProfileFromICCProfile`

Gets a new AEGP_ColorProfileP from After Effects standing for the named ICC profile. Dispose of the returned AEGP_ColorProfileP via AEGP_DisposeColorProfile().

```cpp
AEGP_GetNewColorProfile FromICCProfile(
  AEGP_PluginID       aegp_plugin_id,
  A_long              icc_sizeL,
  const void          *icc_dataPV,
  AEGP_ColorProfileP  *profilePP);
```
