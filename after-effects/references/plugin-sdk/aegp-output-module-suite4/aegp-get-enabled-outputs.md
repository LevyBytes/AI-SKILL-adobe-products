# AEGP_GetEnabledOutputs

`AEGP_GetEnabledOutputs`

Reads which output types are enabled on outmodH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetEnabledOutputs(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_OutputTypes       *typesP);
```

`AEGP_OutputTypes` will contain one or both of the following values: - `AEGP_OutputType_VIDEO` - `AEGP_OutputType_AUDIO` NOTE: These are flags, not an enumeration.
