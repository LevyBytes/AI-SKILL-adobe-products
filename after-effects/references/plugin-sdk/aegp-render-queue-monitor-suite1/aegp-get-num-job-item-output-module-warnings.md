# AEGP_GetNumJobItemOutputModuleWarnings

`AEGP_GetNumJobItemOutputModuleWarnings`

Reports how many output module warnings a job item has.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNumJobItemOutputModuleWarnings(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              *num_warningsPL);
```
