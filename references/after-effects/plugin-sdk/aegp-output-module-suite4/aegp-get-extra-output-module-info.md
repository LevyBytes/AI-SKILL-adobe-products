# AEGP_GetExtraOutputModuleInfo

`AEGP_GetExtraOutputModuleInfo`

Gets information describing the output module.

format_uniPH and info_uniPH supply the user-facing text description and information for the output module.

format_uniPH and info_uniPH contain NULL-terminated UTF16 strings; the caller is responsible for disposing them.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetExtraOutputModuleInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_MemHandle         *format_uniPH,
  AEGP_MemHandle         *info_uniPH,
  A_Boolean              *is_sequenceBP,
  A_Boolean              *multi_frameBP);
```
