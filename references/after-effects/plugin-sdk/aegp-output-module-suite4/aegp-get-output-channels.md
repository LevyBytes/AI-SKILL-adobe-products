# AEGP_GetOutputChannels

`AEGP_GetOutputChannels`

Reads which video channels are enabled for output on outmodH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetOutputChannels(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_VideoChannels     *outchannelsP);
```

`AEGP_VideoChannels` will be one of the following: - `AEGP_VideoChannels_RGB` - `AEGP_VideoChannels_RGBA` - `AEGP_VideoChannels_ALPHA`
