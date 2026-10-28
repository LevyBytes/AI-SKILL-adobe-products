# AEGP_GetNumJobItemOutputModuleSettings

`AEGP_GetNumJobItemOutputModuleSettings`

Reports how many settings exist for the indexed output module.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNumJobItemOutputModuleSettings(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              *num_settingsPL);
```
