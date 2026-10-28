# AEGP_IsOCIOColorManagementUsed

`AEGP_IsOCIOColorManagementUsed`

Find out whether the current project runs the OCIO color engine.

Comes back true when the current project is in OCIO color managed mode.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsOCIOColorManagementUsed(
  AEGP_PluginID  aegp_plugin_id,
  A_Boolean      *is_OCIOColorManagementUsedPB);
```
